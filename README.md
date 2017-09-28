# vue-vux-cstore-h5 #

[![vue](https://img.shields.io/badge/vue-2.4.2-brightgreen.svg)](https://github.com/vuejs/vue)

## 功能 ##

## 开发 ##

```bash
    # 克隆项目
    git clone https://github.com/CuityMiko/cstores_wap.git

    # 安装依赖
    npm install
    //or # 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
    npm install --registry=https://registry.npm.taobao.org

    # 本地开发 开启服务
    npm run dev
```

浏览器访问 http://localhost:9090

## 发布 ##

```bash
    # 发布测试环境 带webpack ananalyzer
    npm run build:sit-preview

    # 构建生成环境
    npm run build:prod
```

## 目录结构 ##

```shell
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── filtres                // 全局filter
│   ├── mock                   // mock数据
│   ├── router                 // 路由
│   ├── store                  // 全局store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── view                   // view
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口 加载组件 初始化等
├── static                     // 第三方不打包资源
│   └── Tinymce                // 富文本
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
└── package.json               // package.json

```

## 状态管理 ##

目前只有user和app配置相关状态使用vuex存在全局，其它数据都由每个业务页面自己管理。

## 关于图标 ##

- 项目中的小图标采用svg方式
- 图标已经封装成icon-svg全局组件
- 页面中直接组件化使用即可：“ <icon-svg icon-class="upper7"></icon-svg> ”
- svg文件统一存放路径：CStoresWMS\src\icons\svg
- 如果svg文件不足以支持开发中使用，则参照 (http://www.iconsvg.com) 下载
- CStoreFE的svg图标统一会在 (http://www.iconfont.cn) 的CStore项目中管理
- 项目图标在iconfont上统一下载大小为200*200图标

## 关于Eslint ##

- eslint主要是为了团队开发制定的代码规范
- 0:关闭规则 1:警告 2:报错
- 官网: (http://eslint.cn/docs/rules/)

## License ##

MIT
