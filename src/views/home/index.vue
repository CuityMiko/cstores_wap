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
  </div>
</template>

<i18n>
内容:
  en: Content
请输入内容:
  en: Please enter the content
</i18n>

<script>
import { Group, Cell, XHeader, XButton, Box, XInput } from 'vux'

export default {
  components: {
    XHeader,
    Group,
    Cell,
    XButton,
    Box,
    XInput
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
