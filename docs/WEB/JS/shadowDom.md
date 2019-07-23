#### 原生web组件
影子Dom指的是将html-css-js封装成一个独立的html组件，相当于自己封装html标签，直接在html中使用。

当然除了shadow dom还有其他的方式实现web components，后续会补充进来。

#### 效果
将这个卡片封装为一个element元素使用
![效果图](../../.vuepress/public/imgs_js/pretty-card.png)

#### 实现分析
* 创建element class，必须super
* 创建根shadow：attachShadow({mode: 'open'})
* mode取值：一般取值open，若创建闭合影子树后({mode: 'closed'})，在 JavaScript 外部无法访问组件的内部 DOM(shadowRoot)。这与 <video> 等原生元素工作方式类似。
* customElements.define('component-name', class-name)

```js
 // 自定义card标签
 class Card extends HTMLElement{
        constructor() {
            super()
            let shadow = this.attachShadow({mode: 'open'})
            let style = document.createElement('style')
            style.textContent = `
            div {
                background-color: rgb(177, 122, 125);
                border-radius: 10px;
                text-align: center;
                padding: 1rem 0;
                color: white
            }
            div img {
                border-radius: 50%
            }
            div h5 {
                border-top: 1px solid #efefe2;padding: 5px 5px
            }
            `

            let div = document.createElement('div')
            let img = document.createElement('img')
            img.id = 'head'
            img.src = this.getAttribute('img')
            let h5 = document.createElement('h5')
            h5.innerText = this.getAttribute('user')
            let p = document.createElement('p')
            p.innerText = this.getAttribute('info')
            // 插槽预留，使组件更灵活，可随意插入外部element
            let slot = document.createElement('slot')
            shadow.appendChild(style)
            shadow.appendChild(div)
            div.appendChild(img)
            div.appendChild(h5)
            div.appendChild(p)
            div.appendChild(slot)

           img.addEventListener('click', e => {
                alert('❤❤❤❤❤❤❤❤❤')
            })
        }
    }
    // 注册为组件
    customElements.define('pretty-card', Card)

    document.getElementById('outer').addEventListener('click', e => {
        alert(e.target.innerText)
    })
```

#### 使用
```html
// 引入
 <link rel="import" href="pretty-card.html">
 // 使用
 <pretty-card>
   <button id="outer">外部按钮</button>
</pretty-card>
```

#### 源码

###### 参考资料

[shadow dom by google](https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=zh-cn)

[shadow dom by mdn](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM)

[html 官方文档](http://w3c.github.io/webcomponents/spec/shadow/#shadow-dom-example)

[web components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)