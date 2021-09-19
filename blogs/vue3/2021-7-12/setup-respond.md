---
title: setup of response
date: 2021-7-12
tags:
 - setup
categories:
 -  vue3
---
## setup中的响应数据
#### 我们在setup中定义的变量，会是响应式的吗？
```js
setup(props,context) { 
    const x="xwl"
    return {
        x
    }
  }
```
##### 显然不是，vue是不会自动帮我们追踪的
#### 所以如何实现响应式？
##### 这里有两个vue内部的函数，可以帮我们搞定，一个是ref，另一个是reactive
###### ref适用于简单数据，reactive适用于复杂数据，后者更倾向于对象和数组
```js
import {ref,reactive} from 'vue'
setup(props,context) { 
    const x=ref("xwl")
    const obj=reactive({name:'xwl',age:18,x,info:{school:'secret'}})
    return {
        x,obj
    }
  }
```
## 使用ref的注意事项
#### 其一，在模板中引入ref的值，vue会进行自动解包
#### 其二，在setup内部，对其操作必须使用ref.value的方式
## 使用reactive的注意事项
#### 类型有限，只能是对象或者数组
#### reactive可以包裹ref对象，包裹后，在模板中同样也会自动解包，包括ref对象，用的时候不加value
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载