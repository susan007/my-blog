又看到一个不错的Loading，记录一下

## 效果

<loading-firefox/>

## 动画分析
* 一个黑色圆
* 3D旋转，由慢到快再到慢，如此循环

## 关键代码分析

* animation-timing-function：定义css动画在每一动画周期中执行的节奏
* cubic-bezier: 一个函数，定义了一个贝塞尔曲线，最直接的理解是，将以一条直线放在范围只有 1 的坐标轴中，并从中间拿出两个点来拉扯（X 轴的取值区间是 [0, 1]，Y 轴任意），最后形成的曲线就是动画的速度曲线。
* rotateY：3D旋转，元素围绕其Y轴以给定度数旋转。

```css
   @keyframes lds-circle {
        0%, 100% {
          animation-timing-function: cubic-bezier(.5,0,1,.5);
        }
        0% {
          transform: rotateY(0deg);
        }
        50% {
          transform: rotateY(1800deg);
          animation-timing-function: cubic-bezier(0,.5,.5,1);
        }
        100% {
          transform: rotateY(3600deg);
        }
    }
```


运行动画
```css
.lds-circle>div {
      animation: lds-circle 2.4s cubic-bezier(0,.2,.8,1) infinite;
    }
```
