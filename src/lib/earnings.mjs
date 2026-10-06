/**
 * Calculate an illustrative campaign payout, never a forecast of actual income.
 * @param {{ views: number, eligiblePercent: number, rate: number, feePercent: number, expenses: number, cap?: number | null }} input
 */
export function calculateEarnings({
  views,
  eligiblePercent,
  rate,
  feePercent,
  expenses,
  cap = null,
}) {
  const bounds = [
    [views, 1e12],
    [eligiblePercent, 100],
    [rate, 1e6],
    [feePercent, 100],
    [expenses, 1e12],
    [cap ?? 0, Infinity],
  ];
  const valid = bounds.every(
    ([value, maximum]) => Number.isFinite(value) && value >= 0 && value <= maximum,
  );
  if (!valid) return null;
  const eligibleViews = Math.floor((views * eligiblePercent) / 100);
  const uncappedGross = (eligibleViews / 1000) * rate;
  const gross = cap === null ? uncappedGross : Math.min(uncappedGross, cap);
  const fees = (gross * feePercent) / 100;
  return {
    eligibleViews,
    uncappedGross,
    gross,
    fees,
    net: gross - fees - expenses,
    capped: cap !== null && uncappedGross > cap,
  };
}
