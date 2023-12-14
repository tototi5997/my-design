import c from 'classnames';
import React from 'react';
import './index.less';

type IButtonType = 'primary' | 'single' | 'default';

interface IButton {
  /**
   * @description 按钮类型
   * @default "default"
   */
  type?: IButtonType;
  /**
   * @description 子节点
   */
  children?: React.ReactNode;
}

const Button: React.FC<IButton> = (props) => {
  const { type = 'default', children } = props;

  const CLS_PRE = 'yr';

  return (
    <div className={c(`${CLS_PRE}-button`, `${CLS_PRE}-${type}`)}>
      {children}
    </div>
  );
};

export default Button;
