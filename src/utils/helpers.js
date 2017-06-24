import vueScrollBehavior from '../vue-scroll-behavior'

/**
 * Setting options
 */
export function setOption (options) {
  if (typeof options.maxLength !== 'undefined' &&
    typeof options.maxLength === 'number') {
    vueScrollBehavior._maxLength = options.maxLength
  }

  if (typeof options.ignore !== 'undefined' && Array.isArray(options.ignore)) {
    vueScrollBehavior._ignore = options.ignore
  }
}

/**
 * Getting Scroll Position
 */
export function getScrollPosition () {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  }
}

/**
 * Setting Scroll Position
 */
export function setScrollPosition (Vue, position = {x: 0, y: 0}) {
  Vue.nextTick(() => {
    window.scrollTo(position.x, position.y)
  })
}

/**
 * Cleaning historyList
 */
export function cleanHistoryList (historyList) {
  historyList.splice(0, parseInt(historyList.length/2))
}

/**
 * Is ignore route
 */
export function isIgnoreRoute (target) {
  vueScrollBehavior._ignore.some(e => {
    return target.fullPath.match(e)
  })
}
