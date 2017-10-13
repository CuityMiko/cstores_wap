<template>
    <div id="goods5">
        <grid>
            <grid-item style="width:100%;" v-for="l in goods5Menu" :key="l.id">
            <img slot="icon" :src="l.src">
            <p class="info">{{l.content}}</p>
            <span>￥{{l.price}}</span>
            </grid-item>
        </grid> 
    </div>
</template>

<i18n>
</i18n>

<script>
import { Grid, GridItem } from 'vux'
import { goods5Menu } from '../data'

export default {
    components: {
        Grid,
        GridItem
    },
    data() {
        return {
            title: '大图',
            goods5Menu
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


