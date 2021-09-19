---
title: setup of provide or inject
date: 2021-7-20
tags:
 - setup provide inject
categories:
 -  vue3
---
## Provide函数
### 可以通过provide来为子孙提供数据
#### provide可以传入两个参数：name：提供的属性名称，value：提供的属性值
```js
import {provide} from 'vue'
setup(){
const x="xwl";
provide("name",x);
return {
    x
}
}

```
## Inject函数
### 在后代组件中可以通过inject 来注入需要的属性和对应的值
#### inject可以传入两个参数:要inject 的property 的name,默认值.
```js
import {inject} from 'vue'
setup(){
const y=inject("name","zhangsan");
return {
    y
}
}

```
## 为数据添加响应式
### 可以向provide传入ref或者reactive对象
```js
import {provide} from 'vue'
setup(){
const name=ref("xwl");
provide("name",name);
return {
  name
}
```
#### 如果我们需要修改可响应的数据，那么最好是在数据提供的位置来修改
#### 我们可以将修改方法进行共享，在后代组件中进行调用
```js
import {provide} from 'vue'
setup(){
    const changeName=()=>{
        console.log("changename")
    }
    provide("changeName",changeName)
    return {
      changename
    }
}
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载