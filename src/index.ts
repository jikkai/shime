import $time from './core/time'

const Plugin = {
  install (Vue) {
    Vue.prototype.$time = $time
  }
}

export default Plugin
