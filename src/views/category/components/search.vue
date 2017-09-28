<template>
    <div class="search">
        <diV class="s_box">
            <div class="s_mid">
                <icon-svg icon-class="search" class="main-icons"></icon-svg>
                <input type="text" :placeholder="$t('搜索商品')">
            </div>
            <div class="s_right">
                <a href="">
                    <span v-text="$t('搜索')"></span>
                </a>
            </div>
        </diV>
    </div>
</template>

<i18n>
搜索商品:
 en: Search goods
搜索:
 en: Search
</i18n>

<script>
export default {
  data() {
    return {
      title: '历史搜索'
    }
  }
}
</script>

<style scoped>
.search{
  width: 100%;
  height: 46px;
  box-sizing: border-box;
  padding: 6px 10px 5px 10px;
  background-color:  #FF4863;
  position: fixed;
  top:0;
  z-index: 300;
}
.search .s_box{
  display: flex;
  height: 100%;
}
.search .s_left{
  width: 45px;
  height: 33px;
}
.search .s_left>img{
  width: 100%;
  height: 100%;
}
.search .s_mid{
  display: flex;
  flex: 2;
  border-radius: 5px;
  margin-right: 10px;
  position: relative;
}
.search .s_mid .main-icons{
  width: 20px;
  height: 20px;
  position: absolute;
  left: 5px;
  top:7px;
}
.search .s_mid input{
  border:0;
  width: 100%;
  height: 35px;
  border-radius: 5px;
  outline: none;
  background-color:#fff;
  text-indent:30px;
  caret-color:#fff;
}
input::-webkit-input-placeholder{
  color: rgba(200, 200, 200, 1);
  font-size:14px;
  line-height: 20px;
}
.s_mid .weui-search-bar{
  padding:0;
}
.search .s_right>a{
  display: block;
  width: 100%;
  height: 100%;
  margin-top: 3px;
  line-height: 28px;
  color:#fff;
  font-size: 14px;
  letter-spacing: 1px;
}
</style>
