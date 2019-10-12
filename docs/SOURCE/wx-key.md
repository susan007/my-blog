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


## [echarts使用](https://github.com/ecomfe/echarts-for-weixin)

在微信小程序中使用图表插件，这里总结一下echarts的使用，另外还有其他图标库供选择[antv-f2小-程序示例](https://github.com/antvis/wx-f2)（antv-f2是静态的图表，点击无交互）。

我选择echarts是因为是大厂出品且关注度相对较高，采坑的人相对较多，经验帖或者issues丰富，且是动态交互更友好。（虽然它已经八个月没更新了o(╯□╰)o）

### 引入echarts库
* 直接下载[echarts](https://github.com/ecomfe/echarts-for-weixin)库，并拷贝ec-canvas文件夹到你的工程中。
* 在第一步下载的工程中，pages文件夹为小程序使用示例，可多做参考。

### 使用
* 注册组件`"ec-canvas": "/ec-canvas/ec-canvas"`
* wxml中使用组件`<ec-canvas id="mychart-dom-pie" canvas-id="mychart-pie" ec="{{ec}}" params="{{params}}"></ec-canvas>`
* js文件中实例化图表，主要方法使用echarts中的initChart(canvas, width, height)方法。（强烈建议参考官方demo）
* 至此，page中使用echarts已经结束了，图像可以正常展示出来。但我们的目标是做成组件，方便在任何页面引用，那就继续。

### 封装组件
* 传参：思考下哪些数据需要动态传入，将它们提取出来，比如饼图中，我的提取如下：
```js
// series中的data参数需要作为参数动态传入
params: {
    type: Array,
    value: [{
        value: 55,
        name: '苹果'
        }, {
        value: 20,
        name: '香蕉'
        }, {
        value: 10,
        name: '橘子'
        }]
}
```
* 改写`initChart(canvas, width, height)`方法为`initChart(canvas, width, height, params)`，因为params参数势必要动态传入。
* 改写`ec-canvas.js`文件，加入params参数，并修改onInit方法，加入参数params，至此完成组件封装。
```js
// ec-canvas.js文件中加入我们的参数
properties: {
    params: {
      type: Object,
      observer: function (newVal, oldVal) {
        if (newVal.length == 0) {
          return;
        }
        this.init();
      }
    }
  }
```

```js
// ec-canvas.js文件中，onInit方法中加入参数this.data.params
this.chart = this.data.ec.onInit(canvas, res.width, res.height, this.data.params);
```

### 采坑和总结
#### 封装echarts组件为什么改写源码？
>  一开始没改写源码，而是在组件的methods中对 initChart(canvas, width, height, params) 方法做了封装initPie（为了获取父组件传的参数），然后在wxml中使用bind:init="initPie"，但是这样渲染出来的图是静态无交互的，达不到效果。最终使用上面修改源码的方法得到的是正常的图。
如果你有更好的解决办法请告诉我，非常感谢(#^.^#)
```js
/**
   * 组件的方法列表
   */
  methods: {
    initPie: function(e) {
      console.log('--initPie--', e)
      return initChart(e.detail.canvas, e.detail.width, e.detail.height, e.target.dataset.params)
    }
  }
```
wxml文件中调用方法initPie
```html
<ec-canvas id="mychart-dom-pie" canvas-id="mychart-pie" ec="{{ec}}" bind:init="initPie" data-params="{{params}}"></ec-canvas>
```

###### 参考文章 [小程序引入多个e-charts图表](https://juejin.im/post/5c74af0ef265da2dd0524c9e)

#### 圆环图点击后中间部位渲染出颜色？

点击圆环图，莫名其妙圆圈中间白色部分也有相应颜色，官方没有给出解决办法，在issues中看到[非官方解决办法1](https://github.com/ecomfe/echarts-for-weixin/issues/480)[非官方解决办法2](https://github.com/ecomfe/echarts-for-weixin/issues/314)。

按照上面的解决办法，发现点击图例后又出现了圆环渲染内径的情况，所以取消掉了图例的点击事件`selectedMode： false`。

#### 一个页面中加载多个echarts图表，滚动后图表卡顿或显示为空白

这个问题官方也没解决，请参考issues解决思路[echarts图表空白](https://github.com/ecomfe/echarts-for-weixin/issues/331)


## [wx.navigateTo](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html#%E5%8F%82%E6%95%B0)
这里想特别说一下小程序跳转新加的事件events和eventChannel，这两个东西可以完成跳转页面之间的通讯。熟悉android或者java的小伙伴一定不陌生，对照handle、eventBus去理解，甚至js中的dispatchEvent事件。

应用场景：待支付订单列表A页面进入订单详情B页面并完成支付，此时通知订单列表A页面刷新数据，诸如此类。

### 概念
* eventChannel: 用于页面间事件通讯
* events: 监听被打开页面传递给当前页面的数据
* eventChannel.emit: 触发一个事件
* eventChannel.on: 监听一个事件

### 使用
当前页触发跳转页面事件，跳转到test页面（非tabbar页面）
```js
wx.navigateTo({
    url: '/pages/test',
    events: {
        // 监听事件
        myEvent: function(data) {
          // do something
          console.log('被打开的页面给我传数据了', data)
        },
        testEvent: function(data) {
            console.log(data) // 打印：test
        }
    },
    success: function(res) {
        // 触发myEvent事件
      res.eventChannel.emit('myEvent', {data: 'now'})
    }
})
```
test页面接收/传递数据
```js
Page({
    onLoad: function(option) {
      const eventChannel = this.getOpenerEventChannel()
      // 监听当前页面触发的事件
      eventChannel.on('myEvent', function(data) {
        // do something
        console.log(data) // 打印：now
      })
      eventChannel.emit('testEvent', {data: 'test'})
    }
})
```

## vant-weapp使用
在微信小程序中使用vant-weapp组件库，可以直接用npm安装使用，具体[请戳这里](https://github.com/youzan/vant-weapp)。
## wxs应用
wxs是小程序的一套脚本语言(和js非常非常像，但是对es6支持的不够友好)，无法与js互相调用，它可以运行在wxml中。
```js
// 定义一个wxs文件 util.wxs
// 格式化价格
function formatPrice(num) {
  return `${num} 元`
}
module.exports.formatPrice = formatPrice
```
wxml文件中使用
```html
// 引入
<wxs src="./util.wxs" module="util"></wxs>
<view>商品价格：{{util.formatPrice(num)}}</view>
```
## input标签
注意一个坑，原生input标签不支持readonly属性，目前没找到好的解决方式。

## [自定义组件slot](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E7%BB%84%E4%BB%B6wxml%E7%9A%84slot)

和vue组件插槽用法相似，需要注意的一点是，组件中有多个插槽需要在组件中声明一下启用多插槽，否则无效。
```js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  }
})
```
## 自定义组件外部样式定义
自定义组件可以开启接收外部样式的声明，这样别人用你的组件时可自定义外观。
```js
// 组件card中定义外部样式类名
Component({
  externalClasses: ['custom-class']
})
```
组件card中使用class
```html
// 接收外部定义的样式
<view class="origin-class custom-class">测试</view>
```
外部页面使用组件card
```html
<view>
  <card custom-class="my-custom-class"></card>
</view>
```
<!-- ## 上传图片
写了一个工单反馈页，其中有上传图片功能，抽成了一个组件，有需要的我放出来。 -->

