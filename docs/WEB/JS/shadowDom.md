#### 原生web组件

影子Dom指的是将html-css-js封装成一个独立的html组件，相当于自己封装html标签，直接在html中使用。

当然除了shadow dom还有其他的方式实现web components，后续会补充进来。

#### 效果

如下卡片封装为一个element元素使用，达到复用效果。

![效果图](../../.vuepress/public/imgs_js/pretty-card.png)

#### 实现分析

* 创建element class，必须super
```js
 //定义card class
 class Card extends HTMLElement{
    constructor(){
        super()
    }
 }
```
* 创建根shadow：attachShadow({mode: 'open'})
* mode取值：一般取值open，若创建闭合影子树后({mode: 'closed'})，在 JavaScript 外部无法访问组件的内部 DOM(shadowRoot)。这与 `<video>` 等原生元素工作方式类似。
```js
 // 定义shadowRoot根节点，影子Dom根节点可以挂载其他节点
 let shadow = this.attachShadow({mode: 'open'})
 let div = document.createElement('div')
 div.innerText = this.getAttribute('text')
 shadow.appendChild(div)
```
* customElements.define('component-name', class-name)
```js
 // 注册为组件，第一个参数为组件名，第二个参数为类名
 customElements.define('pretty-card', Card)
```

* 使用
```html
// 引入
 <link rel="import" href="pretty-card.html">
 // 使用
 <pretty-card>
   <button id="outer">外部按钮</button>
</pretty-card>
```

#### 源码

[源码请戳](https://github.com/susan007/my-blog/blob/master/demo/pretty-card.html)

###### 参考资料

[shadow dom by google](https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=zh-cn)

[shadow dom by mdn](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM)

[html 官方文档](http://w3c.github.io/webcomponents/spec/shadow/#shadow-dom-example)

[web components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)
