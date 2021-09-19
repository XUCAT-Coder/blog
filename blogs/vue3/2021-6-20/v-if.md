---
title: v-if
date: 2021-6-20
tags:
 - v-if
categories:
 -  vue3
---
<!-- more -->
## 条件渲染的基本使用
```js
<template id="my-app">
    //显示与否跟isShow的boolean值有关
    <h2 v-if="isShow">哈哈哈哈</h2>
    <button @click="toggle">切换</button>
</template>
```
## 多个条件的渲染
```js
  <template id="my-app">
    <input type="text" v-model="score">
    <h2 v-if="score > 90">优秀</h2>
    <h2 v-else-if="score > 60">良好</h2>
    <h2 v-else>不及格</h2>
  </template>
```
## template和v-if结合使用
```js
 <template id="my-app">
    <template v-if="isShowHa">
      <h2>哈哈哈哈</h2>
      <h2>哈哈哈哈</h2>
      <h2>哈哈哈哈</h2>
    </template>

    <template v-else>
      <h2>呵呵呵呵</h2>
      <h2>呵呵呵呵</h2>
      <h2>呵呵呵呵</h2>
    </template>
  </template>
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载