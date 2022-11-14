import { getTabStateClass } from './getTabStateClass';

describe('tabStateClass', () => {
  test('active', () => {
    expect(getTabStateClass('active')).toBe('active');
  });

  test('error', () => {
    expect(getTabStateClass('error')).toBe('error');
  });

});