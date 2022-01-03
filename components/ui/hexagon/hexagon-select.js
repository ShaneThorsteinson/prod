import clsx from 'clsx'
import { Children, useState } from 'react'

export default function HexagonSelect ({ children, className, defaultValue = 0, onSelect = f => f, ...props }) {
  const [value, setValue] = useState(defaultValue)

  const handleSelect = (id) => {
    return () => {
      setValue(id)
      onSelect(id)
    }
  }

  return (
    <div className={clsx('ui-hexagon-select space-x-2', className)} {...props}>
      {Children.map(children, (child, index) => {
        const id = child.props?.id || index
        return (
          <div
            onClick={handleSelect(id)}
            className={clsx('ui-hexagon-select__item', { 'ui-hexagon-select__item--selected': value === id })}
          >
            {child}
          </div>
        )
      })}
    </div>
  )
}
