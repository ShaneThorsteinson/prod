import clsx from 'clsx'
import { useState } from 'react'

export default function Collapse ({ className, children, title, ...props }) {
  const [visible, setVisible] = useState(false)
  const classes = clsx('ui-collapse', {
    'ui-collapse--visible': visible
  }, className)

  const handleVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className={classes} {...props}>
      <div className="ui-collapse__title" onClick={handleVisible}>{title}</div>
      {visible && <div className="ui-collapse__content">{children}</div>}
    </div>
  )
}
