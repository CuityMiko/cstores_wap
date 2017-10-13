<template>
    <div id="advert">
        <flexbox v-for="l in advertMenu" :key="l">
            <flexbox-item>
                <div class="flex-demo">
                    <img src="http://www.commoditiesinchina.com:80/upload/20170630/1498822973522.jpg">
                </div>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<i18n>
</i18n>

<script>
import { Flexbox,FlexboxItem } from 'vux'
import { advertMenu } from '../data'

export default {
    components: {
        Flexbox,
        FlexboxItem
    },
    data() {
        return {
            title: '广告',
            advertMenu
        }
    }
}
</script>

<style lang="scss">

</style>


