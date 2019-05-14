最近遇到一个临时项目，为此做了一些调研，现在做一个总结。

### 前期调研
数据来源
* 甲方爸爸整理的Excel表格
* 照片、截图、pdf等文件

功能调研
* PC端
* 展示数据（具体没说，大概率表格的形式）
* 查询数据（展示Excel中整理好的数据；根据查询条件展示数据）
* 修改数据
* 增加数据（预留一个添加数据的接口）
* 删除数据
* 上传附件（照片、截图、pdf等可作为附件上传）
* 获取pdm接口数据

### 技术选型
#### 前端+后端
最传统的做法
* 制定前后端通信协议和接口
* 后端负责解析Excel以及数据库增删改查工作，解析Excel一般用POI
* 前端通过http请求向后端获取数据，解析渲染

#### 前端
前端完成数据获取和渲染，数据库用mongo（文档型数据库很适合前端，本身就是操作Dom），必要时nodeJs
* 数据库：mongoDB
* 前端：vue、element-ui/antd、js-xlsx、nodeJs

#### 难点
* Excel转json：难度在于excel表格属于复杂类型的结构，包含多个合并单元格和多个层级，转化为json失去了原有的层级结构

#### 解决方法
解决办法一
* 处理Excel或者改写sheet_to_json方法，获取正确的json关系文件
* 导入mongoDB直接使用

解决办法二：
* 直接导入excel文件至mongoDB
* 使用sheet_to_html生成html文件，提取table相关信息并展示，之后直接操作dom

#### 真的很想倾听不同人的意见和讨论啊emmm...
<a href="../../demo/xlsx.html">例子源码</a>

###### 相关资料

<a href="https://aotu.io/notes/2016/04/07/node-excel/index.html">js-xlsx实践</a>

<a href="https://github.com/SheetJS/js-xlsx">js-xlsx github</a>

<a href="https://www.runoob.com/mongodb/mongodb-tutorial.html">mongoDB 菜鸟教程</a>


