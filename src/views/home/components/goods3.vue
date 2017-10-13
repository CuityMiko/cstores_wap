<template>
  <div id="goods2">
     <!-- Guess you like it -->
     <div class="item">
         <ul class="goods">
             <li v-for="l in goods3Menu" :key="l.id">
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
</i18n>

<script>
import { Flexbox,FlexboxItem } from 'vux'
import { goods3Menu } from '../data'

export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  data() {
    return {
        title: '左图右字',
        goods3Menu,
    }
  },
}
</script>

<style scoped>
</style>
