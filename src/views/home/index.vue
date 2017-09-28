<template>
  <div id="index">
    <HTrim></HTrim>
    <HistorySearch v-if="flag"></HistorySearch>
    <Search v-if="flag"></Search>
    <IndexSearch></IndexSearch>
    <Banner></Banner>
    <RotRecommend></RotRecommend>
    <Word></Word>
    <Goods1></Goods1>
    <Advert></Advert>
    <PartLine></PartLine>
    <Word></Word>
    <Goods2></Goods2>
    <Advert></Advert>
    <Word></Word>
    <Goods3></Goods3>
    <Word></Word>
    <Goods4></Goods4>
    <trim></trim>
    <Word></Word>
    <Goods5></Goods5>
    <FTrim></FTrim>
  </div>
</template>

<i18n>
内容:
  en: Content
请输入内容:
  en: Please enter the content
</i18n>

<script>
import IndexSearch from './components/index_search.vue'
import Banner from './components/banner.vue'
import RotRecommend from './components/RotRecommend.vue'
import Word from './components/word'
import Goods1 from './components/goods1.vue'
import Goods2 from './components/goods2.vue'
import Goods3 from './components/goods3.vue'
import Goods4 from './components/goods4.vue'
import Goods5 from './components/goods5.vue'
import Advert from './components/advert'
import PartLine from './components/partLine'
import Trim from './components/trim'
import HistorySearch from './components/history_search.vue'
import Search from './components/search.vue'
import HTrim from '../trim/HTrim.vue'
import FTrim from '../trim/FTrim.vue'
export default {
  components: {
    IndexSearch,
    Banner,
    RotRecommend,
    Word,
    Goods1,
    Goods2,
    Goods3,
    Goods4,
    Goods5,
    Advert,
    PartLine,
    Trim,
    Search,
    HistorySearch,
    HTrim,
    FTrim
  },
  data() {
    return {
      title: '首页',
      flag: false
    }
  }
}
</script>

<style scoped>
@import './index.scss';
</style>
