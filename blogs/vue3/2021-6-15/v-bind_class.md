---
title: v-bind class
date: 2021-6-15
tags:
 - v-bind
categories:
 -  vue3
---
<!-- more -->

## v-bind绑定class-对象语法
```js
<template id="my-app">
      <div :class="className">哈哈哈哈</div>
      <!-- 对象语法: {'active': boolean} -->
      <div :class="{'active': isActive}">呵呵呵呵</div>
      <button @click="toggle">切换</button>

      <!-- 也可以有多个键值对 -->
      <div :class="{active: isActive, title: true}">呵呵呵呵</div>

      <!-- 默认的class和动态的class结合 -->
      <div class="abc cba" :class="{active: isActive, title: true}">
        呵呵呵呵
      </div>

      <!-- 将对象放到一个单独的属性中 -->
      <div class="abc cba" :class="classObj">呵呵呵呵</div>

      <!-- 将返回的对象放到一个methods(computed)方法中 -->
      <div class="abc cba" :class="getClassObj()">呵呵呵呵</div>      
    </template>

    <script src="../js/vue.js"></script>
```
## v-bind绑定class-数组语法
```js
 <template id="my-app">
    <div :class="['abc', title]">哈哈哈哈</div>
    <div :class="['abc', title, isActive ? 'active': '']">哈哈哈哈</div>
    <div :class="['abc', title, {active: isActive}]">哈哈哈哈</div>
  </template>
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载