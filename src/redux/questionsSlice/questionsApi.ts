import { createAsyncThunk } from '@reduxjs/toolkit';
import { Question } from './types';

export const getQuestions = createAsyncThunk<Question [], undefined, { rejectValue: string }>(
  'questions/getQuestionsList',
  async (_, { rejectWithValue }) => {
    const response = await fetch('./questions.json');
    if (!response.ok) {
      return rejectWithValue((await response.json()) as string);
    }
    return await response.json() as Question[];
  },
);
