<template>
  <div id="RotRecommend">
    <grid>
        <grid-item>
            <div class="grids">
              <img slot="icon" src="http://kstoreimages.b0.upaiyun.com/1477899820047.jpg">
              <span slot="lable">Livin</span>
            </div>
        </grid-item>
        <grid-item>
          <div class="grids">
            <img slot="icon" src="http://kstoreimages.b0.upaiyun.com/1477899827923.jpg">
            <span>compa</span>
          </div> 
        </grid-item>
        <grid-item>
          <div class="grids">
            <img slot="icon" src="http://kstoreimages.b0.upaiyun.com/1477899836606.jpg">
            <span>Beaut</span>
          </div>
        </grid-item>
    </grid>
  </div>
</template>

<i18n>
内容:
  en: Content
请输入内容:
  en: Please enter the content
</i18n>

<script>
import { Swiper, Grid, GridItem } from 'vux'
export default {
  components: {
    Swiper,
    Grid,
    GridItem
  },
  data() {
    return {
      msg: 'Hello World!',
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
</style>
