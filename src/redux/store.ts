import { configureStore } from '@reduxjs/toolkit';
import { questionsReducer } from './questionsSlice/questionsSlice';
import { useDispatch } from 'react-redux';
import { QuestionsSchema } from './questionsSlice/types';

export interface StateSchema {
  questions: QuestionsSchema;
}

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;