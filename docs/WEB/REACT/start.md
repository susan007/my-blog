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

## Basic React Page
React是一个js库，同样一个React页面或者React组件是以js结尾的，也就是一个js文件，形式如下。

```js
const Header = () => {
    return (
        <form>
           <input placeholder="输入学号"/>
           <input placeholder="输入密码"/>
           <button>登录</button>
        </form>
    )
}

export default Header
```
渲染React页面
```js
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'

ReactDom.render(<Header/>, document.getElementById('root')) // 渲染在某个根节点
```

## 组件实例
可以将复杂的React页面拆分成组件。组件名称必须以大写字母开头,React 会将以小写字母开头的组件视为原生 DOM 标签，所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。

编写一个父组件App
```js
const list = ['西门吹雪', '陆小凤', '花满楼']
const App = () => {
    return (
       <div>
          <Header title="标题栏"/>
           <Box list={ list }/>       
           <Footer title="页脚栏"/>        
       </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
```
编写子组件Header
```js
// 以props接收父组件传递的参数
const Header = (props) => {
    return (
        <div>{ props.title }</div>
    )
}
```

编写子组件Content
```js
const Box = (props) => {
    return (
        <ul>
          {
              props.list.map((item, index) => (
                  <li key={index}>排名：{index} 姓名：{item}</li>
              ))
          }
        </ul>
    )
}
```

编写子组件Footer
```js
const Footer = (props) => {
    return (
        <div>{ props.title }</div>
    )
}
```

## [redux](https://cn.redux.js.org/docs/basics/Actions.html)

redux是一个工具，主要用于兄弟组件之间的值传递，可以理解为全局变量，每个组件都能访问到该变量，也能够通过提供的方法修改变量的值。

当然，非React库也能使用这个工具。

### 基础概念
#### Action
描述发生了什么，对象的形式，必须包含type字段,其他字段可有可无，type字段用来描述要做什么。

```js
const ADD_ITEM = 'ADD_ITEM'
const action = {
    type: ADD_ITEM, // 添加待办事项
    text: 'coding my app' // 今天的任务就是编码
}
```
或者通过方法返回一个对象，这种写法更容易测试和移植
```js
export const addItem= () => {
    return {
        type: ADD_ITEM, // 添加待办事项
        text: 'coding my app' // 今天的任务就是编码
    }
}
```
#### Reducer
指定该如何响应Action，以及响应后将新数据(state，被保存在单一对象中)发送到Store。reducer是纯函数的形式，接收旧的state和action返回新的state。 
```js
const ADD_ITEM = 'ADD_ITEM'
export default (state, action) => {
    switch(action.type) {
        case ADD_ITEM:
            // 注意，在state副本上做修改
            return [
                ...state,
                {
                    text: action.text
                }
            ]
        default:
            return state     
    }
}
```
reducer需要注意的点：
* 不允许修改传入的参数
* 不允许执行有副作用的操作，如路由跳转、API请求等
* 调用非纯函数

#### Store
关联Action、Rancher、state(数据/状态)，可以理解为state仓库，对外提供获取、修改、管理state的接口（方法）。

一个Redux应用只有一个单一的store。

##### 主要方法
* getState()：获取state
* dispatch(action)：分发action更新state
* subscribe(listener)：注册监听器

创建store
```js
import { createStore } from 'redux'
import rancher from './rancher'

const store = createStore(rancher)

export default  store
```

使用store分发action
```js
import store from './store'
import { addItem } from './action'

// 获取状态
console.log(store.getState())

// 注册监听，每当 dispatch action 的时候就会执行
const unSubscribe = store.subscribe(callback)

// 分发action
store.dispath(addItem('8点开早会'))

// 移除监听
unSubscribe()
```

## [react-redux](https://cn.redux.js.org/docs/react-redux/)
react-redux是redux官方出的React绑定库，搭配redux一起食用更佳。这里主要介绍下如何使用，不涉及原理。
### Provider
使用react-redux提供的`<Provider/>`在根组件注入Store，这样所有组件都能访问到Store。
```js
// 定义reducer
let reducer = (state, action) => {
    // do something to update new state, and return
    return state
}
// 定义store
let store = createStore(reducer)
// 根组件注入store
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)
```

### connect()
通过react-redux的connect方法生成容器组件（容器组件指的是订阅了store的组件，能读取部分数据并使用props把数据传递给要渲染的组件）。

connect可以接收两个参数，一个是将state映射到props，一个是dispatch(action)。

#### 读取state
mapStateToProps指定如何把redux store state映射到组件的props中，这样组件可以通过`this.props.todos`来获取store中的数据。
```js
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    todo_item: state.todo_item
  }
}
```

#### 分发action
集中处理`dispatch(action)`o(*^＠^*)o
```js
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}
```

#### 使用connect
```js
import { connect } from 'react-redux'

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList) // TodoList是你的组件名

export default VisibleTodoList
```

[官方参考实例](https://cn.redux.js.org/docs/basics/ExampleTodoList.html)

## [React Router](https://react-guide.github.io/react-router-cn/docs/guides/basics/RouteConfiguration.html)
官方文档非常详细了，并且有实践Demo，建议看官方文档。

## [React Hooks](https://zh-hans.reactjs.org/docs/hooks-intro.html)
React组件的写法有两种。
* class形式的，可以获取组件状态、生命周期等；缺点是笨重。
* 纯函数类型的无状态组件，写法简单轻巧；缺点是无法获取状态、生命周期那些。

所以React hook出现就是为了解决在纯函数中获取状态以及其他涉及生命周期的方法。

### 主要hook介绍及使用
#### 规则
* 只在React函数的最顶层调用hook
* 只在React函数中调用Hook
#### useState
主要用来获取、添加、修改state。

* 声明state变量
```js
const defaultName = 'susan'
// 第一个参数name是当前state 第二个参数setState是更新当前state的回调，一般以set开头
const [name, setName] = useState(defaultName)
```
* 读取state
```js
<p>姓名：{ name }</p>
```

* 更新
```js
<button onClick={() => setName('新姓名')}>更新姓名：{ name }</button>
```

#### useEffect
这个钩子主要用来执行某些副作用的操作(ಥ﹏ಥ)

```js
// 注意 可以使用多个useEffect实现功能分离
function Header() {
    const [checked, setChecked] = useState(true)
    const [user, setUser] = useState({})
    
    // 不需要清除的副作用
    useEffect(() => {
        document.title = `checked status: ${checked}`
    })
    
    // 需要清除的副作用
    useEffect(() => {
        function handleStatusChange(status) {
          setIsOnline(status.isOnline);
        }
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        // Specify how to clean up after this effect:
        // 返回的函数是effect的可选清除机制。比如清除某些订阅、定时器啥的
        return function cleanup() {
          ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
      });
    
    // 跳过Effect优化性能，useEffect()第二个参数表示，当userId变化时才去执行effect。
    useEffect(() => {
        fetch(`xxx/api/user/.${userId}`)
         .then(res => res.json())
         .then(res => {
             setUser(res.data)
         }).catch(error => {
             console.log(error)
         })
    }, [userId])
    
    return (
        <div>
          <button onClick={() => setChecked(!checked)}>切换勾选状态</button>
        </div>
    )
}
```

#### 自定义hook
目的是提取逻辑到可重用的函数中
```js
const usePerson = (personId) => {
    const [person, setPerson] = useState(null)
    
    useEffect(() => {
        fetch(`xxx/api/person/.${personId}`)
                 .then(res => res.json())
                 .then(res => {
                     setPerson(res.data)
                 }).catch(error => {
                     console.log(error)
                 })
    }, [personId])
    
    return person
}
export default  usePerson
```
在组件中使用
```js
function Card() {
    const person = usePerson(110)
    return (
       <h1> person.name </h1>
    )
}
```


