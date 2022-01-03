import clsx from 'clsx'

const Checkbox = ({ className, children, status = null, message = null, iconRight = null, ...props }) => {
  return (
    <label className={clsx('ui-checkbox', className)}>
      <input type="checkbox" {...props} />
      <span className="ui-checkbox__icon" />
      <span className="ui-checkbox__text">{children}</span>
    </label>
  )
}

export default Checkbox
