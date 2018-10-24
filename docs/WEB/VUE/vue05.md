#### webpack.prod.conf.js 生产环境配置文件

```js
'use strict'//js严格模式执行
const path = require('path')//这个模块是发布到NPM注册中心的NodeJS“路径”模块的精确副本
const utils = require('./utils')//utils.js文件
const webpack = require('webpack')//webpack模块
const config = require('../config')//config文件夹下的index.js  是不是很神奇？
const merge = require('webpack-merge')//合并数组、对象为一个新的对象的模块
const baseWebpackConfig = require('./webpack.base.conf')//webpack.base.conf.js
const CopyWebpackPlugin = require('copy-webpack-plugin')//拷贝文件和文件夹模块
const HtmlWebpackPlugin = require('html-webpack-plugin')//为html文件中引入的外部资源（比如script/link等）动态添加每次compile后的hash，保证文件名不重复的好处是防止引用缓存文件导致修改暂未生效；可生成创建html入口文件
const ExtractTextPlugin = require('extract-text-webpack-plugin')//抽离css样式，防止将样式打包到js中引起加载错乱
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')//压缩css插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')//压缩js代码。

const env = require('../config/prod.env')//设置为生产环境production
//merge方法合并模块对象，在这个文件里是将基础配置webpack.base.conf.js和生产环境配置合并
const webpackConfig = merge(baseWebpackConfig, {
  module: {//模块配置
    rules: utils.styleLoaders({//原版注释Generate loaders for standalone style files (outside of .vue)生成独立的样式文件装载机
      sourceMap: config.build.productionSourceMap,//设置sourceMap
      extract: true,//
      usePostCSS: true
    })
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,//指定是否使用sourceMap
  output: {//指定输出
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),//编译输出的js文件存放在js文件夹下，命名规则添加hash计算
    /**
     * 打包require.ensure方法中引入的模块，如果该方法中没有引入任何模块则不会生成任何chunk块文件
     *
     * 比如在main.js文件中,require.ensure([],function(require){alert(11);}),这样不会打包块文件
     * 只有这样才会打包生成块文件require.ensure([],function(require){alert(11);require('./greeter')})
     * 或者这样require.ensure(['./greeter'],function(require){alert(11);})
     * chunk的hash值只有在require.ensure中引入的模块发生变化,hash值才会改变
     * 注意:对于不是在ensure方法中引入的模块,此属性不会生效,只能用CommonsChunkPlugin插件来提取
     */
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new UglifyJsPlugin({//压缩js代码的插件  具体可以去npm查一下这个插件怎么用以及能设置哪些参数
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: config.build.productionSourceMap,//是否生成sourceMap
      parallel: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      // Setting the following option to `false` will not extract CSS from codesplit chunks.
      // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
      // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`,
      // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
      allChunks: true,
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    // keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks (module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    // This instance extracts shared chunks from code splitted chunks and bundles them
    // in a separate chunk, similar to the vendor chunk
    // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: 'vendor-async',
      children: true,
      minChunks: 3
    }),

    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]//添加插件，是webpack功能更丰富
})
//是否允许压缩？
if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
```


关于开发环境和生产环境的区别，引用一段官网长的解释。

> 开发环境(development)和生产环境(production)的构建目标差异很大。在开发环境中，我们需要具有强大的、具有实时重新加载(live reloading)或热模块替换(hot module replacement)能力的 source map 和 localhost server。而在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。

虽然，以上我们将生产环境和开发环境做了略微区分，但是，请注意，我们还是会遵循不重复原则(Don't repeat yourself - DRY)，保留一个“通用”配置。为了将这些配置合并在一起，我们将使用一个名为 webpack-merge 的工具。
