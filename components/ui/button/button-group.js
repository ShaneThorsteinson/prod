import clsx from 'clsx'

const ButtonGroup = ({ children, className }) => {
  return (
    <div className={clsx('ui-button-group space-x-1.5', className)}>{children}</div>
  )
}

export default ButtonGroup
