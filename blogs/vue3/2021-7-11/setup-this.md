---
title: setup of this?
date: 2021-7-11
tags:
 - setup
categories:
 -  vue3
---
<!-- more -->
## setup中为什么不能用this？
### 官方是这样说的：在 setup() 内部，this 不会是该活跃实例的引用，因为 setup() 是在解析其它组件选项之前被调用的，所以 setup() 内部的 this 的行为与其它选项中的 this 完全不同。这在和其它选项式 API 一起使用 setup() 时可能会导致混淆。
#### 我们可以理解为：this未指向当前的组件实例，在setup被调用之前，data，methods，computed等都没有被解析，但是组件实例确实在执行setup函数之前就已经被创建好了
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载