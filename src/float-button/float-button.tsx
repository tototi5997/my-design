import c from 'classnames';
import React from 'react';
import { ReactComponent as Question } from '../icons/question.svg';
import './index.less';
import { CompoundedComponent, IFloatButtonProps } from './interface';

const FloatButton: React.FC<IFloatButtonProps> = (props) => {
  const CLS_PRE = 'my';
  const { type, icon, onClick } = props;

  const handleClick = () => {
    onClick?.();
  };
  return (
    <div
      className={c(`${CLS_PRE}-float-button`, `${CLS_PRE}-float-btn-${type}`)}
      onClick={handleClick}
    >
      {icon ?? <Question />}
    </div>
  );
};

export default FloatButton as CompoundedComponent;
