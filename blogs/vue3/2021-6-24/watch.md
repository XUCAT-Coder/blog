---
title: watch
date: 2021-6-24
tags:
 - watch
categories:
 -  vue3
---
<!-- more -->
## 监听器的基本使用
```js
<template id="my-app">
    您的问题: <input type="text" v-model="question">
    <!-- <button @click="queryAnswer">查找答案</button> -->
</template>
 data() {
        return {
          // 监听question的变化时, 去进行一些逻辑的处理(JavaScript, 网络请求)
          question: "Hello World",
          anwser: ""
        }
      },
      watch: {
        // question监听的data中的属性的名称
        // newValue变化后的新值
        // oldValue变化前的旧值
        question: function(newValue, oldValue) {
          console.log("新值: ", newValue, "旧值", oldValue);
          this.queryAnswer();
        }
      }，
      methods: {
        queryAnswer() {
            //ES6模板字符串，字符串插值
          console.log(`你的问题${this.question}的答案是哈哈哈哈哈`);
          this.anwser = "";
        }
      }
```
## 监听器的配置选项
``` js
watch: {
        // 默认情况下我们的监听器只会针对监听的数据本身的改变(内部发生的改变是不能监听)
        // info(newInfo, oldInfo) {
        //   console.log("newValue:", newInfo, "oldValue:", oldInfo);
        // }

        // 深度监听/立即执行(一定会执行一次)
        info: {
          handler: function(newInfo, oldInfo) {
            console.log("newValue:", newInfo.nba.name, "oldValue:", oldInfo.nba.name);
          },
          deep: true, // 深度监听
          // immediate: true // 立即执行
        }
      }
      
```
## 监听器的其他方式

```js
watch: {
        info(newValue, oldValue) {
          console.log(newValue, oldValue);
        },
        "info.name": function(newName, oldName) {
          console.log(newName, oldName);
        },
        "friends[0].name": function(newName, oldName) {
          console.log(newName, oldName);
        },
        // friends: {
        //   handler(newFriends, oldFriend) {
        //   },
        //   deep: true
        // }
      }
      created() {
          //在生命周期内，通过$watch也可以
        const unwatch = this.$watch("info", function(newInfo, oldInfo) {
          console.log(newInfo, oldInfo);
        }, {
          deep: true,
          immediate: true
        })
        // unwatch()
      }
```