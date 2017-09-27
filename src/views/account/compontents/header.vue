<template>
    <div>
        <div style="background-color:#FC5F7C">
            <a href="" style="position:absolute;right:2rem;top:2rem"><icon-svg icon-class="options" class="main-icons" style="width:2rem;height:2rem;padding:0.5rem;border-radius:50%;background: rgba(0, 0, 0, .5);"></icon-svg></a>
            <blur :blur-amount=40 :url="url">
            <!-- <p class="center"><img :src="url"></p> -->
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
            img: '',
            url: '',
         }
     }
 }
 </script>
 <style scoped>
 
 </style>
 
 
 