import Link from "next/link";
import { brand, emailParts } from "@/lib/brand";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-brand-950 text-brand-100">
      <div className="container-x grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm text-brand-200">
            Air freight forwarding from the USA to Jamaica. Delivery across Kingston and St. Catherine, and pickup at Knutsford Express.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={brand.phoneHref} className="hover:text-white">
                {brand.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${brand.email}`} className="hover:text-white">
                {emailParts[0]}<wbr />@{emailParts[1]}
              </a>
            </li>
            <li>
              <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Instagram {brand.instagram}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Company</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/#how-it-works" className="hover:text-white">How it works</Link></li>
            <li><Link href="/rates" className="hover:text-white">Shipping rates</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms of service</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-wrap items-center justify-between gap-2 py-5 text-xs text-brand-200">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p className="font-semibold text-accent-400">{brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
