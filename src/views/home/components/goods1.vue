<template>
  <div id="goods">
     <!-- Featured recommendation -->
     <div class="item">
        <flexbox :gutter="0" v-for="l in goods1Menu" :key="l">
            <flexbox-item>
                <div class="flex-demo">
                <img :src="l">
                </div>
            </flexbox-item>
        </flexbox>
     </div>
  </div>
</template>

<i18n>
</i18n>

<script>
import { Flexbox,FlexboxItem } from 'vux'
import { goods1Menu } from '../data'

export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  data() {
    return {
        title: '左一右三',
        goods1Menu,
    }
  },
}
</script>
<style scoped>
.vux-flexbox{
    width: auto;
    display: block;
}
.vux-flexbox .vux-flexbox-item{
    display: block;
    float: left;
}
.vux-flexbox .vux-flexbox-item:nth-child(1){
    width: 50%;
}
.vux-flexbox:nth-child(2) .vux-flexbox-item{
    height: 50%;
}
.vux-flexbox:nth-child(n+3) .vux-flexbox-item{
    width: 25%;
    height: 25%;
}
.flex-demo:nth-child(n+2){
    height: 25%;
}
</style>
