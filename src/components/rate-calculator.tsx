"use client";

import { useState } from "react";
import { formatJmd } from "@/lib/brand";
import { billableWeight, freightCharge, type RateConfig } from "@/lib/rates";

export function RateCalculator({ rates }: { rates: RateConfig }) {
  const [weight, setWeight] = useState("1");
  const lbs = billableWeight(Number(weight));
  const total = freightCharge(Number(weight), rates);

  return (
    <div className="card overflow-hidden">
      <div className="grid gap-0 md:grid-cols-2">
        <div className="p-6">
          <label className="label" htmlFor="calc-weight">Package weight (lbs)</label>
          <input
            id="calc-weight"
            className="input"
            type="number"
            inputMode="decimal"
            min="0"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <p className="mt-3 text-xs text-slate-500">Weight is rounded up to the next pound.</p>
        </div>
        <div className="flex flex-col justify-between bg-brand-900 p-6 text-white">
          <div>
            <p className="text-sm text-brand-100">Estimated cost</p>
            <p className="mt-1 text-4xl font-extrabold tracking-tight" aria-live="polite">
              {formatJmd(total)}
            </p>
            <p className="mt-3 text-sm text-brand-100">Billable weight: {lbs} lb</p>
          </div>
          <p className="mt-6 text-xs text-brand-100">
            Items over US${rates.customsThresholdUsd} may attract Jamaica Customs duties, billed separately.
          </p>
        </div>
      </div>
    </div>
  );
}
