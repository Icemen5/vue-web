export default {
  install (Vue, options = {}) {

    const { global = true} = options

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const ScrollMagic = require('scrollmagic')
      Vue.mixin({
        computed: {
          $smController() { return new ScrollMagic.Controller() },
          $sm() { return ScrollMagic }
        }
      })
    } 

  }
}