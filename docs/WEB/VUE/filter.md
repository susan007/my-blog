主要功能有过滤器使用和优雅的改变true/false

### 关键代码
#### 过滤文字
```html
filters: {
            filterInfo(info, num) {
                const numInt = parseInt(num)
                return info.length > numInt ? info.slice(0, numInt) : info
            }
        }
```

#### 使用过滤
通过管道使用，参数个数不限，默认第一个参数是要过滤的内容
```html
<li v-for="(info, index) in infos" :key="index">{{ info | filterInfo(num) }}</li>
```

v-bind绑定
```html
<div :data="info | filterInfo(num)"></div>
```

#### 优雅切换
对，就这一句，原谅我少见多怪！
```js
data() {
    return {
        isShow: false
    }
}
/**
  * 优雅切换
  * @return {boolean}
  */
showPhoto() {
    this.isShow = !this.isShow
}
```

### 在线体验
<filter/>
