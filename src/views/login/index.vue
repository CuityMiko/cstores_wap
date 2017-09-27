<template>
  <div>
    <div class="bgc"></div>
     <div>
        <tab>
            <tab-item selected @on-item-click="onItemClick">注册</tab-item>
            <tab-item @on-item-click="onItemClick">登录</tab-item>
        </tab>
     </div>
     <div>
        <group title="">
            <x-input title="姓名:" name="username" placeholder="请输入姓名" is-type="china-name" class="t_size" style=" color:#ccc"></x-input>
             <x-input title="密码:" name="username" placeholder="请输入密码" is-type="china-name" class="t_size" style=" color:#ccc"></x-input>
         </group>
     </div>
     <div class="forget">
        <a href="" class="t_size">忘记密码？</a>
     </div>
     <div class="buttonlogin">
       <button>登录</button>
     </div>
  </div>
</template>
<script>
import { Tab, TabItem, SwiperItem, XInput, Group } from 'vux'
export default {
  components: {
    Tab,
    TabItem,
    SwiperItem,
    XInput,
    Group
  },
  methods: {
    onItemClick(index) {
      console.log('on item click:',index)
    }
  }
}
</script>
<style lang="scss">
@import './login.scss'
</style>