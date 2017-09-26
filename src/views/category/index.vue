<template>
    <div>
        <h3>{{ title }}</h3>
        <box gap="10px 10px">
            <x-button type="primary" @click.native="togoods" :text="$t('跳转至商品列表')"></x-button>
        </box>
    </div>
</template>

<i18n>
跳转商品列表:
  en: Jump to list
</i18n>

<script>
import { Box, XButton } from 'vux'

export default {
    components: {
        Box,
        XButton
    },
    data() {
        return {
            title: '商品分类'
        }
    },
    methods: {
        togoods() {
            this.$router.push('/goods')
        }
    }
}
</script>

<style lang="scss">

</style>


