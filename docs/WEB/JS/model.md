js模块化实现方式介绍
#### 闭包
* 最基本的模块化，产生一个独立的代码作用快
```js
function model(){
    let obj = {
        name: 'susan',
        age: 18
    }
    function init(){
        ...
        return obj
    }
    return {
        init: init()
    }
}

$(function(){
    model.init
}())
```
#### commonJs
* 最初应用于node模块系统，同步方式编写模块
```js
// 编写模块model
module.exports = {
    name: 'susan',
    age: 18,
    init(){
        ...
        return {name, age}
    }
}
// 使用require导入模块
let model = require('model')
model.init()
```
#### AMD
* 定义了一种异步模块规范，requireJs是对该规范的实现

基本用法定义user.js模块
```js
// 参数分别为依赖的其他模块，回调
define([depends], function(){
    let userInfo = []
    return {
        init(){...},
        getInfo(){...},
        setInfo(id, info){
            userInfo.push({id, info})
        }
    }
})
```
定义入口文件app.js，入口文件指的是讲所有模块汇总在一个require中暴露给外界使用
```js
// 参数配置
require.config({
    baseUrl: 'src',
    paths: {
        jquery: 'src/js/lib/jquery-3.3.1'
    }
})
require(['js/user'],function(user){
    user.init()
    document.getElementById('addUser').addEventListener('click', function(){
        user.setInfo(id, info)
    })
})
```
在html中使用
```js
<script data-main="./app.js" src="./js/lib/require.js"></script>
```

#### CMD
* 也是一套异步规范,阿里玉伯推广sea.js中对模块化规范的产出
* module代表当前模块
* module.exports定义模块对外接口
* 作者已经放弃治疗了，不再维护

定义模块a.js
```js
define(function(require, exports, module){
    let name = 'susan'
    let age = 18
    exports.init = function(){
        return {name, age}
    }
})
```
定义入口文件
```js
// 定义模块默认传入三个参数
define(function(require, exports, module){
    // 按需加载
    let a = require('./a')
    console.log(a.init())
})
```
html中引入入口文件
```js
<body>
<script src='sea.js'></script>
<script>
seajs.use('./js/main.js')
</script>
</body>
```

#### ES6模块化
定义模块,fun.js
```js
function add(x, y){
    return x+y
}
function reduce(x, y){
    return x-y
}
export {add, reduce}
// 或者写法如下,导出一个整体,使用方式稍有差异
export default {add, reduce}
// 调用如下 名字随便起
import module from './fun.js'
module.add(1, 2)
```
加载模块
```js
import {add, reduce} from './fun.js'
function add(){
    add(10, 20)
}
```

###### 参考资料

[阮一峰博客](http://javascript.ruanyifeng.com/nodejs/module.html)

[ES6入门](http://es6.ruanyifeng.com/#docs/module)

[掘金博文](https://juejin.im/post/5b4420e7f265da0f4b7a7b27)

[知乎玉伯:amd&&cmd区别](https://www.zhihu.com/question/20351507)

