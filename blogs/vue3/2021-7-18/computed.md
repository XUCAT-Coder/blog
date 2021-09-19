---
title: setup of computed
date: 2021-7-17
tags:
 - setup computed
categories:
 -  vue3
---
## computed
### 当我们的某些属性是依赖其他状态时，我们可以使用计算属性来处理
#### 在vue2的Options API中，我们是使用computed选项来完成的。在Composition API中，我们可以在setup 函数中使用computed方法来编写一个计算属性
#### 如何使用computed呢？
##### 方式一：接收一个getter函数，并为getter 函数返回的值，返回一个不变的ref 对象
##### 方式二：接收一个具有get 和set 的对象，返回一个可变的（可读写）ref 对象
```js
import {computed} from 'vue'
setup(props,context) { 
    const firstname="x"
    const lastname="wl"
    const fullname=computed(()=>firstname.value+lastname.value) //方式一
    const fullname=computed({ //方式二
        get(){
            return firstname.value+lastname.value;
        },
        set(newvalue){
           const names=newvalue.split(" ");
           firstname.value=names[0];
           lastname.value=names[1];
  
        }
      })
    return {
        firstname,
        lastname,
        fullname
    }
  }

```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载