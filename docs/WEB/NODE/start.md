在 node 中接收 get 或 post 请求的参数

#### 获取 get 请求参数

```js
const str = "https://www.baidu.com?name=susan&age=18";
// 旧写法
const url = require("url");
const { name, age } = url.parse(str).query;

// 新写法
const URL = require("url").URL;
const params = new URL(str).searchParams;
const name = params.get("name");
const age = params.get("age");
```

#### 获取 post 请求参数

```js
const querystring = require("querystring");
const params = querystring.parse(req.body);
const name = params.name;
const age = params.age;

//过滤掉favicon请求
if (req.url != "/favicon.ico") {
  //post请求 获取表单数据
  var obj = null;
  var currentData = "";
  req.on("data", function(data) {
    currentData += data;
    obj = queryString.parse(currentData);
  });
  console.log(obj);
  resp.writeHead(200, { ContentType: "text/html;charset=utf-8" });
  resp.end();

  // 延时
  process.nextTick(() => {});
}
```
