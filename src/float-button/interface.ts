import type Group from './group';

export interface IFloatButtonGroup {
  children?: React.ReactNode;
}

export interface IFloatButtonProps {
  type?: 'primary' | 'default';
  icon?: React.ReactNode;
  onClick?: () => void;
}

export type CompoundedComponent = React.FC<IFloatButtonProps> & {
  Group: typeof Group;
};
