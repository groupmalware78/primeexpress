"use client";

import Link from "next/link";
import { brand } from "@/lib/brand";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 bg-slate-50 px-4 py-24 text-center">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="max-w-md text-slate-500">Please try again. If the problem continues, contact us at {brand.phone}.</p>
      <div className="flex gap-2">
        <button onClick={reset} className="btn-primary">Try again</button>
        <Link href="/" className="btn-outline">Home</Link>
      </div>
    </main>
  );
}
