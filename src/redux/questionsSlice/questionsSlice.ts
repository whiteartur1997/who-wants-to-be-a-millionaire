import { QuestionsSchema } from './types';
import { createSlice } from '@reduxjs/toolkit';
import { getQuestions } from './questionsApi';

const initialState: QuestionsSchema = {
  questions: [],
  currentQuestionIndex: null,
  gameIsWon: false,
  error: null,
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    nextQuestion: (state) => {
      state.currentQuestionIndex++;
    },
    setGameWon: (state, { payload }) => {
      state.gameIsWon = payload;
    },
    reset: (state) => {
      state.gameIsWon = false;
      
    },
  },
  extraReducers: (builder => {
    builder.addCase(getQuestions.fulfilled, (state, { payload }) => {
      state.questions = payload;
      state.currentQuestionIndex = 0;
    });
    builder.addCase(getQuestions.rejected, (state, { payload }) => {
      state.error = payload;
    });
  }),
});

export const { actions: questionsActions } = questionsSlice;
export const { reducer: questionsReducer } = questionsSlice;