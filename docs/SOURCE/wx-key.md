学习小程序列表渲染的时候，涉及到几个属性`wx:for`、`wx:for-index`、`wx:for-item`、`wx:key`，前三个都非常好理解绑定要渲染的数组、指定数组当前下标的变量名、指定数组当前元素的变量名，今天重点讲讲较难理解的`wx:key`。

### [官方定义](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/list.html#wx:key)

如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 input 中的输入内容，switch 的选中状态），需要使用 wx:key 来指定列表中项目的唯一的标识符。

乍一看有点难理解啊2333，那我们就动手做做看看列表渲染加和不加wx:key会出现什么？

#### wx:key 警告

js文件中的数据
```js
data: {
    switchArray: [
          {
            id: 0,
            value: '朋友圈'
          },
          {
            id: 1,
            value: '扫一扫'
          },
          {
            id: 2,
            value: '摇一摇'
          }
        ]
}
```

源码
```html
<switch wx:for="{{switchArray}}" wx:for-index="myIndex" wx:for-item="myItem">{{myIndex}}: {{myItem.id}}</switch>
```
此时控制台警告如下：
```js
// 现在你可以为`wx：for`提供attr`wx：key`来提高性能。
Now you can provide attr `wx:key` for a `wx:for` to improve performance.
```
加上wx:key警告消失
```js
// 值为被循环对象的某个属性，且该属性值为字符串或数字
wx:key="id"
```
#### wx:key 作用

列表中项目的位置会变化（比如排序），或者会插入新的项目（前后插入新项目），而此时要保持已有项目的特征和状态（比如input的输入值或者checkbox的勾选状态），就要使用wx:key来指定列表中项目的唯一标识符。

#### wx:key 形式
* 字符串或数字：item的某个property,且不能重复。（比如上例中的id）
* 保留关键字`*this`，需要item是一个唯一的字符串或数字。



