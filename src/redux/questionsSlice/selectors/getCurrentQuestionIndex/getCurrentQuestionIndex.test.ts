import { StateSchema } from 'redux/store';
import { getCurrentQuestionIndex } from './getCurrentQuestionIndex';

describe('getCurrentQuestionIndex', () => {
  test('should return 5', () => {
    const state:StateSchema = {
      questions: {
        gameIsWon: true,
        questions: [],
        currentQuestionIndex: 5,
        error: null,
      },
    };
    expect(getCurrentQuestionIndex(state as unknown as StateSchema)).toBe(5);
  });
  test('should return 3', () => {
    const state:StateSchema = {
      questions: {
        gameIsWon: false,
        questions: [],
        currentQuestionIndex: 3,
        error: null,
      },
    };
    expect(getCurrentQuestionIndex(state)).toBe(3);
  });
});