<template>
    <div id="search">
      <HistorySearch></HistorySearch>
      <div id="history_search" style="height:630px;">
          <div class="history_search_history">
              <h4 v-text="$t('历史搜索')"></h4>
              <ul class="history">
                  <li>
                      <a href="">ssssss</a>
                  </li>
              </ul>
              <div class="clear_history">
                  <button v-text="$t('清除历史搜索记录')"></button>
              </div>
          </div>
      </div>
    </div>

</template>

<i18n>
历史搜索:
  en: History Search
清除历史搜索记录:
  en: Clear history history_search record
购物车:
  en: Cart
我的:
  en: My
我的购物车:
  en: My Cart
商品列表:
  en: Goods List
商品详情:
  en: Goods Detail
</i18n>

<script>
import HistorySearch from './components/history_search.vue'

export default {
    components: {
        HistorySearch
    },
    data() {
        return {
            title: '搜索页面',
        }
    }
}
</script>

<style lang="scss">
#search{
  padding: 46px 0 60px;
}
#history_search{
    background: #f9f9f9;
}
#history_search h4{
    line-height: 30px;
    font-size: 16px;
    border-bottom: 1px solid #dfdfdf;
    margin: 0 0 15px;
    background: #f0f0f0;
    padding-left: 15px;
    font-weight: 200;
}
#history_search .history>li>a{
    display: block;
    padding-bottom: 20px;
    border-bottom: 1px solid #dfdfdf;
    margin-bottom: 10px;
    font-size: 16px;
    padding-left: 15px;
}
#history_search .clear_history{
    padding:15px;
}
#history_search .clear_history>button{
    padding: 10px;
    font-size: 14px;
    display: block;
    color: #969696;
    background-color: #fff;
    border: 1px solid #ececec;
}
</style>