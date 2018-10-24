#### webpack单元测试配置

```js
// This is the webpack config used for unit tests.

var utils = require('./utils')//utils.js文件导入
var webpack = require('webpack')//webpack模块导入
var merge = require('webpack-merge')//合并模块插件
var baseConfig = require('./webpack.base.conf')//导入基础配置webpack.base.conf.js

var webpackConfig = merge(baseConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  module: {
    rules: utils.styleLoaders()
  },
  devtool: '#inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/test.env')//指定环境为测试环境  test.env中设置了NODE_ENV=‘testing’
    })
  ]
})

// no need for app entry during tests
delete webpackConfig.entry

module.exports = webpackConfig
```


惹，文件看上去很简单，实际webpack到底如何测试？如何设置单元测试配置还有待继续研究。。。
