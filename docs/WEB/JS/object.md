创建对象的几种方式

### 方式一
```js
function Person(name) {
  this.name = name
  this.play = function() {
    console.log(this.name + '在玩耍')
  }
}

var p1 = new Person('susan')
console.log(p1.name)
console.log(p1.play())
```

### 方式二 Object构造函数
```js
var p1 = new Object()
p1.name = 'susan'
p1[age] = 10
p1.play = function() {
  console.log(this.name + '在玩耍')
}
```

### 方式二 Object构造对象
```js
var p1 = new Object({
name: 'susan',
age: 10,
play: function() {
  console.log(this.name + '在玩耍')
}
})
```

### 方式三 create方法
```js
// 基于现有对象创建新对象
var p2 = Object.create(p1)
```

### 方式四
```js
var p1 = {
    name: 'susan',
    play: function() {
      console.log(this.name + '在玩耍')
    }
}
```
