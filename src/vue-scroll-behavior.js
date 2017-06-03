import { getScrollTop, setScrollTop } from './utils/helpers'

const vueScrollBehavior = {}

// Plugin API
// *********
vueScrollBehavior.install = function (Vue, opts) {
  // Global property history list
  Vue.historyList = []

  // Global method
  Vue.vueScrollBehavior = function (router) {
    if (typeof router !== 'undefined') {
      // BeforeEach
      router.beforeEach((to, from, next) => {
        // Getting scrollTop
        let position = getScrollTop()
        // Getting current path index
        let currentPathIndex = this.historyList.findIndex(e => {
          return e.path === from.fullPath
        })

        console.log(currentPathIndex)

        if (currentPathIndex !== -1) {
          this.historyList[currentPathIndex].position = position
        } else {
          this.historyList.push({
            path: from.fullPath,
            position: position
          })
        }

        console.log(this.historyList)
        next()
      })

      // AfterEach
      router.afterEach(route => {
        let savedPosition = this.historyList.find(e => {
          return e.path === route.fullPath
        }) || 0

        console.log(savedPosition)

        setScrollTop(savedPosition.position)
      })
    } else {
      console.warn('vue-scroll-behavior dependent on vue-router! ' +
        'Please Create the router instance.')
    }
  }
}

// Auto install
// ********
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueScrollBehavior)
}

export default vueScrollBehavior
