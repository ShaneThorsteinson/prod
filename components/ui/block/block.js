import clsx from 'clsx'

export default function Block ({ className, children, shined = true, ...props }) {
  const classes = clsx('ui-block', {
    'ui-block--shined': shined
  }, className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
