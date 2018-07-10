// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import store from './store'

// import VueCookie from 'vue-cookie'
import VueResource from 'vue-resource'
import VueI18n from 'vue-i18n'
import i18nMessage from './lib/i18n'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh-CN',
  silentTranslationWarn: true,
  missing: (locale, key, vm) => {
    return key
  },
  messages: i18nMessage
})
// Vue.use(VueCookie)
// Vue.use(window.ConsoleMenu, {
//   router: router,
//   cookie: VueCookie,
//   // menuUrl: 菜单路径值为undefined时用菜单默认的，
//   // 为""时不加载（可自己在window中定义菜单，参见线上地址返回的值），
//   // 为一个url时加载这个URL中的
//   // 默认线上地址为 https://storage.jd.com/console/cms/consoleMenu 可做为自定义时的参照
//   menuUrl: undefined
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  i18n
  // store
})
