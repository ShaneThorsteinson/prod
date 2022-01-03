import clsx from 'clsx'
import IconCheckCircle from 'icons/check-circle'
import IconWarning from 'icons/warning'
import IconX from 'icons/x'
import IconInfo from 'icons/info'
import Hexagon from '../hexagon'
import t from 'prop-types'

const Message = ({ type = 'default', children, className, icon, onClose }) => {
  const iconMap = {
    success: <Hexagon className="flex text-success-500" icon={<IconCheckCircle size={14} />} />,
    info: <Hexagon className="flex text-success-500" icon={<IconInfo size={14} />} />,
    error: <Hexagon className="flex text-primary-500" icon={<IconX size={14} />} />,
    warning: <Hexagon className="flex text-warning-500" icon={<IconWarning size={14} />} />
  }
  const iconComponent = icon ?? iconMap[type]

  const classes = clsx('ui-message', {
    'ui-message--success': type === 'success',
    'ui-message--error': type === 'error',
    'ui-message--warning': type === 'warning'
  }, className)

  return (
    <div className={classes}>
      {iconComponent && <div className="ui-message__icon">{iconComponent}</div>}
      <div className="ui-message__content">{children}</div>
      {onClose && <div className="ui-message__close" onClick={onClose}><IconX size={20} /></div>}
    </div>
  )
}
Message.propTypes = {
  type: t.oneOf(['success', 'error', 'warning'])
}
export default Message
