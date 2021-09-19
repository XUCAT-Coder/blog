---
title: mixins
date: 2021-7-8
tags:
 - mixins
categories:
 -  vue3
---
<!-- more -->
## mixins混入，接受一个混入对象的数组，类型：Array<Object>
### 基本使用--局部混入，如： mixins: [混入对象]
### 基本使用--全局混入，如： app.mixin({混入内容})
```js
import { demoMixin } from './mixins/demoMixin';
export default {
    mixins: [demoMixin],
  }
```
## mixins基本原理
### 真正的实现是靠mergeOptions函数实现的。这个函数传进去的两个参数分别是this.options 和 mixin，而mergeOptions函数则实现了递归遍历this.options，然后执行mergeField，返回最终合并的this.optionsmergeField函数：一般我们执行mergeField 里的key基本上就是上面strats的属性了，用的最多的可能就是data、methods、props了，所以如果我们在mixins中用到了data，其本质上就是合并当前vue实例对象里的data和我们传进去的mixin里的data，其他属性也是一样的
## mixins合并规则
#### mixins中的data会合并到实例中的data中，有冲突的话，实例中data的数据会覆盖mixins中的数据
#### mixins中和实例中的钩子函数，都会执行，先执行mixins中的钩子函数
#### methods、components、directives会执行，当有冲突的时候，实例中的会覆盖mixins中的
#### 总结:值为对象，则合并；键名冲突，取组件键值对
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载
