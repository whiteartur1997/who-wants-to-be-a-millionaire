import { getWeight } from './getWeight';

describe('getWeight util', () => {
  test('should return regular', () => {
    expect(getWeight('regular')).toBe('regular');
  });
  test('should return semi bold', () => {
    expect(getWeight('semiBold')).toBe('semiBold');
  });
});