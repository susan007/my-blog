### 介绍
#### 作用

#### 正向代理
客户端无法直接访问目标服务器，通过正向代理将客户端请求转发到要访问的服务器上，服务器不知道客户端是谁。

#### 反向代理
客户端访问目标服务器，反向代理充当路由的作用，将请求转发至合适的服务器上。

### 安装
* [下载地址](https://nginx.org/en/download.html)
* 此次我是用windows系统进行安装，下载windows版本压缩包解压即可。

### 常用命令
启动

```js
$ nginx

$ nginx start
# 我试了这个命令居然是可以的
$ start nginx
```
快速停止
```js
nginx -s stop
```
优雅停止（当前工作流完成请求后关闭）
```js
nginx -s quit
```
不停止服务的情况下重新加载配置文件
```js
nginx -s reload
```

### 配置文件
#### 基本模块

* http
* server
* location
* events

#### 基本结构
```js
http {
    events {
    }
    
    # 一个server是一个虚拟服务
    server {
        # location可以说是在匹配路由
        location / {
        }
    }
    
    # 基本配置示例
    server {
        # 配置端口
        listen 81;
        # 配置域名或ip
        server_name https://susan007.com;
        location /admin {
            root html_admin;
            index index_admin.html;
        }
    }
}
```
#### 反代理示例
```js
 # 反向代理
    server{
        listen 8002;
        server_name blog.susan007.com;
        location / {
            proxy_pass https://susan007.github.io;
        }
    }
```
#### 负载均衡示例
```js

```

### 常见错误
* `nginx bind to 0.0 0.0 80 failed 10013`
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
