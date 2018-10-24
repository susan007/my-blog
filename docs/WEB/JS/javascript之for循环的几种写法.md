
# javascript之for循环的几种写法

## 背景

javascript中的for循环选择多种多样，可你知道其中的差别在哪里吗？什么时候又该用哪种循环才是最佳策略？以上这些是本文想讨论的，欢迎交流。


## 说明

#### 1、20年前的for循环

```js
//20年前的写法
let len = myArray.Length
for (let index = 0; index < len; index++) {
  console.log(myArray[index])
}
```
* 中规中矩。

#### 2、forEach

```js
//ES5的写法
myArray.forEach(function(index){
    //操作你的index，index即为数组中的元素
})
```
* 缺点，没有返回值。

#### 3、for...in

```js
//ES5的写法，劝你慎重
for (let index in myArray) {
  // 千万别这样做
  console.log(myArray[index]);
}
```
* 最糟糕的做法，因为此时的index是字符串.
* index不一定按照数组的顺序输出，很吓人。
* 除了会遍历数组元素，还会遍历自定义属性。
* 仅适用于遍历普通对象，不适用于遍历数组。
```js
//此处举个栗子
Array.prototype.age = 10
Array.prototype.unique = function(){
    console.log('unique')
}
let mArray = [1,2,3]
mArray.name = 'mName'
for(let index in mArray){
    console.log(index)
}

//打印结果
> 0
> 1
> 2
> name
> unique
> age
```

#### 4、for...of
```js
/**ES6写法
*支持数组
*类数组对象（如：NodeList对象）
*字符串
*Map
*set
*/
for (let value of myArray) {
  console.log(value);
}
```
* 适用于遍历类数组对象、字符串、Map、Set。
* 不支持遍历普通对象。
