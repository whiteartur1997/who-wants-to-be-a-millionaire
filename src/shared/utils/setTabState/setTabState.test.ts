import { setTabState } from './setTabState';

describe('tab state setter', () => {
  test('should be success', () => {
    expect(setTabState(true, { isTrue: true, text: 'yes' }, 3, 1)).toBe('success');
  });

  test('should be active', () => {
    expect(setTabState(false, { isTrue: true, text: 'yes' }, 3, 3)).toBe('active');
  });

  test('should be error', () => {
    expect(setTabState(true, { isTrue: false, text: 'no' }, 3, 3)).toBe('error');
  });
});