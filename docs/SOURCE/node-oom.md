昨天到今天，编译某个项目的时候特别慢，慢到等不到报错就直接重新编译，所以没发现问题，一度怀疑是网速问题。
一晚上过后报了一个错，node编译内存溢出。
## 报错内容：
```js
<--- JS stacktrace --->

==== JS stack trace =========================================

    0: ExitFrame [pc: 000003542B6DC5C1]
    1: StubFrame [pc: 000003542B6DD9BF]
Security context: 0x009e94b9e6e1 <JSObject>
    2: resolve [0000036805D830F9] [path.js:~138] [pc=000003542C0578F6](this=0x02
793ba02201 <Object map = 000001CCF30363F1>)
    3: arguments adaptor frame: 1->0
    4: access [00000187049850B1] [fs.js:~167] [pc=000003542BDCDBE2](this=0x00ecd
24c1e31 <Object map = 000001CCF307CC79>,path=0x013e1cc2f3a1 <Very long string...

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaS
cript heap out of memory
 1: 000000013FB5ACB5
 2: 000000013FB344E6
 3: 000000013FB34EF0
 4: 000000013FDC47FE
 5: 000000013FDC472F
 6: 00000001402F8964
 7: 00000001402EF0F2
 8: 00000001402ED68C
 9: 00000001402F65B7
10: 00000001402F6636
11: 000000013FEA1677
12: 000000013FF389D2
13: 000003542B6DC5C1
error Command failed with exit code 134.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
意思是堆限制分配失败- JavaScript堆内存不足。

## 解决办法
##### 办法一
```js
//给node近程手动分配更多的内存，在node后面添加--max-old-space-size=8192，分配内存大小大家自己制定，适可而止啊
"build:win32": "cross-env  BUILD_TARGET=win32 node --max-old-space-size=8192 .electron-vue/build.js"
```
##### 办法二
```js
$ npm install -g increase-memory-limit

// package.json 配置
"scripts": {
    "fix-memory-limit": "cross-env LIMIT=2048 increase-memory-limit"
},
"devDependencies": {
    "increase-memory-limit": "^1.0.3",
    "cross-env": "^5.0.5"
}

$ npm run fix-memory-limit
```
