<template>
  <div id="goods">
     <!-- Featured recommendation -->
     <div class="item">
        <h4>Featured recommendation</h4>
        <flexbox :gutter="0">
            <flexbox-item>
                <div class="flex-demo demo">
                <img src="http://www.commoditiesinchina.com:80/upload/20170629/1498718247201.jpg">
                </div>
            </flexbox-item>
            <flexbox-item class="flex_item">
                <flexbox orient="vertical" :gutter="0">
                    <flexbox-item>
                        <div class="flex-demo demo1">
                            <img src="http://www.commoditiesinchina.com:80/upload/20170629/1498718266009.jpg">
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <flexbox :gutter="0">
                            <flexbox-item>
                                <div class="flex-demo demo1">
                                    <img src="http://www.commoditiesinchina.com:80/upload/20170629/1498718277454.jpg">
                                </div>
                            </flexbox-item>
                            <flexbox-item class="flexbox_bottom">
                                <div class="flex-demo demo1">
                                    <img src="http://www.commoditiesinchina.com:80/upload/20170629/1498718302803.jpg">
                                </div>
                            </flexbox-item>
                        </flexbox>
                    </flexbox-item>
                </flexbox>
            </flexbox-item>
        </flexbox>
        <flexbox>
            <flexbox-item>
                <div class="flex-demo">
                    <img src="http://www.commoditiesinchina.com:80/upload/20170630/1498822973522.jpg">
                </div>
            </flexbox-item>
        </flexbox>
     </div>
     <!-- Good seller -->
     <div class="item">
        <h4>Good seller</h4>
        <flexbox :gutter="0">
            <flexbox-item>
                <div class="flex-demo demo1">
                    <img src="http://www.commoditiesinchina.com:80/upload/20170629/1498718387070.jpg">
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo demo1">
                    <img src="http://www.commoditiesinchina.com:80/upload/20170629/1498718402729.jpg">
                </div>
            </flexbox-item>
        </flexbox>
        <flexbox :gutter="0">
            <flexbox-item>
                <div class="flex-demo demo1">
                    <img src="http://www.commoditiesinchina.com:80/upload/20170629/1498718414351.jpg">
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo demo1">
                    <img src="http://www.commoditiesinchina.com:80/upload/20170629/1498718426303.jpg">
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo demo1">
                    <img src="http://www.commoditiesinchina.com:80/upload/20170629/1498718437938.jpg">
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo demo1">
                    <img src="http://www.commoditiesinchina.com:80/upload/20170629/1498718449217.jpg">
                </div>
            </flexbox-item>
        </flexbox>
         <flexbox>
            <flexbox-item>
                <div class="flex-demo">
                    <img src="http://www.commoditiesinchina.com:80/upload/20170630/1498823039878.jpg">
                </div>
            </flexbox-item>
        </flexbox>
     </div>
     <!-- Guess you like it -->
     <div class="item">
         <h4>Guess you like it</h4>
         <ul class="goods">
             <li>
                 <a href="#">
                     <img src="http://kstoreimages.b0.upaiyun.com/1472542914632.jpg!160" alt="">
                     <div class="goods-info">
                         <h3>Midea BCD-515WKM Side-by-side combination refrigerator</h3>
                         <span>￥3599.00</span>
                     </div>
                 </a>
             </li>
             <li>
                 <a href="#">
                     <img src="http://kstoreimages.b0.upaiyun.com/1472795050639.jpg!160" alt="">
                     <div class="goods-info">
                         <h3>Galaxy C7（SM-C7000）32Gr</h3>
                         <span>￥2666.00</span>
                     </div>
                 </a>
             </li>
             <li>
                 <a href="#">
                     <img src="http://kstoreimages.b0.upaiyun.com/1472525766100.jpg!160" alt="">
                     <div class="goods-info">
                         <h3>Estee Lauder eye cream5ml*2(15g)</h3>
                         <span>￥125.00</span>
                     </div>
                 </a>
             </li>
             <li>
                 <a href="#">
                     <img src="http://www.commoditiesinchina.com:80/upload/20170701/1498900691560!160.jpg" alt="">
                     <div class="goods-info">
                         <h3>OZNER JZY-A1XB-A2(Pearl White)</h3>
                         <span>￥4980.00</span>
                     </div>
                 </a>
             </li>
         </ul>
     </div> 
  </div>
</template>

<i18n>
内容:
  en: Content
请输入内容:
  en: Please enter the content
</i18n>

<script>
import { Flexbox,FlexboxItem } from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  data() {
    return {
      msg: 'Hello World!',
    }
  },
}
</script>

<style scoped>
#goods{
    margin-bottom: 55px;
}
#index h4{
    padding:5px 10px;
    color: #FF9900;
    font-size: 16px;
}
#index .flex-demo {
    text-align: center;
    color: #fff;
}
#index .flex_item,.demo{
     height: 187.5px;
}
#index .flex-demo>img{
    width: 100%;
    height: 100%;
}
#index .flexbox_bottom,.demo1{
    height: 93.75px;
}
#index .goods>li>a{
    color: #333;
    overflow: hidden;
    padding: 10px;
    border-bottom: 1px dotted #ddd;
    display: flex;
    text-decoration: none; 
}
#index .goods>li h3{
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    margin: 0 0 10px;
}
#index .goods>li span{
    color: #f00;
    font-size: 14px;
}
#index .goods>li img{
    height:106px;
}
#index .goods-info{
    padding:0 10px
}
</style>
