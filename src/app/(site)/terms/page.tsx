import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = { title: "Terms of service" };

export default function TermsPage() {
  return (
    <article className="container-x max-w-3xl space-y-4 py-16 text-slate-700 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-slate-900">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Terms of service</h1>
      <p>These terms govern your use of {brand.name} (&quot;{brand.initials}&quot;) freight forwarding services.</p>
      <h2>Shipping address</h2>
      <p>Always include your {brand.initials} mailbox number on every package shipped to our US warehouse. Packages without a valid mailbox number may be delayed.</p>
      <h2>Prohibited items</h2>
      <p>We do not ship firearms, ammunition, explosives, illegal drugs, flammable or hazardous materials, cash, or any item prohibited by US export rules or Jamaica Customs.</p>
      <h2>Customs</h2>
      <p>Packages are subject to inspection and duties by Jamaica Customs. You must provide an accurate invoice for each package. Duties and taxes are the customer&apos;s responsibility.</p>
      <h2>Charges & collection</h2>
      <p>Freight is charged per pound, rounded up. All charges must be paid before release. Packages not collected within 30 days of arrival may attract storage fees.</p>
      <h2>Liability</h2>
      <p>Our liability for loss or damage is limited to the declared value supported by an invoice, subject to applicable law.</p>
      <h2>Contact</h2>
      <p>{brand.email} · {brand.phone}</p>
    </article>
  );
}
