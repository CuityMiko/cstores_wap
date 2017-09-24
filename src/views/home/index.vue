<template>
  <div>
    <x-header :left-options="{backText: ''}">set empty back text <a slot="right"><icon-svg icon-class="add" class="main-icons"></icon-svg></a></x-header>
    <group title="">
      <cell :title="ctitle" :value="cvalue" is-link></cell>
    </group>
    <group>
      <x-input title="内容：" v-model="content"></x-input>
    </group>
    <box gap="10px 10px">
      <x-button type="primary" @click.native="confirm">确 定</x-button>
    </box>
  </div>
</template>

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
      if (this.content) {
        // 显示
        this.$vux.alert.show({
          title: '温馨提示',
          content: this.content,
          onShow() {
            console.log('Plugin: I\'m showing')
          },
          onHide() {
            console.log('Plugin: I\'m hiding')
          }
        })
      } else {
        // 显示
        this.$vux.toast.show({
          text: 'Loading'
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
