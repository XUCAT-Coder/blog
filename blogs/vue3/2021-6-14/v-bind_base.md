---
title: v-bind base
date: 2021-6-14
tags:
 - v-bind
categories:
 -  vue3
---
<!-- more -->
## v-bind的基本使用
 ```js
  <!-- vue2 template模板中只能有一个根元素 -->
  <!-- vue3 是允许template中有多个根元素 -->
  <template id="my-app">
    <!-- 1.v-bind的基本使用 -->
    <img v-bind:src="imgUrl" alt="">
    <a v-bind:href="link">百度一下</a>

    <!-- 2.v-bind提供一个语法糖 : -->
    <img :src="imgUrl" alt="">
    <img src="imgUrl" alt="">
  </template>
  
  <script src="../js/vue.js"></script>
 ```
## v-bind动态绑定属性名称
```js
<div id="app"></div>

  <template id="my-app">
    <div :[name]="value">哈哈哈</div>
  </template>

  <script src="../js/vue.js"></script>
  <script>
    const App = {
      template: '#my-app',
      data() {
        return {
          name: "cba",
          value: "kobe"
        }
      }
    }

    Vue.createApp(App).mount('#app');
  </script>
```
## v-bind属性直接绑定一个对象
```js
<template id="my-app">
    <div v-bind="info">哈哈哈哈</div>
    <div :="info">哈哈哈哈</div>
  </template>

  <script src="../js/vue.js"></script>
  <script>
    const App = {
      template: '#my-app',
      data() {
        return {
          info: {
            name: "why",
            age: 18,
            height: 1.88
          }
        }
      }
    }

    Vue.createApp(App).mount('#app');
  </script>
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载