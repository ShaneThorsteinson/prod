import { useLayoutEffect } from 'react'

const useLockBodyScroll = (isLock = true) => {
  useLayoutEffect(() => {
    if (!isLock) {
      return
    }
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [isLock])
}

export default useLockBodyScroll
