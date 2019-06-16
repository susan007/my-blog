## Dom之自定义事件
向一个指定的事件目标派发一个事件，当达到合适的条件(比如axios/ajax请求完成时、某个变量状态变化时触发事件)下会自行触发，并以合适的顺序同步调用目标元素相关的事件处理函数。

事件处理器是完全独立的，并且可以创建任意数量，类似于一种`订阅-通知`即观察者模式,减少程序之间的耦合。

如果你说，我用公共函数文件作为库，在需要的地方调用也能共享这个事件处理过程。当然可以做到！但是这个公共文件势必是全局文件，每个函数、变量的命名造成全局命名空间污染。(还需要继续加深理解，有新的理解持续补充，大家也随意抒发自己的理解一起学习学习)

```js
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>测试</title>
</head>

<body>
    <h1 id="title">我的猫咪脾气爆o(╯□╰)o</h1>

    <script>
        // 自定义事件生成器
        function createEvent(target, eventName, eventDetail) {
            console.log('dispatch')
            const myEvent = new CustomEvent(eventName, {
                detail: eventDetail
            })
            target.dispatchEvent(myEvent)
        }
        
        // 获取Dom
        const title = document.getElementById('title')
        
        // 自定义事件执行器，用来触发click事件开始执行和执行五秒后
        function createStartEvent() {
            createEvent(title, 'start-click', { color: 'red' })
            setTimeout(() => {
                createEvent(title, 'finish-click', { color: 'green' })
            }, 5 * 1000)
        }
        
        // Dom添加click事件
        title.addEventListener('click', () => {
            createStartEvent()
        })
        // 添加自定义事件start-click
        title.addEventListener('start-click', (e) => {
            title.style.color = e.detail.color
        })
        // 添加自定义事件finish-click
        title.addEventListener('finish-click', (e) => {
            title.style.color = e.detail.color
        })

    </script>
</body>

</html>
```