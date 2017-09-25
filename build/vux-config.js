'use strict'

const path = require('path')

module.exports = {
  options: {
    showVuxVersionInfo: false // 打印版本信息 【vux@2.6.3, vux-loader@1.1.9, webpack@2.6.1, node@6.10】
  },
  plugins: [
    'vux-ui', 'inline-manifest', 'progress-bar', 'duplicate-style',
    {
      name: 'i18n',
      vuxStaticReplace: false,
      staticReplace: false,
      extractToFiles: 'src/locales/globals.yml',
      localeList: ['en', 'zh-CN']
    },
    {
      name: 'less-theme',
      path: 'src/styles/theme.less'
    }
  ]
}