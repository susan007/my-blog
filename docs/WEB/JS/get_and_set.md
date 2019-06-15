### javascript中控制对象属性访问
在javascript中，没有私有变量（闭包除外），我们随时可以增删改查某个对象的属性，某些重要的变量被人随意修改这样并不太好。
javascript中有几种控制对对象属性的访问方式，getter和setter，类似于java中的对对象的封装类。

### 字面量get、set
定义
```js
// 添加get和set
const person = {
    name: 'susan',
    get userName() {
        return this.name
    },
    set userName(value){
        this.name = value
    },
    gender: 'woman',
    get userGender() {
        return this.gender
    },
    set userGender(value) {
        this.gender = value
    }
}
```
使用
```js
 assert(person.userName === 'susan', 'get name ' + person.userName)
 person.userName = 'lily'
 assert(person.userName === 'lily', 'get name ' + person.userName)
```
### ES6中
定义
```js
class Person{
    constructor(name){
        this.name = name
    }
    get userName(){
        return this.name = name
    }
    set userName(value){
        this.name = value
    }
}
```
使用
```js
const p1 = new Person('susan', 'hong')
assert(p1.userName === 'susanhong', 'get name') // pass
assert(p1.name === 'susanhong', 'get name') // fail
p1.userName = 'jack'
assert(p1.userName === 'jack', 'get myName ' + p1.userName) // pass
```

### Object.defineProperty定义私有变量
定义
```js
function Person() {
    // 私有变量
    let _name = 'susan'
    // 定义对外变量
    Object.defineProperty(this, 'name', {
        get: () => {
            return _name
        },
        set: (value) => {
            _name = value
        }
    })
}
```
使用
```js
const s1 = new Student()
assert(typeof s1._name === 'undefined', '无法访问私有变量') // pass
assert(s1.name === 'susan', '通过接口访问私有变量') // pass
```

### 使用代理Proxy构建私有属性
定义
```js
const person = {
    name: 'susan',
    age: 18
}

const personProxy = new Proxy(person, {
    get: (target, key) => {
        // 可在此做一些日志记录
        report(`reading property ${key}: ${target[key]}`)
        return target[key]
    },
    set: (target, key, value) => {
        // 日志记录
        report(`writing property ${key}: ${value}`)
        target[key] = value
    }
})
```
使用
```js
assert(person.job === undefined, 'person.job is undefined') // pass
assert(personProxy.name === 'susan', 'personProxy.name is susan') // pass
personProxy.name = 'lily'
assert(personProxy.name === 'lily', 'personProxy.name is lily') // pass
// 通过代理对象分配新的属性
personProxy.job = 'programmer'
assert(person.job === undefined, `person.job is ${person.job}`) // fail
```


