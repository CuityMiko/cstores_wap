<template>
  <div id="goods">
     <!-- Featured recommendation -->
     <div class="item" v-for="l in list" :key="l">
        <flexbox :gutter="0">
            <flexbox-item>
                <div class="flex-demo demo">
                <img :src="l">
                </div>
            </flexbox-item>
            <flexbox-item class="flex_item">
                <flexbox orient="vertical" :gutter="0">
                    <flexbox-item>
                        <div class="flex-demo demo1">
                            <img :src="l">
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <flexbox :gutter="0">
                            <flexbox-item>
                                <div class="flex-demo demo1">
                                    <img :src="l">
                                </div>
                            </flexbox-item>
                            <flexbox-item class="flexbox_bottom">
                                <div class="flex-demo demo1">
                                    <img :src="l">
                                </div>
                            </flexbox-item>
                        </flexbox>
                    </flexbox-item>
                </flexbox>
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
        title: '左一右三',
        list: ['http://www.commoditiesinchina.com:80/upload/20170629/1498718247201.jpg',]
    }
  },
}
</script>
<style scoped>

</style>
