vue-cli2和vue-cli3配置差别还是蛮大的，在此记录下vue-cli3的配置信息。

## 目录结构
vue-cli2的配置文件主要在build和config中，其中build中为webpack相关配置，config中为多环境配置。
```
│  .babelrc
│  .eslintrc.js
│  .gitlab-ci.yml
│  Dockerfile
│  favicon.ico
│  index.html
│  package.json     
├─build
│      build.js
│      check-versions.js
│      logo.png
│      utils.js
│      vue-loader.conf.js
│      webpack.base.conf.js
│      webpack.dev.conf.js
│      webpack.env.conf.js
│      webpack.prod.conf.js
│      
├─config
│      dev.env.js
│      index.js
│      pre.env.js
│      prod.env.js
│      test.env.js      
├─src
│  │  App.vue
│  │  main.js
│  ├─api     
│  ├─assets               
│  ├─components        
│  ├─lang     
│  ├─router    
│  ├─store         
│  ├─utils     
│  ├─vendor  
│  └─views
├─static             
└─test            
```

vue-cli3的结构相对简洁很多，webpack相关配置统一在vue.config.js中进行配置；环境变量直接在.env.[mode]上，以键值对的形式进行配置，例如`.env.production`。
```
│  .env
│  .env.production
│  babel.config.js
│  package.json
│  vue.config.js
│                       
├─public
│      
├─src
│  │  antd-variables.less
│  │  App.vue
│  │  main.js 
│  ├─api      
│  ├─assets    
│  ├─components   
│  ├─router
│  ├─store        
│  ├─utils   
│  └─views         
└─tests   
```

## 环境变量及构建配置
此次主要说明环境变量及打包、跨域请求等方面的配置，至于其他的es6或者ts等等，大家可以去看官方文档，不在此次讨论范围内。

### [环境变量env](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%A4%BA%E4%BE%8B%EF%BC%9Astaging-%E6%A8%A1%E5%BC%8F)
vue-cli中主要有三中模式：
* development：开发模式，应用于`vue-cli-service serve`
* production：生产模式，应用于`vue-cli-service build`和`vue-cli-service test:e2e`
* test：测试模式，应用于`vue-cli-service test:unit`

其中一个env文件内容示例
```js
NODE_ENV = "development" // 环境
BASE_URL = "http://xxxx:8080/" // 应用部署到的基础路径
VUE_APP_API = "http://xxxx:8080/" // 以 VUE_APP_ 开头的变量会被 webpack.DefinePlugin 静态嵌入到客户端侧的包中，可通过process获取`process.env.VUE_APP_API`
```

### [vue.config.js](https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE)参考

```js
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV) // 生产环境
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  publicPath: IS_PROD ? process.env.BASE_URL : './', // 默认'/'，部署应用包时的基本路径，可配置为绝对路径或者相对路径
  outputDir: 'dist', // 'dist', 生产环境构建文件的目录
  assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录，不加这个的话则直接不生成static文件夹直接将资源和html等生在一个文件夹
  lintOnSave: false, // 在每次保存时 lint 代码
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: !IS_PROD, // 去除生产环境的 source map
  parallel: require('os').cpus().length > 1,
  devServer: {
    proxy: { // 配置代理，解决跨域访问
      '/api': {
        target: process.env.VUE_APP_API, // 将以/api开头的请求代理到目标地址
        changeOrigin: true // 是否允许跨域
      }
    }
  },
  configureWebpack: config => { // 配置webpack相关，此处只是在production环境下去掉console和debugger
    if (IS_PROD) {
      config.plugins = config.plugins.concat(
        [
          new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                drop_debugger: true,
                drop_console: true,
                pure_funcs: ['console.log', 'console.warn']
              }
            }
          })
        ])
    }
  }
}
```

###### [vue-cli3、vue-cli4配置参考](https://github.com/staven630/vue-cli4-config)
