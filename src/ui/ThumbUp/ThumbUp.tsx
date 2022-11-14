import React from 'react';
import ThumbUpImage from 'shared/assets/images/thumb_up.png';
import cls from './ThumbUp.module.css';

const ThumbUp = () => {
  return (
    <img className={cls.thumbUp} src={ThumbUpImage} alt="Thumb up" />
  );
};

export default ThumbUp;