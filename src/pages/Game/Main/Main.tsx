import React, { FC, useState } from 'react';
import cls from './Main.module.css';
import Typography from 'ui/Typography/Typography';
import { Answer, Question } from 'redux/questionsSlice/types';
import Tab from 'ui/Tab/Tab';
import { setTabState } from 'shared/utils/setTabState/setTabState';
import { useAppDispatch } from 'redux/store';
import { questionsActions } from 'redux/questionsSlice/questionsSlice';
import { useNavigate } from 'react-router-dom';
import { alphabet } from 'shared/utils/consts';

interface MainProps {
  questions: Question[];
  currentQuestionIndex: number;
}

const delayInMs = 2000;

const Main:FC<MainProps> = ({ currentQuestionIndex, questions }) => {
  const currentQuestion = questions[currentQuestionIndex];
  const dispatch = useAppDispatch();
  const [clickedAnswerIndex, setClickedAnswerIndex] = useState(null);
  const [answersRevealed, setAnswersRevealed] = useState(false);

  const navigate = useNavigate();

  const onAnswerClick = (answer: Answer, index: number) => {
    setClickedAnswerIndex(index);
    new Promise<void>((res) => {
      setTimeout(() => {
        setAnswersRevealed(true);
        res();
      }, delayInMs);
    }).then(() => {
      setTimeout(() => {
        if (!answer.isTrue) {
          navigate('/result');
          return;
        }
        if (currentQuestionIndex === questions.length - 1 && answer.isTrue) {
          dispatch(questionsActions.setGameWon(true));
          navigate('/result');
          return;
        }
        dispatch(questionsActions.nextQuestion());
        setAnswersRevealed(false);
        setClickedAnswerIndex(null);
      }, delayInMs);
    });
  };

  return (
    <div className={cls.main}>
      <Typography customClass={cls.questionTitle} Element="h3" size="l" weight="semiBold">
        {currentQuestion.question}
      </Typography>
      <div className={cls.tabs}>
        {currentQuestion.answers.map((answer, index) => {
          const state = setTabState(answersRevealed, answer, clickedAnswerIndex, index);
          return (
            <div key={answer.text} className={cls.tabWrapper}>
              <Tab
                customClass={cls.answerTab}
                customContentClass={cls.variantContent}
                state={state}
                isHoverable={!clickedAnswerIndex}
                width='100%'
                height='100%'
                onClick={!clickedAnswerIndex ? () => onAnswerClick(answer, index) : undefined}
                withShortLines
              >
                <>
                  <Typography customClass={cls.variantLetter} Element="span" color="main" weight="semiBold">
                    {alphabet[(index + 1 as unknown as keyof typeof alphabet)]}
                  </Typography>
                  <Typography Element="span">
                    {answer.text}
                  </Typography>
                </>
              </Tab>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;