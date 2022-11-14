import { Answer } from 'redux/questionsSlice/types';
import { TabState } from 'ui/Tab/Tab';

export const setTabState = (revealed: boolean, answer: Answer, clickedAnswerIndex: number, index: number): TabState => {
  if (revealed && answer.isTrue) {
    return 'success';
  } else if (revealed && !answer.isTrue && clickedAnswerIndex === index) {
    return 'error';
  } else if (clickedAnswerIndex === index) {
    return 'active';
  } else {
    return 'inactive';
  }
};