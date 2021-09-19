---
title: async components
date: 2021-7-1
tags:
 - asyncComponents
categories:
 -  vue3
---
<!-- more -->
## 异步组件的使用
#### app.vue
```vue
<template>
  <div>
    App组件
    <home></home>

    <suspense>
      <template #default>
        <async-category></async-category>
      </template>
      <template #fallback>
        <loading></loading>
      </template>
    </suspense>

  </div>
</template>

<script>
  1. //创建异步组件时，优先引入vue自带的这个函数
  import { defineAsyncComponent } from 'vue';
  
  import Home from './Home.vue';
  import Loading from './Loading.vue';
  
  // import AsyncCategory from './AsyncCategory.vue';
  2. 将一个组件作为箭头函数的返回值导入，并通过这个工厂函数赋值给一个常量
  const AsyncCategory = defineAsyncComponent(() => import("./AsyncCategory.vue"))
  3. 也可以通过对象的方式使用
  // const AsyncCategory = defineAsyncComponent({
  //   loader: () => import("./AsyncCategory.vue"),
  //   loadingComponent: Loading,
  //   // errorComponent,
  //   // 在显示loadingComponent组件之前, 等待多长时间
  //   delay: 2000,
  //   /**
  //    * err: 错误信息,
  //    * retry: 函数, 调用retry尝试重新加载
  //    * attempts: 记录尝试的次数
  //    */
  //   onError: function(err, retry, attempts) {

  //   }
  // })
  export default {
    components: {
      Home,
      AsyncCategory,
      Loading
    }
  }
</script>

```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载