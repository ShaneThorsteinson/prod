import clsx from 'clsx'

const AvatarGroup = ({ className, children, ...props }) => {
  const classes = clsx('ui-avatar-group', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default AvatarGroup
