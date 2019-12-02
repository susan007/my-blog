Object.keys()引发的血案

## 背景

接到一个需求，根据后端返回的一个对象类型的数据(非常庞大，成百上千条数据)，按照标签指定的顺序，去显示和对象属性相应的标签及对应值，数据形式如下。

后端返回的的数据
```js
data = {
    100: 'Apple',
    101: '5SE',
    102: '16G'
}
```

对应的标签（放在本地的资源文件）
```js
export const tags = {
    101: '型号',
    100: '厂商',
    102: '内存'
}
```

产出的结果
```js
型号：5SE
厂商：Apple
内存：16G
```

## 尝试Object.keys()

机智的我看了看数据，一拍脑门，这不简单吗，直接去遍历资源文件tags对象的属性不就可以了，so easy~

实现一：
```js
import tags from '@/assets/tags'
// 获取key
const keys = Object.keys(tags)
```
获取tag和对应的值
```html
<div v-for="(key, index) in keys">
{{tags[key]}}: {{data[key]}}
</div>
```

实现二
```html
<div v-for="(val, key, index) in tags">
{{val}}: {{data[key]}}
</div>
```

就在我美滋滋的时候，测试反馈显示的顺序不是指定顺序。仔细看了看发现属性竟然是按照从小到大的顺序排列的，是的，属性被排序了，而且是按照从小到大。


## 探索Object.keys()/Object.getOwnPropertyNames()/Reflect.ownKeys()

### Object.keys()
经过查阅资料，发现Object.keys(obj)以数组形式，返回对象所有可枚举属性。顺序遵循for...in遍历对象返回的顺序，再看for...in。

### [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
以任意顺序返回对象的可枚举属性。为什么是任意顺序？其顺序依赖于浏览器实现。

> ...Because the order of iteration is implementation-dependent, iterating over an array may not visit elements in a consistent order. 

### for...in遍历对象属性顺序

* 如果属性名的类型是Number，那么Object.keys返回值是按照key从小到大排序
* 如果属性名的类型是String，那么Object.keys返回值是按照属性被创建的时间升序排序
* 如果属性名的类型是Symbol，那么逻辑同String相同

这解释了为什么我遍历出来的顺序总是从小到大排列的。参考[EcmaScript规范](https://tc39.es/ecma262/#sec-fundamental-objects)

### 其他方法
有文章提到以下两个方法会保证对象属性的顺序，查询资料发现并不是如此，`Object.getOwnPropertyNames`和`Reflect.ownKeys`。但是查看文档提示如下：

* `Object.getOwnPropertyNames`： 数组中枚举属性的顺序与通过 `for...in` 循环（或 `Object.keys`）迭代该对象属性时一致。数组中不可枚举属性的顺序未定义。
* `Reflect.ownKeys`：它的返回值等同于`Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))`。

## 如何解决？
### 方式一
然后给出了[建议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)

> 如果你想让对象的遍历顺序兼容所有的浏览器，那么你可以使用两个数组来模拟 (一个做为keys，一个做为 values)， 或者建立一个由单一属性的对象组成的数组等。

### 方式二
使用ES6的`Map()`类型代替，也是一种类似于对象的键值对形式。

* 不限键的类型。
* Map()结构原生提供返回键名的遍历器`Map.prototype.keys()`，并且是按照插入时的顺序返回。


###### 参考文章

[ECMAScript规范](https://tc39.es/ecma262/#sec-fundamental-objects)

[5分钟彻底理解Object.keys](https://zhuanlan.zhihu.com/p/40601459)

[Object.keys(..)对象属性的顺序？](https://juejin.im/post/5c88ce0e5188257f882f0ef8)

[MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

[Map()的营救](https://www.jstips.co/zh_cn/javascript/map-to-the-rescue-adding-order-to-object-properties/)
