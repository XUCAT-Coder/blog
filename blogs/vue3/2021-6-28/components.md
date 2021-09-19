---
title: components pass
date: 2021-6-28
tags:
 - components
categories:
 -  vue3
---
<!--more-->
## 父组件传递子组件
#### 子组件通过props进行接收，父组件通过v-bind:props值="父组件内部数据"
##### 例如：
```vue
父组件
data(){
    return {
        test:'x'
    }
}
子组件
props:{
    rectest:{
        type:String,
        default(){
            return ''
        }
    }
}
父组件模板内
<某标签 :rectest="test" />
```
## 子组件传递父组件
#### 子组件通过$emits发射事件，父组件通过@发射事件="指定函数操作"
```html
孩子
 increment() {
        console.log("+1");
        this.$emit("add",可以携带参数);
}
父亲
<counter-operation @add="addOne">
</counter-operation>
```
##### 特别注意新版vue要求把所有事件放在一起
```js
    emits: ["add", "sub", "addN"],
    // 对象写法的目的是为了进行参数的验证
    emits: {
      add: null,
      sub: null,
      addN: (num, name, age) => {
        console.log(num, name, age);
        if (num > 10) {
          return true
        }
        return false;
      }
    }
```
## Provide和Inject使用
#### 爷孙直接传递
##### 爷爷
```vue
<template>
  <div>
    <home></home>
    <button @click="addName">+name</button>
  </div>
</template>

<script>
  import Home from './Home.vue';
  import { computed } from 'vue';

  export default {
    components: {
      Home
    },
    provide() {
      return {
        name: "why",
        age: 18,
        length: computed(() => this.names.length) // ref对象 .value
      }
    },
    data() {
      return {
        names: ["abc", "cba", "nba"]
      }
    },
    methods: {
      addName() {
        this.names.push("why");
        console.log(this.names);
      }
    }
  }
</script>

```
##### 爸爸
```vue
<template>
  <div>
    <home-content></home-content>
  </div>
</template>

<script>
  import HomeContent from './HomeContent.vue';

  export default {
    components: {
      HomeContent
    }
  }
</script>

```
##### 孙子
```vue
<template>
  <div>
    HomeContent: {{name}} - {{age}} - {{length.value}}
  </div>
</template>

<script>
  export default {
    inject: ["name", "age", "length"],
  }
</script>

```
###### provide选项应该是一个对象或返回一个对象的函数
###### inject选项可以是一个字符串数组也可以是一个对象，key为本地绑定名，value为：
###### 如：
```js
inject: {
      自定义参数名: {
        from: 'name',
        default: ''
      },
      msg: {
        from: 'msg',
        default: ''
      }
}
```
## 事件总线的使用
#### 不同组件之间，非父子组件之间
##### 全局引入
```js
在Vue2中，都是通过this.$bus.$emit('事件')还有this.$bus.$on('发送过来的事件',()=>{})，我们还需要在main.js中注册实例对象

Vue.prototype.$bus=new Vue();

但是在Vue3.x以后从实例中移除了on，off和once 方 法，不过 emit 仍然是现有 API 的一部分，但也只能实现子组件触发父组件的方法

此时就得依赖于mitt模块

安装方法：npm install --save mitt或者yarn add mitt -S

使用方法：

import mitt from 'mitt';

const bus = mitt();

const app = createApp(App)

installElementPlus(app)


app.config.globalProperties.bus = bus

app.use(store).use(router).mount('#app')


```
##### 局部引入
```vue
//封装到一个js文件中(eventbus)
import mitt from 'mitt';

const emitter = mitt();
// export const emitter1 = mitt();
// export const emitter2 = mitt();
// export const emitter3 = mitt();

export default emitter;
//组件按需引入
<template>
  <div>
    <button @click="btnClick">按钮点击</button>
  </div>
</template>

<script>
  import emitter from './utils/eventbus';

  export default {
    methods: {
      btnClick() {
        console.log("about按钮的点击");
        emitter.emit("why", {name: "why", age: 18});
        // emitter.emit("kobe", {name: "kobe", age: 30});
      }
    }
  }
</script>
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载