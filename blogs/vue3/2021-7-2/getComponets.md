---
title: get components
date: 2021-7-2
tags:
 - getComponents
categories:
 -  vue3
---
<!-- more -->
## 引用元素和组件
### 通过ref属性拿到元素或组件内容
```html
    <!-- 绑定到一个元素上 -->
    <h2 ref="title">哈哈哈</h2>
    <!-- 绑定到一个组件实例上 -->
    <nav-bar ref="navBar"></nav-bar>
    <button @click="btnClick">获取元素</button>
    
```
```js
btnClick() {
        console.log(this.$refs.title);

        console.log(this.$refs.navBar.message);
        this.$refs.navBar.sayHello();

        // $el
        console.log(this.$refs.navBar.$el);
}
```
### 通过$parent和$root获取父组件和根组件
```html
<template>
  <div>
    <h2>NavBar</h2>
    <button @click="getParentAndRoot">获取父组件和根组件</button>
  </div>
</template>

```
```js
 methods: {
      getParentAndRoot() {
        console.log(this.$parent);
        console.log(this.$root);
      }
}
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载