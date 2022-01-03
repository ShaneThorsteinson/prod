import clsx from 'clsx'

const Select = ({ className, children, label = null, help = null, size = null, status = null, ...props }) => {
  const classes = clsx('ui-select', {
    'ui-select--error': status === 'error',

    'ui-select--xs': size === 'x-small',
    'ui-select--sm': size === 'small',
    'ui-select--lg': size === 'large'
  }, className)

  return (
    <div className={classes}>
      {(help || label) && (
        <div className="flex justify-between">
          {label && <label className="ui-input__label">{label}</label>}
          {help && <div className="ui-input__help">{help}</div>}
        </div>
      )}
      <div className="ui-select__wrap">
        <select {...props}>
          {children}
        </select>
      </div>
    </div>
  )
}

export default Select
