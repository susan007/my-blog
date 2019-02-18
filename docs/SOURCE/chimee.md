### Chimee初次接触
Chimee是由奇舞团开源的一套可扩展的H5组件化播放器框架，简单的试用了下还是不错的。

<a src="http://chimee.org/docs/index.html">官网请戳这儿</a>

<a src="https://github.com/Chimeejs/chimee">github 请戳这儿</a>

### 特点

* 各浏览器环境UI不统一的问题
* 不同环境中API的差异化
* 不同厂商事件行为的实现不尽相同，部分行为不完整等
* 媒体格式兼容问题：各浏览器对媒体格式编解码支持程度不同，以往常用的部分格式在原生环境中是不支持的
* UI扩展之间及状态处理容易产生冲突
* 日志收集易耦合：太多日志收集上报需要我们在业务节点植入打点逻辑的方式，增加熟悉成本和维护难度，Chimee解耦的插件功能机制，让事情条理更清晰、功能更纯粹
* 重复别人踩过的坑：如果你曾经从0开始开发你的H5播放器，一定会有深刻的体会，各种莫名其妙的问题接踵而至，让我们不得不放下正在做的事情，消耗掉大量的时间和精力去查证、解决，使用一套完备的解决方案，必然能让我们少走很多弯路。

### 效果展示
本来写了一个组件来展示效果，如下所示。本地运行良好，run build却无法打包，我觉得是vuepress中访问浏览器API没有做好处理，按照官网的方法写得好是无法打包，气死我了！只能录一个gif展示效果╭(╯^╰)╮

```js
// chimee player组件使用
<script>
    export default {
        name: "chimee",
        data() {
            return {
                mid: 'container'
            }
        },
        mounted() {
            import('chimee-player').then(module => {
                let ChimeePlayer = module.default
                const chimee =new ChimeePlayer({
                    wrapper: `#${this.mid}`,
                    src: 'http://cdn.toxicjohann.com/lostStar.mp4',
                    controls: false,
                    autoplay: true
                });
            })
        }
    }
</script>
```
![效果展示](../.vuepress/public/img_source/music.gif)
