import React, { useMemo } from 'react'
import { getIconPosition } from './placement'

const TooltipIcon = ({ placement }) => {
  const { transform, top, left, right, bottom } = useMemo(
    () => getIconPosition(placement, 2),
    [placement]
  )

  return (
    <span
      className="ui-tooltip-icon"
      style={{
        left,
        top,
        right,
        bottom,
        transform
      }}
    />
  )
}

export default React.memo(TooltipIcon)
