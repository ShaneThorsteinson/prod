import clsx from 'clsx'
import { forwardRef } from 'react'

const ButtonLink = forwardRef((props, ref) => {
  const {
    type = 'primary',
    size = 'md',
    className,
    icon = null,
    iconRight = null,
    children,
    ...restProps
  } = props

  const classes = clsx('ui-button-link', {
    'ui-button-link--size-sm': size === 'small',
    'ui-button-link--size-lg': size === 'large',

    'ui-button-link--primary': type === 'primary',
    'ui-button-link--primary-light': type === 'primary-light',
    'ui-button-link--secondary': type === 'secondary',
    'ui-button-link--secondary-light': type === 'secondary-light'
  }, className)

  return (
    <button
      ref={ref}
      className={classes}
      {...restProps}
    >
      {icon && <span className="ui-button-link__icon">{icon}</span>}
      {!icon && !iconRight ? children : <span className="ui-button-link__text">{children}</span>}
      {iconRight && <span className="ui-button-link__icon">{iconRight}</span>}
    </button>
  )
})

export default ButtonLink
