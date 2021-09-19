---
title: computed
date: 2021-6-23
tags:
 - computed
categories:
 -  vue3
---
<!-- more -->
## 优先了解mustache语法（插值语法）
#### 示例：{{content}}
```js
 <template id="my-app">
    <h2>{{firstName + " " + lastName}}</h2>
    <h2>{{score >= 60 ? '及格': '不及格'}}</h2>
    <h2>{{message.split(" ").reverse().join(" ")}}</h2>
  </template>
```
## 计算属性的基本使用
#### 别看像个函数，再使用时当成属性使用就行，不需要加()
```js
<div id="app"></div>

  <template id="my-app">
    <h2>{{fullName}}</h2>
    <h2>{{result}}</h2>
    <h2>{{reverseMessage}}</h2>
  </template>

  <script src="../js/vue.js"></script>
  <script>
    const App = {
      template: '#my-app',
      data() {
        return {
          firstName: "Kobe",
          lastName: "Bryant",
          score: 80,
          message: "Hello World"
        }
      },
      computed: {
        // 定义了一个计算属性叫fullname
        fullName() {
          return this.firstName + " " + this.lastName;
        },
        result() {
          return this.score >= 60 ? "及格": "不及格";
        },
        reverseMessage() {
          return this.message.split(" ").reverse().join(" ");
        }
      }
    }

    Vue.createApp(App).mount('#app');
  </script>
```
## methods-computed区别
```js
computed: {
        // 计算属性是有缓存的, 当我们多次使用计算属性时, 计算属性中的运算只会执行一次.
        // 计算属性会随着依赖的数据(firstName)的改变, 而进行重新计算.
        fullName() {
          console.log("computed的fullName中的计算");
          return this.firstName + " " + this.lastName;
        }
      },
      methods: {
        getFullName() {
          console.log("methods的getFullName中的计算");
          return this.firstName + " " + this.lastName;
        },
        changeFirstName() {
          this.firstName = "Coder"
        }
      }
```
## computed的随从
#### computed有两个随从，一个是setter，另一个是getter,只是默认我们都采用getter，很少用setter
```js
computed: {

        // fullName 的 getter方法
        fullName() {
          return this.firstName + " " + this.lastName;
        },
        
        // fullName的getter和setter方法
        fullName: {
          get: function() {
            return this.firstName + " " + this.lastName;
          },
          set: function(newValue) {
            console.log(newValue);
            const names = newValue.split(" ");
            this.firstName = names[0];
            this.lastName = names[1];
          }
        }
      }
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载