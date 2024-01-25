import c from 'classnames';
import React, { useState } from 'react';
import { ReactComponent as CloseIcon } from '../icons/close.svg';
import { ReactComponent as MenuIcon } from '../icons/menu.svg';
import FloatButton from './float-button';
import './index.less';

interface IFloatButtonGroup {
  children?: React.ReactNode;
}

const Group: React.FC<IFloatButtonGroup> = (props) => {
  const { children } = props;
  const CLS_PRE = 'my';

  const [isExpand, setExpandState] = useState(false);

  const handleClickMenuIcon = () => {
    setExpandState(!isExpand);
  };

  return (
    <div className={c(`${CLS_PRE}-float-button-group`)}>
      {isExpand && (
        <div className={c(`${CLS_PRE}-float-child-btns`)}>{children}</div>
      )}
      <FloatButton
        type="primary"
        icon={isExpand ? <CloseIcon /> : <MenuIcon />}
        onClick={handleClickMenuIcon}
      />
    </div>
  );
};

export default Group;
