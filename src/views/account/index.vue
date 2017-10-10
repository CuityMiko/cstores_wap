<template>
  <div class="account">
    <accountHeader></accountHeader>
    <accountMsg></accountMsg>
    <accountMenu></accountMenu>
    <div>
      <group class="title">
        <cell v-text="$t('猜你喜欢')" ></cell>
      </group>
    </div>
  </div>
</template>
<il8n>
猜你喜欢:
  en: Guess you will like
</il8n>
<script>
import accountheader from './compontents/header'
import accountNew from './compontents/accountNew'
import myaccount from './compontents/myaccount'

import { Group, Cell, CellBox, Card } from 'vux'

export default {
  components: {
    Group,
    Cell,
    CellBox,
    Card,
    accountHeader,
    accountMenu,
    accountMsg
  },
  data() {
      return {
        title: ''
      }
  }
}
</script>


<style lang="sass">
@import './account.scss';
</style>


