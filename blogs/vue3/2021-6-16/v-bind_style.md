---
title: v-bind style
date: 2021-6-16
tags:
 - v-bind
categories:
 -  vue3
---
<!-- more -->
## v-bind绑定style-对象语法
```js
  <template id="my-app">
    <!-- :style="{cssPropertyName: cssPropertyValue}" -->
    <div :style="{color: finalColor, 'font-size': '30px'}">哈哈哈哈</div>
    <div :style="{color: finalColor, fontSize: '30px'}">哈哈哈哈</div>
    <div :style="{color: finalColor, fontSize: finalFontSize + 'px'}">哈哈哈哈</div>

    <!-- 绑定一个data中的属性值, 并且是一个对象 -->
    <div :style="finalStyleObj">呵呵呵呵</div>
    <!-- 调用一个方法 -->
    <div :style="getFinalStyleObj()">呵呵呵呵</div>
  </template>

  <script src="../js/vue.js"></script>
```
## v-bind绑定style-数组语法
```js
  <template id="my-app">
    <div :style="[style1Obj, style2Obj]">哈哈哈</div>
    <img :src="" alt="">
    <a :href=""></a>
    <div :class></div>
  </template>

  <script src="../js/vue.js"></script>
```