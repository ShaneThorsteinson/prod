import clsx from 'clsx'

const List = ({ className, children, ...props }) => {
  const classes = clsx('ui-list', className)

  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  )
}

export default List
