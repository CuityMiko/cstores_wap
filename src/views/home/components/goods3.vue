<template>
  <div id="goods2">
     <!-- Guess you like it -->
     <div class="item">
         <ul class="goods">
             <li v-for="l in list" :key="l.id">
                 <a href="#">
                     <div class="goods_img">
                        <img :src="l.src">
                     </div>
                     <div class="goods-info">
                         <h3>{{l.content}}</h3>
                         <span>￥{{l.price}}</span>
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
        title: '左图右字',
        list: [{ id: 0,price: 3599.00,src: 'http://www.commoditiesinchina.com:80/upload/20170629/1498722708289.jpg',content: 'Midea BCD-515WKM Side-by-side combination refrigerator' },
                { id: 1,price: 2666.00,src: 'http://kstoreimages.b0.upaiyun.com/1472795050639.jpg!160',content: 'Galaxy C7（SM-C7000）32Gr' },
                { id: 2,price: 125.00,src: 'http://kstoreimages.b0.upaiyun.com/1472525766100.jpg!160',content: 'Estee Lauder eye cream5ml*2(15g)' },
                { id: 3,price: 4980.00,src: 'http://kstoreimages.b0.upaiyun.com/1472542914632.jpg!160',content: 'OZNER JZY-A1XB-A2(Pearl White)' }]
    }
  },
}
</script>

<style scoped>

</style>
