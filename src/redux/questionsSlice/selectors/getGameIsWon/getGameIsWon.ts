import { StateSchema } from 'redux/store';

export const getGameIsWon = (state: StateSchema) => state.questions.gameIsWon;