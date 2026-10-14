import Image from "next/image";
import Link from "next/link";
import { ContactButtons } from "@/components/contact-buttons";
import { RateCalculator } from "@/components/rate-calculator";
import { brand, branches, emailParts, formatJmd, rates } from "@/lib/brand";

const STEPS = [
  { title: "Get your mailbox", body: `Call, email or DM us on Instagram to get your personal ${brand.initials} mailbox number and US shipping address.` },
  { title: "Shop & ship", body: "Shop Amazon, eBay, Shein and any US store. Ship to our US address with your mailbox number." },
  { title: "Send your invoice", body: "Email us your invoice when your order ships so we can clear your package through customs faster." },
  { title: "Receive it", body: "We deliver to your door in Kingston and St. Catherine, or send it to Knutsford Express for pickup." },
];

const SERVICES = [
  { title: "Weekly air freight", body: "Regular shipments from our US warehouse to Jamaica.", icon: "M3 12h18M12 3l9 9-9 9" },
  { title: "Door-to-door delivery", body: "Home and office delivery across Kingston and St. Catherine.", icon: "M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z" },
  { title: "Knutsford Express pickup", body: "Collect your package at a Knutsford Express location that works for you.", icon: "M5 17h14M6 17V8a2 2 0 012-2h8a2 2 0 012 2v9M9 21v-4M15 21v-4" },
  { title: "Customs support", body: "We prepare your package for Jamaica Customs and keep you updated on duties.", icon: "M9 12l2 2 4-4M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" },
];

const CONTACTS = [
  { label: "Call us", value: brand.phone, href: brand.phoneHref },
  { label: "Email", value: <>{emailParts[0]}<wbr />@{emailParts[1]}</>, href: `mailto:${brand.email}` },
  { label: "Instagram", value: brand.instagram, href: brand.instagramUrl, external: true },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden>
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent-500 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-brand-500 blur-3xl" />
        </div>
        <div className="container-x relative grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-accent-300 uppercase ring-1 ring-white/20">
              {brand.tagline}
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Shop the USA.<br />
              <span className="text-accent-400">We bring it home</span> to Jamaica.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-brand-100">
              Fast, affordable air freight with delivery in Kingston and St. Catherine, or pickup at Knutsford Express.
            </p>
            <div className="mt-8">
              <ContactButtons dark />
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl">
            <Image src="/logo.png" alt={brand.name} width={800} height={610} priority className="h-auto w-full" sizes="384px" />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-20 py-20">
        <div className="container-x">
          <h2 className="text-center text-3xl font-bold tracking-tight">How it works</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-slate-500">Four simple steps from checkout in the US to your hands in Jamaica.</p>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="card p-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-500 font-bold text-brand-950">{i + 1}</span>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-x">
          <h2 className="text-center text-3xl font-bold tracking-tight">Our services</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <div key={s.title} className="card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d={s.icon} />
                  </svg>
                </span>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="branches" className="scroll-mt-20 py-20">
        <div className="container-x">
          <h2 className="text-center text-3xl font-bold tracking-tight">Branches & delivery options</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-slate-500">Choose how you receive your packages.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {branches.map((b) => (
              <div key={b.id} className="card flex flex-col p-6">
                <span className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold ${b.type === "PICKUP" ? "bg-accent-300/40 text-brand-950" : "bg-brand-50 text-brand-700"}`}>
                  {b.type === "PICKUP" ? "Pickup" : "Delivery"}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{b.name}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rates" className="scroll-mt-20 bg-slate-50 py-20">
        <div className="container-x">
          <h2 className="text-center text-3xl font-bold tracking-tight">Estimate your shipping</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-slate-500">
            {formatJmd(rates.firstLbJmd)} for the first pound, {formatJmd(rates.additionalLbJmd)} for each additional pound.{" "}
            <Link href="/rates" className="font-semibold text-brand-700 hover:underline">Full rate table</Link>
          </p>
          <div className="mx-auto mt-10 max-w-3xl">
            <RateCalculator rates={rates} />
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 py-20">
        <div className="container-x text-center">
          <h2 className="text-3xl font-bold tracking-tight">Talk to us</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            Ready to get your {brand.shortName} mailbox, or have a question about a shipment, rates or customs? Reach us any of these ways.
          </p>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="card p-6 transition hover:border-brand-200 hover:shadow-md"
              >
                <p className="text-sm font-medium text-slate-500">{c.label}</p>
                <p className="mt-2 text-base font-semibold text-brand-900 lg:text-lg">{c.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
