import { createPortal } from 'react-dom'
import clsx from 'clsx'
import useLockBodyScroll from 'hooks/use-lock-body-scroll'
import usePortal from 'hooks/use-portal'

const Modal = ({ className, children, width = 460, onClose = f => f, shined = false, showClose = false, ...props }) => {
  const classes = clsx('ui-modal', {
    'ui-modal--shined': shined
  }, className)

  const el = usePortal('ui-modal')
  useLockBodyScroll()

  if (!el) {
    return null
  }

  return createPortal(
    <div tabIndex="-1" role="dialog" className={classes} {...props}>
      <div className="ui-modal__bg" onClick={onClose} />
      <div className="ui-modal__content" style={{ maxWidth: width }}>
        {showClose && <div className="ui-modal__close" onClick={onClose} />}
        {children}
      </div>
    </div>,
    el
  )
}

export default Modal
