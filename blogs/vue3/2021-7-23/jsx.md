---
title: jsx
date: 2021-7-23
tags:
 - jsx
categories:
 -  vue3
---
## jsx的基本使用
### jsx的babel配置
#### 安装Babel支持Vue的jsx插件：
```r
npm install @vue/babel-plugin-jsx -D
```
#### 在babel.config.js配置文件中配置插件:
```js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  
   ],
   plugins:[
     "@vue/babel-plugin-jsx"
   ]
}
```
### jsx组件的使用
```js
import jsxOn from './jsxOn.vue'
import {ref} from 'vue'
export default {
    setup(){
        const count=ref(0)
        const on=()=>{
         this.count++
        }
        return {
            count,
            on
        }
    }
    render() {
      return (
          <div>
            <h2>{this.count}</h2>
            <button onClick={this.on}>+1</button>
            <jsxOn>{{default2: props=><div>我是jsxOn的插槽</div>}}</jsxOn>
          </div>
      );
  },
}
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载