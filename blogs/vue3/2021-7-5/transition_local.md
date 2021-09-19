---
title: transition local
date: 2021-7-5
tags:
 - transition
categories:
 -  vue3
---
<!-- more -->
## 动画的基本使用
### 过渡动画的使用
```vue
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <transition name="why">
      <h2 v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>
```
```js
<script>
  export default {
    data() {
      return {
        isShow: true
      }
    }
  }
</script>

```
```css
<style scoped>
  .why-enter-from,
  .why-leave-to {
    opacity: 0;
  }

  .why-enter-to, 
  .why-leave-from {
    opacity: 1;
  }

  .why-enter-active,
  .why-leave-active {
    transition: opacity 2s ease;
  }
</style>
```
### animation动画
```vue
<template>
  <div class="app">
    <div><button @click="isShow = !isShow">显示/隐藏</button></div>

    <transition name="why">
      <h2 class="title" v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>
```
```js
  <script>
    export default {
      data() {
        return {
          isShow: true
        }
      }
    }
  </script>
```
```css
<style scoped>
  .app {
    width: 200px;
    margin: 0 auto;
  }

  .title {
    display: inline-block;
  }

  .why-enter-active {
    animation: bounce 1s ease;
  }

  .why-leave-active {
    animation: bounce 1s ease reverse;
  }

  @keyframes bounce {
    0% {
      transform: scale(0)
    }

    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }
</style>
```
### type和duration属性
```vue
<template>
  <div class="app">
    <div><button @click="isShow = !isShow">显示/隐藏</button></div>
    //type指定当变换执行时间不同优先执行什么，而取消其他
    //动态绑定的duration指定进出时间，如果设立，那么css内容设立的全部无效
    <transition name="why" type="transition" :duration="{enter: 800, leave: 1000}">
      <h2 class="title" v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>
```
```js
<script>
  export default {
    data() {
      return {
        isShow: true
      }
    }
  }
</script>
```
```css
<style scoped>
  .app {
    width: 200px;
    margin: 0 auto;
  }

  .title {
    display: inline-block;
  }

  .why-enter-from,
  .why-leave-to {
    opacity: 0;
  }

  .why-enter-active,
  .why-leave-active {
    transition: opacity 1s ease;
  }

  .why-enter-active {
    animation: bounce 1s ease;
  }

  .why-leave-active {
    animation: bounce 1s ease reverse;
  }

  @keyframes bounce {
    0% {
      transform: scale(0)
    }

    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }
</style>
```
### 两个元素切换mode
```vue
<template>
  <div class="app">
    <div><button @click="isShow = !isShow">显示/隐藏</button></div>
    //如果不设置mode，那么当变化很多来回切换的时候就会卡顿，甚至乱窜
    <transition name="why" mode="out-in">
      <h2 class="title" v-if="isShow">Hello World</h2>
      <h2 class="title" v-else>你好啊,李银河</h2>
    </transition>
  </div>
</template>
```
```js
<script>
  export default {
    data() {
      return {
        isShow: true
      }
    }
  }
</script>
```
```css
<style scoped>
  .app {
    width: 200px;
    margin: 0 auto;
  }

  .title {
    display: inline-block;
  }

  .why-enter-from,
  .why-leave-to {
    opacity: 0;
  }

  .why-enter-active,
  .why-leave-active {
    transition: opacity 1s ease;
  }

  .why-enter-active {
    animation: bounce 1s ease;
  }

  .why-leave-active {
    animation: bounce 1s ease reverse;
  }

  @keyframes bounce {
    0% {
      transform: scale(0)
    }

    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }
</style>
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载