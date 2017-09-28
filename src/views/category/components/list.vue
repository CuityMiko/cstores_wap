<template>
    <div id="list">
        <div class="box2">
            <p v-for="i in list" :key="i">{{i}}</p>
        </div>
    </div>
</template>

<i18n>
搜索商品:
 en: Search goods
搜索:
 en: Search
母婴玩具:
 en: Baby toys
男装女装:
 en: Search goods
鞋靴箱包:
 en: Shoes and bags
汽车用品:
 en: Automotive supplies
 
</i18n>

<script>
import { ViewBox } from 'vux'

export default {
    components: {
        ViewBox
    },
    data() {
        return {
            title: '商品列表',
            list: ['Appliances','Mobil','Phones','Computer',this.$t('母婴玩具'),this.$t('男装女装'),this.$t('鞋靴箱包'),'Beauty、Accessories',this.$t('汽车用品'),this.$t('母婴玩具'),this.$t('母婴玩具'),this.$t('母婴玩具'),this.$t('母婴玩具'),this.$t('母婴玩具'),this.$t('母婴玩具')]
        }
    }
}
</script>

<style lang="scss">
 html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
#list{
    width: 150px;    
}
#list .box2{
    height: 580px;
    overflow-y: scroll;
}
#list .box2>p{
    height: 48px;
    text-align: left;
    line-height: 50px;
    box-sizing: border-box;
    border-bottom: 1px solid #F4F4F4;
    padding: 0 20px;
    font-size:14px;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
}
#list .box2>p:first-child{
    color: #E63D59;
    border-bottom: 1px solid #E63D59;
}
.box2-wrap {
  height: 300px;
  overflow: hidden;
}
</style>


