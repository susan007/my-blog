学习一下vue-router，vue提供的一个便利小插件用来管理页面路径。
### 使用路由模块实现页面跳转
方式一
```js
// 修改地址栏
```
方式二
```js
// 前进
this.$router.push('/luyou')
// 后退
this.$router.go(-1)
```
方式三
```js
<router-link to="/luyou">go to luyou</router-link>
```
### 传参
params传参
```js
// 传递
<router-link :to="{name:'luyou', params:{user:'嗷嗷', age: 10}">传参测试</router-link>
// 使用
this.$route.params.user
this.$route.params.age
```

url传参
```js
// 定义路由
{
    path: '/luyou/:name/:password',
    component: luyou,
    name: 'luyou'
}
// 传递参数
<router-link :to="/luyou/hongdiandian/123">测试传参</router-link>
//使用
this.$route.params.name
```

query传参
```js
// 配置路由
{
    path: '/test',
    name: 'test',
    component: test
}
// 传递参数
<router-link :to="{name: 'luyou', query: {queryId: status}">测试传参</router-link>
// 获取参数
this.$route.query.queryId
```

