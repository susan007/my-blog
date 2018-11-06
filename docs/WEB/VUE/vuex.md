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
从store中的state中派生出一些状态，比如对做一个过滤，只传输自己需要的数据而不是全部
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


