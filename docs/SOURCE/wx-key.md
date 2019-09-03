此贴作为小程序采坑帖，记录小程序开发中遇到的采坑记录

## `wx:key`
学习小程序列表渲染的时候，涉及到几个属性`wx:for`、`wx:for-index`、`wx:for-item`、`wx:key`，前三个都非常好理解绑定要渲染的数组、指定数组当前下标的变量名、指定数组当前元素的变量名，今天重点讲讲较难理解的`wx:key`。

### [官方定义](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/list.html#wx:key)

如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 input 中的输入内容，switch 的选中状态），需要使用 wx:key 来指定列表中项目的唯一的标识符。

乍一看有点难理解啊2333，那我们就动手做做看看列表渲染加和不加wx:key会出现什么？

### wx:key 警告

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
### wx:key 作用

列表中项目的位置会变化（比如排序），或者会插入新的项目（前后插入新项目），而此时要保持已有项目的特征和状态（比如input的输入值或者checkbox的勾选状态），就要使用wx:key来指定列表中项目的唯一标识符。

### wx:key 形式
* 字符串或数字：item的某个property,且不能重复。（比如上例中的id）
* 保留关键字`*this`，需要item是一个唯一的字符串或数字。

## `cover-view`
cover-view是小程序中的一个视图容器，可覆盖在原生组件上（map/video等组件层级很高，自己设置z-index不生效的，所以cover-view就出现了）。
### [局限性](https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html)
* cover-view容器只能包含cover-view/cover-image/button。（对，你没看错，就支持嵌套这几种控件2333）
* 诸多bug，比如不支持嵌套其他组件（会直接被忽略），不支持设置border等样式。
### 我妄想在map上覆盖一个input输入框怎么办？
* 直接在map上写一个input，虽被忽略但是能获取焦点但是无法设置样式。
* 写一个cover-view悬浮在input相同的位置，给cover-view设置样式，假装我是一个input。
* input焦点有了、样式有了，假装完美，但是问题多多，慎用。
* [参考代码](https://www.jianshu.com/p/6f8f13c613e7)

## map
微信小程序地图组件

### 坑汇总
* 写在map中的元素，视觉上是浮在map之上，实质上设置事件无效，因此建议写在cover-view中。

## 自定义组件
直接给子组件绑定事件不生效，需要设置事件触发并设置事件监听
### 流程总结如下
* `triggerEvent`：在组件中用来触发事件
```js
// 假如component名称为 my-component
Component({
  properties: {},
  methods: {
    myEvent: function(){
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {
          bubbles: false, // 是否事件冒泡（事件冒泡你懂得，不过真有这样的需求？）
          composed: true, // 设置为true会触发组件内部的事件，也就是假如有一个自定义组件也定义了一个事件，那么这个事件也会被触发
          capturePhase: true // 事件是否拥有捕获阶段
      } // 触发事件的选项
      this.triggerEvent('myEvent', myEventDetail, myEventOption)
    }
  }
})
```
* 给组件添加事件
```js
// 在my-component中添加事件
<button bind:tap="myEvent">点我点我</button>
```
* 页面中调用组件并绑定事件
```js
// 页面中引入组件
<view>
    <my-component bind:myEvent="toDo"></my-component>
</view>
// 父亲中定义事件
toDo: function(){
    console.log('你造吗，我是你爸爸。')
}
```

## wx:for获取某个item的值
* 可直接使用`data-`绑定属性获取，比如`data-info="{{item}}"`给每个元素添加值；直接在相应元素的事件`function(e)`中，通过e可以获取到整个item的值。

## 引入[weui.wxss](https://github.com/Tencent/weui-wxss)

* 拷贝dist-style文件夹下的weui.wxss到小程序的最外层目录中
* 在app.js中导入weui.wxss文件（@import './weui.wxss'）
* 直接在page中使用weui.wxss的样式即可，具体可参考example文件夹的例子

### 注意
在Components中使用weui.wxss样式不生效，需要单独按需把样式文件拷贝进组件文件夹中

### 其他UI库

[小程序UI库](https://mina.wiki/eco/ui.html#weui-for-%E5%B0%8F%E7%A8%8B%E5%BA%8F)

## 微信支付
正在进行中还未验证

* [小程序支付交互流程](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_4&index=3)
* [预留参考文章](https://segmentfault.com/a/1190000007737052)


## 登录

微信小程序登录相关内容，持续更新。
* [小程序登录流程记录](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)
