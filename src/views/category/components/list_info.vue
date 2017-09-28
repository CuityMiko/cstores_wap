<template>
    <div id="list_info">
        <div class="box2">
            <div v-for="i in list" :key="i.id">
                <p>{{i.title}}</p>
                <img :src="i.src" alt="">
                <span>{{i.content}}</span>
            </div>

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
            title: '商品详情',
            list: [{ id: 0,title: 'TV',src: 'http://www.commoditiesinchina.com:80/upload/20170629/1498722708289.jpg',content: 'Water dispense' },
                { id: 1,title: 'AC',src: 'http://www.commoditiesinchina.com:80/upload/20170629/1498722708289.jpg',content: 'Water dispense' },
                { id: 2,title: 'Washing machine',src: 'http://www.commoditiesinchina.com:80/upload/20170629/1498722708289.jpg',content: 'Water dispense' },
                { id: 3,title: 'Living appliance',src: 'http://www.commoditiesinchina.com:80/upload/20170629/1498722708289.jpg',content: 'Water dispense' },
                { id: 4,title: 'kitchen applianc',src: 'http://www.commoditiesinchina.com:80/upload/20170629/1498722708289.jpg',content: 'Water dispense' },
                { id: 5,title: 'applianc',src: 'http://www.commoditiesinchina.com:80/upload/20170629/1498722708289.jpg',content: 'Water dispense' },
                { id: 6,title: 'domestic applian',src: 'http://www.commoditiesinchina.com:80/upload/20170629/1498722708289.jpg',content: 'Water dispense' },
                { id: 7,title: 'Health Care',src: 'http://www.commoditiesinchina.com:80/upload/20170629/1498722708289.jpg',content: 'Water dispense' }]
        }
    }
}
</script>

<style lang="scss">
#list_info{
    width: 100%;    
    background:#f7f7f7;
    border-left: 1px solid #ececec;
}
#list_info .box2{
    height: 580px;
    overflow-y: scroll;    
}
#list_info .box2 p{
    height: 48px;
    background:#fff;
    margin-bottom:15px;
    text-align: left;
    line-height: 50px;
    box-sizing: border-box;
    border-bottom: 1px solid #F4F4F4;
    padding-left:10px;
    font-size:16px;
}
#list_info .box2 img{
    width: 78px;
    height: 78px;
    padding-left:10px;    
}
#list_info .box2 span{
    display: block;
    height: 18px;
    overflow: hidden;
    word-wrap: break-word;
    white-space: nowrap;
    width: 103px;
    font-size: 12px;
    padding-left: 10px;
}
#list_info .box2 p.selected{
    color: #E63D59;
    border-bottom: 1px solid #E63D59;
}
</style>


