---
title: v-show
date: 2021-6-21
tags:
 - v-show
categories:
 -  vue3
---
<!-- more -->
## v-show的条件渲染
```js
<template id="my-app">
    <h2 v-show="isShow">哈哈哈哈</h2>
</template>
```
## v-show和v-if的区别
```js
  <template id="my-app">
    <h2 v-if="isShow">哈哈哈哈</h2> //false被自动移除，不占用资源
    <h2 v-show="isShow">呵呵呵呵</h2>//false 为元素自动设置display:none隐藏，实际仍存在
  </template>
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载