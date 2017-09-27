<template>
    <div id="advert">
        <flexbox>
            <flexbox-item>
                <div class="flex-demo">
                    <img src="http://www.commoditiesinchina.com:80/upload/20170630/1498822973522.jpg">
                </div>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<i18n>
跳转商品列表:
  en: Jump to list
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
            title: '广告',
        }
    }
}
</script>

<style lang="scss">

</style>


