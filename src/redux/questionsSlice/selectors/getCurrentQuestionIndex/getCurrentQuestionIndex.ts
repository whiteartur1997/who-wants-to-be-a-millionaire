import { StateSchema } from 'redux/store';

export const getCurrentQuestionIndex = (state: StateSchema) => state.questions.currentQuestionIndex;