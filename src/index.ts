import $time from './core/time'
import $storage from './core/storage'

const Plugin = {
  install (Vue) {
    Vue.prototype.$time = $time
    Vue.prototype.$storage = $storage
  }
}

export default Plugin
