import c from 'classnames';
import React from 'react';
import './index.less';

interface IFloatButtonGroup {
  children?: React.ReactNode;
}

const Group: React.FC<IFloatButtonGroup> = (props) => {
  const { children } = props;
  const CLS_PRE = 'my';

  return <div className={c(`${CLS_PRE}-float-button-group`)}>{children}</div>;
};

export default Group;
