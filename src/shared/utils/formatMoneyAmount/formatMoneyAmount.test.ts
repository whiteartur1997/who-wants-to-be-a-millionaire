import { toUsdString } from './formatMoneyAmount';

describe('formatMoneyAmount', () => {
  test('toUsdString whole number', () => {
    expect(toUsdString.format(250000)).toBe('$250,000');
  });

  test('toUsdString with decimal number', () => {
    expect(toUsdString.format(250000.51)).toBe('$250,001');
  });
});