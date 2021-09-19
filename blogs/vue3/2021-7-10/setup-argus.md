---
title: setup arguments
date: 2021-7-10
tags:
 - setup
categories:
 -  vue3
---
<!-- more -->
## setup函数包含两个参数，一个是props，另一个是context,其中context又包含了attrs,slots,emit
```js
  setup(props,context) { 
      return {
      }
    }
```
### 或者用es6进行解构，你可以这样写
```js
setup(props,{attrs,slots,emit}) { 
    return {
    }
  }
```
#### props：父组件传递过来的属性会存放到props对象中
#### attrs：// Attribute (非响应式对象，即非props的attribute)
#### slots：// 插槽 (非响应式对象)
#### emit： // 触发事件 (方法)
#### setup的返回值可以直接在模板template中使用，也即是说类似于vue2中的data
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载

