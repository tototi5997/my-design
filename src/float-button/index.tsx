import c from 'classnames';
import React from 'react';
import { ReactComponent as Question } from '../icons/question.svg';
import './index.less';

const FloatButton = () => {
  return (
    <div className={c('my-float-button')}>
      <Question />
    </div>
  );
};

export default FloatButton;
