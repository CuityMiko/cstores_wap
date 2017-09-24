<template>
  <div>
    <x-header :left-options="{backText: ''}">set empty back text <a slot="right"><icon-svg icon-class="add" class="main-icons"></icon-svg></a></x-header>
    <group title="">
      <cell :title="ctitle" :value="cvalue" is-link></cell>
    </group>
    <group title="">
      <cell :title="ctitle" :value="cvalue"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell, XHeader } from 'vux'

export default {
  components: {
    XHeader,
    Group,
    Cell
  },
  data() {
    return {
      ctitle: 'cell title',
      cvalue: 'cell value'
    }
  }
}
</script>

<style scoped>
    
</style>
