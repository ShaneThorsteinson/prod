export const getId = () => {
  return Math.random().toString(32).slice(2, 10)
}

export const getReactNode = (
  node
) => {
  if (!node) return null

  if (typeof node !== 'function') return node
  return (node)()
}
