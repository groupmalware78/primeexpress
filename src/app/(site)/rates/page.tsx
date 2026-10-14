import type { Metadata } from "next";
import Link from "next/link";
import { RateCalculator } from "@/components/rate-calculator";
import { formatJmd, rates } from "@/lib/brand";
import { freightCharge } from "@/lib/rates";

export const metadata: Metadata = { title: "Shipping rates" };

const SAMPLE_WEIGHTS = [1, 2, 3, 4, 5, 10, 15, 20];

export default function RatesPage() {
  return (
    <div className="container-x py-16">
      <h1 className="text-3xl font-bold tracking-tight">Shipping rates</h1>
      <p className="mt-2 max-w-2xl text-slate-500">
        Simple pricing in Jamaican dollars: {formatJmd(rates.firstLbJmd)} for the first pound and {formatJmd(rates.additionalLbJmd)} for each additional pound.
        Weight is rounded up to the next whole pound.
      </p>
      <div className="mt-10 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <RateCalculator rates={rates} />
        </div>
        <div className="lg:col-span-2">
          <div className="table-wrap">
            <table className="table">
              <thead><tr><th>Weight</th><th className="text-right">Freight</th></tr></thead>
              <tbody className="divide-y divide-slate-100">
                {SAMPLE_WEIGHTS.map((lb) => (
                  <tr key={lb}><td>{lb} lb</td><td className="text-right font-medium">{formatJmd(freightCharge(lb, rates))}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-10 grid gap-4 text-sm text-slate-600 md:grid-cols-2">
        <div className="card p-5"><h2 className="font-semibold text-slate-900">Customs duties</h2><p className="mt-2">Items valued over US${rates.customsThresholdUsd} are assessed by Jamaica Customs. Duties are passed on at cost.</p></div>
        <div className="card p-5"><h2 className="font-semibold text-slate-900">Oversized items</h2><p className="mt-2">Large or bulky items may be billed by volumetric weight. <Link href="/#contact" className="font-semibold text-brand-700">Contact us</Link> for a quote.</p></div>
      </div>
    </div>
  );
}
