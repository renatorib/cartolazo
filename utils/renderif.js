const parseRender = arg => {
  if (typeof arg === 'function') return arg()
  return arg || null
}

export default (condition, renderSatisfies, renderNotSatisfies) =>
  condition ? parseRender(renderSatisfies) : parseRender(renderNotSatisfies)
