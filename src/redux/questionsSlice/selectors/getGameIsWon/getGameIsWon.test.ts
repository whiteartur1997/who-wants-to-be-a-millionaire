import { StateSchema } from 'redux/store';
import { getGameIsWon } from './getGameIsWon';

describe('getGameIsWon', () => {
  test('should return true', () => {
    const state:StateSchema = {
      questions: {
        gameIsWon: true,
        questions: [],
        currentQuestionIndex: 2,
        error: null,
      },
    };
    expect(getGameIsWon(state)).toBe(true);
  });
  test('should return false', () => {
    const state:StateSchema = {
      questions: {
        gameIsWon: false,
        questions: [],
        currentQuestionIndex: 2,
        error: null,
      },
    };
    expect(getGameIsWon(state)).toBe(false);
  });
});