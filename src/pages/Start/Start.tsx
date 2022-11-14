import React from 'react';
import cls from './Start.module.css';
import Button from 'ui/Button/Button';
import Typography from 'ui/Typography/Typography';
import { useNavigate } from 'react-router-dom';
import Hero from 'ui/Hero/Hero';

const Start = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/game');
  };

  return (
    <div className={cls.wrapper}>
      <Hero>
        <div className={cls.titleWrapper}>
          <Typography customClass={cls.title} Element='h1' size='xl' weight="semiBold" >
            Who wants to be a millionaire?
          </Typography>
          <Button onClick={onClick}>
            <Typography Element='span' color="white" size='m' weight="semiBold" >
              Start
            </Typography>
          </Button>
        </div>
      </Hero>
    </div>
  );
};

export default Start;