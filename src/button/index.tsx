import c from 'classnames';
import React from 'react';
import { ReactComponent as LoadingSvg } from '../icons/loading.svg';
import './index.less';
import { IButton } from './interface';

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

  // 单击
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

  //双击
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

  // 处理 loading , icon
  const getBtnIcon = () => {
    if (loading) {
      return (
        <div className={c(`${CLS_PRE}-loading-icon`)}>
          <LoadingSvg />
        </div>
      );
    } else return icon ? icon : <></>;
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
      {getBtnIcon()}
      {children}
    </div>
  );
};

export default Button;
