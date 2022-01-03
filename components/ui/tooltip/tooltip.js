import React, { useEffect, useRef, useState } from 'react'
import TooltipContent from './tooltip-content'
import useClickAway from 'hooks/use-click-away'

const Tooltip = ({
  children,
  initialVisible,
  content,
  offset,
  placement,
  portalClassName,
  enterDelay,
  leaveDelay,
  trigger,
  type,
  className,
  onVisibleChange,
  showArrow,
  visible: customVisible,
  fixed,
  ...props
}) => {
  const timer = useRef()
  const ref = useRef(null)
  const [visible, setVisible] = useState(initialVisible)
  const contentProps = {
    type,
    visible,
    offset,
    placement,
    showArrow,
    parent: ref,
    className: portalClassName,
    fixed
  }

  const changeVisible = (nextState) => {
    const clear = () => {
      clearTimeout(timer.current)
      timer.current = undefined
    }
    const handler = (nextState) => {
      setVisible(nextState)
      onVisibleChange(nextState)
      clear()
    }
    clear()
    if (nextState) {
      timer.current = window.setTimeout(() => handler(true), enterDelay)
      return
    }
    timer.current = window.setTimeout(() => handler(false), leaveDelay)
  }

  const mouseEventHandler = (next) => trigger === 'hover' && changeVisible(next)
  const clickEventHandler = () => trigger === 'click' && changeVisible(!visible)

  useClickAway(ref, () => trigger === 'click' && changeVisible(false))

  useEffect(() => {
    if (customVisible === undefined) return
    changeVisible(customVisible)
  }, [customVisible])

  return (
    <div
      ref={ref}
      className={`ui-tooltip ${className}`}
      onClick={clickEventHandler}
      onMouseEnter={() => mouseEventHandler(true)}
      onMouseLeave={() => mouseEventHandler(false)}
      {...props}
    >
      {children}
      <TooltipContent {...contentProps}>{content}</TooltipContent>
    </div>
  )
}

Tooltip.defaultProps = {
  initialVisible: false,
  showArrow: false,
  type: 'default',
  trigger: 'hover',
  placement: 'top',
  enterDelay: 100,
  leaveDelay: 0,
  offset: 12,
  className: '',
  portalClassName: 'ui-tooltip-content--default',
  onVisibleChange: () => {},
  fixed: false
}

export default Tooltip
