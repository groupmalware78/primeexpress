import Link from "next/link";
import { brand } from "@/lib/brand";
import { Logo } from "./logo";

const NAV = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#branches", label: "Branches" },
  { href: "/rates", label: "Rates" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-brand-900">{n.label}</Link>
          ))}
        </nav>
        <a href={brand.phoneHref} className="btn-accent hidden md:inline-flex">Call {brand.phone}</a>
        <details className="relative md:hidden">
          <summary className="btn-outline cursor-pointer list-none px-3" aria-label="Open menu">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </summary>
          <div className="absolute right-0 mt-2 w-60 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">{n.label}</Link>
            ))}
            <div className="my-2 border-t border-slate-100" />
            <a href={brand.phoneHref} className="btn-accent w-full">Call {brand.phone}</a>
          </div>
        </details>
      </div>
    </header>
  );
}
