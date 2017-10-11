<template>
  <div id="index">
    <IndexSearch></IndexSearch>
    <Banner></Banner>
    <Navigation></Navigation>
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
    <Placeholder></Placeholder>
    <Word></Word>
    <Goods5></Goods5>
  </div>
</template>

<i18n>
</i18n>

<script>
import IndexSearch from './components/index_search.vue'
import Banner from './components/banner.vue'
import Navigation from './components/navigation.vue'
import Word from './components/word'
import Goods1 from './components/goods1.vue'
import Goods2 from './components/goods2.vue'
import Goods3 from './components/goods3.vue'
import Goods4 from './components/goods4.vue'
import Goods5 from './components/goods5.vue'
import Advert from './components/advert'
import PartLine from './components/partLine'
import Placeholder from './components/placeholder'

export default {
  components: {
    IndexSearch,
    Banner,
    Navigation,
    Word,
    Goods1,
    Goods2,
    Goods3,
    Goods4,
    Goods5,
    Advert,
    PartLine,
    Placeholder
  },
  data() {
    return {
      title: '首页',
    }
  }
}
</script>

<style scoped>
@import './index.scss';
</style>
