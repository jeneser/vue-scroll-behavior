import vueScrollBehavior from '../vue-scroll-behavior';

/**
 * Setting options
 */
export function setOption(options) {
  if (typeof options.el === 'string') {
    vueScrollBehavior._el = options.el;
  }

  if (
    typeof options.maxLength !== 'undefined' &&
    typeof options.maxLength === 'number'
  ) {
    vueScrollBehavior._maxLength = options.maxLength;
  }

  if (typeof options.ignore !== 'undefined' && Array.isArray(options.ignore)) {
    vueScrollBehavior._ignore = options.ignore;
  }

  if (typeof options.delay === 'number') {
    vueScrollBehavior._delay = options.delay;
  }

  if (typeof options.leaveIgnored === 'boolean') {
    vueScrollBehavior._leaveIgnored = options.leaveIgnored;
  }
}

/**
 * Getting Scroll Position
 */
export function getScrollPosition() {
  const el = document.querySelector(vueScrollBehavior._el);
  return {
    x: el ? el.scrollLeft : window.pageXOffset,
    y: el ? el.scrollTop : window.pageYOffset,
  };
}

/**
 * Setting Scroll Position
 */
export function setScrollPosition(Vue, position = { x: 0, y: 0 }) {
  const scrollTo = () => {
    Vue.nextTick(() => {
      const el = document.querySelector(vueScrollBehavior._el);
      if (el) {
        el.scrollLeft = position.x;
        el.scrollTop = position.y;
      } else {
        window.scrollTo(position.x, position.y);
      }
    });
  };
  if (vueScrollBehavior._delay > 0) {
    setTimeout(scrollTo, vueScrollBehavior._delay);
  } else {
    scrollTo();
  }
}

/**
 * Cleaning historyList
 */
export function cleanHistoryList(historyList) {
  historyList.splice(0, parseInt(historyList.length / 2));
}

/**
 * Is ignore route
 */
export function isIgnoreRoute(target) {
  return vueScrollBehavior._ignore.some((e) => {
    return target.fullPath.match(e);
  });
}
