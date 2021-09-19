---
title: transition link
date: 2021-7-6
tags:
 - transition
categories:
 -  vue3
---
<!-- more -->
  ## 过渡动画结合三方库使用
  ### 结合animate使用--css类库
  ##### 安装库，对比网站示例进行挑选
  ##### 安装：npm install animate.css --save 或者 yarn add animate.css
  ##### 网站：https://animate.style/
```vue
<template>
  <div class="app">
    <div><button @click="isShow = !isShow">显示/隐藏</button></div>
    //对应页面效果复制class
    <transition enter-active-class="animate__animated animate__fadeInDown"
                leave-active-class="animate__animated animate__flipInY">
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
  .title {
    display: inline-block;
    transform: translateX(100px)
  }

  .animate__flipInY {
    animation-direction: reverse;
  }

  /* .why-enter-active {
    animation: bounceInUp 1s ease-in;
  }

  .why-leave-active {
    animation: bounceInUp 1s ease-in reverse;
  } */
</style>
```
### 生命周期钩子
```vue
<template>
  <div class="app">
    <div><button @click="isShow = !isShow">显示/隐藏</button></div>

    <transition @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @before-leave="beforeLeave"
                @leave="leave"
                @afterLeave="afterLeave">
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
    },
    methods: {
      beforeEnter() {
        console.log("beforeEnter");
      },
      enter() {
        console.log("enter");
      },
      afterEnter() {
        console.log("afterEnter");
      },
      beforeLeave() {
        console.log("beforeLeave");
      },
      leave() {
        console.log("leave");
      },
      afterLeave() {
        console.log("afterLeave");
      }
    }
  }
</script>
```
```css
<style scoped>
  .title {
    display: inline-block;
  }
</style>
```
### 结合gsap使用--js类库
##### 安装：npm install gsap
##### 挑选：https://greensock.com/gsap/
```vue
<template>
  <div class="app">
    <div><button @click="isShow = !isShow">显示/隐藏</button></div>

    <transition @enter="enter"
                @leave="leave"
                :css="false">
      <h2 class="title" v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>
```
```vue
<script>
  import gsap from 'gsap';

  export default {
    data() {
      return {
        isShow: true,
      }
    },
    methods: {
      enter(el, done) {
        console.log("enter");
        gsap.from(el, {
          scale: 0,
          x: 200,
          onComplete: done
        })
      },
      leave(el, done) {
        console.log("leave");
        gsap.to(el, {
          scale: 0,
          x: 200,
          onComplete: done
        })
      }
    }
  }
</script>
```
```css
<style scoped>
  .title {
    display: inline-block;
  }
</style>
```
### gsap数字递增动画--js库
```vue
<template>
  <div class="app">
    <input type="number" step="100" v-model="counter">
    <!-- <h2>当前计数: {{showCounter}}</h2> -->
    <h2>当前计数: {{showNumber.toFixed(0)}}</h2>
  </div>
</template>
```
```js
<script>
  import gsap from 'gsap';

  export default {
    data() {
      return {
        counter: 0,
        showNumber: 0
      }
    },
    // computed: {
    //   showCounter() {
    //     return this.showNumber.toFixed(0);
    //   }
    // },
    watch: {
      counter(newValue) {
        gsap.to(this, {duration: 1, showNumber: newValue})
      }
    }
  }
</script>
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载