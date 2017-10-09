<template>
  <div id="goods2">
     <!-- Good seller -->
     <div class="item">
        <flexbox :gutter="0" v-for="l in list" :key="l">
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
      title: '上二下四',
        list: ['http://www.commoditiesinchina.com:80/upload/20170629/1498718387070.jpg',
        'http://www.commoditiesinchina.com:80/upload/20170629/1498718402729.jpg',
        'http://www.commoditiesinchina.com:80/upload/20170629/1498718414351.jpg',
        'http://www.commoditiesinchina.com:80/upload/20170629/1498718426303.jpg',
        'http://www.commoditiesinchina.com:80/upload/20170629/1498718437938.jpg',
        'http://www.commoditiesinchina.com:80/upload/20170629/1498718449217.jpg']
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
    display: inline-block;
    width: 207px;
    float: left;
}
.vux-flexbox .vux-flexbox-item:nth-child(1){
    width: 207px;
}
.vux-flexbox:nth-child(2) .vux-flexbox-item{
    height: 103.75px;
}
.vux-flexbox:nth-child(n+3) .vux-flexbox-item{
    width: 103.5px;
    height: 103.5px;
}
.flex-demo{
    height: 103.5px;
}
</style>
