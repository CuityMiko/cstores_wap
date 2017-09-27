<template>
    <div class="index_search">
        <diV class="s_box">
            <div class="s_left">
                <!-- <img src="../../../assets/images/logo_c.png"> -->
                <img src="http://120.27.249.57:8000/upload/20170405/1491360240847.jpg" alt="">
            </div>
            <div class="s_mid">
                <icon-svg icon-class="search" class="main-icons"></icon-svg>
                <input type="text" :placeholder="$t('搜索商品')">
            </div>
            <div class="s_right">
                <a href="" class="message">
                <icon-svg icon-class="message" class="main-icons"></icon-svg>
                </a>
            </div>
        </diV>
    </div>
</template>

<i18n>
搜索商品：
  en: Search goods 
</i18n>

<script>
export default {
  data() {
    return {
      title: '头部搜索'
    }
  }
}
</script>

<style scoped>
#index .index_search{
  width: 100%;
  box-sizing: border-box;
  padding: 7px 10px;
  background:#4a4d4f;
  position: fixed;
  top:0;
  z-index: 300;
}
#index .index_search .s_box{
  display: flex;
}
#index .index_search .s_left{
  width: 45px;
  height: 33px;
}
#index .index_search .s_left>img{
  width: 100%;
  height: 100%;
}
#index .index_search .s_mid{
  display: flex;
  flex: 2;
  border-radius: 5px;
  margin-right: 10px;
  position: relative;
}
#index .index_search .s_mid .main-icons{
  width: 20px;
  height: 20px;
  position: absolute;
  left: 5px;
  top:7px;
}
#index .index_search .s_mid input{
  border:0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  outline: none;
  text-indent:30px;
}
input::-webkit-input-placeholder{ 
  color: rgba(200, 200, 200, 1); 
  font-size:14px;
  line-height: 33px;
} 
#index .s_mid .weui-search-bar{
  padding:0;
}
#index .index_search .s_right>a{
  display: block;
  width: 100%;
  height: 100%;
  margin-top: 3px;
}
</style>
