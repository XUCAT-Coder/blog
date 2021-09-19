---
title: h函数的使用
date: 2021-7-22
tags:
 - h
categories:
 -  vue3
---
## h函数
### h() 函数是一个用于创建 vnode 的一个函数
#### 其实更准确的命名是 createVNode() 函数，但是为了简便在Vue将之简化为 h() 函数
### h函数的使用
#### 它接受三个参数：("标签名|组件",插入标签内的属性|事件，向这个标签|组件内插入的内容)
##### 有时为了避免产生歧义，可以将null作为第二个参数传入，将children作为第三个参数传入
### h函数的基本使用
#### 简单写法
```js
!无需模板~
import {h} from 'vue'
export default {
  name: 'Home',
  render() {
    return  h("span",{class:"sp"},"我是h出来的span")
  },
}

```
#### 多数据写法
```js
import {h} from 'vue'
export default {
  
  render() {
    return h("div",null,[
      h("h2",null,"about"),
      h("span",{class:"sp"},"我是h出来的span")
    ])
  },
}
```
### 函数组件和插槽的使用
##### home组件
```js
import about from './About.vue'
import {h} from 'vue'
export default {
  name: 'Home',
  render() {
    return  h(about,null,
    {
      default1: props=>h("span",null,`"我是home传给about的具名插槽"+${props.name}`) //这个default1就是插槽的名字
    }
  )
  },
}
```
##### about组件
```js
import {h} from 'vue'
export default {
  
  render() {
    return h("div",null,[
      h("h2",null,"about"),
      this.$slots.default1?this.$slots.default1({name:'xwl'}):h("h2",null,"aboutDefault"),
    ])
  },
}
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载
