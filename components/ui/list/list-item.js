import clsx from 'clsx'

export default function ListItem ({ icon, children, className, isSelected = false, onClick = null, ...props }) {
  const classes = clsx('ui-list-item', {
    'ui-list-item--selected': isSelected,
    'cursor-pointer': onClick
  }, className)

  return (
    <li className={classes} {...props} onClick={onClick}>
      {icon && (
        <>
          <span className="text-success-500 mr-2">{icon}</span>
          <span>{children}</span>
        </>
      )}
      {!icon && children}
    </li>
  )
}
