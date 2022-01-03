import clsx from 'clsx'
import Hexagon from '../hexagon'
import IconX from 'icons/x'
import IconCheckCircle from 'icons/check-circle'

export default function Toast ({ className, children, icon, title, onDismiss, appearance = 'default', ...props }) {
  const iconMap = {
    success: <Hexagon size={60} className="flex text-success-500" icon={<IconCheckCircle size={18} />} />,
    error: <Hexagon size={60} className="flex text-primary-500" icon={<IconX size={18} />} />
  }
  const iconComponent = icon ?? iconMap[appearance]

  const classes = clsx('ui-toast', {
    'ui-toast--success': appearance === 'success',
    'ui-toast--error': appearance === 'error'
  }, className)

  return (
    <div className={classes} {...props}>
      {iconComponent && <div className="ui-toast__icon">{iconComponent}</div>}
      <div className="ui-toast__content">
        {title && <div className="ui-toast__title">{title}</div>}
        {children}
      </div>
      {onDismiss && <div className="ui-toast__close" onClick={onDismiss}><IconX size={20} /></div>}
    </div>
  )
}
