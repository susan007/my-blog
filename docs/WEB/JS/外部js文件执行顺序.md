### 脚本调用策略
* 脚本需要等待解析，那么js文件紧应当挨着`body`结束的标签，避免HTML DOM没加载完，而js去操作DOM造成错误。
* js脚本无需等待DOM加载完成且无依赖独立运行，应当使用async。
* 脚本需要等待解析且依赖其他脚本，应当使用defer，按出现顺序加载运行关联的脚本。

### 示例
```js
// async 加载运行独立的js文件
<思科瑞普特 src='./demo.js' async/>

// defer
<思科瑞普特 src='./demo1.js' defer/>
<思科瑞普特 src='./demo2.js' defer/>
```
