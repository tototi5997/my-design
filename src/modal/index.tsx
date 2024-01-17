import cls from 'classnames';
import { Button } from 'my-design';
import React from 'react';
import { createPortal } from 'react-dom';
import './index.less';
import IModal from './interface';
const Modal = React.forwardRef<HTMLInputElement, IModal>((props, ref) => {
  const CLS_PRE = 'yr';

  const {
    onOk,
    onCancel,
    visible = false,
    title = '标题',
    children,
    content,
    getContainer,
    width,
    okType = 'primary',
    okText = '确认',
    okButtonProps = {},
    maskClosable = true,
    mask = true,
    closable = true,
    cancelText = '取消',
    cancelButtonProps = {},
    footer,
    className,
    style,
  } = props;

  const modalRoot =
    typeof getContainer === 'function'
      ? getContainer() || document.body
      : getContainer || document.body;

  const handleMaskClick = () => {
    if (onCancel && maskClosable) onCancel();
  };

  const modalStyle = { ...style, width };

  return (
    visible &&
    createPortal(
      <div className={`${CLS_PRE}-modal-wrapper`} ref={ref}>
        <div className={cls(`${CLS_PRE}-modal`, className)} style={modalStyle}>
          <div className={`${CLS_PRE}-modal-header`}>
            <h4>{title}</h4>
            {closable && (
              <div
                className={`${CLS_PRE}-modal-header-close`}
                onClick={onCancel}
              >
                x
              </div>
            )}
          </div>
          <div className={`${CLS_PRE}-modal-content`}>
            {content ? content : children ? children : ''}
          </div>
          <div className={`${CLS_PRE}-modal-footer`}>
            {footer ? (
              <div className={`${CLS_PRE}-modal-footer-box`}>
                {typeof footer === 'function' ? footer() : footer}
              </div>
            ) : (
              <div className={`${CLS_PRE}-modal-footer-box`}>
                <Button
                  {...cancelButtonProps}
                  className={`${CLS_PRE}-modal-footer-cancel`}
                  onClick={onCancel}
                >
                  {cancelText}
                </Button>
                <Button
                  {...okButtonProps}
                  className={`${CLS_PRE}-modal-footer-ok`}
                  onClick={onOk}
                  type={okType}
                >
                  {okText}
                </Button>
              </div>
            )}
          </div>
        </div>
        {mask && (
          <div className={`${CLS_PRE}-mask`} onClick={handleMaskClick}></div>
        )}
      </div>,
      modalRoot,
    )
  );
});

export default Modal;
