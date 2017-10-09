/**
 * 项目入口文件
 */
// 兼容低版本浏览器
import 'babel-polyfill';

import objectAssign from 'object-assign'

// Vue
import Vue from 'vue'

// 入口App
import App from './App'

// 路由
import router from './router'

// 全局filter
import * as filters from './filters'

// icons
import './icons'

// error log
import './errorLog'

// 权限
import './permission'

// 该项目所有请求使用mockjs模拟
import './mock'

// FastClick
import FastClick from 'fastclick'

FastClick.attach(document.body)

// 状态管理
// import store from './store'
import Vuex from 'vuex'

Vue.use(Vuex)

import vuexI18n from 'vuex-i18n'

/** 国际化配置i18n start**/
const store = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store
  }
})

Vue.use(vuexI18n.plugin, store)

// vux的全局国际化配置
const vuxLocales = require('json-loader!yaml-loader!vux/src/locales/all.yml')

// 页面合并国际化配置
const globalsLocales = require('json-loader!yaml-loader!@/locales/globals.yml')

// 合并全局的国际化配置
const finalLocales = {
  'en': objectAssign(vuxLocales['en'], globalsLocales['en']),
  'zh-CN': objectAssign(vuxLocales['zh-CN'], globalsLocales['zh-CN'])
}

for (const i in finalLocales) {
  Vue.i18n.add(i, finalLocales[i])
}

// vux全局公共组件
import { DatetimePlugin, ConfigPlugin, BusPlugin, LocalePlugin, DevicePlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin, AjaxPlugin, AppPlugin } from 'vux'

Vue.use(LocalePlugin)

// 判断并设置当前语言版本
// const nowLocale = Vue.locale.get();
const nowLocale = window.navigator.language;
if (/zh/.test(nowLocale)) {
  Vue.i18n.set('zh-CN')
} else {
  Vue.i18n.set('en')
}

/** 国际化配置i18n end**/

// global VUX config
Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX' // global config for VUX, since v2.5.12
})

// Vue添加Vux的全局plugins
Vue.use(DevicePlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(BusPlugin)
Vue.use(DatetimePlugin)

if (process.env.platform === 'app') {
  Vue.use(AppPlugin, store)
}

// 注册全局路由
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// Vue挂载第三方JS库
// 时间格式化
import moment from 'moment'
Object.defineProperty(Vue.prototype,'$moment',{ value: moment })

// lodash工具类
import lodash from 'lodash'
Object.defineProperty(Vue.prototype,'$lodash',{ value: lodash })

// 关闭生产模式下给出的提示
Vue.config.productionTip = false;

// 页面切换加载动画
store.registerModule('vux', {
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})

// 路由全局钩子
router.beforeEach(function(to, from, next) {
  store.commit('updateLoadingStatus', { isLoading: true })
  next()
})

router.afterEach(function(to) {
  store.commit('updateLoadingStatus', { isLoading: false })
})

new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})
