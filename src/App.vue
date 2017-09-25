<template>
	<div id="app">
    <x-header :left-options="{backText: ''}" :title="$t('CStroes')"><a slot="right"><icon-svg icon-class="add" class="main-icons"></icon-svg></a></x-header>
		<router-view></router-view>
	</div>
</template>

<script>
  import { XHeader } from 'vux'

  export default{
    name: 'APP',
    components: {
      XHeader
    }
  }
</script>

<style lang="scss">
@import '~normalize.css/normalize.css';// normalize.css 样式格式化
@import './styles/index.scss'; // 全局自定义的css样式
</style>
