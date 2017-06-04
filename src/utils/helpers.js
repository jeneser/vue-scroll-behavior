/**
 * Getting scrollTop
 */
export function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop
    || document.body.scrollTop || 0
}

/**
 * Setting scrollTop
 */
export function setScrollTop(value) {
  window.pageYOffset = value
  document.documentElement.scrollTop = value
  document.body.scrollTop = value
}
