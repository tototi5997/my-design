import { CSSProperties } from 'react';

type MyInputType =
  | 'text'
  | 'password'
  | 'checkbox'
  | 'radio'
  | 'number'
  | 'date'
  | 'email'
  | 'submit'
  | 'reset';
type MyInputSize = 'large' | 'default' | 'small';

interface IInput {
  /**
   * @description 输入类型
   * @default text
   */
  type?: MyInputType;
  /**
   * @description 占位符
   */
  placeholder?: string;
  /**
   * @description 输入值
   */
  value?: string;
  /**
   * @description 输入框大小
   */
  size?: MyInputSize;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 最大输入长度
   */
  maxlength?: number;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 样式
   */
  style?: CSSProperties;
  /**
   * @description 输入变化回调
   */
  onChange?: (value: string) => void;
}
export default IInput;
