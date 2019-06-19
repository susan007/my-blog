这面博客记录一些面试相关的问题，有自己遇到的有朋友遇到的，常常复盘，必有回响，愿大家都有个美好前程。
### 金山wps
#### 自我介绍
#### 介绍下你做的项目，用了什么技术，实现了哪些功能？
#### 说说nginx是什么？聊聊对nginx的原理和你的理解
#### 什么是ssr?原理和具体过程是什么？
#### 浏览器渲染原理
#### 服务端渲染原理
#### 前端如何做测试？如何与服务器做接口测试？
#### 跨域是什么？如何解决？
#### 移动端如何做适配？什么是flex布局？
#### 小程序框架存在哪些问题？如何解决？
#### 上传下载功能你是如何实现的？
#### 说说项目中遇到的问题有哪些？如何解决？
#### 浏览器如何做兼容？
### 柯莱特
#### vue兄弟组件之间传值
#### vuex的使用方法
#### mutation和action有什么联系，有什么区别
#### vue-router路由如何传参？如何获取参数？
#### v-model='message'其中message需要提前定义吗？在哪定义？不定义会怎样？
#### 页面第一次加载会触发哪些生命周期，实例挂载完成是在哪个阶段？
#### v-if有哪些性能问题？
#### 代码运行结果
```js
var a=20
function show(){
    console.log(a)
    var a=10
}
show()
```
#### 代码运行结果
```js
const promise = new Promise((resolve, reject) => {
    console.log(3)
    resolve()
    console.log(5)
})
promise.then(() => {
    console.log(4)
})
console.log(5)
```
#### 代码运行结果
```js
var test = (function(x) => {
    console.log(110)
    this.x = x
    return function(y){
        console.log(110)
        return this.x+y
    }
}(function(x, y){
    console.log(110)
    return x
}(1, 2)))

console.log(test(3)) // 4
```
> 分析：考查立即执行函数和闭包
测试结果是我自己加的，打印顺序为110，111，112。所以它的执行是先计算立即执行函数的参数，再传入参数执行立即执行函数返回的匿名函数。

#### v-show和v-if指令的共同点和不同点

#### 代码运行结果
```js
bar()
var foo = 10
function bar(){
    console.log(foo) // undefined
    if(!foo){
        var foo = 20
    }
    console.log(foo) // 20
}
```
> 分析：考查函数声明和变量声明有提升这个梗
编译后在内存中，代码是下面这样子滴
```js
var foo
function bar(){...}
foo = 10
```
#### 用css实现一个宽度为屏幕20%的正方形

### 健客网
#### 代码执行结果
```js
var a={'name': 'aaa'}
var b=a
b={'name': 'bbb'}
console.log(a.name)

var c=a
c.name = 'ccc'
console.log(a.name)
```
#### 代码执行结果
```js
var name = 'aaa'
function f(){
    console.log(name)
    var name = 'fff'
}
f()
```
#### 代码执行结果
```js
var name = 'www'
function getName(){
    console.log(this.name)
}
var o = {
    name: 'ooo',
    getName: getName
}
var f = o.getName
f()
```
#### 代码执行结果
```js
setTimeout(function(){
    console.log('timeout')
})
new Promise(function(resolve){
    console.log('promise')
    for(var i=0; i<1000; i++){
        i==99&&resolve()
    }
    console.log('promise2')
}).then(function(){
    console.log('then1')
})
console.log('global1')
```
### 用友
#### 行内元素与块状元素的区别
#### 以下哪个标签不属于html5标准（选项实在看不清楚，知道是考查html5就行）
#### css选择器的优先级
#### 说说你对定位的理解
#### 请写出三种清除浮动的方法
#### 如何实现不知道宽和高的元素水平垂直居中
#### 有一个文字内容容器<span class='text'>，在不编写任何JavaScript代码的前提下，如何让用户可以自由的编辑其中的文字
#### 为以下元素编写一段不超过10行的css，使其显示为一个红色的指向右边的等边直角三角形
```js
<span class="trangle"></span>
```
#### 代码