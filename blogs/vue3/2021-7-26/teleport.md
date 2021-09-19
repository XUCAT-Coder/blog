---
title: teleport
date: 2021-7-26
tags:
 - teleport
categories:
 -  vue3
---
## 认识Teleport
#### 某些情况下，我们希望组件不是挂载在这个组件树上的，可能是移动到Vue app之外的其他位置
##### 我们可以借它之手转移到指定元素内部
#### Teleport是什么呢？
##### 它是一个Vue提供的内置组件，类似于react的Portals，理解为联盟里的tp
#### 它有两个属性：
##### to：指定将其中的内容移动到的目标元素，可以使用选择器
##### disabled：是否禁用teleport 的功能
```vue
<template>
    <div>
        <teleport to="body">
            <h2>我被转移啦</h2>
        </teleport>
    </div>
</template>
```
#### 我们可以在teleport 中使用组件，并且也可以给他传入一些数据
```vue
<template>
    <div>
        <teleport to="body">
           <component message="hello teleport 当前组件内数据"></component>
        </teleport>
    </div>
</template>
```
#### 注意：如果我们将多个teleport应用到同一个目标上（to的值相同），那么这些目标会进行合并
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载