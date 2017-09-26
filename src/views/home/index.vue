<template>
  <div id="index">
    <div class="search">
      <diV class="s_box">
        <div class="s_left">
          <img src="../../assets/images/logo_c.png">
        </div>
        <div class="s_mid">
            <icon-svg icon-class="search" class="main-icons"></icon-svg>
            <input type="text" placeholder="搜索商品">
        </div>
        <div class="s_right">
          <a href="" class="message">
            <icon-svg icon-class="message" class="main-icons"></icon-svg>
          </a>
        </div>
      </diV>
       
    </div>
    <Banner></Banner>
    <RotRecommend></RotRecommend>
    <Goods></Goods> 
  </div>
</template>

<i18n>
内容:
  en: Content
请输入内容:
  en: Please enter the content
</i18n>

<script>
import Banner from './components/banner.vue'
import RotRecommend from './components/RotRecommend.vue'
import Goods from './components/goods.vue'
import { Search } from 'vux'
export default {
  components: {
    Search,
    Banner,
    RotRecommend,
    Goods,
  },
  data() {
    return {
      content: ''
    }
  }
}
</script>

<style scoped>
#index .search{
  width: 100%;
  box-sizing: border-box;
  padding: 7px 10px;
  background:#4a4d4f;
  position: fixed;
  top:0;
  z-index: 300;
}
#index .search .s_box{
  display: flex;
}
#index .search .s_left{
  width: 33px;
  height: 33px;
}
#index .search .s_left>img{
  width: 100%;
  height: 100%;
}
#index .search .s_mid{
  display: flex;
  flex: 2;
  border-radius: 5px;
  margin: 0 10px;
  position: relative;
}
#index .search .s_mid .main-icons{
  width: 20px;
  height: 20px;
  position: absolute;
  left: 5px;
  top:7px;
}
#index .search .s_mid input{
  border:0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  outline: none;
}
input::-webkit-input-placeholder{ 
  color: #656565; 
  font-size:14px;
  padding-left:30px;
  line-height: 33px;
} 
#index .s_mid .weui-search-bar{
  padding:0;
}
#index .search .s_right>a{
  display: block;
  width: 100%;
  height: 100%;
}
</style>
