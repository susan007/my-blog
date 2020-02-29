
## Traps？
什么是Traps？Traps(陷阱)是内部方法检测工具。每当与对象进行交互时，就在调用基本的内部方法。

```js
// 定义一个对象字面量
const user = {}
user.name = '西门吹雪'
```
然而实际上面的操作，是调用了Javascript引擎提供的`[[set]] trap`。

`[[set]] trap`是`user.name = '西门吹雪'`语句执行之前要执行的函数。`[[set]] trap`长下面这个样子。
```js
// 在这个[[set]] trap中将拒绝任何程序将name属性设置为西门吹雪
const handler = {
    set: function(target, prop, val) {
        if(prop === 'name' && val === '西门吹雪') {
            throw '用户名已被注册！'
        }
        target[prop] = val
        return true
    }
}
```
上面我们自定义了`[[set]] trap`，接着我们定义一个Proxy(代理)并用它创建一个对象，通过自定义的`[[set]] trap`添加name属性
```js
const user = new Proxy({}, handler)

user.name = '陆小凤'
console.log(user.name) // 陆小凤

try {
    user.name = '西门吹雪'
    console.log(user.name)
}catch (e) {
    console.log(e) // 用户名已被注册！
}
```
从打印结果可以看出，自定义的Proxy拦截了Javascript引擎的`[[set]] trap`，同时执行自定义的`[[set]] trap`，所以当`name`属性的值设置为`西门吹雪`时就会被被拦截并抛出一个异常。

## Proxy？
Proxy(代理)对象又叫，用于定义对象操作的自定义行为。

Proxy(代理)允许您拦截给定内部方法的执行。

只要数据类型符合对象类型，都能被代理。比如数组、函数、对象。。。(#^.^#)

### All the Proxy Traps
排名不分先后。

| Internal Method | Handler Method | 作用 |
| --- | --- | --- |
| `[[get]]` | get | |
| `[[set]]` |  set | |
| `[[delect]]` |  deleteProperty ||
| `[[OwnPropertyKeys]]` |  ownKeys ||
| `[[HasProperty]]` |  has ||
| `[[Call]]` |  apply ||
| `[[DefineOwnProperty]]` |  defineProperty ||
| `[[GetPrototypeOf]]` |  getPrototypeOf ||
| `[[SetPrototypeOf]]` |  setPrototypeOf ||
| `[[IsExtensible]]` |  isExtensible ||
| `[[PreventExtensions]]` |  preventExtensions ||
| `[[GetOwnProperty]]` |  getOwnPropertyDescriptor ||
| `[[Enumerate]]` |  enumerate ||
| `[[Construct]]` |  construct ||

### 从基础Traps开始
先来看看`set get delete`方法如何使用。注意，`set delete`方法必须返回布尔值，这样Javascript引擎才能判断是否修改属性。
```js
// 定义Proxy处理handler
const logger = []
const loggerHandler = {
    get: function(traget, prop) {
        logger.push(`大侠${prop}， 来自${target.name}，在${new Date()}注册为该平台用户！`)
        return target[prop] || target.getItem(prop) || undefined
    },
    set: function(target, prop, val) {
        if(prop === 'name' && val === '西门吹雪') {
            throw '用户名已被注册！'
        }
        target[prop] = val
        return true
    },
    deleteProperty: function(target, prop) {
        if(prop.includes('secret')) {
            throw ('小秘密无法删除！')
        }
        return true
    }
}

// 定义Proxy对象
const user = new Proxy(
    {
        name: '西门吹雪',
        secretOne: '告诉你一个秘密：你笑起来真好看！'
    },
    loggerHandler
)

// 访问get方法
const { secretOne } = user
console.log(secretOne) // 告诉你一个秘密：你笑起来真好看！

// 访问delete方法
console.log('删除结果', delete user.name) // true

// 访问set方法
try {
    user.name = '西门吹雪'
} catch(e) {
    console.log(e) // 用户名已被注册！
}

// 访问delete方法
try {
    delete user.secretOne
} catch(e) {
    console.log(e) // 小秘密无法删除
}
```


[参考文档](https://alligator.io/js/proxy-traps/)
[参考文档](https://hackernoon.com/introducing-javascript-es6-proxies-1327419ab413)