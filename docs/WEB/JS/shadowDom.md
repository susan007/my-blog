#### 原生web组件
影子Dom指的是将html-css-js封装成一个独立的html组件，相当于自己封装html标签，直接在html中使用。

当然除了shadow dom还有其他的方式实现web components，后续会补充进来。

#### 注册shadow dom
```js
class Dog extends HTMLElement {
        constructor() {
            super()
            let shadowRoot = this.attachShadow({mode: 'open'})
            shadowRoot.innerHTML = `
                <style>
                div{
                background-color: cornflowerblue;
                color: white;
                font-size: larger;
                }
                button{
                border: 3px solid salmon;
                background-color: palevioletred;
                color: white;
                padding: 0.5rem 0.5rem;
                }
                </style>
                <div>
                 <img src="flower.png">
                贾君鹏，你妈喊你回家吃饭！
                <button id="confirm">确定</button>
                <slot>
                Button
                </slot>
                </div>`

            this.addEvent()
        }

        /**
         * 添加事件
         */
        addEvent() {
            let confirm = this.shadowRoot.querySelector('#confirm')
            confirm.addEventListener('click', function () {
                alert('知道了！')
            })
        }
    }
    // 关键的一句，注意命名要符合规范
    customElements.define('fancy-div', Dog)
```

#### 使用
```html
// 引入
 <link rel="import" href="fancy-div.html">
 // 使用
 <fancy-div></fancy-div>
```


###### 参考资料

[shadow dom by google](https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=zh-cn)

[shadow dom by mdn](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM)

[html 官方文档](http://w3c.github.io/webcomponents/spec/shadow/#shadow-dom-example)

[web components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)
