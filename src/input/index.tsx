import cls from 'classnames';
import React from 'react';
import './index.less';
import IInput from './interface';

const Input = React.forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const {
    type = 'text',
    placeholder,
    value,
    size,
    disabled,
    maxlength,
    onChange,
    className,
    style,
  } = props;

  const CLS_PRE = 'yr';

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event?.target.value);
    }
  };

  return (
    <input
      ref={ref}
      className={cls(
        `${CLS_PRE}-input`,
        {
          [`${CLS_PRE}-input-${size}`]: size,
          [`${CLS_PRE}-input-${type}`]: type,
        },
        className,
      )}
      style={style}
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      maxLength={maxlength}
      onChange={handleInputChange}
    />
  );
});

export default Input;
