#!/usr/bin/env bash
# Deploys the PrimeXpress Freight static website to Railway.
# Safe to re-run: the existing project, service and domain are reused.
#
# Usage:
#   ./scripts/deploy-railway.sh
#
# Optional environment overrides:
#   RAILWAY_PROJECT_NAME  project name for first-time setup (default: primexpress-freight)
#   RAILWAY_SERVICE       service name                      (default: web)
#   CUSTOM_DOMAIN         e.g. www.primexpressfreight.com (prints the DNS records to add)
#   SKIP_CHECKS=1         skip local lint + typecheck + build before uploading
set -euo pipefail

cd "$(dirname "$0")/.."

PROJECT_NAME="${RAILWAY_PROJECT_NAME:-primexpress-freight}"
SERVICE="${RAILWAY_SERVICE:-web}"
APP_PORT=8080

bold() { printf '\033[1m%s\033[0m\n' "$*"; }
info() { printf '\033[36m==>\033[0m %s\n' "$*"; }
die() { printf '\033[31mxx\033[0m  %s\n' "$*" >&2; exit 1; }

for bin in railway curl npm; do
  command -v "$bin" >/dev/null 2>&1 || die "'$bin' is required. Install the Railway CLI with: brew install railway (or npm i -g @railway/cli)"
done

bold "PrimeXpress Freight website → Railway"

# 1. Auth
if ! railway whoami >/dev/null 2>&1; then
  info "Logging in to Railway…"
  railway login
fi
info "Logged in as $(railway whoami 2>/dev/null | tail -1)"

# 2. Project
if ! railway status >/dev/null 2>&1; then
  info "No Railway project linked. Creating '$PROJECT_NAME'…"
  railway init --name "$PROJECT_NAME"
fi

# 3. Service
services="$(railway service list --json 2>/dev/null || railway service list 2>/dev/null || true)"
if grep -Eq "(\"name\"[[:space:]]*:[[:space:]]*\"$SERVICE\"|^[[:space:]]*$SERVICE([[:space:]]|$))" <<<"$services"; then
  info "Service '$SERVICE' found"
else
  info "Creating service '$SERVICE'…"
  railway add --service "$SERVICE"
fi

existing="$(railway variable list --service "$SERVICE" --kv 2>/dev/null || true)"
set_var() { railway variable set "$1=$2" --service "$SERVICE" --skip-deploys >/dev/null; }
set_var PORT "$APP_PORT"

# 4. Domain → SITE_URL (used at build time for the sitemap and social previews)
if [[ -n "${CUSTOM_DOMAIN:-}" ]]; then
  info "Adding custom domain $CUSTOM_DOMAIN (add the DNS records below at your registrar)…"
  railway domain "$CUSTOM_DOMAIN" --service "$SERVICE" --port "$APP_PORT" || true
  SITE_URL="https://$CUSTOM_DOMAIN"
  set_var SITE_URL "$SITE_URL"
elif grep -q '^SITE_URL=' <<<"$existing"; then
  SITE_URL="$(grep '^SITE_URL=' <<<"$existing" | head -1 | cut -d= -f2-)"
else
  info "Generating a Railway domain…"
  domain_out="$(railway domain --service "$SERVICE" --port "$APP_PORT" --json 2>&1 || true)"
  host="$(grep -oE '[A-Za-z0-9.-]+\.up\.railway\.app' <<<"$domain_out" | head -1 || true)"
  [[ -n "$host" ]] || die "Could not determine the Railway domain. Output was: $domain_out"
  SITE_URL="https://$host"
  set_var SITE_URL "$SITE_URL"
fi
info "Site URL: $SITE_URL"

# 5. Local pre-flight checks
if [[ "${SKIP_CHECKS:-0}" != "1" ]]; then
  info "Running lint, typecheck and a test build…"
  [[ -d node_modules ]] || npm ci
  npm run --silent lint
  npm run --silent typecheck
  SITE_URL="$SITE_URL" npm run --silent build >/dev/null
fi

# 6. Deploy (railway.json: Dockerfile build → nginx, health check on /)
info "Uploading and building…"
railway up --service "$SERVICE" --ci --message "deploy $(date -u +%Y-%m-%dT%H:%MZ)"

info "Waiting for $SITE_URL…"
for _ in $(seq 1 60); do
  if curl -fsS --max-time 5 -o /dev/null "$SITE_URL/"; then
    echo
    bold "✔ Live: $SITE_URL"
    exit 0
  fi
  sleep 5
done

die "Site did not respond within 5 minutes. Inspect with: railway logs --service $SERVICE"
