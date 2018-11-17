总结一下箭头函数不适用的场景。源于一个问题，在vue的methods中使用箭头函数时，无法获取到正确的this。
官方文档这样解释：不应使用箭头函数定义method函数，因为，箭头函数没有自己的执行期上下文，this和arguments都是从父函数继承而来，
此时调用vue实例中的变量等将返回undefined。
### 对象的方法中不宜使用箭头函数
```js
const test {
    count = 0
    countClick = () => {
        this.count++
    }
}
```
### 深层的调用链
### 有动态上下文的函数 
* 事件处理程序是通过将 this 设置为事件的 currentTarget 属性来调用。
* 如果您仍在使用 jQuery ，则大多数 jQuery 方法将 this 设置为已选择的 dom 元素。
* 如果您正在使用 Vue.js ，则方法和计算函数通常将 this 设置为 Vue 组件。


