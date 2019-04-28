vuepress搭建博客中的坑

* 注意，文章中不能包含敏感标签，比如`<html>`，否则会当成html页面中的标签开始打包，导致错误。
* 我在项目中使用了第三方库`element-ui`等，导致错误发生`ReferenceError: HTMLElement is not defined`，现在还没找到解决方法，有知道的朋友请告诉我，谢谢！

