import { StateSchema } from 'redux/store';

export const getQuestionsList = (state: StateSchema) => state.questions.questions;