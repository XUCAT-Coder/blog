---
title: setup customize directives
date: 2021-7-25
tags:
 - setup
categories:
 -  vue3
---
## 自定义指令
##### 在Vue的模板语法中我们学习过各种各样的指令：v-show、v-for、v-model等等，除了使用这些指令之外，Vue也允许我们来自定义自己的指令
### 自定义指令分为两种:自定义局部指令和自定义全局指令
#### 自定义局部指令：组件中通过 directives 选项，只能在当前组件中使用
```js
export default {
    directives:{
        focus:{
            mounted(el){
                el.focus(); //聚焦函数
            }
        }
    }
}
```
```html
//在当前组件内均可使用v-focus
<input v-focus>
```
##### 相比之下，如果我们不用局部自定义指令，在该组件内部
```html
<input ref="in">
```
```js
import {ref,onMounted} from 'vue'
setup(){
    const in =ref(null)
    onMounted(()=>{
        in.value.focus()
    })
    return {
        in
    }
}
```
#### 自定义全局指令:全局的自定义指令可以让我们在任何地方直接使用，在App.vue内书写
```js
app.directive("focus",{
    mounted(el){
      el.focus()
    }
})
```
### 指令的生命周期
#### created：在绑定元素的 attribute 或事件监听器被应用之前调用
#### beforeMount：当指令第一次绑定到元素并且在挂载父组件之前调用
#### mounted：在绑定元素的父组件被挂载后调用
#### beforeUpdate：在更新包含组件的 VNode 之前调用
#### updated：在包含组件的 VNode 及其子组件的 VNode 更新后调用
#### beforeUnmount：在卸载绑定元素的父组件之前调用
#### unmounted：当指令与元素解除绑定且父组件已卸载时，只调用一次
```r
    directives: {
      why: {
        created(el, bindings, vnode, preVnode) {
          console.log("created", el, bindings, vnode, preVnode);
          console.log(bindings.value);
          console.log(bindings.modifiers);
        },
        beforeMount() {
          console.log(" beforeMount");
        },
        mounted() {
          console.log(" mounted");
        },
        beforeUpdate() {
          console.log(" beforeUpdate");
        },
        updated() {
          console.log(" updated");
        },
        beforeUnmount() {
          console.log(" beforeUnmount");
        },
        unmounted() {
          console.log(" unmounted");
        }
      }
    }
```
### 指令的参数和修饰符
```html
<button v-focus:info.a.b="{name:'xwl', age:18}"></button>
```
##### info是参数的名称；a,b是修饰符的名称,后面是传入的具体的值.
##### 在生命周期中，我们可以通过 bindings 获取到对应参数的具体内容
### 小试牛刀:自定义时间戳指令 v-format-time
#### 我们先创建入口，接收app
```js
import registerFormatTime from './format-time';//转换函数
export default function registerDirectives(app) {
    //用registerDirectives来接收app
    registerFormatTime(app);//转换函数调用，并向其传入app
}
```
```r
format-time.js中
import dayjs from 'dayjs'; //导入时间内置函数
export default function(app){
    let formatString="YYYY-MM-DD HH:mm:ss";//默认接收这种格式
    app.directive("format-time",{
        created(el,bindings){
            if(bindings.value){
                formatString=bindings.value;
            }
        },
        mounted(el,bindings){
            log("format mounted");
            const testContent=el.textContent;
            let timestamp=parseInt(textContent);
            if(textContent.length===10){
                timestamp=timestamp*1000
            }
            el.textContent=dayjs(timestamp).format(formatString);
        }
    })

}
```
```r
main.js中
import registerDirectives from './directives'
registerDirectives(app);

```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载
