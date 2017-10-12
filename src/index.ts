import $time from './core/time'
import $storage from './core/storage'

const Plugin:any = function () {}

Plugin.install = function (Vue) {
  Vue.prototype.$time = $time
  Vue.prototype.$storage = $storage
}

export default Plugin
