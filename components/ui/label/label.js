import clsx from 'clsx'

const Label = ({ icon, iconClass, className, children, rounded = false, ...props }) => {
  const classes = clsx('ui-label', {
    'ui-label--rounded': rounded
  }, className)
  return (
    <div className={classes} {...props}>
      {icon && <span className={clsx('ui-label__icon', iconClass)}>{icon}</span>}
      <span className="ui-label__text">{children}</span>
    </div>
  )
}

export default Label
