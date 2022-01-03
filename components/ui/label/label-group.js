import clsx from 'clsx'

const LabelGroup = ({ children, className, ...props }) => {
  return (
    <div className={clsx('ui-label-group', className)} {...props}>{children}</div>
  )
}

export default LabelGroup
