# var、let和const
## 背景
在js函数中的var声明，其作用域是函数体的全部。也就是说通过var声明的变量存在变量提升的特性，变量声明会被提取到函数最顶部。
这样的特性在使用中很容易导致难发现的坑。

ES6中采用新的变量声明关键字```let```和```const```，弥补了var的缺点。

注意：javascript只有声明的变量会提升，初始化的不会。也就是```var x=10```这种形式只会提升```var x```而不会提升初始化```x=10```，提前使用打印出来的是```undefined```

## var
#### js没有块级作用域
###### 例子一
```js
for(var i=0;i<10;i++){
    ...some codes...
}
console.log(i)//打印出来是10
```
* 可以看到循环结束后我们居然可以访问到变量```i```，因为没有块级作用域导致变量提升，所以i的访问范围是整个函数作用域。
* 当加载js文件的时候，js引擎会将所有的var声明和function函数声明都举到函数开始处优先执行。
* 在代码块内声明的变量，其作用域是整个函数作用域，而不是块级作用域。

#### 循环内变量过度共享
###### 例子二
```js
var messages = ["喵！", "我是一只会说话的猫！", "回调（callback）非常有趣!"];
   for (var i = 0; i < messages.length; i++) {
     setTimeout(function () {
       alert(messages[i]);
   }, i * 1500);
 }
```
* 可以看到结果是打印三次undefined，过度共享变量导致出错。

## let
#### let特性
* let声明的变量拥有块级作用域，其中块级作用域范围是```函数内部```或者```块中{ 和 }之间的区域)```。
* let声明保留了变量提升的特性，但不会盲目提升。
* let声明的全局变量不是全局对象的属性（不可通过window.[variable-name]）。
* 在for-of/for-in/for循环中每次迭代时都为```i```创建新的绑定。
* let声明的变量直到控制流到达该变量被定义的代码行时才会被装载，所以在到达之前使用该变量会触发错误。
* 用let重定义变量会抛出一个语法错误。
* let可以称作是更完美的var，用法和var类似。

#### let底层实现
###### 例子三
```js
var funcs = [];
for (let i = 0; i < 3; i++) {
    funcs[i] = function () {
        console.log(i);
    };
}
funcs[0](); // 0
```
实际底层做法
```js
// 伪代码
(let i = 0) {
    funcs[0] = function() {
        console.log(i)
    };
}

(let i = 1) {
    funcs[1] = function() {
        console.log(i)
    };
}

(let i = 2) {
    funcs[2] = function() {
        console.log(i)
    };
};
```
* 每次迭代时都创建一个新变量，拥有自己的词法作用域。
* 以之前迭代中同名变量的值将其初始化。

## const
#### const特性
* const声明变量时必须要赋值，且后续不可随意修改，否则会报语法错误SyntaxError；类似于java中的final。
* 拥有块级作用域。

###### 参考资料
###### 《深入浅出Es6》
###### <a href="https://github.com/mqyqingfeng/Blog/issues/82" style="color:#555">mqyqingfeng博客</a>

