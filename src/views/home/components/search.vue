<template>
  <div class="header">
        <div class="h-item">
            <div class="h-left">
                <img src="http://120.27.249.57:8000/upload/20170405/1491360240847.jpg">
            </div>
            <div class="h-mid">
                <search placeholder="搜索商品"></search>
            </div>
            <div class="h-right">
                <i class="iconfont"></i>
            </div>
        </div>   
    </div> 
</template>

<i18n>
搜索商品:
    en:Search goods
内容:
    en: Content
请输入内容:
    en: Please enter the content
</i18n>

<script>
import { Search } from 'vux'
export default {
  components: {
    Search
  },
  data() {
    return {
      msg: 'Hello World!',
    }
  },
}
</script>
<style scoped>
#index .header{
    width:100%;
    height: 44px;
    background-color:#4a4d4f;
    padding:7px 10px;
    box-sizing: border-box;
    position: fixed;
    z-index: 1;
}

#index .header .h-item{
    display: flex;
}
#index .header .h-left{
    width: 40px;
    height: 30px;
}
#index .header .h-left>img{
    width: 100%;
    height: 100%;
}
#index .header .h-mid{
    display: flex;
    height:30px;
}
#index .vux-search-box .weui-search-bar{
    padding: 1px 0;
    border-radius: 5px;
    background:rgba(0,0,0,0);
}
#index .weui-search-bar__form .weui-search-bar__label{
    text-align: start;
    padding-left:3px;
}
#index .vux-search-box .weui-search-bar__label .weui-icon-search{
    margin-right:0;
    font-size: 16px;
}
#index .weui-search-bar .weui-search-bar__form{
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0);
}
#index .weui-search-bar .weui-search-bar__box{
    padding-left: 55px;
    padding-right: 50px;
}
#index .h-mid .weui-search-bar:before{
    border-top: 0;
}
#index .h-mid .weui-search-bar:after{
    border-top: 0;
}
</style>
