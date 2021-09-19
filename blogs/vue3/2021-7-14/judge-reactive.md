---
title: setup of judge if reactive
date: 2021-7-14
tags:
 - setup
categories:
 -  vue3
---
# Reactive判断的API
## isProxy: 
### 检查对象是否是由reactive 或readonly创建的proxy
## isReactive
### 检查对象是否是由reactive创建的响应式代理：如果该代理是readonly建的，但包裹了由reactive 创建的另一个代理，它也会返回true；
## isReadonly
### 检查对象是否是由readonly创建的只读代理
## toRaw
### 返回reactive 或readonly代理的原始对象（不建议保留对原始对象的持久引用。请谨慎使用）
## shallowReactive
### 创建一个响应式代理，它跟踪其自身property 的响应性，但不执行嵌套对象的深层响应式转换(深层还是原生对象)
## 创建一个proxy，使其自身的property 为只读，但不执行嵌套对象的深度只读转换（深层还是可读、可写的）
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载