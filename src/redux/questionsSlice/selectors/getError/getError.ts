import { StateSchema } from 'redux/store';

export const getError = (state: StateSchema) => state.questions.error;