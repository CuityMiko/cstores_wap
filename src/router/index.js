import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV) // 路由延迟加载

Vue.use(Router)

/**
* path : url链接
* component : 指定组件
* name : 路由名称（唯一标识）
* header : 是否显示标题栏
* footer : 是否显示底部栏
* footer : 是否显示底部栏
* title : 标题
* back : 是否返回
* right : 是否有右侧标签
* icon : 右侧标签icon名称
**/
export const constantRouterMap = [
  { path: '/home', component: _import('home/index'), name: 'home', header: false, footer: true, title: 'CStroes', back: false, right: false },
  { path: '/cart', component: _import('cart/index'), name: 'cart', header: false, footer: true, title: '我的购物车', back: true, right: true, icon: 'more' },
  { path: '/category', component: _import('category/index'), name: 'category', header: false, footer: true, title: '商品分类', back: true, right: true, icon: 'search' },
  { path: '/account', component: _import('account/index'), name: 'account', header: false, footer: true },
  { path: '/goods', component: _import('goods/index'), name: 'goods', header: true, footer: true, title: '商品列表', back: true, right: true, icon: 'grid' },
  { path: '/goods/detail/:id', component: _import('goods/detail'), name: 'goodsdetail', header: true, footer: false, title: '商品详情', back: true, right: true, icon: 'heart',
    beforeEnter(to, from, next) {
      next();
    },
  },
  { path: '/login', component: _import('login/index'), name: 'login', header: false, footer: false, title: '登录' },
  { path: '/search', component: _import('search/index'), name: 'search', header: false, footer: false, title: '搜索' },
  { path: '/', redirect: '/home' }, // 如果路由为/的时候跳转到/home路由
  { path: '*', component: _import('errorPage/404'), name: '404', header: true, title: 'CStores', back: true }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
