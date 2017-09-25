<template>
  <div>
    <x-header :left-options="{backText: ''}" :title="$t('CStroes')"><a slot="right"><icon-svg icon-class="add" class="main-icons"></icon-svg></a></x-header>
    <group title="">
      <cell :title="ctitle" :value="cvalue" is-link></cell>
    </group>
    <group>
      <x-input :title="$t('内容')" v-model="content"></x-input>
    </group>
    <box gap="10px 10px">
      <x-button type="primary" @click.native="confirm" :text="$t('确定')"></x-button>
    </box>
    <tabbar>
      <tabbar-item>
        <img slot="icon" src="../../assets/images/icons/house.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../../assets/images/icons/category.png">
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../../assets/images/icons/cart.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../../assets/images/icons/account.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<i18n>
内容:
  en: Content
请输入内容:
  en: Please enter the content
</i18n>

<script>
import { Group, Cell, XHeader, XButton, Box, XInput, Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    XHeader,
    Group,
    Cell,
    XButton,
    Box,
    XInput,
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      ctitle: 'cell title',
      cvalue: 'cell value',
      content: ''
    }
  },
  methods: {
    confirm() {
      const _self = this;
      if (this.content) {
        this.$vux.alert.show({
          title: _self.$t('温馨提示'),
          content: _self.content,
          onShow() {
            console.log('Plugin: I\'m showing')
          },
          onHide() {
            console.log('Plugin: I\'m hiding')
          }
        })
      } else {
        this.$vux.toast.show({
          type: 'text',
          text: _self.$t('请输入内容')
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
