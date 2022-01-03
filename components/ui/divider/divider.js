import clsx from 'clsx'

const Divider = ({ children, className, ...props }) => {
  return (
    <div className={clsx('ui-divider', className)} {...props}>
      <span className="ui-divider__left" />
      <span className="ui-divider__center">{children}</span>
      <span className="ui-divider__right" />
    </div>
  )
}

export default Divider
