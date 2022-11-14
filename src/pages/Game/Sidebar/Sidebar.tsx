import React, { FC, useState } from 'react';
import Button from 'ui/Button/Button';
import Menu from 'shared/assets/icons/menu.svg';
import Close from 'shared/assets/icons/close.svg';
import cls from './Sidebar.module.css';
import Tab from 'ui/Tab/Tab';
import { toUsdString } from 'shared/utils/formatMoneyAmount/formatMoneyAmount';
import Typography from 'ui/Typography/Typography';
import classNames from 'classnames';
import { Question } from 'redux/questionsSlice/types';

interface SidebarProps {
  currentQuestionIndex: number;
  questions: Question[];
}

const Sidebar:FC<SidebarProps> = ({ questions, currentQuestionIndex  }) => {

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const onSidebarOpen = () => {
    setSidebarIsOpen(true);
  };

  const onSidebarClose = () => {
    setSidebarIsOpen(false);
  };

  return (
    <div className={classNames({ [cls.sidebar]: true, [cls.open]: sidebarIsOpen })}>
      <Button onClick={onSidebarClose} customClass={cls.closeBtn} iconButton>
        <Close />
      </Button>
      {
        !sidebarIsOpen && <Button onClick={onSidebarOpen} customClass={cls.menuBtn} iconButton>
          <Menu />
        </Button>
      }
      {
        questions && <div className={cls.questionsWrapper}>
          <div className={cls.questions}>
            {questions.map((q, index) => <Tab
              state={index === currentQuestionIndex ? 'active' : 'inactive'}
              customClass={cls.tab}
              width={240}
              height={40}
              key={q.question}>
              <Typography
                Element="span"
                color={index === currentQuestionIndex ? 'main' : index > currentQuestionIndex ? 'black' : 'grey'}>
                {toUsdString.format(q.prize)}
              </Typography>
            </Tab>,
            )}
          </div>
        </div>
      }
    </div>
  );
};

export default Sidebar;