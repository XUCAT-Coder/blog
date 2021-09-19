---
title: v-model
date: 2021-6-25
tags:
 - v-model
categories:
 -  vue3
---
<!-- more -->
## v-model的基本使用
```js
<template id="my-app">
    <!-- 1.v-bind value的绑定 2.监听input事件, 更新message的值 -->
    <!-- <input type="text" :value="message" @input="inputChange"> -->
    <input type="text" v-model="message">
    <h2>{{message}}</h2>
</template>
  data() {
        return {
          message: "Hello World"
        }
      },
      methods: {
        inputChange(event) {
          this.message = event.target.value;
        }
      }
```
## v-model绑定其他表单
``` js
  <template id="my-app">
    <!-- 1.绑定textarea -->
    <label for="intro">
      自我介绍
      <textarea name="intro" id="intro" cols="30" rows="10" v-model="intro"></textarea>
    </label>
    <h2>intro: {{intro}}</h2>

    <!-- 2.checkbox -->
    <!-- 2.1.单选框 -->
    <label for="agree">
      <input id="agree" type="checkbox" v-model="isAgree"> 同意协议
    </label>
    <h2>isAgree: {{isAgree}}</h2>

    <!-- 2.2.多选框 -->
    <span>你的爱好: </span>
    <label for="basketball">
      <input id="basketball" type="checkbox" v-model="hobbies" value="basketball"> 篮球
    </label>
    <label for="football">
      <input id="football" type="checkbox" v-model="hobbies" value="football"> 足球
    </label>
    <label for="tennis">
      <input id="tennis" type="checkbox" v-model="hobbies" value="tennis"> 网球
    </label>
    <h2>hobbies: {{hobbies}}</h2>

    <!-- 3.radio -->
    <span>你的爱好: </span>
    <label for="male">
      <input id="male" type="radio" v-model="gender" value="male">男
    </label>
    <label for="female">
      <input id="female" type="radio" v-model="gender" value="female">女
    </label>
    <h2>gender: {{gender}}</h2>

    <!-- 4.select -->
    <span>喜欢的水果: </span>
    <select v-model="fruit" multiple size="2">
      <option value="apple">苹果</option>
      <option value="orange">橘子</option>
      <option value="banana">香蕉</option>
    </select>
    <h2>fruit: {{fruit}}</h2>
  </template>
```
##
```vue
<template id="my-app">
    <!-- 1.lazy修饰符 -->
    //有lazy，在失去焦点后才进行同步
    <!-- <input type="text" v-model.lazy="message"> -->

    <!-- 2.number修饰符 -->
    <!-- <input type="text" v-model.number="message">
    <h2>{{message}}</h2>
    <button @click="showType">查看类型</button> -->

    <!-- 3.trim修饰符 -->
    //trim自动过滤输入内容最开始和最后的空格,中间的会保留一个空格,多的会被过滤掉
    <input type="text" v-model.trim="message">
    <button @click="showResult">查看结果</button>
</template>
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载