---
title: Css常用技巧
date: 2022/1/2
tags:
 - 技巧
categories:
 -  Css
---


## 1.去除li前面小圆点

```
list-style: none;
```



## 2.border-imgae边框背景

`border-images`设置边框背景图片

注：设置背景边框之前必须先设置边框，有边框才可以设置边框背景图片。

   `border: 20px solid red;`

```
/* 1. border-image-source 设置边框背景图片的路径*/
/* border-image-source: url('./images/border2.jpg'); */

/* 2. border-image-slice  设置4个裁剪的数,把图片切成9宫格*/
/* border-image-slice: 167 167 167 167; */

/* 3. border-image-width   设置边框背景图的宽*/
/* border-image-width: 20px; */
            
/* 4. border-image-repeat  设置边框背景图片的效果 repeat(重复) stretch(拉伸,默认效果)  round(铺满)*/
/* border-image-repeat: stretch; */
            
 /* 复合属性可以连写: */
border-image:url('./images/border2.jpg')  167 167 167 167/20px  stretch
       
```

3.超出文字显示省略号

 单行超出文字显示省略号:

```

/* 1.禁止换行 */
white-space: nowrap;
/* 2.超出了隐藏 */
overflow: hidden;
/* 3.设置隐藏的部分为省略号 */
text-overflow: ellipsis;
```

多行文字超出也要显示省略号:

```
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden; 
```



