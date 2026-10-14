import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";
import mark from "../../public/logo-mark.png";

export function Logo({ light = false, href = "/" }: { light?: boolean; href?: string }) {
  return (
    <Link href={href} className="flex items-center gap-2.5" aria-label={`${brand.name} home`}>
      <span className={`flex h-11 items-center rounded-xl px-1.5 ${light ? "bg-white" : ""}`}>
        <Image src={mark} alt="" priority className="h-9 w-auto" sizes="64px" />
      </span>
      <span className="leading-tight">
        <span className={`block text-base font-extrabold tracking-tight ${light ? "text-white" : "text-brand-900"}`}>
          PrimeXpress <span className="text-accent-500">Freight</span>
        </span>
        <span className={`block text-[11px] font-medium ${light ? "text-brand-100" : "text-slate-500"}`}>{brand.tagline}</span>
      </span>
    </Link>
  );
}

export function FullLogo({ className = "h-28 w-auto" }: { className?: string }) {
  return (
    <Link href="/" aria-label={`${brand.name} home`}>
      <Image src="/logo.png" alt={brand.name} width={800} height={610} priority className={className} sizes="240px" />
    </Link>
  );
}
