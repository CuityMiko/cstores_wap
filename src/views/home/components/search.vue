<template>
    <div id="search" style="height:630px;">
        <div class="search_history">
            <h4 :text="$t('历史搜索')"></h4>
            <ul class="history">
                <li>
                    <a href="">ssssss</a>
                </li>
            </ul>
            <div class="clear_history">
                <button :value="$t('清除历史搜索记录')"></button>
            </div>
        </div>
    </div>
</template>

<i18n>
历史搜索:
  en: History Search
清除历史搜索记录:
  en: Clear history search record
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
export default {
    data() {
        return {
            title: '搜索页面',
        }
    }
}
</script>

<style lang="scss">
#search{
    background: #f9f9f9;
}
#search h4{
    line-height: 30px;
    font-size: 16px;
    border-bottom: 1px solid #dfdfdf;
    margin: 0 0 15px;
    background: #f0f0f0;
    padding-left: 15px;
    font-weight: 200;
}
#search .history>li>a{
    display: block;
    padding-bottom: 20px;
    border-bottom: 1px solid #dfdfdf;
    margin-bottom: 10px;
    font-size: 16px;
    padding-left: 15px;
}
#search .clear_history{
    padding:15px;
}
#search .clear_history>button{
    padding: 10px;
    font-size: 14px;
    display: block;
    color: #969696;
    background-color: #fff;
    border: 1px solid #ececec;
}
</style>


