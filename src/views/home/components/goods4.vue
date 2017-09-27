<template>
    <div id="goods4">
        <grid>
            <grid-item :label="$t('Haier')"style="width:49%;">
            <img slot="icon" src="http://www.commoditiesinchina.com:80/upload/20170629/1498718247201.jpg">
            <span>￥3200.00</span>
            </grid-item>
            <grid-item :label="$t('xihu')"style="width:49%;">
            <img slot="icon" src="http://www.commoditiesinchina.com:80/upload/20170629/1498718277454.jpg">
            <span>￥3200.00</span>
            </grid-item>
            <grid-item :label="$t('Haier')"style="width:49%;">
            <img slot="icon" src="http://www.commoditiesinchina.com:80/upload/20170629/1498718302803.jpg">
            <span>￥3200.00</span>
            </grid-item>
            <grid-item :label="$t('Haier')"style="width:49%;">
            <img slot="icon" src="http://kstoreimages.b0.upaiyun.com/1472525766100.jpg!160">
            <span>￥3200.00</span>
            </grid-item>
        </grid> 
    </div>
</template>

<i18n>
Haier:
  zh-CN: 
        Haier/多门大容量
xihu:
  zh-CN: 
        纯天然洗护用品      
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
            title: '四图平分',
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


