### 函数声明
* 必须有函数名
* 独立的代码块，可独立调用
* 变量和函数的声明有变量提升这个梗，相关面试题见[函数声明和函数表达式区别](http://web.jobbole.com/87534/)

```js
function test(arg1, arg2) {
  // code block
}
```

### 函数表达式
* 字面量创建，可以被赋值给变量或作为属性
* 可作为函数的参数或者返回值
* 总是其他表达式的一部分
* 函数名可选

```js
var test = function(arg1, arg2) {
  // code block
}
```

```js
getName(function getInfo() {
  return info
})
```

### 箭头函数
* 函数表达式简化版
* 一个参数可不带括号,零个或两个及以上参数需要带括号
* 代码块是一个表达式可不带{}和return，否则要带{}以及return，不然返回值为undefined

```js
name => 'hello' + name

() => {console.log('箭头函数')}

(name, country) => {
    let info = {}
    info.name = name
    info.country = country
    return info
}
```

### 函数构造函数（不常用）

```js
// 创建了一个能返回两个参数和的函数
const adder = new Function("a", "b", "return a + b");

// 调用函数
adder(2, 6);
//  8
```

### 生成器函数（未来函数）


