import clsx from 'clsx'

const ModalFooter = ({ children, className, ...props }) => {
  const classes = clsx('ui-modal-footer', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default ModalFooter
