---
title: setup of customRef
date: 2021-7-16
tags:
 - setup
categories:
 -  vue3
---
## customRef--自定义的ref
### 作用：创建一个自定义的ref，并对其依赖项跟踪和更新触发进行显示控制
#### 它需要一个工厂函数，该函数接受track 和trigger函数作为参数；p并且应该返回一个带有get 和set 的对象
##### 例如：防抖函数：debounce
```js
import {customRef} from 'vue'
export function debounceRef(value,delay=200){
    let timer;
    return customRef((track,trigger)=>{
        return {
            get(){
             track();//跟踪，收集数据
             return value;
            },
            set(newvalue){
             clearTimeout(timer);
             timer=setTimeout(()=>{
              value=newvalue;
              trigger();//触发
             },delay)
            }
        }
    })
}
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载
