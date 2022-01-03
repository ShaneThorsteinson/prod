import clsx from 'clsx'

const ModalBody = ({ children, className, ...props }) => {
  return (
    <div className={clsx('ui-modal-body', className)} {...props}>
      {children}
    </div>
  )
}

export default ModalBody
