import c from 'classnames';
import React from 'react';
import { ReactComponent as LoadingSvg } from '../icons/loading.svg';
import './index.less';

type IButtonType = 'primary' | 'single' | 'default' | 'circle';

interface IButton {
  /**
   * @description 按钮类型
   * @default "default"
   */
  type?: IButtonType;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 子节点
   */
  children?: React.ReactNode;
  /**
   * @description 幽灵属性，使按钮背景透明
   * @default false
   */
  ghost?: boolean;
  /**
   * @description 设置按钮载入状态
   * @default false
   */
  loading?: boolean;
  /**
   * @description 点击按钮时的回调
   */
  onClick?: () => void;
  /**
   * @description 双击按钮时的回调
   */
  onDoubleClick?: () => void;
}

const Button: React.FC<IButton> = (props) => {
  const {
    type = 'default',
    children,
    ghost = false,
    onClick = () => {},
    onDoubleClick = () => {},
    loading = false,
    className,
  } = props;

  const CLS_PRE = 'my';
  const typeClass = ghost ? `${CLS_PRE}-single` : `${CLS_PRE}-${type}`;

  return (
    <div
      className={c(`${CLS_PRE}-button`, className, typeClass)}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      {loading && <LoadingSvg />}
      {children}
    </div>
  );
};

export default Button;
