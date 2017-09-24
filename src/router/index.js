import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV) // 路由延迟加载
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

Vue.use(Router)

/**
* icon : the icon show in the sidebar
* hidden : if `hidden:true` will not show in the sidebar
* redirect : if `redirect:noredirect` will no redirct in the levelbar
* noDropdown : if `noDropdown:true` will has no submenu
* meta : { role: ['admin'] }  will control the page role
**/
export const constantRouterMap = [
  { path: '/404', component: _import('errorPage/404') },
  { path: '/', component: _import('home/index'), name: 'Home' },
  { path: '/test', component: _import('test/demo'), name: 'Test' }
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   name: '首页',
  //   hidden: true,
  //   children: [{ path: 'dashboard', component: _import('dashboard/index') }]
  // },
  // {
  //   path: '/test',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'Test',
  //   icon: 'notebook43',
  //   children: [{ path: 'demo', icon: 'whiteboard8', component: _import('test/demo'), name: 'Demo' }]
  // }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
