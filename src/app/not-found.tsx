import Link from "next/link";
import { Logo } from "@/components/logo";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 bg-slate-50 px-4 py-24 text-center">
      <Logo />
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-slate-500">The page you&apos;re looking for doesn&apos;t exist or was moved.</p>
      <Link href="/" className="btn-primary">Back to home</Link>
    </main>
  );
}
