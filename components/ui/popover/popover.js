import React, { useMemo } from 'react'
import Tooltip from 'components/ui/tooltip'
import { getReactNode } from 'utils/collections'

const defaultProps = {
  trigger: 'click',
  placement: 'bottom',
  portalClassName: ''
}

const Popover = ({
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
      content={textNode}
      trigger={trigger}
      placement={placement}
      portalClassName={`ui-tooltip-content--popover ${portalClassName}`}
      showArrow
      {...props}
    >
      {children}
    </Tooltip>
  )
}

Popover.defaultProps = defaultProps

export default Popover
