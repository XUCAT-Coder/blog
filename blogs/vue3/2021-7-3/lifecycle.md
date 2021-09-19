---
title: lifecycle
date: 2021-7-3
tags:
 - lifecycle
categories:
 -  vue3
---
<!-- more -->
### `beforeCreate`:在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
### `created`:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el property 目前尚不可用。
### `beforeMount`:在挂载开始之前被调用,相关的 render 函数首次被调用,该钩子在服务器端渲染期间不被调用。
### `mounted`:在模板渲染成html后调用，一般是初始化页面完成后，再对html的dom节点进行操作,实例被挂载后调用，这时 Vue.createApp({}).mount() 被新创建的 vm.$el 替换了。 
### `beforeUpdate`:数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器,该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。
### `updated`:由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或侦听器取而代之。
### `activated`:被 keep-alive 缓存的组件激活时调用。该钩子在服务器端渲染期间不被调用。
### `deactivated`:被 keep-alive 缓存的组件停用时调用。该钩子在服务器端渲染期间不被调用。
### `beforeUnmount`:在卸载组件实例之前调用。在这个阶段，实例仍然是完全正常的。该钩子在服务器端渲染期间不被调用。
### `unmounted`:卸载组件实例后调用。调用此钩子时，组件实例的所有指令都被解除绑定，所有事件侦听器都被移除，所有子组件实例被卸载。该钩子在服务器端渲染期间不被调用。
![avatar](https://www.vue3js.cn/docs/zh/images/lifecycle.png)
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载