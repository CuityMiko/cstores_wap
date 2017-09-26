<template>
    <div>
        <group :title="title">
            <cell v-for="i in 3" :key="i" :title="'商品'+i" is-link :link="'/goods/detail/'+i"></cell>
        </group>
    </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
    components: {
        Group,
        Cell
    },
    data() {
        return {
            title: '商品列表'
        }
    }
}
</script>

<style lang="scss">

</style>


