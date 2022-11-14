import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  customClass?: string;
  iconButton?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

const Button:FC<ButtonProps> = ({
  children,
  customClass,
  iconButton = false,
  onClick,
  ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={classNames({
        [cls.btn]: !iconButton,
        [cls.iconBtn]: iconButton,
      }, customClass)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;