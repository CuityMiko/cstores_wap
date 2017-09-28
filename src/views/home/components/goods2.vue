<template>
  <div id="goods2">
     <!-- Good seller -->
     <div class="item">
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
      title: '上二下四'
    }
  },
}
</script>

<style scoped>

</style>
