## 构造器模式
用来初始化新对象。

### 基本构造器
* 满足基本需求，但是没有实现继承，像公用方法应该是被继承的而非给每个实例新创建。
```js
// 构造器
function Cat(name, age) {
    this.name = name
    this.age = age
    this.toString = function() {
        return `name: ${this.name} age: ${this.age}`
    }
}

// 使用
let catLily = new Cat('lily', 2)
console.log(catLily.toString())
let catSusan = new Cat('susan', 1)
console.log(catSusan.toString())
```

### 实现可继承的构造器
```js
// 构造器
function Cat(name, age) {
 this.name = name
 this.age = age
}
// 公共方法
Cat.prototype.toString = function() {
    return `name: ${this.name} age: ${this.age}`
}

// 使用
let catLily = new Cat('lily', 2)
console.log(catLily.toString())

```

## 模块模式

### 对象字面量
```js
// 字面量定义对象
let utils = {
    name: 'utils',
    add: function(x, y) {
        return x+y
    },
    sub: function(x, y) {
        return x-y
    },
    getName: function(){
        return this.name
    }
}

// 使用
console.log(utils.name)
console.log(utils.add(1,2))
console.log(utils.sub(6,5))
console.log(utils.getName())
```

### Module
* 提供混合私有变量及方法和公有变量方法的包装，防止作用域和全局作用域混合造成冲突，只返回一个公有的api接口。
* Module最简单的表现形式：闭包。
```js
// 定义立即执行表达式并赋值
let loginModule = (function() {
    let _token = getStorage('token')
    let _login = function(_userName, _userPwd) {
        axios({
            method: 'post',
            url: '/api/login',
            headers: {
                'auth': _token
            },
            data: {
                userName: _userName, 
                userPwd: _userPwd
            }
        }).then(res => {
            console.log(res)
        }).catch(error => {
            console.log(error)
        })
    }

    return {
        publicProp: 'login',
        publicLogin: function(userName, userPwd) {
            _login(userName, userPwd)
        }
    }
})();

// 使用
loginModule.publicLogin('admin', '123456')
```

## 单例模式
在对象不存在的情况下，返回一个新的对象实例；在对象存在的情况下则返回对象的引用。限制了类的实例化只能为一次。

这种模式在安卓中挺常见，比如安卓中的tcp/udp通讯，要求所有页面的tcp/udp是同一个实例。

```js
let tcp = (function(){
    let instance
    function init() {
        return new TCP()
    }
    return {
        getInstance() {
            if(!instance) {
                instance = init()
            }
            return instance
        }
    }
})()
```

## 观察者模式
观察者注册观察某些目标的状态，当目标状态发生状态改变时，主动向观察者发送通知并执行观察者的更新方法。

