<template>
  <div id="setting">
    <group>
       <cell :title="$t('用户名')" v-model="value1"></cell>
       <cell :title="$t('User level')">
         <div class="user-level">
           <span>白银会员</span>
         </div>
       </cell>
       <x-input :title="$t('昵称')" v-model="value3" is-link value-align="left"></x-input>
       <popup-picker v-if="!switch6" :title="$t('性别')" :data="['男女'.split('')]" v-model="value6"></popup-picker>
       <x-input :title="$t('手机号')" v-model="value4" is-link value-align="left"></x-input>
       <cell :title="$t('绑定邮箱')" is-link value-align="left"></cell>
    </group>
    <group>
      <cell :title="$t('收货地址管理')" is-link value-align="left"></cell>
      <cell :title="$t('账号安全')" is-link value-align="left"></cell>
    </group>
    <div class="button">
           <x-button v-text="$t('退出当前登录')"></x-button>
    </div>
  </div>
</template>

<i18n>
用户名:
  en: User name
昵称:
  en: nickname
性别:
  en: sex
手机号:
  en: Mobile number
绑定邮箱:
  en: bind email address
收货地址管理:
  en: Delivery address management
账号安全:
  en: Account security
退出当前登录:
  en: Exit current login
</i18n>

<script>
import { XInput, Group, XButton, Cell, PopupPicker } from 'vux'
export default {
  components: {
    XInput,
    XButton,
    Group,
    Cell,
    PopupPicker,
  },
  data() {
    return {
      title: '个人中心设置',
      value1: 'zhejianggaozi',
      value3: 'zhejianghaozi666',
      value4: '032146921',
      switch6: false,
      value6: [],
    }
  },
}
</script>

<style scoped>
.user-level span{
  padding: 5px 10px 5px 10px;
  background: #FF4863;;
  color: #fff;
  border-radius: 3px;
  font-size: .9286em;
}
.button{
  padding: 20px 10px;
}
.weui-btn_default{
  background-color: #FF4863;;
  color:#fff;
}
.weui-cell .weui-cell__ft{
  flex: 1;
  text-align: left;
}
</style>
