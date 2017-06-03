/**
 * Getting scrollTop
 */
export function getScrollTop() {
  return document.getElementsByTagName('body')[0].scrollTop
}

/**
 * Setting scrollTop
 */
export function setScrollTop(value) {
  document.getElementsByTagName('body')[0].scrollTop = value
}
