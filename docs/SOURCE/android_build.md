记一次Android studio构建失败的教训

### 现象
假期过后android Studio突然无法构建项目了，包括新建的项目和原来的项目。

查看报错，都是"Connection refused: connect" 具体就是连不上google的服务器，显示403。

### 原因
难道是我党最近在召开某会的原因，所以代理统统挂了？我疲了

### 解决办法
#### 第一步
使用国内阿里云maven仓库镜像去构建工程，build.gradle(app)中配置repositories。

```js
maven { url 'https://maven.aliyun.com/repository/google'}
maven { url 'https://maven.aliyun.com/repository/jcenter'}
maven { url 'http://maven.aliyun.com/nexus/content/groups/public/'}
google()
jcenter()
```

注意：repositories顺序按照 maven本地 > maven镜像 > google() > jcenter()，构建会按照顺序去搜索依赖的仓库。最后两个需要FQ才可。

#### 第二步
注释掉 ~./gradle/gradle.properties文件中的代理，形如：
```js
# systemProp.http.proxyHost=127.0.0.1
# systemProp.http.proxyPort=80
# systemProp.https.proxyHost=127.0.0.1
# systemProp.https.proxyPort=80
```

#### 第三步
重新sync，建议多试几次。

