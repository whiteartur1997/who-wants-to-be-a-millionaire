import React, { FC, ReactNode } from 'react';
import cls from './Hero.module.css';
import ThumbUp from 'ui/ThumbUp/ThumbUp';

interface HeroProps {
  children: ReactNode;
}

const Hero:FC<HeroProps> = ({ children }) => {
  return (
    <div className={cls.content}>
      <ThumbUp />
      {children}
    </div>
  );
};

export default Hero;