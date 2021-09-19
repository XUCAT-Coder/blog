---
title: setup of toRefs or toRef
date: 2021-7-15
tags:
 - setup
categories:
 -  vue3
---
## 响应式的对象解构后还会是响应式的吗？
#### 对reactive返回的对象进行解构获取值，之后无论是修改结构后的变量，还是修改reactive，返回的对象，数据都不再是响应式的
```js
import {reactive} from 'vue'
setup(props,context) { 
    const obj=reactive({name:'xwl',age:18,x,info:{school:'secret'}})
    const {name,age,info}=obj; //name，age，info都不是响应式的
    return {
        x,obj,
        name,age,info
    }
  }
```
#### 此时就需要我们的toRefs函数，它可以将reactive返回的对象中的属性都转成ref
```js
  import {reactive,toRefs} from 'vue'
  setup(props,context) { 
      const obj=reactive({name:'xwl',age:18,x,info:{school:'secret'}})
      const {name,age,info}=toRefs(obj); //name，age，info与ref.value建立链接，均为可响应式对象
      return {
          x,obj,
          name,age,info
      }
    }
```
#### 如果我们只希望转换一个reactive对象中的属性为ref,那么可以使用toRef
```js
import {reactive,toRef} from 'vue'
setup(props,context) { 
    const obj=reactive({name:'xwl',age:18,x,info:{school:'secret'}})
    const name=toRef(obj,'name');//（对象，对象里的属性）
    return {
        x,obj,
        name
    }
  }
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载