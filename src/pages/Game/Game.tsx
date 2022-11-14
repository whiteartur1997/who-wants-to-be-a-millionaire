import React, { useEffect } from 'react';
import cls from './Game.module.css';
import { getQuestions } from 'redux/questionsSlice/questionsApi';
import { useAppDispatch } from 'redux/store';
import Sidebar from 'pages/Game/Sidebar/Sidebar';
import Main from 'pages/Game/Main/Main';
import { useSelector } from 'react-redux';
import { getQuestionsList } from 'redux/questionsSlice/selectors/getQuestionsList/getQuestionsList';
import {
  getCurrentQuestionIndex,
} from 'redux/questionsSlice/selectors/getCurrentQuestionIndex/getCurrentQuestionIndex';
import { useNavigate } from 'react-router-dom';
import Typography from 'ui/Typography/Typography';
import { getError } from 'redux/questionsSlice/selectors/getError/getError';

const Game = () => {

  const dispatch = useAppDispatch();
  const questions = useSelector(getQuestionsList);
  const currentQuestionIndex = useSelector(getCurrentQuestionIndex);
  const error = useSelector(getError);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  useEffect(() => {
    if (questions.length === currentQuestionIndex - 1) {
      navigate('result');
    }
  }, [questions, currentQuestionIndex]);

  if (!error && (questions.length === 0 || currentQuestionIndex === null)) {
    return null;
  }

  return (
    <div className={cls.wrapper}>
      {
        error && <Typography customClass={cls.error} Element="h3" size="xl">
          {error}
        </Typography>
      }
      {
        !error && <>
          <Main questions={questions} currentQuestionIndex={currentQuestionIndex} />
          <Sidebar questions={questions} currentQuestionIndex={currentQuestionIndex} />
          </>
      }
    </div>
  );
};

export default Game;