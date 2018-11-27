vue中使用其他js库的方式，优势从高到低排列

### 方式一：作为vue原型对象的属性
```js
import mJs from 'mJs'
// 三个参数：目标对象  自定义属性  属性的特性
Object.defineProperty(Vue.prototype, '$mJs', {value: 'mJs'})

//访问
console.log(this.$mJs)
```

### 方式二：作为插件使用
```js
// 可以学习下自己写一个插件 不过这种方式有时候有点重 我觉得
import MyCom from 'MyCom'
Vue.use(MyCom)
```

### 方式三：直接引入
```js
// 中规中矩
import component from 'component'
// 直接使用
component.isOk() ? 'yes': 'no'
```

### 方式四：添加到window上
```js
// 你可别这样 不能使用服务端渲染
window.myJs = require('component')
// 使用
myJs.isOK() ? 'yes' : 'no'
```

###### <a href="https://www.css88.com/archives/7939">原文链接</a>
