---
title: v-on modifier
date: 2021-6-19
tags:
 - v-on
categories:
 -  vue3
---
<!-- more -->
## v-on的修饰符
```js
<div id="app"></div>

  <template id="my-app">
    <div @click="divClick">
    //阻止向上冒泡
      <button @click.stop="btnClick">按钮</button>
    </div>
    //enter键抬起时
    <input type="text" @keyup.enter="enterKeyup">
  </template>

  <script src="../js/vue.js"></script>
  <script>
    const App = {
      template: '#my-app',
      data() {
        return {
          message: "Hello World"
        }
      },
      methods: {
        divClick() {
          console.log("divClick");
        },
        btnClick() {
          console.log('btnClick');
        },
        enterKeyup(event) {
          console.log("keyup", event.target.value);
        }
      }
    }

    Vue.createApp(App).mount('#app');
  </script>
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载