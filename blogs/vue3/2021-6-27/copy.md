---
title: copy deep or shallow
date: 2021-6-27
tags:
 - copy
categories:
 -  vue3
---
<!-- more-->
## 对象的引用-浅拷贝-深拷贝
```js
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>

  <!-- 1.对象的引用赋值 -->
  <script>
    // 对象是引用类型
    // const info = {name: "why", age: 18};
    // const obj = info;
    // info.name = "kobe";
    // console.log(obj.name);
  </script>

  <!-- 2.对象的浅拷贝 -->
  <script>
    const info = {name: "why", age: 18, friend: {name: "kobe"}};
    // const obj = Object.assign({}, info);

    // lodash
    const obj = _.clone(info);

    // info.name = "kobe";
    // console.log(obj.name);

    // info.friend.name = "james";
    // console.log(obj.friend.name);
  </script>

  <!-- 3.对象的深拷贝 -->
  <script>
    // _.cloneDeep(info)

    // const info = {name: "why", age: 18, friend: {name: "kobe"}};
    // const obj = JSON.parse(JSON.stringify(info));
    // info.friend.name = "james";
    // console.log(obj.friend.name);
  </script>
```
## 拓展--逻辑判断中的隐式转化
```js
<script>
    const score = "100";
    // 逻辑判断时, 可以转化的情况下, 会隐式的自动将一个string类型成一个number类型再来进行判断(隐式转化)
    if (score > 90) {
      console.log("优秀");
    }
  </script>
```
###### 师从coderwhy,不可商用，仅供学习，未经允许不得转载