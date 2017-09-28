<template>
    <div id="category">
        <HTrim></HTrim>
        <Search></Search>
        <div class="content">
           <List></List>
           <ListInfo></ListInfo> 
        </div>
        <FTrim></FTrim>
    </div>
</template>


<script>
import Search from './components/search'
import List from './components/list'
import ListInfo from './components/list_info'
import HTrim from '../trim/HTrim.vue'
import FTrim from '../trim/FTrim.vue'
export default {
    components: {
        Search,
        List,
        ListInfo,
        HTrim,
        FTrim
    },
    data() {
        return {
            title: '商品分类',
        }
    }
}
</script>

<style lang="scss">
#category .content{
    display: flex;
}
</style>


