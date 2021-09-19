---
title: setup new write
date: 2021-7-24
tags:
 - setup
categories:
 -  vue3
---
## setup的实验性写法
### 省了return，很方便，但是发射事件，还有接收参数的写法得用函数
```js
import {full,obj,useTitle,getScrollP,mousemove,useLocalStorage} from '../hooks/index'
import {defineEmit,defineProps} from 'vue'
<script setup>
   const emits= defineEmit(['home']);
   const props=defineProps({
     foox:{type:String}
   })
   
    const {counte,addNum,obj,foo,bar, 
      change, messageref,firstname,lastname,fullname, 
      title,changeInfo,test,y}=full();
      const titleRef=useTitle();
      const {scrollX,scrollY}= getScrollP();
      const { mouseX, mouseY}=mousemove();
      titleRef.value="home";
      //保存值
      const data= useLocalStorage("info",bar);
      const changedata=()=>{
        data.value="xwl"
        emits('home',233);
    }
</script>
```
#### 原先的写法
```js
import {full,obj,useTitle,getScrollP,mousemove,useLocalStorage} from '../hooks/index'
<script>
export default{
emits:['home']
setup(props,context){
  const emits= defineEmit(['home']);
   const props=defineProps({
     foox:{type:String}
   })
   
    const {counte,addNum,obj,foo,bar, 
      change, messageref,firstname,lastname,fullname, 
      title,changeInfo,test,y}=full();
      const titleRef=useTitle();
      const {scrollX,scrollY}= getScrollP();
      const { mouseX, mouseY}=mousemove();
      titleRef.value="home";
      //保存值
      const data= useLocalStorage("info",bar);
      const changedata=()=>{
        data.value="xwl"
        context.emit('home',233);
    }
}
}
</script>
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载