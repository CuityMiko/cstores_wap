<template>
  <div id="goods2">
     <!-- Good seller -->
     <div class="item">
        <flexbox :gutter="0" v-for="l in goods2Menu" :key="l">
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
import { goods2Menu } from '../data'

export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  data() {
    return {
      title: '上二下四',
      goods2Menu,
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
    height: 97.5px;
}
.vux-flexbox:nth-child(n+3) .vux-flexbox-item{
    width: 25%;
    height: 97.5px;
}
.flex-demo{
    height: 97.5px;
}
</style>
