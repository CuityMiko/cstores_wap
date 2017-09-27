<template>
  <div id="goods2">
     <!-- Guess you like it -->
     <div class="item">
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
      title: '左图右字'
    }
  },
}
</script>

<style scoped>

</style>
