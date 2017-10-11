<template>
    <div>
        <div style="background-color:#FC5F7C">
            <router-link to="/member">
                <icon-svg icon-class="setting" class="main-icons settingicon"></icon-svg>
            </router-link>
            <blur :blur-amount=40 :url="url">
                <div class="conterimg">
                    <img src="http://www.commoditiesinchina.com:80/upload/20170913/1505309706042.jpg" alt="">
                    <p style="color:#fff">Freedom</p>
                </div>
            </blur>
        </div> 
    </div>
</template>

<script>
    import { Blur } from 'vux'

    export default {
        components: {
            Blur
        },
        data() {
            return {
                url: ''
            }
        },
        methods: {
            tomember() {
                this.$router.push('/member');
            }
        }
    }
</script>

<style scoped>
    .settingicon{
        width:1.8rem;height:1.8rem;padding:1.8rem;border-radius:50%;
        float: right;
    }
    .conterimg{
        margin-left: 30%;
    }
</style>