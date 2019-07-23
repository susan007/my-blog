this的指向只有在调用的时候才能确定，即this永远指向最后调用它的那个对象。

#### 改变this指向
* call
```js
// 用法
Fun.call(this,arg1,arg2,arg3...)
```
继承
```js
function Person(name) {
  this.name = name
}

function Student(name, id) {
    // 继承了父亲的name属性
  Person.call(this, name)
  this.id = id
}

let s1 = new Student('susan', 110)
console.log(s1) // {name: 'susan', id: 110}
```
指定上下文的this
```js
let name = 'lily'
function f1() {
  console.log(this.name)
}

function f2() {
  return {
      name: 'susan'
  }
}

f1.call(f2()) // 打印出susan
```
* apply：同call，只是传参方式为数组而不是列表。
```js
Fun.apply(this, [arg1, arg2...])
```

* bind
```js
var sum = function(a, b) {
  return a + b;
};

var add5 = sum.bind(null, 5);
console.log(add5(10));
```

###### 参考资料

[javascript this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)

[call用法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

[apply用法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

[bind用法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

[bind stack overflow](https://stackoverflow.com/questions/2236747/use-of-the-javascript-bind-method)




