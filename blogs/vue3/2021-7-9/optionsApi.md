---
title: optionsApi
date: 2021-7-9
tags:
 - optionsApi
categories:
 -  vue3
---
<!-- more -->
## OptionsApi的弊端
### 同一功能的逻辑分散，因为它被拆分到各个属性当中
#### 当我们在阅读别人写的代码时，相当于是在拼凑碎片，很耗时
## CompositionApi
### vue3推荐我们使用CompositionApi，也就是用setup函数来替代methods，computed，watch，data，生命周期等等
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载