import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import * as http from '@/service/api'
// 自定义长按，点击指令
import { vueTap } from '@/common/js/vue-tap'
Vue.prototype.isIphone = navigator.userAgent.indexOf('iPhone') !== -1 // 是否是ios设备 true 是 false 不是
Vue.use({
  install: function (Vue) {
    Vue.directive('clickTap', { // 点击
      bind: vueTap('clickTap')
    })
    Vue.directive('langTap', { // 长按
      bind: vueTap('langTap')
    })
  }
})

Vue.use(Mint)
Vue.prototype.$http = http
Vue.filter('commonFormat', function (value, str) { // 定义过滤器
  if (str === 'date') {
    return new Date(value).Format('yyyy-MM-dd')
  }
  if (str === 'time') {
    return new Date(value).Format('yyyy-MM-dd hh:mm:ss')
  }
  return value
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
