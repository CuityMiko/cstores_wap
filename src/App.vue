<template>
	<div id="app">
    <x-header v-if="header.show" :left-options="{backText: '', showBack: header.back}" :title="header.title"><a v-if="header.right" slot="right"><icon-svg :iconClass="header.icon" class="main-icons"></icon-svg></a></x-header>
		<transition name="fade" mode="out-in" enter-active-class="animated fadeInLeftBig" leave-class="animated fadeOutRightBig">
        <!--keep-alive：保持页面状态，可以作为页面缓存使用.可以缓存住异步请求加载的数据-->
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    </transition>
    <tabbar v-if="footer.show">
      <tabbar-item v-for="(item,index) in tabbars" :key="index" :selected="item.selected" :link='item.link'>
        <icon-svg slot="icon" :iconClass="item.imgsrc" class="main-icons"></icon-svg>
        <span slot="label" class="t_size">{{ item.title }}</span>
      </tabbar-item>
    </tabbar>
	</div>
</template>

<i18n>
首页:
  en: Home
分类:
  en: Category
购物车:
  en: Cart
我的:
  en: My
我的购物车:
  en: My Cart
商品列表:
  en: Goods List
商品详情:
  en: Goods Detail
</i18n>

<script>
  // 引入动画
  import 'plug/animate.css/animate.min.css'

  import { XHeader, Tabbar, TabbarItem } from 'vux'

  import { constantRouterMap } from '@/router'

  export default{
    name: 'APP',
    components: {
      XHeader,
      Tabbar,
      TabbarItem
    },
    data() {
      return {
        header: {},
        footer: {},
        tabbars: [
          { title: this.$t('首页'), link: '/home', dot: false, badge: 0, imgsrc: 'home_selected', selected: true, name: 'home' },
          { title: this.$t('分类'), link: '/category', dot: false, badge: 0, imgsrc: 'category', selected: false, name: 'category' },
          { title: this.$t('购物车'), link: '/cart', dot: false, badge: 0, imgsrc: 'cart', selected: false, name: 'cart' },
          { title: this.$t('我的'), link: '/account', dot: false, badge: 0, imgsrc: 'account', selected: false, name: 'account' }
        ]
      }
    },
    mounted() {
      const _self = this;
      _self.hfchange(_self.$route)
    },
    watch: {
      $route(to, from) {
        this.hfchange(to)
      }
    },
    methods: {
      // 更改标题栏以及底部
      hfchange(toroute) {
        const _routes = this.$lodash.filter(constantRouterMap, { name: toroute.name });
        if (_routes.length > 0) {
          this.tabbarchange(_routes[0]);
          this.headerchange(_routes[0]);
          this.footerchange(_routes[0]);
        } else {
          this.header.show = false;
          this.footer.show = false;
        }
      },
      // tabbar切换
      tabbarchange(to,flag) {
        this.tabbars.forEach((item) => {
          if (to.path === item.link) {
            const _newimgurl = `${to.name.toLowerCase()}_selected`;
            item.imgsrc = _newimgurl;
            item.selected = true;
          } else {
            const _newimgurl = item.name.toLowerCase();
            item.imgsrc = _newimgurl;
            item.selected = false;
          }
        }, this);
      },
      // 标题栏切换
      headerchange(route) {
        let _header = {};
        if (route.header) {
          _header.show = route.header;
          _header.title = this.$t(route.title);
          _header.back = route.back;
          _header.right = route.right;
          _header.icon = route.icon;
        } else {
          _header.show = false;
        }
        this.header = _header;
      },
      // 控制底部
      footerchange(route) {
        let _footer = {};
        if (route.footer)
          _footer.show = route.footer;
        else
          _footer.show = false;
        this.footer = _footer;
      }
    }
  }
</script>

<style lang="scss">
@import '~normalize.css/normalize.css';// normalize.css 样式格式化
@import './styles/index.scss'; // 全局自定义的css样式
</style>
