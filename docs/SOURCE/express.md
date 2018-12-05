打包完成的vue项目，想看下实际运行效果，需要自己搭建服务器或者使用现成服务器，在此介绍下express使用

### 安装
```js
$ npm install express-generator -g
```

### 创建express项目
```js
$ express demoName
```
### 安装依赖
```js
cd demoName
npm install
```
### 运行
将dist生成的html和static文件夹放在demoName项目的public文件夹下
```js
npm start
```

### 查看页面
本地浏览器输入`localhost:3000`查看网页
