nginx启动错误
### `nginx bind to 0.0 0.0 80 failed 10013`
启动nginx后在任务管理器中看不到nginx服务，打开log发现出错了，报错如标题所示。

#### 解决办法一
* 将conf配置文件中的80端口改成81（或者别的）即可。
#### 解决办法二
* 查找占用80端口的服务，修改其端口。
```js
// 查看端口占用情况
netstat -aon | findstr :80 
// 根据pid找到对应名称
tasklist|findstr "4300"
// 关掉对应的服务
```
