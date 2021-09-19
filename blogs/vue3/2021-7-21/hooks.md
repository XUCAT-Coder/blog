---
title:  hooks
date: 2021-7-21
tags:
 - setup hooks
categories:
 -  vue3
---
## 逻辑钩子抽取，hooks
### 编写一个修改title的Hook
```js
import { ref,watch } from 'vue'
export default function useTitle(title="xwl"){
   const titleRef=ref(title);
   document.title= titleRef.value;
   watch(titleRef,(newValue)=>{
         document.title=newValue;
   },{
       immediate:true
   });
   return titleRef;
}
```
##### 在使用的时候
```js
setup(){
const titleRef=useTitle();
titleRef.value="home";
}

```
### 监听界面滚动位置的Hook
```js
import { ref } from 'vue'
export default function scroll(){
    const scrollX=ref(0);
    const scrollY=ref(0);
   
    document.addEventListener('scroll',()=>{
        scrollX.value=window.scrollX;
        scrollY.value=window.scrollY;
    })
    return {scrollX,
            scrollY}
}
```
##### 用的时候对象结构就行，如：{scrollX,scrollY}=scroll();
### 监听鼠标位置的Hook
```js
import { ref } from "vue"
export default function mousemove(){
    const mouseX=ref(0)
    const mouseY=ref(0)
    document.addEventListener('mousemove',(event)=>{
        mouseX.value=event.pageX
        mouseY.value=event.pageY
    })
    return {
        mouseX,
        mouseY
    }
}
```
### 使用localStorage存储和获取数据的Hook
```js
import { ref,watch}from 'vue'
export default function(key,value){
 const data=ref(value);
 //保存值
 if(value){
     window.localStorage.setItem(key,JSON.stringify(value))

 }else{
     data.value=JSON.parse(window.localStorage.getItem(key))
 }
 //取值
 //监听变化保存值
 watch(data,(newValue)=>{
   window.localStorage.setItem(key,JSON.stringify(newValue));
 })
 return data;
}
```
##### 使用如下
```js
 const data= useLocalStorage("info",bar);
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载