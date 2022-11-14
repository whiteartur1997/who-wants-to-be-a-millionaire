import cls from './Tab.module.css';
import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { getTabStateClass } from './getTabStateClass/getTabStateClass';

export type TabState = 'error' | 'success' | 'active' | 'inactive';

interface TabProps {
  children?: ReactNode;
  customClass?: string;
  customContentClass?: string;
  height: number | string;
  isHoverable?: boolean;
  state?: TabState;
  onClick?: () => void;
  width: number | string;
  withShortLines?: boolean;
}

const Tab:FC<TabProps> = ({
  children,
  customClass,
  customContentClass,
  height,
  isHoverable = false,
  state = 'inactive',
  onClick,
  width,
  withShortLines = false }) => {

  const onTabClick = () => {
    onClick?.();
  };

  return (
    <div onClick={onTabClick} style={{ width: width, height: height }} className={classNames(cls.hexagon, cls[getTabStateClass(state)], { [cls.hoverable]: isHoverable }, { [cls.hexagonWithShortLines]: withShortLines }, customClass)}>
      <div className={classNames(cls.content, customContentClass)}>
        {children}
      </div>
      <svg className={classNames(cls.hexagon_inner, cls[getTabStateClass(state)])} width="100%" height="100%" viewBox="0 0 240 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.4526 4.63788C15.6376 2.01596 18.8742 0.5 22.2872 0.5H217.713C221.126 0.5 224.362 2.01597 226.547 4.63788L239.349 20L226.547 35.3621C224.362 37.984 221.126 39.5 217.713 39.5H22.2872C18.8742 39.5 15.6376 37.984 13.4526 35.3621L0.650853 20L13.4526 4.63788Z" />
      </svg>
    </div>

  );
};

export default Tab;