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
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 按钮图标
   */
  icon?: React.ReactNode;
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
    disabled,
    icon,
  } = props;

  const CLS_PRE = 'my';
  const typeClass = ghost ? `${CLS_PRE}-single` : `${CLS_PRE}-${type}`;

  const handClick = (
    e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>,
  ) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    (onClick as React.MouseEventHandler<HTMLDivElement | HTMLAnchorElement>)?.(
      e,
    );
  };

  const handleDoubleClick = (
    e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>,
  ) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    (
      onDoubleClick as React.MouseEventHandler<
        HTMLDivElement | HTMLAnchorElement
      >
    )?.(e);
  };

  return (
    <div
      className={c(`${CLS_PRE}-button`, className, typeClass, {
        ['disabled']: disabled,
        ['loading']: loading,
      })}
      onClick={handClick}
      onDoubleClick={handleDoubleClick}
    >
      {loading ? (
        <div className={c(`${CLS_PRE}-loading-icon`)}>
          <LoadingSvg />
        </div>
      ) : icon ? (
        icon
      ) : (
        <></>
      )}
      {children}
    </div>
  );
};

export default Button;
