<template>
    <div id="goods5">
        <grid>
            <grid-item style="width:100%;">
            <img slot="icon" src="http://www.commoditiesinchina.com:80/upload/20170629/1498718247201.jpg" style="">
            <p class="info">Haier/海尔多门大容量冷藏冷冻风冷无霜电</p>
            <span>￥3200.00</span>
            </grid-item>
        </grid> 
    </div>
</template>

<i18n>
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
#goods5 .weui-grid{
    padding:10px;
    text-decoration: none;
    color:red;
}
#goods5 .weui-grid__icon{
    width: 100%;
    height: 100%;
}
#goods5 .weui-grid__label{
    text-align: left;
    margin-bottom:5px;
    white-space: normal;
}
</style>


