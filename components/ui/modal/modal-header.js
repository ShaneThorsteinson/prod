import clsx from 'clsx'
import Hexagon from 'components/ui/hexagon'

const ModalHeader = ({ icon, iconClass, title, description, className, ...props }) => {
  return (
    <div className={clsx('ui-modal-header', className)} {...props}>
      {icon && <Hexagon size={60} icon={icon} className={iconClass ?? 'text-primary-500'} />}
      <div className="ui-modal-header__title">{title}</div>
      {description && <div className="ui-modal-header__desc">{description}</div>}
    </div>
  )
}

export default ModalHeader
