<template>
  <div class="banner">
    <swiper loop auto :show-dots="false" :list="banner_list" ></swiper>
  </div>
</template>

<i18n>
内容:
  en: Content
请输入内容:
  en: Please enter the content
</i18n>

<script>
import { Swiper } from 'vux'

const urlList = [{
  url: 'javascript:',
  img: 'http://www.commoditiesinchina.com:80/upload/20170626/1498444834966.jpg',
}, {
  url: 'javascript:',
  img: 'http://www.commoditiesinchina.com:80/upload/20170626/1498444854288.jpg',
}, {
  url: 'javascript:',
  img: 'http://www.commoditiesinchina.com:80/upload/20170626/1498444815848.jpg',
}]
export default {
  components: {
    Swiper
  },
  data() {
    return {
      banner_list: urlList,
    }
  },
}
</script>

<style scoped>
</style>
