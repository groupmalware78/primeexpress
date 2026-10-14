import { brand } from "@/lib/brand";

export function ContactButtons({ dark = false }: { dark?: boolean }) {
  const secondary = dark ? "btn border border-white/30 text-white hover:bg-white/10" : "btn-outline";
  return (
    <div className="flex flex-wrap gap-3">
      <a href={brand.phoneHref} className="btn-accent px-6 py-3 text-base">Call {brand.phone}</a>
      <a href={`mailto:${brand.email}`} className={`${secondary} px-6 py-3 text-base`}>Email us</a>
      <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" className={`${secondary} px-6 py-3 text-base`}>Instagram</a>
    </div>
  );
}
