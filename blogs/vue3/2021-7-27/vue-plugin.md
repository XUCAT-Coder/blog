---
title: vue plugin
date: 2021-7-27
tags:
 - vue-plugin
categories:
 -  vue3
---
## Vue插件
### 通常我们向Vue全局添加一些功能时，会采用插件的模式，它有两种编写方式
#### 对象类型：一个对象，但是必须包含一个install 的函数，该函数会在安装插件时执行
#### 函数类型：一个function，这个函数会在安装插件时自动执行
##### 对象类型:
```js
export default {
  install(app,options) {
    app.config.globalProperties.$name = "xwl"
  }
}
```
##### 函数类型
```js
export default function(app,options) {
  console.log(app);
}
```
```r
全局安装
import pluginObject from './plugins/plugins_object'
import pluginFunction from './plugins/plugins_function'
app.use(pluginObject);
app.use(pluginFunction);
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载