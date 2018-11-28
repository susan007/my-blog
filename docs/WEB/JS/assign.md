js方法之Object.assign()

### 语法
```js
Object.assign(target,...sources)
```
* target: 可枚举属性复制到的对象
* sources: 对象

### 使用
```js
var one = {one: 'one'}
var two = {two: 'two'}
var total = Object.assign(one, two)
console.log(total) // {one: 'one', two: 'two'}
```
