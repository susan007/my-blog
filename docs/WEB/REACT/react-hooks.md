总结一下[React Hooks](https://zh-hans.reactjs.org/docs/hooks-intro.html)的介绍和使用

### 函数组件
本质上就是一个js纯函数，是无状态的，是定义组件最简单的方式，等同于class定义的组件是等效的。

```js
function Hello(props) {
    return <h1>Hello {props.name}</h1>
}
```

### Hook
Hook是React官方提供的，可以在纯函数组件中引入状态管理和生命周期、副作用等特性的函数。

#### React Hooks
React Hooks通常指React官方内置的Hook函数，当然开发者也可以自己定义Hook。

常用React Hooks API

##### useState
状态管理；管理函数组件内部状态。
##### useEffect
副作用管理；用来引入有副作用的操作，如向服务器请求数据、记录日志、改变Dom、订阅、定时器等。

```js
useEffect(() => {
    // 开始订阅
    const sub = props.source.subscribe()
    // 清除函数，防止重复订阅
    return () => {
        sub.unsubscribe()
    }
}, [props.source]) // []里面是effect的执行条件
```

#### 自定义Hooks
主要用于复用逻辑

定义
```js
function useUser(userId) {
    const [user, setUser] = useState('')
    useEffect(() => {
        fetch('xxx').then((res) => res.json())
        .then((user) => setUser(user))
    }, [userId])

    return user
}
```

在其他地方使用
```js
const userId = 110
const user = useUser(userId)
console.log(user)
```

### 其他注意事项



