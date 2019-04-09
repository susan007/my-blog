### webpack4
webpack是一个打包工具，将js、css、图片等打包为模块来使用，同时还可添加混淆、压缩等处理。
### 核心概念
* entry：入口文件
* output：输出文件配置（名称和路径）
* loader：node模块工具，把源模块转换成通用模块（webpack只能处理js和json文件，其余文件需要用插件解决）
* plugin：插件（解决loader无法解决的事）
* mode：模式（production/development）
* browser compatibility

### 基本结构
```js
module.exports = {
    entry: '',
    output: {},
    modules: {},
    plugins: [],
    devServer: {},
    mode: 'production'
}
```

### 应用实例
#### 目录结构
以下目录是纯手工画的！win7下试了网上说的tree自动生成目录结构失败，提示输入参数过多！有了解的朋友求指教。
```js
|----demo
     |----dist
     |----assets
          |----flower_icon.png
          |----flower.png     
     |----index.html
     |----index.js
     |----index.css
     |----package.json
     |----webpack.config.json
```
#### 第一步配置环境
```js
$ npm init // 生成package.json
$ npm install webpack webpack-cli -D // 安装webpack
```
#### 第二步，配置package.json
```js
// 添加以下内容，用来执行webpack配置
"build": "webpack --config webpack.config.js"
```
#### 第三步，打包js
```js
// node的path模块，用来处理路径
const path = require('path')
module.exports = {
    entry: path.resolve(__dirname, './index.js'),// 保证使用绝对路径
    output: {
        filename: "[name][hash:5].js", // 打包后的js文件名字，可以加上哈希，防止因浏览器缓存原因，更改js文件后反复刷新浏览器才生效
        path: path.resolve(__dirname, './dist/[hash:5]')
    },
    module: {
        rules: []
    },
    mode:'production'
}
```
```js
// 执行，生成dist文件夹
$ npm run build
```
注意：dist文件夹中生成相应的js文件！因为webpack默认适用于js和json文件，所以基础配置只会输出js相关文件。其余类型文件需要用loader或者plugin。

#### 第四步，打包html
```js
$ npm install html-webpack-plugin -D
```
在webpack.config.json中添加以下配置
```js
plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            hash: true
        })
    ]
```

#### 第五步，打包css
```js
$ npm install css-loader style-loader -D
```
将css文件引入index.js入口文件中
```js
import './index.css'
```
在webpack.config.json中添加以下配置
```js
plugins: [
    {
        test: /\.css$/,
        use:['style-loader', 'css-loader']
    }
]
```
现在，css文件是和js文件混合在一起的，以下操作可以将css文件单独打包出来
```js
// 安装插件
$ npm install extract-text-webpack-plugin@next -D
// webpack.config.json中配置
// module中配置rules
{
    test: /\.css$/,
    use: ExtractTextWebpackPlugin.extract({
    fallback: 'style-loader', // 这个我没加，然后打包报错"extract-text-webpack-plugin" loader is used without the corresponding plugin
    use: 'css-loader'
    })
}
// plugins中配置插件
plugins: [
    new ExtractTextWebpackPlugin({
        filename: '[name][hash:5].css' // css文件输出名称
    })
]
```

#### 第六步，打包图片
```js
// 安装插件，打包css中用到的图片
$ npm install file-loader url-loader -D
// webpack.config.js中配置rules
{
    test: /\.(jpg|png|gif|jpeg)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10240, // 10k以下的图片压缩为base64
                    outputPath: 'assets/' // img输出位置
                        }
            }
            ]
}

// 安装插件，打包html文件中引用的img图片
$ npm install html-withimg-loader -D
// 配置rules
{
    test: /\.(htm|html)$/,
    use: 'html-withimg-loader'
}
```
经过这些步骤，单页面应用基础配置到此告一段落，想优化的可以自己继续探索！
#### 第七步，多页面多入口应用打包
index.html同级目录中又分别加了一个index2.js/index2.html/index2.css，形成多页面应用。
* 配置入口文件
```js
// 多个入口配置
entry: {
        index: path.resolve(__dirname, './index.js'),
        index2: path.resolve(__dirname, './index2.js')
    },
```
* 配置多页面
```js
// plugins中
plugins: [
     new HtmlWebpackPlugin({
                template: 'index.html',
                filename: 'index.html',
                hash: true
            }),
     new HtmlWebpackPlugin({
                template: 'index2.html',
                filename: 'index2.html',
                hash: true
            })
]
```
* 配置多css
```js
// 记得一定要在index.js中引入css文件先
plugins: [
    new ExtractTextWebpackPlugin('index[hash:5].css',),
    new ExtractTextWebpackPlugin('index2[hash:5].css')
]
```
以上，基本配置项结束啦！当然，实际项目中环境更为复杂，比如配置babel转义啊等等，大家可以读读下面几篇不错的参考文章获得灵感。


###### 参考文章：
<a href="https://bailinlin.github.io/2018/05/07/vue-cli-webpack/">vue-cli 中的webpack配置</a>

<a href="https://juejin.im/post/5adea0106fb9a07a9d6ff6de">webpack4 入门</a>

<a href="https://github.com/ruanyf/webpack-demos">【阮一峰】webpack-demos</a>


