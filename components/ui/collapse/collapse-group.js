import clsx from 'clsx'

export default function CollapseGroup ({ className, children, ...props }) {
  const classes = clsx('space-y-2', className)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
