/**
 * Calculate an illustrative campaign payout, never a forecast of actual income.
 * @param {{ views: number, eligiblePercent: number, rate: number, feePercent: number, expenses: number, cap?: number | null }} input
 */
export function calculateEarnings({ views, eligiblePercent, rate, feePercent, expenses, cap = null }) {
  const values = [views, eligiblePercent, rate, feePercent, expenses];
  if (!values.every(value => Number.isFinite(value) && value >= 0) || eligiblePercent > 100 || feePercent > 100 || views > 1e12 || rate > 1e6 || expenses > 1e12) return null;
  if (cap !== null && (!Number.isFinite(cap) || cap < 0)) return null;
  const eligibleViews = Math.floor(views * eligiblePercent / 100);
  const uncappedGross = eligibleViews / 1000 * rate;
  const gross = cap === null ? uncappedGross : Math.min(uncappedGross, cap);
  const fees = gross * feePercent / 100;
  return { eligibleViews, uncappedGross, gross, fees, net: gross - fees - expenses, capped: cap !== null && uncappedGross > cap };
}
