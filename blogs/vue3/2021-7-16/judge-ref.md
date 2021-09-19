---
title: setup of judge if ref
date: 2021-7-16
tags:
 - setup
categories:
 -  vue3
---

## ref其他的API
### unref
#### 如果我们想要获取一个ref引用中的value，那么也可以通过unref方法
#### 如果参数是一个ref，则返回内部值，否则返回参数本身,这是val= isRef(val) ? val.value: val的语法糖函数
### isRef
#### 判断值是否是一个ref对象
### shallowRef
#### 创建一个浅层的ref对象
### triggerRef
#### 手动触发和shallowRef相关联的副作用
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载







###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载