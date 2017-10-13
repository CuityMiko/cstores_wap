<template>
  <div id="navigation">
    <grid >
        <grid-item v-for=" l in navigationMenu" :key="l.id">
            <div class="grids">
              <img slot="icon" :src="l.src">
              <span slot="lable">{{l.content}}</span>
            </div>
        </grid-item>
    </grid>
  </div>
</template>

<i18n>
</i18n>

<script>
import { Swiper, Grid, GridItem } from 'vux'
import { navigationMenu } from '../data'
export default {
  components: {
    Swiper,
    Grid,
    GridItem
  },
  data() {
    return {
      title: '导航',
      navigationMenu
    }
  }
}
</script>

<style scoped>
#index .weui-grid{
    text-align: center;
    color: #363636;
    text-decoration: none;
}
#index .weui-grid .grids{
  display: flex;
  flex-direction: column;
}
#index .weui-grid .grids>img{
  width: 50px;
  height: 50px;
  margin:0 auto 10px;
}
#index .weui-grid:before,.weui-grid:after{
  border:0;
}
.weui-grid{
  padding: 10px;
}
</style>
