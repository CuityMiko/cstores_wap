<template>
    <div>
        <h3>{{ title }}</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '商品详情'
        }
    },
    mounted() {
        this.title = this.title + this.$route.params.id;
    }
}
</script>

