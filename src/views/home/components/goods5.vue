<template>
    <div id="goods4">
        <grid>
            <grid-item :label="$t('Grid')" v-for="i in 1" :key="i" style="width:100%;">
            <img slot="icon" src="http://www.commoditiesinchina.com:80/upload/20170629/1498718247201.jpg" style="">
            <span>￥3200.00</span>
            </grid-item>
        </grid> 
    </div>
</template>

<i18n>
Grid:
  zh-CN: 
        Haier/海尔多门大容量冷藏冷冻风冷无霜电
Go to Cell:
  zh-CN: 跳转到Cell
</i18n>

<script>
import { Grid, GridItem } from 'vux'
export default {
    components: {
        Grid,
        GridItem
    },
    data() {
        return {
            title: '大图',
        }
    }
}
</script>

<style lang="scss">
#goods4 .weui-grid{
    padding:10px;
    text-decoration: none;
    color:red;
}
#goods4 .weui-grid__icon{
    width: 100%;
    height: 100%;
}
#goods4 .weui-grid__label{
    text-align: left;
    margin-bottom:5px;
    white-space: normal;
}
</style>


