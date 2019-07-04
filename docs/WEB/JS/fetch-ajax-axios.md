这篇目的是学习前端获取资源（本地/网络资源）的方式，目前主要分为以下几种方式，下面分别说明了各个方式的特点和区别。

使用的时候一定要封装成模块，复用率高用起来也优雅。

#### XMLHttpRequest
* 用来获取资源（包括网络资源）
* 原生，规范，标准
* [XMLHttpRequest文档](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)
* [示例代码](../../../demo/ajax.html)
#### fetch
* 用来获取资源
* 原生，规范，标准
* 基于Promise
* [示例代码](../../../demo/fetch.html)
#### ajax
* 指网页开发技术的综合，包含XMLHttpRequest/xml/javascript/html等
* [Ajax-维基百科](https://zh.wikipedia.org/wiki/AJAX)
#### $.ajax
* jquery对XMLHttpRequest的封装
* 函数式编程
* [jQuery官方文档](https://api.jquery.com/jquery.ajax/)
```js
// 形式一
$.ajax('./data.json')
    .done(function() {})
    .fail(function() {})
    .always(function() {})

// 形式二
let order = {
    id: '123456',
    type: 'shopping'
}
$.ajax({
    method: 'POST',
    header: {
        'Content-Type': 'application/json',
        'auth-token': 'token'
    },
    url: 'https://www.example.com/orders',
    data: JSON.stringify(order)
}).done(function(response) {})
  .fail(function(error) {})
  .always(function() {})
```
#### axios
* 也是对XMLHttpRequest的封装
* 基于promise实现
* [官方文档](https://github.com/axios/axios)
```js
axios({
    method: 'GET',
    url: '/api/orders',
}).then(response => response.data)
  .catch(error => error)
  
axios({
method: 'POST',
url: '/api/orders',
data: {
    orderId: '110',
    orderMode: 'shopping',
    orderLocation: 'china'
}
})
```
