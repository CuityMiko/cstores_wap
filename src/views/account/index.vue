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
  import accountHeader from './compontents/accountHeader'
  import accountMsg from './compontents/accountMsg'
  import accountMenu from './compontents/accountMenu'

  import { Group, Cell } from 'vux'

  export default {
    components: {
      Group,
      Cell,
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


