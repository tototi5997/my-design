export type IButtonType = 'primary' | 'single' | 'default' | 'circle';

export interface IButton {
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
