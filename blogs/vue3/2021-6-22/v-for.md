---
title: v-for
date: 2021-6-22
tags:
 - v-for
categories:
 -  vue3
---
<!-- more -->
## v-for的基本使用
```js
<template id="my-app">
    <h2>电影列表</h2>
    <ul>
      <!-- 遍历数组 -->
      <li v-for="(movie, index) in movies">{{index+1}}.{{movie}}</li>
    </ul>
    <h2>个人信息</h2>
    <ul>
      <!-- 遍历对象 -->
      <li v-for="(value, key, index) in info">{{value}}-{{key}}-{{index}}</li>
    </ul>
    <h2>遍历数字</h2>
    <ul>
      <li v-for="(num, index) in 10">{{num}}-{{index}}</li>
    </ul>
</template>
  data() {
        return {
          movies: [
            "星际穿越",
            "盗梦空间",
            "大话西游",
            "教父",
            "少年派"
          ],
          info: {
            name: "why",
            age: 18,
            height: 1.88
          }
        }
      }
```
## v-for和template
```js
<template id="my-app">
    <ul>
    //这里的info为一个对象
      <template v-for="(value, key) in info">
        <li>{{key}}</li>
        <li>{{value}}</li>
        <li class="divider"></li>
      </template>
    </ul>
  </template>
```
## 数组的修改方法
```js
<template id="my-app">
    <h2>电影列表</h2>
    <ul>
      <li v-for="(movie, index) in movies">{{index+1}}.{{movie}}</li>
    </ul>
    <input type="text" v-model="newMovie">
    <button @click="addMovie">添加电影</button>
</template>
  data() {
        return {
          newMovie: "",
          movies: [
            "星际穿越",
            "盗梦空间",
            "大话西游",
            "教父",
            "少年派"
          ]
        }
      },
      methods: {
        addMovie() {
          this.movies.push(this.newMovie);
          this.newMovie = "";

          // this.movies = this.movies.filter(item => item.length > 2);//过滤器，过滤出满足条件的个体，并保存在一个新的体系中，vue3建议在computed中使用
        }
      }
```
## key案例-插入f元素
```js
<template id="my-app">
    <ul>
    //vue3要求遍历必须绑定key
      <li v-for="item in letters" :key="item">{{item}}</li>
    </ul>
    <button @click="insertF">插入F元素</button>
  </template>

  <script src="../js/vue.js"></script>
  <script>
    const App = {
      template: '#my-app',
      data() {
        return {
          letters: ['a', 'b', 'c', 'd']
        }
      },
      methods: {
        insertF() {
          this.letters.splice(2, 0, 'f')
        }
      }
    }

    Vue.createApp(App).mount('#app');
  </script>
```
## 为什么遍历必须给每一个子元素绑定一个key
#### 这是因为使用v-for更新已渲染的元素列表时,默认用就地复用策略;列表数据修改的时候,他会根据key值去判断某个值是否修改,如果修改,则重新渲染这一项,否则复用之前的元素;
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载