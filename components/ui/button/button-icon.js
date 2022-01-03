import clsx from 'clsx'

const ButtonIcon = ({ icon, className, ...props }) => {
  return (
    <button className={clsx('ui-button-icon', className)} {...props}>
      {icon}
    </button>
  )
}

export default ButtonIcon
