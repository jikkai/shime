import $time from './core/time'
import $storage from './core/storage'

class Shime {
  static install (Vue) {
    Vue.prototype.$time = $time
    Vue.prototype.$storage = $storage
  }
}

export default Shime
