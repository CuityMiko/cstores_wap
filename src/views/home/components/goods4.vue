<template>
    <div id="goods4">
        <grid>
            <grid-item v-for="l in goods4Menu" :key="l.id" style="width:50%;">
            <img slot="icon" :src="l.src">
            <p class="info">{{l.content}}</p>
            <span class="price">￥{{l.price}}</span>
            </grid-item>
        </grid> 
    </div>
</template>

<i18n>
</i18n>

<script>
import { Grid, GridItem } from 'vux'
import { goods4Menu } from '../data'

export default {
    components: {
        Grid,
        GridItem
    },
    data() {
        return {
            title: '四图平分',
            goods4Menu
        }
    }
}
</script>

<style lang="scss">
#goods4 .weui-grid{
    padding:10px 10px 0;
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


