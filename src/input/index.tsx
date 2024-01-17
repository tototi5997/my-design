import cls from 'classnames';
import React, { useState } from 'react';
import { ReactComponent as CloseEyeSvg } from '../icons/closeEye.svg';
import { ReactComponent as OpenEyeSvg } from '../icons/openEye.svg';
import './index.less';
import IInput from './interface';

const Input = React.forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const {
    type = 'text',
    size,
    className,
    prefix,
    suffix,
    onChange,
    onPressEnter,
    ...rest
  } = props;

  const CLS_PRE = 'yr';

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      return onChange(event);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onPressEnter) {
      return onPressEnter(event);
    }
  };

  return (
    <div className={`${CLS_PRE}-input`} ref={ref}>
      {prefix ? <div className={`${CLS_PRE}-input-prefix`}>{prefix}</div> : ''}

      <input
        {...rest}
        className={cls(
          `${CLS_PRE}-input-label`,
          {
            [`${CLS_PRE}-input-label-${size}`]: size,
            [`${CLS_PRE}-input-label-${type}`]: type,
          },
          className,
        )}
        type={showPassword ? 'text' : type} //根据密码是否可见切换type
        style={{
          paddingLeft: prefix ? '2vw' : '',
          paddingRight: suffix ? '2vw' : '',
        }}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />

      {suffix ? <div className={`${CLS_PRE}-input-suffix`}>{suffix}</div> : ''}

      {type === 'password' && ( //  添加密码是否可见按钮
        <span className={`${CLS_PRE}-input-eye`} onClick={handleTogglePassword}>
          {showPassword ? <OpenEyeSvg /> : <CloseEyeSvg />}
        </span>
      )}
    </div>
  );
});

export default Input;
