import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4a2c4006 = () => interopDefault(import('../pages/all-cards/index.vue' /* webpackChunkName: "pages/all-cards/index" */))
const _114d62a2 = () => interopDefault(import('../pages/practice/index.vue' /* webpackChunkName: "pages/practice/index" */))
const _68a58982 = () => interopDefault(import('../pages/quick-practice/index.vue' /* webpackChunkName: "pages/quick-practice/index" */))
const _4f5a9cde = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/all-cards",
    component: _4a2c4006,
    name: "all-cards"
  }, {
    path: "/practice",
    component: _114d62a2,
    name: "practice"
  }, {
    path: "/quick-practice",
    component: _68a58982,
    name: "quick-practice"
  }, {
    path: "/",
    component: _4f5a9cde,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
