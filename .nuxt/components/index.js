export { default as NavigationElementsMainMobileNavigation } from '../../components/global/navigation-elements/MainMobileNavigation.vue'
export { default as NavigationElementsMainNavigation } from '../../components/global/navigation-elements/MainNavigation.vue'
export { default as CardsPoseDetailsCard } from '../../components/cards/PoseDetailsCard.vue'
export { default as HomeHeroBanner } from '../../components/home/HeroBanner.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
