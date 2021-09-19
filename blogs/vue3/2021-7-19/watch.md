---
title: setup of watch or watchEffect
date: 2021-7-19
tags:
 - setup watch
categories:
 -  vue3
---
## 侦听数据的变化
### 在Composition API中，我们可以使用watchEffect和watch来完成响应式数据的侦听
#### watchEffect用于自动收集响应式数据的依赖,watch需要手动指定侦听的数据源
### watchEffect:侦听到某些响应式数据变化
#### 首先，watchEffect传入的函数会被立即执行一次，并且在执行的过程中会收集依赖,其次，只有收集的依赖发生变化时，watchEffect传入的函数才会再次执行；
```js
import {watchEffect} from 'vue'
 const stop= watchEffect(()=>{
          console.log("firstname:"+firstname.value);
      });
```
### watchEffect的停止侦听
#### 如果在发生某些情况下，我们希望停止侦听，这个时候我们可以获取watchEffect的返回值函数，调用该函数即可
```js
if(true){
     stop();//此时就会停止侦听
}
```
### watchEffect清除副作用
#### 什么是清除副作用呢？
##### 比如在开发中我们需要在侦听函数中执行网络请求，但是在网络请求还没有达到的时候，我们停止了侦听器，或者侦听器侦听函数被再次执行了。
##### 那么上一次的网络请求应该被取消掉，这个时候我们就可以清除上一次的副作用
#### 在我们给watchEffect传入的函数被回调时，其实可以获取到一个参数：onInvalidate
##### 当副作用即将重新执行或者侦听器被停止时会执行该函数传入的回调函数
```js
import {watchEffect} from 'vue'
 const stop= watchEffect((onInvalidate)=>{
          // console.log("firstname:"+firstname.value);
          const timer=setTimeout(()=>{
              console.log("request success");
          },2000)
          console.log("counte:"+counte.value);
          onInvalidate(()=>{
            clearTimeout(timer);
            console.log("清楚副作用 success");
          });
      });
```
### watchEffect的执行时机
```js
import {watchEffect,ref} from 'vue'
setup(){
    const x=ref(null) //将这个ref绑定到指定标签或组件上
    //如:<h2 ref="x"></h2>
    watchEffect(()=>{
        console.log(x) 
    })
    return {
     x
    }
}
```
##### 此时会打印两个结果，第一次为null，第二次才为h2元素
##### 这是因为setup函数在执行时就会立即执行传入的副作用函数，这个时候DOM并没有挂载，所以打印为null
##### 而当DOM挂载时，会给x的ref对象赋值新的值，副作用函数会再次执行，打印出来对应的元素
### 调整watchEffect的执行时机
#### 如果我们希望在第一次的时候就打印出来对应的元素呢？
##### 这个时候我们需要改变副作用函数的执行时机:它的默认值是pre，它会在元素 挂载 或者 更新 之前执行
```js
import {watchEffect,ref} from 'vue'
setup(){
    const x=ref(null) //将这个ref绑定到指定标签或组件上
    //如:<h2 ref="x"></h2>
    watchEffect(()=>{
        console.log(x) 
    },{
        flush:'post' //立即执行
    })
    return {
     x
    }
}
```
### Watch的使用
#### watch的API完全等同于组件watch选项的Property
##### watch需要侦听特定的数据源，并在回调函数中执行副作用
##### 默认情况下它是惰性的，只有当被侦听的源发生变化时才会执行回调
#### 侦听单个数据源
##### 一个getter函数：但是该getter函数必须引用可响应式的对象（比如reactive或者ref），直接写入一个可响应式的对象，reactive或者ref（比较常用的是ref）
```js
foo 为ref或reactive对象
watch(foo,(newValue,oldValue)=>{
        console.log("newvalue:"+newValue+"  oldvalue:"+{...oldValue});
      })
watch(()=>{
        return foo
      },(newValue,oldValue)=>{
        console.log("newvalue:"+newValue+"  oldvalue:"+{...oldValue});
        console.log(isReactive(newValue));
      })

```
#### 侦听多个数据源
##### 放进一个数组里，每个数组里都是getter函数或者可响应式的对象
```js
watch([()=>(foo),()=>(obj)],(newValue,oldValue)=>{
          console.log(newValue);
      },{
        deep:true
      })
watch([name,age],(newValue,oldValue)=>{
          console.log(newValue);
      },{
        deep:true
      })
```
#### 侦听响应式对象
##### 如果我们希望侦听一个数组或者对象，那么可以使用一个getter函数，并且对可响应对象进行解构
```js
const names=reactive(["wanger","zhangsan"])
watch(()=>[...names],(newValue,oldValue)=>{
          console.log(newValue);
      },{
        deep:true
      })
watch([()=>({...foo})],(newValue,oldValue)=>{
          console.log(newValue);
      },{
        deep:true
      })
watch(()=>{
        return {...foo}
      },(newValue,oldValue)=>{
        console.log("newvalue:"+newValue+"  oldvalue:"+{...oldValue});
        console.log(isReactive(newValue));
      })

```
#### watch的选项
##### 如上你可以看见多传了一个参数deep:true,也可以传入 immediate:true 立即执行
```js
watch([()=>({...foo})],(newValue,oldValue)=>{
          console.log(newValue);
      },{
        deep:true,
        immediate:true
      })
```
  ### 生命周期钩子
  #### setup中如何使用生命周期函数呢?
  ##### 可以使用直接导入的 onX 函数注册生命周期钩子
```js
import {onMounted} from 'vue'
setup(){
    onMounted(()=>{
    })
    return {
    }
}
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载