javascript中的json对象

### 字面量
* 字面量：固定的值，非变量，可从字面上理解脚本。
* 字符串字面量：使用`"`或者单引号包围起来的零个或多个字符组成的。
* 对象字面量：使用`{}`括起来的零到多个名值对。

### 何时是JSON,何时不是？
* string上下文中是json字符串
* 对象字面量上下文中是对象字面量
```js
// json字符串
let str = '{"name": "张全蛋"}'

// 对象字面量
let obj = {"name": "张全蛋"}
```

### 两个函数
```js
// json字符串
let str = '{"name": "张全蛋"}'
// 序列化为对象
let obj = JSON.parse(str)
// 序列化为json字符串
let testStr = JSON.stringify(obj)
```

