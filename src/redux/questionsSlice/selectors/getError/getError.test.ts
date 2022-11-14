import { StateSchema } from 'redux/store';
import { getError } from './getError';

describe('getError', () => {
  test('no error', () => {
    const state:StateSchema = {
      questions: {
        gameIsWon: true,
        questions: [],
        currentQuestionIndex: 5,
        error: null,
      },
    };
    expect(getError(state)).toBeNull();
  });
  test('error exists', () => {
    const state:StateSchema = {
      questions: {
        gameIsWon: false,
        questions: [],
        currentQuestionIndex: 3,
        error: null,
      },
    };
    expect(getError(state)).toBeDefined();
  });
});