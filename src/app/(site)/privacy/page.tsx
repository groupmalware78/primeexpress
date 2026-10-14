import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = { title: "Privacy policy" };

export default function PrivacyPage() {
  return (
    <article className="container-x max-w-3xl space-y-4 py-16 text-slate-700 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-slate-900">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Privacy policy</h1>
      <p>This website does not use accounts, forms, cookies, analytics or visitor logs. We don&apos;t collect any personal information through it.</p>
      <h2>When you contact us</h2>
      <p>If you call, email or message us on Instagram, we use the details you share (such as your name, contact details, address, TRN and shipment invoices) only to set up your mailbox, process and clear your shipments, deliver your packages and answer your questions.</p>
      <h2>Sharing</h2>
      <p>We share shipment information only with Jamaica Customs and our delivery partners, such as Knutsford Express, as needed to deliver your package.</p>
      <h2>Your choices</h2>
      <p>To update or remove your information, contact us at {brand.email} or {brand.phone}.</p>
    </article>
  );
}
