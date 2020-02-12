这里记录自己学习React过程的一些坑、笔记、总结。（教程类的还是建议直接看官方文档，比较全面且权威）

## 安装
### 普通html页面CDN引入
可以直接通过[CDN链接](https://zh-hans.reactjs.org/docs/cdn-links.html)引入`React``，如下所示。（其中`crossorigin`是一个跨域属性，它允许你配置跨域元素获取数据的CORS请求。）
```js
 <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
 <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
```

### create-react-app脚手架
这是官方出的脚手架，是创建新的单页应用的最佳方式，Node >= 8.10 && npm >= 5.6体验最佳。

#### step 1: install
```js
npm i create-react-app
```
#### step 2: create app
```js
npx create-react-app my-app

# or

npm init react-app my-app

# or

yarn create react-app my-app
```

#### step 3: start
```js
cd my-app
npm start

# or

yarn start
```
此时你会看到一个`Welcome to react`的页面，那么恭喜你安装成功。

## JSX
JSX是形如XML的javascript语法扩展，具有javascript的全部功能。
```js
const element=<h1>Hello world</h1>
```

在JSX语法中，遇到大括号则表示里面的内容是一个javascript表达式。
```js
function formatName(user) {
    return user.firstName + '.' +user.lastName
}
const user = {
    firstName: '尼古拉斯',
    lastName: '赵四'
}
const element=<h1>Hello {formatName(user)}</h1> // Hello 尼古拉斯.赵四
```

在if语句中使用JSX
```js
if(name) {
    return <h1>Hello {name}</h1>
}else {
    return <h1>Hello world</h1>
}
```

在for循环中使用JSX
```js
const list = ['西门吹雪', '陆小凤', '花满楼']
<ul>
    {
        list.map(item => <li>{item}</li>)
    }
</ul>
```

指定元素属性
```js
const logoPath = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
<img alt="logo" src={logoPath} />
```

指定子元素
```js
// 添加()是保证可换行书写
const element = (
    <form>
        <input placeholder="输入学号"/>
        <input placeholder="输入密码"/>
        <button>登录</button>
    </form>
)
```

JSX的另一种创建方式[React.createElement](https://zh-hans.reactjs.org/docs/react-api.html#createelement)
```js
// 实际上JSX是 React.createElement的语法糖
const element = React.createElement(
    'h1',
    null,
    'Hello world'
)
```

## 实践


