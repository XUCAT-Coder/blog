---
title: trend components
date: 2021-6-30
tags:
 -  trendComponents
categories:
 -  vue3
---
<!-- more -->
## 动态组件的使用
```html
<keep-alive include="home,about">
      <component :is="currentTab">
      //这里is后面动态绑定的是你引入的组件，
      //也就是import 引入的组件 from '路径'
      </component>
</keep-alive>
```
## 动态缓存组件
### 第一种通过设置meta属性来确定是否缓存
```js
  <router-view v-slot="{ Component }">
    <keep-alive v-if="$route.meta.keepAlive">
      <component :is="Component" >
        <p>进行缓存的页面</p>
      </component>
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive">
      <p>没有进行缓存的页面</p>
    </component>
  </router-view>
```
### 第二种通过筛选判断是否缓存
#### 其中include指向的是组件内部本身的name属性
```html
<!-- 逗号分隔字符串 -->
<keep-alive include="a,b">
  <component :is="view"></component>
</keep-alive>

<!-- 正则表达式 (使用 `v-bind`) -->
<keep-alive :include="/a|b/">
  <component :is="view"></component>
</keep-alive>

<!-- 数组 (使用 `v-bind`) -->
<keep-alive :include="['a', 'b']">
  <component :is="view"></component>
</keep-alive>
```
## 第三种通过vuex进行状态管理
### 思路：通过vuex 保存需要缓存的列表页数组
### 通过keep-alive 的 include 来动态获取vuex保存的数组
##### app.vue
```html
<router-view v-slot="{ Component }">
    <!-- 缓存页面 -->
    <keep-alive :include="$store.state.keepLiveRoute">
      <component :is="Component" />
    </keep-alive>
</router-view>
```
##### store index.js中
```js
const keepLiveRoute = ["daily", "safe", "todo", "week", "work"];
export default createStore({
  state: {
    keepLiveRoute
  },
  mutations: {
    ClearKeep(state) {
      if (state.keepLiveRoute.length > 0) state.keepLiveRoute = [];
      console.log("清空缓存路由！");
    },
    SetKeep(state) {
      if (!state.keepLiveRoute.length > 0) state.keepLiveRoute = keepLiveRoute;
      console.log("设置缓存路由！");
    }
  },
  actions: {},
  modules: {}
});
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载