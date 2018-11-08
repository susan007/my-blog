#### parseInt
需要两个参数`parseInt(string, radix)`
##### 产生Nan的情况
* 第一个参数无法被转化为数字
* 第二个参数范围超出2~36（进制基数）
#### typeof
```js
typeof null = 'object'
```
JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。
因为null代表一个空指针，它的值为0x00，而0位object的类型标签，所以有了上述表达式。这实际是一个错误。

#### null instanceof object = false
Null也是一种数据类型，只有一个值null




