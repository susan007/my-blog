目前不是所有浏览器都支持Es6的，我们使用的时候需要先转化为Es5在现有环境执行。

## Babel 环境搭建
#### 安装babel插件
```js
npm install --save-dev babel-cli
```
#### 安装babel转码规则插件
```js
npm install babel-preset-env --save-dev //上述规则均可
```
* 在没有任何配置选项的情况下，`babel-preset-env` 与 `babel-preset-latest`（或者`babel-preset-es2015`，`babel-preset-es2016`和`babel-preset-es2017`一起）的行为完全相同。

#### 配置文件.babelrc
Babel的配置文件是.babelrc，其配置如下：
```js
"presets": [
    ["env",{
        "targets": {
            "browsers": [
                "last 2 version", //支持每个浏览器最后两个版本
                "safari >= 7" //safari大于等于7版本所需的polyfill和代码转换
            ]
        }
    }]
],//设定转码规则
"plugins": []
```
#### 安装babel转码工具
使用babel-cli工具进行命令行转码
```js
npm install --global babel-cli
```
#### 使用babel转码工具
```js
//转一个文件
babel test.js -o mtest.js
//转整个目录
babel src -d dist
```
#### package.json中配置
```js
{
    "scripts": {
        "build": "babel src -d dist"
    }
}
```
#### npm执行
```js
npm run build
```
