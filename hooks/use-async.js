import { useCallback, useEffect, useState } from 'react'

export default function useAsync (asyncFunction, immediate = true) {
  const [status, setStatus] = useState('idle')
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback((...args) => {
    setStatus('pending')
    setData(null)
    setError(null)
    return asyncFunction(...args)
      .then((response) => {
        setData(response)
        setStatus('success')
        return response
      })
      .catch((error) => {
        setError(error)
        setStatus('error')
      })
  }, [asyncFunction])
  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])
  return { execute, status, data, error }
};
