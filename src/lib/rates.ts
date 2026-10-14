// Pure pricing logic shared by the public calculator and the admin package form.
export type RateConfig = {
  firstLbJmd: number;
  additionalLbJmd: number;
  customsThresholdUsd: number;
};

export function billableWeight(weightLbs: number) {
  if (!Number.isFinite(weightLbs) || weightLbs <= 0) return 0;
  return Math.max(1, Math.ceil(weightLbs));
}

export function freightCharge(weightLbs: number, rates: RateConfig) {
  const lbs = billableWeight(weightLbs);
  if (lbs === 0) return 0;
  return rates.firstLbJmd + (lbs - 1) * rates.additionalLbJmd;
}
