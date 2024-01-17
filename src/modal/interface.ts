import { CSSProperties, ReactNode } from 'react';

type IButtonType = 'primary' | 'single' | 'default' | 'circle';

interface IModal {
  /**
   * @description 是否可见
   * @default false
   */
  visible?: boolean;

  /**
   * @description 标题
   * @default '标题'
   */
  title?: string;

  /**
   * @description 内容
   */
  content?: ReactNode;

  /**
   * @description 宽度
   * @default '480px'
   */
  width?: string;

  /**
   * @description 行内样式
   */
  style?: CSSProperties;

  /**
   * @description 确认按钮类型
   * @default 'primary'
   */
  okType?: IButtonType;

  /**
   * @description 确认按钮文本
   * @default '确认'
   */
  okText?: string;

  /**
   * @description 确认按钮属性
   */
  okButtonProps?: object;

  /**
   * @description 是否点击遮罩关闭
   * @default true
   */
  maskClosable?: boolean;

  /**
   * @description 是否显示遮罩
   * @default true
   */
  mask?: boolean;

  /**
   * @description 是否可关闭
   * @default true
   */
  closable?: boolean;

  /**
   * @description 类名
   */
  className?: string;

  /**
   * @description 取消按钮文本
   * @default '取消'
   */
  cancelText?: string;

  /**
   * @description 取消按钮属性
   */
  cancelButtonProps?: object;

  /**
   * @description 子元素
   */
  children: ReactNode;

  /**
   * @description 确认按钮回调
   */
  onOk?: () => void;

  /**
   * @description 取消按钮回调
   */
  onCancel?: () => void;

  /**
   * @description 底部内容，可以是 ReactNode 或一个返回 ReactNode 的函数
   * @default '确定和取消按钮'
   */
  footer?: (() => React.ReactNode) | React.ReactNode;

  /**
   * @description 获取容器的方法，可以是 HTMLElement 或一个返回 HTMLElement 或 false 的函数
   * @default '默认挂载在body下面'
   */
  getContainer?: HTMLElement | (() => HTMLElement | false);
}

export default IModal;
