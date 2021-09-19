---
title: transition group
date: 2021-7-7
tags:
 - transition
categories:
 -  vue3
---
<!-- more -->


## 列表动画的使用
### transition-group的使用
```vue
<template>
  <div>
    <button @click="addNum">添加数字</button>
    <button @click="removeNum">删除数字</button>
    <button @click="shuffleNum">数字洗牌</button>
    1.在实现列表过渡时，如果需要过渡的元素是通过v-for渲染出来的，
    不能使用transition 包裹，得使用 transition-group
    2.若需要为 v-for 循环创建的元素设置动画，必须为每一个元素设置 :key 属性
    3.不同于 <transition>，它会以一个真实元素呈现：默认为一个 <span>(列表渲染包裹的容器)。你也可以通过tag属性更换为其他元素。
    4.过渡模式(mode)不可用，因为我们不再相互切换特有的元素。
    5.CSS 过渡的类将会应用在内部的元素中，而不是这个组/容器本身。
    <transition-group tag="p" name="why">
      <span v-for="item in numbers" :key="item" class="item">
        {{item}}
      </span>
    </transition-group>
  </div>
</template>
```
```vue
<script>
  import _ from 'lodash';//与_.shuffle有关，必须导入

  export default {
    data() {
      return {
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        numCounter: 10
      }
    },
    methods: {
      addNum() {
        // this.numbers.push(this.numCounter++)
        //splice添加或删除元素
        this.numbers.splice(this.randomIndex(), 0, this.numCounter++)
      },
      removeNum() {
        this.numbers.splice(this.randomIndex(), 1)
      },
      shuffleNum() {
          //随机排列
        this.numbers = _.shuffle(this.numbers);
      },
      randomIndex() {
          //创建随机数
        return Math.floor(Math.random() * this.numbers.length)
      }
    },
  }
</script>
```
```css

<style scoped>
  .item {
    margin-right: 10px;
    display: inline-block;
  }

  .why-enter-from,
  .why-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .why-enter-active,
  .why-leave-active {
    transition: all 1s ease;
  }

  .why-leave-active {
    position: absolute;
  }

  .why-move {
    transition: transform 1s ease;
  }
</style>
```
### 列表的交替动画
```vue
<template>
  <div>
    <input v-model="keyword">
    <transition-group tag="ul" name="why" :css="false"
                      @before-enter="beforeEnter"
                      @enter="enter"
                      @leave="leave">
      <li v-for="(item, index) in showNames" :key="item" :data-index="index">
        {{item}}
      </li>
    </transition-group>
  </div>
</template>
```
```vue
<script>
  import gsap from 'gsap';

  export default {
    data() {
      return {
        names: ["abc", "cba", "nba", "why", "lilei", "hmm", "kobe", "james"],
        keyword: ""
      }
    },
    computed: {
      showNames() {
        return this.names.filter(item => item.indexOf(this.keyword) !== -1)
      }
    },
    methods: {
      beforeEnter(el) {
        el.style.opacity = 0;
        el.style.height = 0;
      },
      enter(el, done) {
        gsap.to(el, {
          opacity: 1,
          height: "1.5em",
          delay: el.dataset.index * 0.5,
          onComplete: done
        })
      },
      leave(el, done) {
        gsap.to(el, {
          opacity: 0,
          height: 0,
          delay: el.dataset.index * 0.5,
          onComplete: done
        })
      }
    }
  }
</script>
```
```css
<style scoped>
  /* .why-enter-from,
  .why-leave-to {
    opacity: 0;
  }

  .why-enter-active,
  .why-leave-active {
    transition: opacity 1s ease;
  } */
</style>
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载