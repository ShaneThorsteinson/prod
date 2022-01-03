import clsx from 'clsx'
import { forwardRef, createElement } from 'react'

const Input = forwardRef(({ className, inputClass, size = null, label = null, help = null, status = null, message = null, iconRight = null, elementType = 'input', ...props }, ref) => {
  const containerClass = clsx('ui-input__container', {
    'ui-input__status--error': status === 'error',

    'ui-input--size-xs': size === 'x-small',
    'ui-input--size-sm': size === 'small',
    'ui-input--size-lg': size === 'large'
  }, className)

  return (
    <div className={containerClass}>
      <div className="flex justify-between">
        {label && <label className="ui-input__label">{label}</label>}
        {help && <div className="ui-input__help">{help}</div>}
      </div>
      <div className="ui-input__wrapper">
        {createElement(elementType, {
          ref,
          className: clsx('ui-input', inputClass),
          ...props
        })}
        {iconRight && <div className="ui-input__icon-right">{iconRight}</div>}
      </div>
      {message && <div className="ui-input__message">{message}</div>}
    </div>
  )
})

export default Input
