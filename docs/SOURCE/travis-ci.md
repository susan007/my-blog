# 自动化构建工具
本文主要介绍一下travis自动化构建工具的使用，实例为本博客的自动化构建过程。
## travis

##### 1、进入travis-ci官网，用你的github账号登录该网站，它会自动关联你github上的工程
##### 2、选择一个工程，打开setting前面的开关，点击setting
##### 3、setting里面默认已经打开了几个选项，在此我们主要需要添加一个github的`Personal access key`

* 步骤一：github上生成`personal access key`

> github --> setting 
--> Developer setting --> Personal access tokens 
--> Generate new token --> 生成token

* 步骤二：添加到travis-ci设置
> setting里面有一个填写名称和key的地方，名称填写你的token名称，key填写github生成的key

##### 4、配置.travis.yml：该文件位于你的博客根目录
* travis.yml具体内容
```js
language: node_js
node_js:
  - "8"
install: npm install
script: npm run deploy
```
* deploy.sh具体内容，该配置参考vuepress官方配置
```js
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd ./docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名
//注意，此处的$BLOG_TOKEN是你生成的`Personal access key`，名字要一致。
git push -f -q https://$BLOG_TOKEN@github.com/susan007/susan007.github.io.git master
```
##### 5、事已至此，当你把博客推到github的时候，会自动执行.travis.yml中的内容。执行结果可去官网查看。

PS: 更详细的步骤请参考
https://www.jianshu.com/p/e22c13d85659
https://www.jianshu.com/p/5691815b81b6

## Jenkins
