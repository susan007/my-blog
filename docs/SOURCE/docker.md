### Docker是什么？

Docker将应用程序和该程序的依赖一起打包成一个文件（镜像文件），运行这个文件会产生一个虚拟容器（进程），提供本地开发和线上一致性的运行环境，程序在这个容器中运行。

这样就不用担心程序运行环境的问题，随处能运行。新兴的虚拟化方式，但是比虚拟机更轻量（容器不提供操作系统功能），一台主机可以运行上千个容器。

可以比喻为沙箱或集装箱，每个容器是独立分隔存在的。

### Docker优势？
* 不占空间，轻量，MB甚至KB级，不像虚拟机GB起步
* 秒启（甚至不到一秒），不像开虚拟机要一分钟
* 妈妈再也不用担心运行环境不一致而导致线上运行出问题了
* 快速部署，持续部署，
* 更浪，可运行在多平台上，轻松迁移

### 几个概念
#### 镜像
镜像只是一个虚拟的概念，其实际体现并非由一个文件组成，而是由一组文件系统组成，或者说，由多层文件系统联合组成 emmm

镜像构建时，会一层层构建，前一层是后一层的基础。每一层构建完就不会再发生改变，后一层上的任何改变只发生在自己这一层 emmm
#### 容器
容器实质上是镜像运行的实例。可以被创建、启动、停止、删除、暂停 emmm
#### 仓库
一个仓库可包含多个标签，一个标签对应一个镜像，这个仓库由Docker Registry服务进行存储、分发等。

### 前端如何利用Docker?
* 根目录下创建一个Dockerfile文件，不指定任何类型
```js
FROM: nginx:latest
ADD ./dist/ /usr/share/nginx/html/
```
* FROM: 指定基础镜像，在此基础上定制镜像
* ADD: 复制文件到目标路径，Add还带有其他功能，详情戳下方资料


[Docker入门指南](https://yeasy.gitbooks.io/docker_practice/image/build.html)
[Docker入门](http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html)



