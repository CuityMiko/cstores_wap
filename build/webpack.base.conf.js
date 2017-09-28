var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

let webpackConfig = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV !== 'development' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'images': path.resolve(__dirname, '../src/assets/images'),
      'plug': path.resolve(__dirname, '../static/bower_components'),
      'components': path.resolve(__dirname, '../src/components'),
      'views': path.resolve(__dirname, '../src/views'),
      'styles': path.resolve(__dirname, '../src/styles'),
      'api': path.resolve(__dirname, '../src/api'),
      'utils': path.resolve(__dirname, '../src/utils'),
      'store': path.resolve(__dirname, '../src/store'),
      'router': path.resolve(__dirname, '../src/router'),
      'mock': path.resolve(__dirname, '../src/mock'),
      'vendor': path.resolve(__dirname, '../src/vendor'),
      'static': path.resolve(__dirname, '../static')
    }
  },
  module: {
    rules: [
      {
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          enforce: "pre",
          include: [resolve('src'), resolve('test')],
          options: {
              formatter: require('eslint-friendly-formatter')
          }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/icons')],
        options: {
          symbolId: 'icon-[name]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [resolve('src/icons')],
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  //注入全局mixin
  // sassResources: path.join(__dirname, '../src/styles/mixin.scss'),
  // sassLoader: {
  //     data:  path.join(__dirname, '../src/styles/index.scss')
  // },
}

// vux loader
const vuxLoader = require('vux-loader')
// const vuxConfig = require('./vux-config')
// module.exports = vuxLoader.merge(webpackConfig, vuxConfig)

module.exports = vuxLoader.merge(webpackConfig, {
  options: {
    vuxDev: false, // true
    vuxSetBabel: true, // false
    vuxWriteFile: false,
    showVuxVersionInfo: false // 打印版本信息 【vux@2.6.3, vux-loader@1.1.9, webpack@2.6.1, node@6.10】
  },
  plugins: ['vux-ui', 'progress-bar', 'duplicate-style', { name: 'i18n', vuxStaticReplace: false, staticReplace: false, extractToFiles: 'src/locales/globals.yml', localeList: ['en', 'zh-CN'] }, { name: 'less-theme', path: 'src/styles/theme.less' }]
})

