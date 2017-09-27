<template>
    <div id="list">
        <div class="box2">
            <p v-for="i in list" :key="i">{{i}}</p>
        </div>
    </div>
</template>



<script>
import { ViewBox } from 'vux'

export default {
    components: {
        ViewBox
    },
    data() {
        return {
            title: '商品列表',
            list: ['Appliances','Mobil','Phones','Computer','母婴玩具','男装女装','鞋靴箱包','Beauty','汽车用品','户外运动','123','456','mac','000','123','222']
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
    width: auto;    
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
    padding: 0 10px;
    font-size:14px;
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


