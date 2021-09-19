---
title: v-on base
date: 2021-6-17
tags:
 - v-on
categories:
 -  vue3
---
<!-- more -->
## v-on的基本使用
```js
<template id="my-app">
    <!-- 完整写法: v-on:监听的事件="methods中方法" -->
    <button v-on:click="btn1Click">按钮1</button>
    <div class="area" v-on:mousemove="mouseMove">div</div>
    <!-- 语法糖 -->
    <button @click="btn1Click">按钮1</button>
    <!-- 绑定一个表达式: inline statement -->
    <button @click="counter++">{{counter}}</button>
    <!-- 绑定一个对象 -->
    <div class="area" v-on="{click: btn1Click, mousemove: mouseMove}"></div>
    <div class="area" @="{click: btn1Click, mousemove: mouseMove}"></div>
  </template>

  <script src="../js/vue.js"></script>
  <script>
    const App = {
      template: '#my-app',
      data() {
        return {
          message: "Hello World",
          counter: 100
        }
      },
      methods: {
        btn1Click() {
          console.log("按钮1发生了点击");
        },
        mouseMove() {
          console.log("鼠标移动");
        }
      }
    }

    Vue.createApp(App).mount('#app');
  </script>
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载