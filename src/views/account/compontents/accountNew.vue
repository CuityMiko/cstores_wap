<template>
    <div>  
        <div>
            <group>
            <cell v-text="$t('我的订单')" value="查看全部订单" is-link></cell>
            </group>
        </div>
        <div class="wishlist">
            <flexbox>
                <flexbox-item>
                    <div class="flex-demo">
                     <icon-svg icon-class="money" class="main-icons"></icon-svg>
                    </div>
                    <div class="flex-demo">
                     <a href="" class="t_size" v-text="$t('待付款')"></a>
                    </div>
                </flexbox-item>
                 <flexbox-item>
                    <div class="flex-demo">
                      <icon-svg icon-class="che" class="main-icons"></icon-svg> 
                    </div>
                    <div class="flex-demo">
                     <a href="" class="t_size" v-text="$t('待收货')"></a>
                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div class="flex-demo" >
                     <icon-svg icon-class="accomplish" class="main-icons"></icon-svg>  
                    </div>
                    <div class="flex-demo">
                     <a href="" class="t_size" v-text="$t('已完成')"></a>
                    </div>
                </flexbox-item>
                 <flexbox-item>
                    <div class="flex-demo">
                     <icon-svg icon-class="qian" class="main-icons"></icon-svg>  
                    </div>
                    <div class="flex-demo">
                     <a href="" class="t_size" v-text="$t('退款/退货')"></a>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>
        <div>
            <group>
            <cell v-text="$t('我的活动')" ></cell>
            </group>
        </div>
        <div>
            <div class="wishlist">
            <flexbox>
                <flexbox-item>
                    <div class="flex-demo">
                     <icon-svg icon-class="pixelsa" class="main-icons"></icon-svg>
                    </div>
                    <div class="flex-demo">
                     <a href="" class="t_size" v-text="$t('活动详情')"></a>
                    </div>
                </flexbox-item>
                 <flexbox-item>
                    <div class="flex-demo">
                       <icon-svg icon-class="handshake" class="main-icons"></icon-svg>
                    </div>
                    <div class="flex-demo">
                     <a href="" class="t_size" v-text="$t('查看盟友')"></a>
                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div class="flex-demo">
                     <icon-svg icon-class="xing" class="main-icons"></icon-svg>
                    </div>
                    <div class="flex-demo">
                     <a href="" class="t_size" v-text="$t('积分')"></a>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>
        <div>
            <group>
            <cell v-text="$t('我的任务')" ></cell>
            </group>
        </div>
         <div class="wishlist">
            <flexbox>
                <flexbox-item>
                    <div class="flex-demo">
                     <icon-svg icon-class="hearts" class="main-icons"></icon-svg>
                    </div>
                    <div class="flex-demo">
                     <a href="" class="t_size" v-text="$t('愿望清单')"></a>
                    </div>
                </flexbox-item>
                 <flexbox-item>
                    <div class="flex-demo">
                    </div>
                    <div class="flex-demo">
                     <a href="" class="t_size"></a>
                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div class="flex-demo">
                    </div>
                    <div class="flex-demo">
                     <a href="" class="t_size"></a>
                    </div>
                </flexbox-item>
                 <flexbox-item>
                    <div class="flex-demo">
                    </div>
                    <div class="flex-demo">
                     <a href="" class="t_size"></a>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>
        </div>
        </div>
    </div>
</template>

<il8n>
我的订单:
  en: My order
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
 import { Group, Cell, CellBox, Flexbox, FlexboxItem, Divider } from 'vux'
 export default {
    components: {
        Group,
        Cell,
        CellBox,
        Flexbox,
        FlexboxItem,
        Divider
    }
 }
 </script>
 <style scoped>
 .flex-demo {
  text-align: center;
  border-radius: 4px;
  background-clip: padding-box;
}
.wishlist{ margin-bottom: -0.7rem;margin-top: 0.5rem;}
.main-icons{
    height:3rem;
    width:2rem;
}
 </style>

