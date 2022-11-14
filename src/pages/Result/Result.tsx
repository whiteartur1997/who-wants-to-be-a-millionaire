import React, { useEffect, useMemo } from 'react';
import cls from './Result.module.css';
import Typography from 'ui/Typography/Typography';
import { toUsdString } from 'shared/utils/formatMoneyAmount/formatMoneyAmount';
import Button from 'ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import Hero from 'ui/Hero/Hero';
import { useSelector } from 'react-redux';
import { getQuestionsList } from 'redux/questionsSlice/selectors/getQuestionsList/getQuestionsList';
import {
  getCurrentQuestionIndex,
} from 'redux/questionsSlice/selectors/getCurrentQuestionIndex/getCurrentQuestionIndex';
import { getGameIsWon } from 'redux/questionsSlice/selectors/getGameIsWon/getGameIsWon';
import { useAppDispatch } from 'redux/store';
import { questionsActions } from 'redux/questionsSlice/questionsSlice';

const Result = () => {

  const dispatch = useAppDispatch();
  const questions = useSelector(getQuestionsList);
  const currentQuestionIndex = useSelector(getCurrentQuestionIndex);
  const gameIsWon = useSelector(getGameIsWon);

  const currentQuestion = useMemo(() => {
    return gameIsWon ? questions[currentQuestionIndex] : questions[currentQuestionIndex - 1];
  }, [gameIsWon, questions, currentQuestionIndex]);

  const navigate = useNavigate();
  const onNavigate = () => {
    navigate('/game');
  };

  useEffect(() => {
    return () => {
      dispatch(questionsActions.reset());
    };
  });

  return (
    <div className={cls.wrapper}>
      <Hero>
        <div className={cls.info}>
          <Typography customClass={cls.totalScore} Element="span" size="l" color="black" weight="semiBold">
            Total score:
          </Typography>
          <Typography customClass={cls.prize} Element="h2" size="xl" color="black" weight="semiBold">
            {toUsdString.format(currentQuestion?.prize || 0)} earned
          </Typography>
          <Button onClick={onNavigate}>
            Try again
          </Button>
        </div>
      </Hero>
    </div>
  );
};

export default Result;