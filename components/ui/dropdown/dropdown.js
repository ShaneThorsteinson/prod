import React, { useMemo } from 'react'
import Tooltip from 'components/ui/tooltip'
import { getReactNode } from 'utils/collections'

const defaultProps = {
  trigger: 'click',
  placement: 'bottomEnd',
  portalClassName: ''
}

const Dropdown = ({
  content,
  children,
  trigger,
  placement,
  portalClassName,
  ...props
}) => {
  const textNode = useMemo(() => getReactNode(content), [content])

  return (
    <Tooltip
      content={<div className="ui-dropdown">{textNode}</div>}
      trigger={trigger}
      placement={placement}
      portalClassName={`ui-tooltip-content--dropdown ${portalClassName}`}
      showArrow
      {...props}
    >
      {children}
    </Tooltip>
  )
}

Dropdown.defaultProps = defaultProps

export default Dropdown
