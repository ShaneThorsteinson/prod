import { useEffect, useState } from 'react'
import useSSR from './use-ssr'
import { getId } from '../utils/collections'

const createElement = (id) => {
  const el = document.createElement('div')
  el.setAttribute('id', id)
  return el
}

const usePortal = (
  selectId = getId(),
  getContainer = null
) => {
  const id = selectId
  const { isBrowser } = useSSR()
  const [elSnapshot, setElSnapshot] = useState(isBrowser ? createElement(id) : null)

  useEffect(() => {
    const customContainer = getContainer ? getContainer() : null
    const parentElement = customContainer || document.body
    const hasElement = parentElement.querySelector(`#${id}`)
    const el = hasElement || createElement(id)

    if (!hasElement) {
      parentElement.appendChild(el)
    }
    setElSnapshot(el)
  }, [])

  return elSnapshot
}

export default usePortal
