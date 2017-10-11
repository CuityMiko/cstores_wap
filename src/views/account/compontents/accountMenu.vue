<template>
    <div>
        <div class="wishlist" v-for="(item,key) in accountMenu" :key="key">
            <group>
              <cell v-bind:title="$t(item.title)" :value="$t(item.linktitle)" :is-link="item.islink"></cell>
            </group>
            <flexbox>
                <flexbox-item v-for="(detail,key) in item.list" :key="key">
                    <div class="flex-demo">
                     <icon-svg :icon-class="detail.icon" class="main-icons"></icon-svg>
                    </div>
                    <div class="flex-demo">
                     <a href="javascript:;" class="t_size" v-text="$t(detail.name)"></a>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>
    </div>
</template>

<il8n>
我的订单:
  en: My order
查看全部订单:
  en: View all orders
待付款:
  en: To Pay
待收货:
  en: To Receive
已完成:
  en:To review
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
</il8n>

<script>
  import { Group, Cell, Flexbox, FlexboxItem } from 'vux'

  import { accountMenu } from '../data'

  export default {
      components: {
          Group,
          Cell,
          Flexbox,
          FlexboxItem
      },
      data() {
          return {
              accountMenu
          }
      }
  }
</script>
<style scoped>
  .flex-demo {
    text-align: center;
    border-radius: 4px;
    background-clip: padding-box;
  }
  .wishlist{ margin-bottom: -0.7rem;}
  .main-icons{
      height:3rem;
      width:2rem;
  }
  .wishlist>div { margin-bottom: .2rem;}
</style>

