import { getSize } from './getSize';

describe('getSize util', () => {
  test('should return sizeXs', () => {
    expect(getSize('xs')).toBe('sizeXs');
  });
  test('should return sizeXl', () => {
    expect(getSize('xl')).toBe('sizeXl');
  });
  test('should return m', () => {
    expect(getSize('m')).toBe('sizeM');
  });
});