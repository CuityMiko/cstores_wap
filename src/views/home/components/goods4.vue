<template>
    <div id="goods4">
        <grid>
            <grid-item :label="$t('Haier')" v-for="l in list" :key="l.id" style="width:50%;">
            <img slot="icon" :src="l.src">
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
            list: [{ id: 0,price: 3200.00,src: 'http://www.commoditiesinchina.com:80/upload/20170629/1498718247201.jpg',content: 'Midea BCD-515WKM Side-by-side combination refrigerator' },
                    { id: 1,price: 320.00,src: 'http://www.commoditiesinchina.com:80/upload/20170629/1498718277454.jpg',content: 'Galaxy C7（SM-C7000）32Gr' },
                    { id: 2,price: 125.00,src: 'http://www.commoditiesinchina.com:80/upload/20170629/1498718302803.jpg',content: 'Estee Lauder eye cream5ml*2(15g)' },
                    { id: 3,price: 220.00,src: 'http://kstoreimages.b0.upaiyun.com/1472525766100.jpg!160',content: 'OZNER JZY-A1XB-A2(Pearl White)' }]
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


