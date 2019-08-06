学习小程序列表渲染的时候，涉及到几个属性`wx:for`、`wx:for-index`、`wx:for-item`、`wx:key`，前三个都非常好理解绑定要渲染的数组、指定数组当前下标的变量名、指定数组当前元素的变量名，今天重点讲讲较难理解的`wx:key`。

### [官方定义](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/list.html#wx:key)

如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 input 中的输入内容，switch 的选中状态），需要使用 wx:key 来指定列表中项目的唯一的标识符。

乍一看有点难理解啊2333，那我们就动手做做看看列表渲染加和不加wx:key会出现什么？

#### 不加wx:key

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



