# js 运算符
## 背景
运算符是一门语言中较为基础的内容，但是小小的运算符可以挖出大大的坑，下面介绍一下js中容易出错的运算符以及类型转换。

如果发现文中错误欢迎指出，谢谢~

## 运算符
#### 一元运算符
* delete：删除对象某个属性
```js
delete object.property
delete object['property']
```
* typeof：判断给定对象的类型
```js
typeof 10 === 'number'
```
* +：计算操作数的数值，如果操作数不是一个数值，会尝试将其转换成一个数值
```js
+3 //3
+"3" //3
+true //1
+false //0
+null //0
+"name" //NaN
+function(val){return val} //NaN
```
* -：将操作数转换为number类型并取反
```js
-3 //-3
-"4" //-4
```
#### 算数运算符
* +：加法用于数值求和或者字符串拼接

| 操作类型\结果类型 | Number | Boolean | String |
| :--- | :---| :--- | :--- |
| Number | Number | Number | String |
| Boolean| Number | Number | String |
| String | String | String | String |

* -：减法用于求两个操作数的差值

可以看出减法操作是首先进行类型转换，转换为数值再计算，否则就NaN
```js
console.log("1"-2) //-1
console.log(2-"1") //1
console.log(2-true) //1
console.log(2-false) //2
console.log(2-null) //2
console.log(3-'a') //NaN
console.log(1-function(val){}) //NaN
```
#### 关系运算符
* 比较运算符：< > <= >= in instanceof注意如下特殊规则：
```js
* 比较数字和字符串，字符串会转为数字值。
* 比较数字和布尔，布尔会转换为数字值。其中true转换为1，false转换为0。
* 比较对象和数字/字符串，返回对象的默认值。
* 比较对象和对象，将作为对象进行比较。当引用相同对象时才为true。
```
* == | !=：标准相等操作符

当两个操作数类型不相等时，会在比较前尝试将其转换为相同类型。

* === | !==：严格相等操作符

如果操作数类型不同则会永远返回false。

* instanceof：测试构造函数的property是否出现在原型链中的任何位置。

```js
function Person(name, age) {
    this.name = name
    this.age = age
}

var me = new Person('玉面飞龙', 18)

console.log(me instanceof Person) //true
console.log(me instanceof Object) //true
console.log(Person.prototype instanceof Object) //true
```






