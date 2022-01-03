import clsx from 'clsx'
import { forwardRef } from 'react'

const Radio = forwardRef(({ type, className, children, ...props }, ref) => {
  const classes = clsx('ui-radio', className)
  return (
    <label className={classes}>
      <input ref={ref} type="radio" {...props} />
      <div className="ui-radio__wrap">
        <div className="ui-radio__icon" />
        <div className="ui-radio__label">{children}</div>
      </div>
    </label>
  )
})
Radio.displayName = 'Radio'
export default Radio
