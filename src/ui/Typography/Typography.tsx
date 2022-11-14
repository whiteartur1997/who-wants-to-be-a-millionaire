import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Typography.module.css';
import { getSize } from './getSize/getSize';
import { getWeight } from './getWeight/getWeight';

export type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
export type TypographySize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type TypographyWeight = 'regular' | 'semiBold';
export type TypographyColor = 'main' | 'white' | 'black' | 'grey';

interface TypographyProps {
  children: ReactNode;
  color?: TypographyColor;
  customClass?: string;
  Element: TypographyElement;
  size?: TypographySize;
  weight?: TypographyWeight;
}

const Typography:FC<TypographyProps> = ({
  children,
  color = 'black',
  customClass,
  Element,
  size = 'm',
  weight = 'regular',
}) => {
  return (
    <Element className={classNames(cls.typography, cls[getSize(size)], cls[getWeight(weight)], cls[color], customClass)}>
      {children}
    </Element>
  );
};

export default Typography;