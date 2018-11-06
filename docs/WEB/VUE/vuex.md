vue提供vuex来管理应用中的数据状态，尤其是多个组件共享的数据的状态。
## state
#### 一个简单的store模式例子
```js
Vue.use(Vuex)
// 由action分发事件集中管理state状态
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})
```
#### 获取状态的方式
* computed中直接获取
```js
import store from './store.js'
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return store.state.count
    }
  }
}
```
* 注入到根组件
```js
Vue.use(Vuex)
const app = new Vue({
  el: '#app',
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
})
```
子组件访问
```js
const Counter = {
    template: `<div>{{count}}</div>`,
    computed: {
        count () {
            return this.$store.state.count
        }
    }
}
```
## Getter
从store中的state中派生出一些状态，比如对做一个过滤，只传输自己需要的数据而不是全部。这里只是提点一下，具体使用官网给出了非常详细的例子，大家自己去看。
我们的时间还是不要全部停留在处理逻辑业务的问题上。
```js
const store = new Vuex.Store({
    state: {
        todos: [
            {id: 1, task: '写代码', done: true},
            {id: 2, task: '跑步', done: false}
        ]
    },
    getters: {
        doneTodos: state=> {
            return state.todos.filter(todo => todo.done)
        }
    }
})
```
使用
```js
import store from './store.js'
store.getters.doneTodos
```
## Mutation
更改store中的状态的唯一方法是提交mutation
```js
const store = new Vuex.Store({
    state: {
        count: 1
    },
    mutations: { // mutation必须是同步函数
        increment (state) {
            state.count++
        }
    }
})
```
使用
```js
// 注册increment事件 这一思路和java中的service以及android中的handle/event非常相似 
// 同样，js中也可以自定义事件进行事件分发
store.commit('increment')
```
传参
```js
mutations: {
    increment (state, obj) {
        state.count +=obj.num
    }
}
// 使用
store.commit('increment', {
    num: 10
})
// 使用 第二种写法
store.commit({
    type: 'incrament',
    num: 10
})
```
## Action
* Action 提交的是 mutation，而不是直接变更状态。
* Action 可以包含任意异步操作。
```js
actions: {
  actionA ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('someMutation')
        resolve()
      }, 1000)
    })
  }
}
```
## module
分割store，避免一个store过于庞大
```js
// 模块一
const module1 = {
    state: {},
    mutations: {},
    actions: {},
    getters: {}
}
// 模块二
const module2 = {
    state: {},
    mutations: {},
    actions: {},
    getters: {}
}

const store = new Vuex.Store({
    modules: {
        a: module1,
        b: module2
      }
})
```
使用
```js
store.state.a
```

###### 写着写着发现，vue系列其实根本不用写什么教程，官方文档那么详细清晰，就是最好的教程。
###### 与君共勉




