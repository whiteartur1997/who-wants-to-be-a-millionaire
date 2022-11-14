import React from 'react';
import Typography from 'ui/Typography/Typography';
import cls from './NotFound.module.css';
import Button from 'ui/Button/Button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

  const navigate = useNavigate();

  const onNavigate = () => {
    navigate('/start');
  };

  return (
    <div className={cls.wrapper}>
      <div className={cls.content}>
        <Typography customClass={cls.title} Element="h4" size="xl" weight="semiBold">
          Get lost? Return to starting page
        </Typography>
        <Button onClick={onNavigate}>To Start</Button>
      </div>

    </div>
  );
};

export default NotFound;