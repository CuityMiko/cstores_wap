<template>
  <div>
    <div class="wishlist">
        <flexbox>
        <flexbox-item class="t_size">
              <div class="flex-demo">1</div>
              <div class="flex-demo" v-text="$t('我的关注')"></div>
          </flexbox-item>
          <flexbox-item class="t_size">
            <router-link to="messages">
              <div class="flex-demo">12</div>
              <div class="flex-demo" v-text="$t('消息中心')"></div>
            </router-link>
          </flexbox-item>
          <flexbox-item class="t_size">
              <div class="flex-demo">3</div>
              <div class="flex-demo" v-text="$t('浏览历史')"></div>
          </flexbox-item>
        </flexbox>
      </div> 
  </div>
</template>

<i18n>
我的关注:
 en: My wishlist
消息中心:
 en: My message
浏览历史:
  en: Browsing history
</i18n>

<script>
  import { Flexbox, FlexboxItem } from 'vux'

  export default {
    components: {
      Flexbox,
      FlexboxItem
    }
  }
</script>
<style scoped>
  .flex-demo {
    text-align: center;
    border-radius: 4px;
    background-clip: padding-box;
    margin-top: .8rem;
  }
  .wishlist{
    margin-bottom: -0.7rem;
  }
</style>
