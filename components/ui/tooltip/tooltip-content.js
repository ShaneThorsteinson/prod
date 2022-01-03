import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import usePortal from 'hooks/use-portal'
import useResize from 'hooks/use-resize'
import useClickAnyWhere from 'hooks/use-click-away'
import { getPosition, defaultTooltipPosition } from './placement'
import TooltipIcon from './tooltip-icon'
import clsx from 'clsx'

const defaultRect = {
  top: -1000,
  left: -1000,
  right: -1000,
  bottom: -1000,
  width: 0,
  height: 0
}

const getRect = (ref, fixed) => {
  if (!ref || !ref.current) return defaultRect
  const rect = ref.current.getBoundingClientRect()
  return {
    ...rect,
    width: rect.width || rect.right - rect.left,
    height: rect.height || rect.bottom - rect.top,
    top: rect.top + (fixed ? 0 : document.documentElement.scrollTop),
    bottom: rect.bottom + (fixed ? 0 : document.documentElement.scrollTop),
    left: rect.left + (fixed ? 0 : document.documentElement.scrollLeft),
    right: rect.right + (fixed ? 0 : document.documentElement.scrollLeft)
  }
}

const TooltipContent = ({
  children,
  parent,
  visible,
  offset,
  placement,
  className,
  showArrow,
  fixed
}) => {
  const el = usePortal('ui-tooltip')
  const selfRef = useRef(null)
  const [rect, setRect] = useState(defaultTooltipPosition)
  if (!parent) return null

  const updateRect = () => {
    const position = getPosition(placement, getRect(parent, fixed), offset)
    setRect(position)
  }

  useResize(updateRect)
  useClickAnyWhere(() => updateRect())
  useEffect(() => {
    updateRect()
  }, [visible])

  const preventHandler = (event) => {
    event.stopPropagation()
    event.nativeEvent.stopImmediatePropagation()
  }

  if (!el) return null

  if (!visible) {
    return null
  }

  return createPortal(
    <div
      className={clsx('ui-tooltip-content', { 'ui-tooltip-content--fixed': fixed }, className)}
      ref={selfRef}
      onClick={preventHandler}
      style={{
        top: rect.top,
        left: rect.left,
        transform: rect.transform
      }}
    >
      <div className="ui-tooltip-content__inner">
        {showArrow && (
          <TooltipIcon
            placement={placement}
          />
        )}
        {children}
      </div>
    </div>,
    el
  )
}

export default TooltipContent
