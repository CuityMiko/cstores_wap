<template>
    <div id="category">
        <Search></Search>
        <div class="content">
           <List></List>
           <ListInfo></ListInfo> 
        </div>
    </div>
</template>


<script>
import Search from './components/search'
import List from './components/list'
import ListInfo from './components/list_info'

export default {
    components: {
        Search,
        List,
        ListInfo
    },
    data() {
        return {
            title: '商品分类',
        }
    }
}
</script>

<style lang="scss">
@import './category.scss';
#category .content{
    display: flex;
}
</style>


