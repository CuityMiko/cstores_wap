<template>

  <div id="conter">
  
     <a href="" style="text-align:center;float:left;position:absolute;left:1.2rem;font-size:12px;top:0.8rem">取消</a>
     <p style="text-align:center;margin:0.5rem" >登录</p>
    <div class="bgc"></div>
   
     <div class="number">
        <group title="">
            <x-input title="账号:" name="username" placeholder="用户名/手机号/邮箱" is-type="china-name" class="t_size" style=" color:#ccc"></x-input>
             <x-input title="密码:" name="username" placeholder="请输入密码" is-type="china-name" class="t_size" style=" color:#ccc"></x-input>
         </group>
     </div>
     <div class="buttonlogin">
       <button>登录</button>
     </div>
    <div>
      <a href="" class="t_size" style="margin:0.5rem 1rem;float:left;">手机快速注册</a>
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