打开ie浏览器发现了一个简洁的Loading，貌似火狐也是同款，是我喜欢的风格所以记录下来。

## 效果预览
先看看效果吧
<loading-ie/>

## 动画分析
* 总共四个圆点，三个白色的一个红色的圆点。
* 圆点1和圆点3同时顺时针旋转360度组成旋转1；圆点2和圆点4同时逆时针旋转360度组成旋转2，且旋转2时间滞后于旋转1。

## 实现思路
按照分析的动画思路一步步来
* 画出四个圆点并水平垂直居中
* 编写顺时针旋转动画1，并应用到圆点1和圆点3
* 编写逆时针旋转动画，延迟一秒执行，并应用到圆点2和圆点4
* html结构如下，以下分析均基于此
```html
<div class="sampleContainer">
    <div class="loader">
        <span class="dot dot_1"></span>
        <span class="dot dot_2"></span>
        <span class="dot dot_3"></span>
        <span class="dot dot_4"></span>
    </div>
</div>
```

## 重点代码分析
### 水平垂直居中
注意`transform`平移，当然垂直居中你也可以选择别的方式。
```css
.sampleContainer{
  position:fixed;
  top:50%;left:50%;
  width:75px;
  height:100px;
  -webkit-transform:translateX(-50%) translateY(-50%);
}
```
### 动画分析
* rotate：旋转。
* translateX：在x周平移相应的值，旋转半径。
```css
@keyframes animateDot1{
  0%{transform:rotate(0) translateX(-12px)}
  25%{transform:rotate(180deg) translateX(-12px)}
  75%{transform:rotate(180deg) translateX(-12px)}
  100%{transform:rotate(360deg) translateX(-12px)}
}
.dot_1{animation:animateDot1 1.5s linear infinite;left:12px;background:#e579b8}
```

