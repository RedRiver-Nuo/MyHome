---
title: dayjs
date: 2022/4/21
tags:
 - 笔记
categories:
 -  dayjs
---

## dayjs库基本使用

> 过滤器常用于处理日期，其中处理日期的逻辑一般用第三方库实现，
>
> Day.js是一个极简的JavaScript库，可以为现代浏览器解析、验证、操作和显示日期和时间
>
> [传送门:dayjs中文站点](https://dayjs.fenxianglu.cn/)



常用语法:

```javascript
  // 1. 基本使用 当前日期并格式化
  console.log(dayjs().format())
  // 2. 设置格式
  console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
  // 3. 格式具体日期
  console.log(dayjs(1646171185000).format('YYYY-MM-DD HH:mm:ss'))

```



小结:

1. dayjs()不传入实参，获取到的是什么时间?现在/昨天
2. `format('YYYY-MM-DD HH:mm:ss')`，中的MM对应到什么?月份/季度

