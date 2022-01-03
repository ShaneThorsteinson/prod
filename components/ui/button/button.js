import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const Button = forwardRef(({
  className,
  children,
  size = 'middle',
  type = 'primary',
  shined = false,
  outlined = false,
  loading = false,
  icon = null,
  iconRight = null,
  htmlType = 'button',
  ...props
}, ref) => {
  const classes = clsx(
    'ui-button',
    {
      'ui-button--loading': loading,

      'ui-button__size-middle': size === 'middle',
      'ui-button__size-large': size === 'large',
      'ui-button__size-small': size === 'small',
      'ui-button__size-x-small': size === 'x-small',

      'ui-button__type-primary': type === 'primary',
      'ui-button__type-secondary': type === 'secondary',
      'ui-button__type-accent': type === 'accent',
      'ui-button__type-twitter': type === 'twitter',

      'ui-button__outlined': outlined,
      'ui-button__shined': shined
    },
    className
  )

  return (
    <button ref={ref} className={classes} type={htmlType} {...props}>
      {loading && <div className="ui-button__loading" />}
      {!loading && (
        <>
          {icon && <span className="ui-button__icon">{icon}</span>}
          <span>{children}</span>
          {iconRight && <span className="ui-button__icon">{iconRight}</span>}
        </>
      )}
    </button>
  )
})

Button.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  shined: PropTypes.bool,
  outlined: PropTypes.bool,
  loading: PropTypes.bool,
  icon: PropTypes.object,
  iconRight: PropTypes.object,
  htmlType: PropTypes.string
}

export default Button
