/**
 * Merge the given styles. If the result is an empty string,
 * undefined is returned; otherwise the resulting style string
 * is returned.
 *
 * @param {any} styles - The styles to merge
 */
export const merge = (...styles) => {
  const style = styles
    .filter(s => s)
    .reduce((p, s) => `${p} ${s}`, '')
    .trim()

  return !style ? undefined : style
}

/**
 * Merge the given styles using a '-'. If the result is an empty string,
 * undefined is returned; otherwise the resulting style string
 * is returned.
 *
 * @param {any} styles - The styles to merge
 */
export const merge2 = (...styles) => {
  const style = styles
    .filter(s => s)
    .reduce((p, s) => `${p}-${s}`, '')
    .trim()

  return !style ? undefined : style.slice(1)
}

/**
 * Prepend a modifier with: `${prefix}-${modifier}` or return undefined.
 *
 * @param {String} prefix - The prefix for the modifier
 * @param {String|undefined} modifier - The modifier
 */
export const mod = (prefix, modifier) => {
  return modifier
    ? `${prefix}-${modifier}`
    : undefined
}

/**
 * Raise the action if the given condition is met.
 *
 * @param {Boolean} condition - The condition to check
 * @param {*} action - The action to raise
 */
export const raise = (condition, action) => {
  if (condition) {
    action()
  }
}

/**
 * Converts the given children to an array. If children is not defined,
 * an empty array is returned.
 *
 * @param {any} children - The children
 */
export const childArray = (children) => {
  return Array.isArray(children)
    ? children
    : children
      ? [children]
      : []
}
