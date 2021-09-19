---
title: v-model on components
date: 2021-7-4
tags:
 - v-model
categories:
 -  vue3
---
<!-- more -->
## 组件上使用v-model
### app.vue
```js
<template>
  <div>
    <!-- <input v-model="message">
    <input :value="message" @input="message = $event.target.value"> -->

    <!-- 组件上使用v-model -->
    v-model这个双向绑定相当于做了两个操作：（1）给当前这个组件添加了一个value属性 （2）给当前这个组件绑定了一个input事件
    <!-- <hy-input v-model="message"></hy-input> -->
    <!-- <hy-input :modelValue="message" @update:model-value="message = $event"></hy-input> -->

    <!-- 绑定两个v-model -->
    <hy-input v-model="message" v-model:title="title"></hy-input>

    <h2>{{message}}</h2>
    <h2>{{title}}</h2>
  </div>
</template>
```
```vue
<script>
  import HyInput from './HyInput.vue';

  export default {
    components: {
      HyInput
    },
    data() {
      return {
        message: "Hello World",
        title: "哈哈哈"
      }
    }
  }
</script>

```
### HyInput.vue
```vue
<template>
  <div>
    <input v-model="value">
    <input v-model="why">
  </div>
</template>
```
```js
<script>
  export default {
    props: {
      modelValue: String,
      title: String 
    },
    emits: ["update:modelValue", "update:title"],
    computed: {
      value: {
        set(value) {
          this.$emit("update:modelValue", value);
        },
        get() {
          return this.modelValue;
        }
      },
      why: {
        set(why) {
          this.$emit("update:title", why);
        },
        get() {
          return this.title;
        }
      }
    }
  }
</script>
```
#### 友情提示：
```vue
<template>
  <div>
    1.默认绑定和事件处理
    <button @click="btnClick">hyinput按钮</button>
    <h2>HyInput的message: {{modelValue}}</h2>

    2.通过input
    <input :value="modelValue" @input="btnClick">

    3.绑定到props中是不对的
    <input v-model="modelValue">

    4.正确写法
    <input v-model="value">

  </div>
</template>
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载