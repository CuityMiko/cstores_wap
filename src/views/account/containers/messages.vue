<template>
  <div id="messages">
      <div class="message_head">
        <flexbox :gutter='0'>
            <flexbox-item><a class="flex-demo select">管理员通知</a></flexbox-item>
            <flexbox-item><a class="flex-demo">系统通知</a></flexbox-item>
        </flexbox> 
      </div>
      <div class="message_content">
          <div class="no_tips">
               <!-- <img src="../../../assets/images/no.png" alt=""> -->
          </div>
      </div>
  </div>
</template>

<i18n>
用户名:
  en: User name
昵称:
  en: nickname
</i18n>

<script>
import { Flexbox,FlexboxItem } from 'vux'

export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  data() {
    return {
      title: '消息',
    }
  },
}
</script>

<style scoped>  
.flex-demo {
    display: block;
    padding: .8em 0;
    text-align: center;
    background-clip: padding-box;
    color: #000;
    font-size: 18px;
}
.flex-demo.select {
    color: #FF3952;
    border-bottom: 2px solid #FF3952;
}
.message_content{
    background-color: #f7f7f7;
    padding: 44px 0 52px;
}
.no_tips{
    padding: 13em 1em 0;
    background: url(../../../assets/images/no.png) center 4em no-repeat;
    background-size: auto 8em;
    margin-top: 1em;
}
</style>
