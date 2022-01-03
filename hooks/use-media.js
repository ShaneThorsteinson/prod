import { useState, useEffect } from 'react'

const useMedia = (queries, values, defaultValue) => {
  if (!process.browser) {
    return defaultValue
  }

  const presets = {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)'
  }

  const mediaQueryLists = queries.map(q => window.matchMedia(presets[q] ?? q))

  // Function that gets value based on matching media query
  const getValue = () => {
    const index = mediaQueryLists.findIndex(mql => mql.matches)
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue
  }

  const [value, setValue] = useState(getValue)

  useEffect(
    () => {
      const handler = () => setValue(getValue)
      mediaQueryLists.forEach(mql => mql.addListener(handler))
      return () => mediaQueryLists.forEach(mql => mql.removeListener(handler))
    },
    []
  )

  return value
}

export default useMedia
