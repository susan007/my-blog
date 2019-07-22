async-await是es6中，处理异步事务的一种实现形式，通过关键字async将方法标记为异步方法，并返回一个Promise，帮助我们更好地使用Promise。

#### async
超级简单，直接对function进行标记，表示该方法会返回一个promise。
```js
// 定义
async function print() {
  return 0
}

// 调用
print().then(alert)
```

#### await
只能用在async包含的方法中，等待被标记为await的方法执行完并返回结果，才会执行下一步程序。
```js
async function print() {
  const id = await getId()
  alert(id)
}
```

当异步程序出现错误时，也就是进入reject()执行，后续程序会不执行，所以一般将await放入try-catch中。
```js
async function print() {
  try {
    const id = await getId()
  }catch (e) {
    alert(e)
  }
  // reject之后这一句将不会打印
  console.log('next')
}

// 调用，会打印出错误，同时也会打印出下一步next
print().then(res => {
    console.log(res)
})
```

###### 参考资料

[javascript-async/await](https://javascript.info/async-await)
