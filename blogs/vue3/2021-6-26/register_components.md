---
title: components register
date: 2021-6-26
tags:
 - components
categories:
 -  vue3
---
<!-- more -->
## 注册全局组件
```js
app.component('ComponentName', {
        template: "#component-c"
})
app.component('当前要使用的标签名',组件对象)
```
## 注册局部组件
```js
component-a.vue文件中
<template id="component-a">
    <h2>我是组件A</h2>
    <p>我是内容, 哈哈哈哈</p>
</template>
components:{
    a,b,c//a b c为局部组件
}
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载