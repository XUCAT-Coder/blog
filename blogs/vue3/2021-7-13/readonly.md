---
title: setup of readonly
date: 2021-7-13
tags:
 - setup
categories:
 -  vue3
---
## 为什么要用readonly？
#### 我们向下传递响应式数据的同时并不希望，下层修改我们的数据，所以在下层内得需要设为只读
## readonly的返回值
#### 返回原生对象的只读代理，也就是只允许get，劫持了set
## readonly传参的类型
#### 普通对象，reactive返回的对象，ref对象
##### 举个例子
```js
import {ref,reactive,readonly} from 'vue'
setup(props,context) { 
    const x=ref("xwl")
    const y="xwl"
    const obj=reactive({name:'xwl',age:18,info:{school:'secret'}})
    const readonly1=readonly(y);  普通对象
    const readonly2=readonly(x);  ref对象
    const readonly3=readonly(obj);reactive返回的对象
    我们可以修改x，y，obj，对应也会产生响应式，但是readonly1等不可修改
    return {
        x,y,obj
    }
  }
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载

