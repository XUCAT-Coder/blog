---
title: slot
date: 2021-6-29
tags:
 - slot
categories:
 -  vue3
---
<!-- more -->
## 插槽的基本使用
#### app.vue
```vue
<template>
  <div>
    <my-slot-cpn>
      <button>我是按钮</button>
    </my-slot-cpn>

    <my-slot-cpn>
      我是普通的文本
    </my-slot-cpn>

    <my-slot-cpn>
      <my-button/>
    </my-slot-cpn>

    <my-slot-cpn></my-slot-cpn>

    <!-- 插入了很多的内容 -->
    <my-slot-cpn>
      <h2>哈哈哈</h2>
      <button>我是按钮</button>
      <strong>我是strong</strong>
    </my-slot-cpn>
  </div>
</template>

<script>
  import MySlotCpn from './MySlotCpn.vue';
  import MyButton from './MyButton.vue';

  export default {
    components: {
      MySlotCpn,
      MyButton
    }
  }
</script>

```
#### MyButton.vue
```vue
<template>
  <div>
    <button>button</button>
  </div>
</template>

<script>
  export default {
    
  }
</script>

```
####  MySlotCpn.vue
```vue
<template>
  <div>
    <h2>组件开始</h2>
    <slot>
      <i>我是默认的i元素</i>
    </slot>
    <slot>
      <i>我是默认的i元素</i>
    </slot>
    <slot>
      <i>我是默认的i元素</i>
    </slot>
    <h2>组件结束</h2>
  </div>
</template>

<script>
  export default {
    
  }
</script>

```
  #### 注意点
  ##### 插槽默认有内容，但是没有东西插入插槽时，展示默认内容
  ##### 多个内容插入插槽，全部都插入，而不是单个或者第一个！
  ##### 有多个插槽，但我们没有用指定用哪个，那就每个都展示全部。
## 具名插槽的使用
```js
//1.为插槽取名
<slot name="取的名字"></slot>
//2.在template下指定插入哪个插槽
<template v-slot:取的名字></template>
//3.语法糖
<template # 取的名字></template>
```
## 作用域插槽的使用
#### app.vue
```vue
  <template>
    <div>
      <!-- 编译作用域 -->
      <!-- <child-cpn>
        <button>{{title}}</button>
      </child-cpn> -->

      <show-names :names="names">
        <template v-slot="coderwhy">
          <button>{{coderwhy.item}}-{{coderwhy.index}}</button>
        </template>
      </show-names>

      <show-names :names="names" v-slot="coderwhy">
        <button>{{coderwhy.item}}-{{coderwhy.index}}</button>
      </show-names>

      <!-- 注意: 如果还有其他的具名插槽, 那么默认插槽也必须使用template来编写 -->
      <show-names :names="names">
        <template v-slot="coderwhy">
          <button>{{coderwhy.item}}-{{coderwhy.index}}</button>
        </template>

        <template v-slot:why>
          <h2>我是why的插入内容</h2>
        </template>
      </show-names>
      
      <show-names :names="names">
        <template v-slot="slotProps">
          <strong>{{slotProps.item}}-{{slotProps.index}}</strong>
        </template>
      </show-names>
    </div>
  </template>

  <script>
    import ChildCpn from './ChildCpn.vue';
    import ShowNames from './ShowNames.vue';

    export default {
      components: {
        ChildCpn,
        ShowNames
      },
      data() {
        return {
          names: ["why", "kobe", "james", "curry"]
        }
      }
    }
  </script>

```
####  ChildCpn.vue
```vue
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "我是title"
      }
    }
  }
</script>

```
#### ShowNames.vue
```vue
<template>
  <div>
    <template v-for="(item, index) in names" :key="item">
      <slot :item="item" :index="index"></slot>

      <slot name="why"></slot>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      names: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载