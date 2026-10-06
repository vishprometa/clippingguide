import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculateEarnings } from '../src/lib/earnings.mjs';
const example = { views: 100000, eligiblePercent: 60, rate: 2.5, feePercent: 10, expenses: 20 };
test('only eligible views earn rewards and fees apply before expenses', () => {
  assert.deepEqual(calculateEarnings(example), {
    eligibleViews: 60000,
    uncappedGross: 150,
    gross: 150,
    fees: 15,
    net: 115,
    capped: false,
  });
});
test('a campaign cap limits the gross reward before fees', () => {
  const result = calculateEarnings({ ...example, cap: 100 });
  assert.equal(result.gross, 100);
  assert.equal(result.fees, 10);
  assert.equal(result.net, 70);
  assert.equal(result.capped, true);
});
test('zero remaining budget pays zero and expenses can make net negative', () => {
  const result = calculateEarnings({ ...example, cap: 0 });
  assert.equal(result.gross, 0);
  assert.equal(result.net, -20);
});
test('invalid numbers and percentages never produce a payout', () => {
  for (const change of [
    { views: NaN },
    { rate: -1 },
    { eligiblePercent: 101 },
    { feePercent: Infinity },
    { cap: -1 },
  ])
    assert.equal(calculateEarnings({ ...example, ...change }), null);
});
