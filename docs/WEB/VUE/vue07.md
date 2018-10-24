#### package.json文件配置及其含义

这个是vue-cli自动生成的文件，先贴一张代码及其含义

```js
{
  "name": "secondproject",//模块名称
  "version": "1.0.0",//模块版本
  "description": "A Vue.js project",//对模块的描述
  "author": "datura",//作者是谁
  "private": true,//如果值为true,npm将拒绝发布它
  "scripts": {//值是一个对象，里面指定了项目的生命周期各个环节需要执行的命令
    "dev": "node build/dev-server.js",//这个就是在命令行执行npm run dev,其实是运行dev-server.js文件
    "build": "node build/build.js",//build命令（有一个钩子的概念：比如这个build有prebuild和postbuild
    "unit": "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",//babel是一个编译器，可以把ES6编译成ES5.，这句先是设置编译环境为test环境下；karma是一个运行时，它产生一个web服务环境来运行项目代码，并执行测试。..
    "e2e": "node test/e2e/runner.js",//e2e模拟用户行为的测试，端到端测试
    "test": "npm run unit && npm run e2e"//执行单元测试和e2e测试
  },//关于npm钩子：通常程序只能处理来自内部的消息，如果希望对外部发来的消息也能拦截处理，就需要用到Hook技术。比如想在run build之前自动执行点任务,可以将其写在run prebuild标签里；postbuild在build之后自动执行
  "dependencies": {//配置模块依赖的模块列表，key是模块名称，value是版本范围，版本范围是一个字符，可被一个或多个空格分割。
    "router": "^1.3.0",//路由版本
    "vue": "^2.2.1",//vue版本
    "vue-resource": "^1.2.1",//一个插件，通过xmlHttpRequest或jsonp发起请求并处理响应。
    "vue-router": "^2.3.0"//
  },
  "devDependencies": {//这里写的依赖是用于开发环境的，不发布到生产环境。
    "autoprefixer": "^6.7.2",
    "babel-core": "^6.22.1",
    "babel-loader": "^6.2.10",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-preset-latest": "^6.22.0",
    "babel-preset-stage-2": "^6.22.0",
    "babel-register": "^6.22.0",
    "chalk": "^1.1.3",
    "connect-history-api-fallback": "^1.3.0",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.26.1",
    "eventsource-polyfill": "^0.9.6",
    "express": "^4.14.1",
    "extract-text-webpack-plugin": "^2.0.0",
    "file-loader": "^0.10.0",
    "friendly-errors-webpack-plugin": "^1.1.3",
    "function-bind": "^1.1.0",
    "html-webpack-plugin": "^2.28.0",
    "http-proxy-middleware": "^0.17.3",
    "webpack-bundle-analyzer": "^2.2.1",
    "cross-env": "^3.1.4",
    "karma": "^1.4.1",
    "karma-coverage": "^1.1.1",
    "karma-mocha": "^1.3.0",
    "karma-phantomjs-launcher": "^1.0.2",
    "karma-sinon-chai": "^1.2.4",
    "karma-sourcemap-loader": "^0.3.7",
    "karma-spec-reporter": "0.0.26",
    "karma-webpack": "^2.0.2",
    "lolex": "^1.5.2",
    "mocha": "^3.2.0",
    "chai": "^3.5.0",
    "sinon": "^1.17.7",
    "sinon-chai": "^2.8.0",
    "inject-loader": "^2.0.1",
    "babel-plugin-istanbul": "^3.1.2",
    "phantomjs-prebuilt": "^2.1.14",
    "chromedriver": "^2.27.2",
    "cross-spawn": "^5.0.1",
    "nightwatch": "^0.9.12",
    "selenium-server": "^3.0.1",
    "semver": "^5.3.0",
    "opn": "^4.0.2",
    "optimize-css-assets-webpack-plugin": "^1.3.0",
    "ora": "^1.1.0",
    "rimraf": "^2.6.0",
    "url-loader": "^0.5.7",
    "vue-loader": "^11.0.0",
    "vue-style-loader": "^2.0.0",
    "vue-template-compiler": "^2.2.1",
    "webpack": "^2.2.1",
    "webpack-dev-middleware": "^1.10.0",
    "webpack-hot-middleware": "^2.16.1",
    "webpack-merge": "^2.6.1"
  },
  "engines": {//指定项目运行的node或者npm版本范围，有点像安卓的指定开发level哦
    "node": ">= 4.0.0",
    "npm": ">= 3.0.0"
  },
  "browserlist": [//在不同的前端工具之间共享目标浏览器的库，确定哪些支持哪些版本的浏览器
    "> 1%",//全球有超1%的人使用的浏览器
    "last 2 versions",//根据CanIUse.com追踪的最后两个版本的所有浏览器
    "not ie <= 8"//排除先前查询选择的浏览器    天啦噜 英语不好是硬伤 不知怎么翻译好理解
  ]
}
```

这块想插播一篇文章，关于package.json文件讲的很详细很好理解，可以作为参考手册收藏啦。

附上原文链接：<a href="https://www.cnblogs.com/tzyy/p/5193811.html#_h1_0">佳文赏析</a>
