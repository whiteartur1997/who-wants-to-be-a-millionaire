import { StateSchema } from 'redux/store';
import { getQuestionsList } from './getQuestionsList';

describe('getQuestionsList', () => {
  test('should return array with 3 elements', () => {
    const state:StateSchema = {
      questions: {
        gameIsWon: true,
        questions: [
          { question: 'How are you?', prize: 2000, answers: [{  text: 'Fine', isTrue: true }, { text: 'Good', isTrue: false }]  },
          { question: 'How old are you?', prize: 4000, answers: [{  text: '25', isTrue: true }, { text: '24', isTrue: false }]  },
          { question: 'How you doin?', prize: 6000, answers: [{  text: 'OK', isTrue: true }, { text: 'Good', isTrue: false }]  },
          { question: 'What was the weather yesterday?', prize: 8000, answers: [{  text: 'Sunny', isTrue: true }, { text: 'Cloudy', isTrue: false }]  },
        ],
        currentQuestionIndex: 2,
        error: null,
      },
    };
    expect(getQuestionsList(state).length).toBe(4);
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
    expect(getQuestionsList(state).length).toBe(0);
  });
});