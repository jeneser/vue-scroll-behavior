/**
  * vue-scroll-behavior v0.1.3
  * (c) 2017 jeneser
  * @license MIT
  */

import { getScrollTop, setScrollTop } from './utils/helpers'

const vueScrollBehavior = {}

/**
 * Plugin API
 */
vueScrollBehavior.install = function (Vue, opts) {
  // Global property
  Vue.historyList = []

  // Global method
  Vue.vueScrollBehavior = function (router) {

    if (typeof router === 'object' && typeof router.beforeEach === 'function') {
      // Router beforeEach
      router.beforeEach((to, from, next) => {

        let position = getScrollTop()
        let currentPathIndex = this.historyList.findIndex(e => {
          return e.path === from.fullPath
        })

        if (currentPathIndex !== -1) {
          this.historyList[currentPathIndex].position = position
        } else {
          this.historyList.push({
            path: from.fullPath,
            position: position
          })
        }

        next()
      })

      // Router afterEach
      router.afterEach(route => {

        let savedPosition = this.historyList.find(e => {
          return e.path === route.fullPath
        })

        if (typeof savedPosition !== 'undefined') {
          setScrollTop(savedPosition.position)
        } else {
          setScrollTop(0)
        }
      })

    } else {
      console.warn('vue-scroll-behavior dependent on vue-router! ' +
        'Please Create the router instance.')
    }
  }
}

/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueScrollBehavior)
}

export default vueScrollBehavior
