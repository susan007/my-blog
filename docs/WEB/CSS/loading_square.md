### 初衷 
等待一个网页加载的时候，看到它的loading动画做得挺有意思，学习学习。

#### 效果
<loading/>

### 分析
* 画面共有8个小一点的正方形和一个大约两倍大的正方形
* 一个大正方形在正中间；动画为`原图->变大->原图`循环。
* 八个小正方形分`上、上右、右、下右、下、下左、左、上左`八个方位，从中心位置出发一定距离再回到中心位置，循环。
* 小正方形触发动画时间按照顺时针先后执行(顺时针位置先出先进)。

### 关键代码分析
#### html代码
简单粗暴地画了九个正方形
```html
 <div class="loading-center-absolute">
    <div class="object" id="object_one"></div>
    <div class="object" id="object_two"></div>
    <div class="object" id="object_three"></div>
    <div class="object" id="object_four"></div>
    <div class="object" id="object_five"></div>
    <div class="object" id="object_six"></div>
    <div class="object" id="object_seven"></div>
    <div class="object" id="object_eight"></div>
    <div class="object" id="object_big"></div>
 </div>
```

#### css关键代码解读
##### 正方形
非常简单粗暴的正方形定义。
```css
.object{
        width: 20px;
        height: 20px;
        background-color:#4DB499;
        position: absolute;
        left: 30px;
        top: 65px;
    }
```

##### 定义小正方形的动画

* translate(x, y)：两个长度值或百分比表示在二维上分别按照指定X轴和Y轴的值进行的平移
```css
@keyframes object_one {
    50% {
        transform: translate(-65px,-65px) ;
    }
 }
``` 

##### 播放小正方形的动画
* animation-delay：定义动画开始前等待的时间
* animation：执行动画
```css
#object_one {
    animation: object_one 2s infinite;
    animation-delay: 0.2s;
}
```

##### 定义大正方形的动画
* scale()：增加或减少元素的尺寸,所谓的缩放。
```css
@keyframes object_big {
        50% {
            transform: scale(0.5);
        }
    }
```

##### 播放大正方形的动画
```css
#object_big{
    width: 50px;
    height: 50px;
    animation: object_big 2s infinite;
    animation-delay: 0.5s;
}
```


##### 整体旋转
这一步将`loading-center-absolute`div块整体旋转45度，产生视觉上的菱形效果。
* transform：旋转，缩放，倾斜或平移给定元素。
* rotate(angle)：元素围绕一个定点旋转而不产生形变。

```css
.loading-center-absolute {
    transform: rotate(45deg);
}
```

