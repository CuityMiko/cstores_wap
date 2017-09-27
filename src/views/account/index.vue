<template>
  <div class="account">
    <accountheader></accountheader>
    <myaccount></myaccount>
    <accountNew></accountNew>
    
  <div>
    <group>
      <cell title="猜你喜欢" ></cell>
    </group>
    
  </div>
  

  </div>
</template>
<il8n>
我的关注:
  en: My wishlist
消息中心:
  en: My message
浏览历史:
  en: Browsing history
我的订单:
  en: My order
查看全部订单:
  en: View all orders
待付款:
  en: To Pay
待收货:
  en: To Receive
已完成:
  en: To review
退款/退货:
  en: Return
我的活动:
  en: My promotion
活动详情:
  en: Promotion
查看盟友:
  en: View friends
积分:
  en: Sr Coins
我的任务:
  en: My assignment
愿望清单:
  en: Wishlist
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
    accountheader,
    accountNew,
    myaccount
  },
  data() {
      return {
        title: ''
      }
  }
}
</script>


<style lang="scss">
@import './account.scss'
</style>

