---
title: Dom,Bom操作
date: 2021/12/26
tags:
 - 笔记
categories:
 -  JavaScript
---
## Web APIs 简介

### Web APIs 和 JS 基础关联性

![1640511021836](../../.vuepress/public/Dom_img/1640511021836.png)

![1640513423968](../../.vuepress/public/Dom_img/1640513423968.png)

### API 和 Web API

![1640513432599](../../.vuepress/public/Dom_img/1640513432599.png)

![1640513435508](../../.vuepress/public/Dom_img/1640513435508.png)

![1640513437951](../../.vuepress/public/Dom_img/1640513437951.png)

## DOM

###  DOM 简介

#### 什么是Dom？

   文档对象模型（Document Object Model，简称 DOM），是 W3C 组织推荐的处理可扩展标记语言（HTML或者XML）的标准编程接口。

   W3C 已经定义了一系列的 DOM 接口，通过这些 DOM 接口可以改变网页的内容、结构和样式。

#### Dom树

![1641183511956](DOM.assets/1641183511956.png)

### DOM 重点核心(复习)

![1640513571550](../../.vuepress/public/Dom_img/1640513571550.png)

![1640513574196](../../.vuepress/public/Dom_img/1640513574196.png)

![1640513576715](../../.vuepress/public/Dom_img/1640513576715.png)

![1640513579840](../../.vuepress/public/Dom_img/1640513579840.png)

![1640513581853](../../.vuepress/public/Dom_img/1640513581853.png)

![1640513583727](../../.vuepress/public/Dom_img/1640513583727.png)

![1640513585539](../../.vuepress/public/Dom_img/1640513585539.png)

![1640513589877](../../.vuepress/public/Dom_img/1640513589877.png)







## 1.事件基础

### 事件概述

​		JavaScript 使我们有能力创建动态页面，而事件是可以被 JavaScript 侦测到的行为。简单理解： 触发--- 响应机制。
​		网页中的每个元素都可以产生某些可以触发 JavaScript 的事件，
例如，我们可以在用户点击某按钮时产生一个 事件，然后去执行某些操作。

### 事件三要素->执行事件的步骤

1. 事件源 （谁）                          1. 获取事件源

2. 事件类型 （什么事件） --->   2. 注册事件（绑定事件）

3. 事件处理程序 （做啥）           3. 添加事件处理程序（采取函数赋值形式）
			 例：点击后隐藏

    ```
    var sp = document.querySelector('span')
    sp.onclick = function() {
            di.style.display = 'none'
        }
    ```
    
    

## 2.获取元素

![1640513457202](../../.vuepress/public/Dom_img/1640513457202.png)

![1640513459629](../../.vuepress/public/Dom_img/1640513459629.png)

![1640513462806](../../.vuepress/public/Dom_img/1640513462806.png)

![1640513465172](../../.vuepress/public/Dom_img/1640513465172.png)

![1640513467931](../../.vuepress/public/Dom_img/1640513467931.png)

![1640513470146](../../.vuepress/public/Dom_img/1640513470146.png)

 

## 3.注册事件（绑定事件）

![1640513483599](../../.vuepress/public/Dom_img/1640513483599.png)



##   4.操作元素

JavaScript 的 DOM 操作可以改变网页内容、结构和样式，我们可以
利用 DOM 操作元素来改变元素里面的内容 、属性等。                      
注意以下都是属性

![1641191072413](DOM.assets/1641191072413.png)

### 改变元素内容

1.起始位置到终止位置的全部内容，包括 html 标签，同时保留空格和换行

```
element.innerHTML
```

2.从起始位置到终止位置的内容, 但它去除 html 标签， 同时空格和换行也会去掉

```
element.innerText
```



![1640513496176](../../.vuepress/public/Dom_img/1640513496176.png)

### 属性的操作



![1640513498834](../../.vuepress/public/Dom_img/1640513498834.png)

![1640513500782](../../.vuepress/public/Dom_img/1640513500782.png)

![1640513503744](../../.vuepress/public/Dom_img/1640513503744.png)

![1640513506845](../../.vuepress/public/Dom_img/1640513506845.png)



##   5.节点操作

![1640513514576](../../.vuepress/public/Dom_img/1640513514576.png)

![1640513517246](../../.vuepress/public/Dom_img/1640513517246.png)

![1640513520360](../../.vuepress/public/Dom_img/1640513520360.png)

![1640513523448](../../.vuepress/public/Dom_img/1640513523448.png)

![1640513526384](../../.vuepress/public/Dom_img/1640513526384.png)

![1640513528435](../../.vuepress/public/Dom_img/1640513528435.png)

![1640513533886](../../.vuepress/public/Dom_img/1640513533886.png)

![1640513535999](../../.vuepress/public/Dom_img/1640513535999.png)

![1640513539215](../../.vuepress/public/Dom_img/1640513539215.png)

![1640513541583](../../.vuepress/public/Dom_img/1640513541583.png)

![1640513544405](../../.vuepress/public/Dom_img/1640513544405.png)

![1640513546493](../../.vuepress/public/Dom_img/1640513546493.png)

![1640513549127](../../.vuepress/public/Dom_img/1640513549127.png)

![1640513551709](../../.vuepress/public/Dom_img/1640513551709.png)

![1640513554215](../../.vuepress/public/Dom_img/1640513554215.png)

![1640513557556](../../.vuepress/public/Dom_img/1640513557556.png)

![1640513560390](../../.vuepress/public/Dom_img/1640513560390.png)

![1640513562885](../../.vuepress/public/Dom_img/1640513562885.png)

# 

# 事件高级

## 注册事件（绑定事件）

![1640513597686](../../.vuepress/public/Dom_img/1640513597686.png)

![1640513601443](../../.vuepress/public/Dom_img/1640513601443.png)

![1640513603836](../../.vuepress/public/Dom_img/1640513603836.png)

![1640513609253](../../.vuepress/public/Dom_img/1640513609253.png)

## 删除事件（解绑事件）

![1640513615188](../../.vuepress/public/Dom_img/1640513615188.png)

![1640513619124](../../.vuepress/public/Dom_img/1640513619124.png)

## DOM事件流

![1640513627247](../../.vuepress/public/Dom_img/1640513627247.png)

![1640513630157](../../.vuepress/public/Dom_img/1640513630157.png)

![1640513632841](../../.vuepress/public/Dom_img/1640513632841.png)

## 事件对象

![1640513638321](../../.vuepress/public/Dom_img/1640513638321.png)

![1640513640727](../../.vuepress/public/Dom_img/1640513640727.png)

![1640513642930](../../.vuepress/public/Dom_img/1640513642930.png)

![1640513647243](../../.vuepress/public/Dom_img/1640513647243.png)

![1640513649662](../../.vuepress/public/Dom_img/1640513649662.png)

## 阻止事件冒泡

![1640513655306](../../.vuepress/public/Dom_img/1640513655306.png)

**5.2 阻止事件冒泡的兼容性解决方案** 

![1640513661481](../../.vuepress/public/Dom_img/1640513661481.png)

## 事件委托（代理、委派）

![1640513666697](../../.vuepress/public/Dom_img/1640513666697.png)

![1640513668976](../../.vuepress/public/Dom_img/1640513668976.png)

![1640513671834](../../.vuepress/public/Dom_img/1640513671834.png)

## 常用的鼠标事件

![1640513676846](../../.vuepress/public/Dom_img/1640513676846.png)

![1640513679809](../../.vuepress/public/Dom_img/1640513679809.png)

![1640513683213](../../.vuepress/public/Dom_img/1640513683213.png)

## 常用的键盘事件

![1640513689085](../../.vuepress/public/Dom_img/1640513689085.png)

![1640513692159](../../.vuepress/public/Dom_img/1640513692159.png)

![1640513694817](../../.vuepress/public/Dom_img/1640513694817.png)

# BOM 浏览器对象模型

## BOM 概述

![1640513702539](../../.vuepress/public/Dom_img/1640513702539.png)

![1640513705070](../../.vuepress/public/Dom_img/1640513705070.png)

![1640513708878](../../.vuepress/public/Dom_img/1640513708878.png)

## window 对象的常见事件

![1640513713500](../../.vuepress/public/Dom_img/1640513713500.png)

![1640513716575](../../.vuepress/public/Dom_img/1640513716575.png)

![1640513719244](../../.vuepress/public/Dom_img/1640513719244.png)

## 定时器

![1640513724940](../../.vuepress/public/Dom_img/1640513724940.png)

![1640513728102](../../.vuepress/public/Dom_img/1640513728102.png)

![1640513730622](../../.vuepress/public/Dom_img/1640513730622.png)

![1640513732583](../../.vuepress/public/Dom_img/1640513732583.png)

![1640513734938](../../.vuepress/public/Dom_img/1640513734938.png)

![1640513737658](../../.vuepress/public/Dom_img/1640513737658.png)

![1640513740214](../../.vuepress/public/Dom_img/1640513740214.png)

## JS 执行机制

![1640513747729](../../.vuepress/public/Dom_img/1640513747729.png)

![1640513749908](../../.vuepress/public/Dom_img/1640513749908.png)

![1640513751983](../../.vuepress/public/Dom_img/1640513751983.png)

![1640513754706](../../.vuepress/public/Dom_img/1640513754706.png)

![1640513757426](../../.vuepress/public/Dom_img/1640513757426.png)

## location 对象

![1640513762655](../../.vuepress/public/Dom_img/1640513762655.png)

![1640513765818](../../.vuepress/public/Dom_img/1640513765818.png)

![1640513768651](../../.vuepress/public/Dom_img/1640513768651.png)

![1640513771233](../../.vuepress/public/Dom_img/1640513771233.png)

## navigator 对象

![1640513776903](../../.vuepress/public/Dom_img/1640513776903.png)

## history 对象

![1640513782129](../../.vuepress/public/Dom_img/1640513782129.png)

![1640513785382](../../.vuepress/public/Dom_img/1640513785382.png)