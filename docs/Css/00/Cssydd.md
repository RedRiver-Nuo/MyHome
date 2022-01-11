---
title: Css移动端
date: 2021/1/11
tags:
 - 笔记
categories:
 -  Css
---

## 1.字体图标



## 2.2D转换

转换（transform）是CSS3中具有颠覆性的特征之一，可以实现元素的位移、旋转、缩放等效果。

- 移动：translate
- 旋转：rotate
- 缩放：scal

改变盒子在平面内的形态（位移、旋转、缩放）

![1640333770823](../../../.vuepress/public/Cssimg/1640333770823.png)



### 位移 translate

2D移动是2D转换里面的一种功能，可以改变元素在页面中的位置，类似定位。

![1641904570418](./Cssydd.assets/1641904570418.png)



语法

```
transform: translate(水平方向的位置,垂直方向的位置);
transform: translate(100px,50px);

单独设置某个方向的移动距离：translateX() & translateY()
transform: translateX(x);
transform: translateY(y);
x,y取值（正负均可）:
	像素单位数值
	百分比（参照物为盒子自身尺寸）
```


注意：

- X轴正向为右，Y轴正向为下
- 不会影响到其他元素的位置
- 对行内标签没有效
-  translate()如果只给出一个值, 表示x轴方向移动距离
  

常用：

​		定位居中

```
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translate(-50%,-50%);
```



### 旋转 rotate

####  转换之旋转 rotate

语法

```
transform:rotate(度数)
```

 重点

- rotate里面跟度数， 单位是 deg 比如 rotate(45deg) 
-  角度为正时，顺时针，负时，为逆时针
-  默认旋转的中心点是元素的中心点

案例 画三角形

![1641904372389](./Cssydd.assets/1641904372389.png)

```
p::before {
 content: '';
 position: absolute;
 right: 20px;
 top: 10px;
 width: 10px;
 height: 10px;
 border-right: 1px solid #000;
 border-bottom: 1px solid #000;
 transform: rotate(45deg);
}
```

####  转换中心点 transform-origi

我们可以设置元素转换的中心点

语法

```
transform-origin: x y;
```

重点

- 注意后面的参数 x 和 y 用空格隔开
-  x y 默认转换的中心点是元素的中心点 (50% 50%)
- 还可以给x y 设置 像素 或者 方位名词 （top bottom left right center）



### 缩放scale

缩放，顾名思义，可以放大和缩小。 只要给元素添加上了这个属性就能控制它放大还是缩小。

语法

```
transform: scale(x轴缩放倍数, y轴缩放倍数);
一般情况下, 只为scale设置一个值, 表示x轴和y轴等比例缩放:
transform: scale(缩放倍数);
transform:scale(2) ：只写一个参数，第二个参数则和第一个参数一样，相当于 scale(2,2)

```

 注意

- 注意其中的x和y用逗号分隔
- 缩放 值不带单位  ,1 没有缩放   , 大于1 放大 , 小于1缩小
-  sacle缩放最大的优势：可以设置转换中心点缩放，默认以中心点缩放的，而且不影响其他盒子

### 2D 转换综合写法

   1.同时使用多个转换，其格式为：transform: translate() rotate() scale() ...等，
2. 其顺序会影转换的效果。（先旋转会改变坐标轴方向）
3. 当我们同时有位移和其他属性的时候，记得要将位移放到最



## 3.渐变背景

目标：使用background-image属性实现渐变背景效果

- 渐变是多个颜色逐渐变化的视觉效果
   一般用于设置盒子的背景

![1641905493571](./Cssydd.assets/1641905493571.png)

语法：

```
background-image:linear-gradient(
	颜色1，
	颜色2
);

常用： 一般情况直接写background;

background: linear-gradient(red,blue);
```



# 浏览器私有前缀

![1640333903581](../../../.vuepress/public/Cssimg/1640333903581.png)



# CSS3 动画

![1640333825856](../../../.vuepress/public/Cssimg/1640333825856.png)

![1640333829944](../../../.vuepress/public/Cssimg/1640333829944.png)

![1640333832780](../../../.vuepress/public/Cssimg/1640333832780.png)

![1640333835704](../../../.vuepress/public/Cssimg/1640333835704.png)

![1640333838653](../../../.vuepress/public/Cssimg/1640333838653.png)

![1640333841816](../../../.vuepress/public/Cssimg/1640333841816.png)

![1640333845221](../../../.vuepress/public/Cssimg/1640333845221.png)

![1640333848121](../../../.vuepress/public/Cssimg/1640333848121.png)

![1640333850702](../../../.vuepress/public/Cssimg/1640333850702.png)

# CSS3 3D转换

![1640333858611](../../../.vuepress/public/Cssimg/1640333858611.png)

![1640333861574](../../../.vuepress/public/Cssimg/1640333861574.png)

![1640333864383](../../../.vuepress/public/Cssimg/1640333864383.png)

![](../../../.vuepress/public/Cssimg/1640333867306.png)

![1640333873775](../../../.vuepress/public/Cssimg/1640333873775.png)

![1640333877459](../../../.vuepress/public/Cssimg/1640333877459.png)

![1640333881800](../../../.vuepress/public/Cssimg/1640333881800.png)

![1640333885012](../../../.vuepress/public/Cssimg/1640333885012.png)

![1640333887546](../../../.vuepress/public/Cssimg/1640333887546.png)

![1640333891392](../../../.vuepress/public/Cssimg/1640333891392.png)

![1640333893747](../../../.vuepress/public/Cssimg/1640333893747.png)

![1640333896570](../../../.vuepress/public/Cssimg/1640333896570.png)

![1640333900671](../../../.vuepress/public/Cssimg/1640333900671.png)



# 移动WEB开发之流式布局

## 移动端基础

![1640336690264](../../../.vuepress/public/Cssimg/1640336690264.png)

![1640336693768](../../../.vuepress/public/Cssimg/1640336693768.png)

![1640336698602](../../../.vuepress/public/Cssimg/1640336698602.png)

![1640336702345](../../../.vuepress/public/Cssimg/1640336702345.png)

![1640336705813](../../../.vuepress/public/Cssimg/1640336705813.png)

## 视口

![1640336714039](../../../.vuepress/public/Cssimg/1640336714039.png)

![1640336745038](../../../.vuepress/public/Cssimg/1640336745038.png)

![1640336748266](../../../.vuepress/public/Cssimg/1640336748266.png)

![1640336751834](../../../.vuepress/public/Cssimg/1640336751834.png)

![1640336758275](../../../.vuepress/public/Cssimg/1640336758275.png)

![1640336761501](../../../.vuepress/public/Cssimg/1640336761501.png)

## 二倍图

![1640336771397](../../../.vuepress/public/Cssimg/1640336771397.png)

![1640336774420](../../../.vuepress/public/Cssimg/1640336774420.png)

![1640336778458](../../../.vuepress/public/Cssimg/1640336778458.png)

![1640336781130](../../../.vuepress/public/Cssimg/1640336781130.png)

![1640336784241](../../../.vuepress/public/Cssimg/1640336784241.png)

## 移动端开发选择

![1640336790796](../../../.vuepress/public/Cssimg/1640336790796.png)

![1640336793697](../../../.vuepress/public/Cssimg/1640336793697.png)

![1640336797658](../../../.vuepress/public/Cssimg/1640336797658.png)

![1640336800468](../../../.vuepress/public/Cssimg/1640336800468.png)

## 移动端技术解决方案

![1640336807377](../../../.vuepress/public/Cssimg/1640336807377.png)

![1640336811235](../../../.vuepress/public/Cssimg/1640336811235.png)

官网地址： http://necolas.github.io/normalize.c

![1640336817933](../../../.vuepress/public/Cssimg/1640336817933.png)

![1640336821134](../../../.vuepress/public/Cssimg/1640336821134.png)

## 移动端常见布局

![1640336827373](../../../.vuepress/public/Cssimg/1640336827373.png)

![1640336830701](../../../.vuepress/public/Cssimg/1640336830701.png)

## 流式布局（百分比布局

![1640336836084](../../../.vuepress/public/Cssimg/1640336836084.png)

# flex布局 

## flex 布局体验 

![1640336844449](../../../.vuepress/public/Cssimg/1640336844449.png)

![1640336847676](../../../.vuepress/public/Cssimg/1640336847676.png)

## flex 布局原理

![1640336854068](../../../.vuepress/public/Cssimg/1640336854068.png)

![1640336856752](../../../.vuepress/public/Cssimg/1640336856752.png)

## flex 布局父项常见属性

display:flex

![1640336865752](../../../.vuepress/public/Cssimg/1640336865752.png)

![1640336869169](../../../.vuepress/public/Cssimg/1640336869169.png)

![1640336874798](../../../.vuepress/public/Cssimg/1640336874798.png)

![1640336878850](../../../.vuepress/public/Cssimg/1640336878850.png)

![1640336882101](../../../.vuepress/public/Cssimg/1640336882101.png)

![1640336884581](../../../.vuepress/public/Cssimg/1640336884581.png)

![1640336887454](../../../.vuepress/public/Cssimg/1640336887454.png)

![1640336891441](../../../.vuepress/public/Cssimg/1640336891441.png)

![1640336893833](../../../.vuepress/public/Cssimg/1640336893833.png)

##  flex 布局子项常见属性

![1640336899327](../../../.vuepress/public/Cssimg/1640336899327.png)

![1640336905388](../../../.vuepress/public/Cssimg/1640336905388.png)

![1640336908554](../../../.vuepress/public/Cssimg/1640336908554.png)

![1640336910693](../../../.vuepress/public/Cssimg/1640336910693.png)

# rem适配布局 

![1640336919338](../../../.vuepress/public/Cssimg/1640336919338.png)

##  rem 基础 

![1640336924668](../../../.vuepress/public/Cssimg/1640336924668.png)

##  媒体查询 

![1640336932034](../../../.vuepress/public/Cssimg/1640336932034.png)

![1640336935047](../../../.vuepress/public/Cssimg/1640336935047.png)

![1640336937567](../../../.vuepress/public/Cssimg/1640336937567.png)

![1640336941096](../../../.vuepress/public/Cssimg/1640336941096.png)

![1640336943311](../../../.vuepress/public/Cssimg/1640336943311.png)

![1640336945680](../../../.vuepress/public/Cssimg/1640336945680.png)

![1640336949578](../../../.vuepress/public/Cssimg/1640336949578.png)

![1640336951982](../../../.vuepress/public/Cssimg/1640336951982.png)

![1640336954311](../../../.vuepress/public/Cssimg/1640336954311.png)

![1640336957969](../../../.vuepress/public/Cssimg/1640336957969.png)

##  Less 基础 

![1640336963172](../../../.vuepress/public/Cssimg/1640336963172.png)

![1640336965313](../../../.vuepress/public/Cssimg/1640336965313.png)

![1640336969046](../../../.vuepress/public/Cssimg/1640336969046.png)

![1640336971653](../../../.vuepress/public/Cssimg/1640336971653.png)

![1640336974312](../../../.vuepress/public/Cssimg/1640336974312.png)

![1640336978451](../../../.vuepress/public/Cssimg/1640336978451.png)

![1640336980870](../../../.vuepress/public/Cssimg/1640336980870.png)

![1640336982956](../../../.vuepress/public/Cssimg/1640336982956.png)

![1640336985906](../../../.vuepress/public/Cssimg/1640336985906.png)

![1640336988323](../../../.vuepress/public/Cssimg/1640336988323.png)

![1640336991917](../../../.vuepress/public/Cssimg/1640336991917.png)

![1640336996308](../../../.vuepress/public/Cssimg/1640336996308.png)

## rem 适配方案

![1640337003510](../../../.vuepress/public/Cssimg/1640337003510.png)

![1640337006040](../../../.vuepress/public/Cssimg/1640337006040.png)

![1640337008092](../../../.vuepress/public/Cssimg/1640337008092.png)

![1640337012280](../../../.vuepress/public/Cssimg/1640337012280.png)

![1640337015495](../../../.vuepress/public/Cssimg/1640337015495.png)

![1640337018243](../../../.vuepress/public/Cssimg/1640337018243.png)

![1640337020571](../../../.vuepress/public/Cssimg/1640337020571.png)

# 响应式布局

## 响应式开发 

![1640337028104](../../../.vuepress/public/Cssimg/1640337028104.png)

![1640337030042](../../../.vuepress/public/Cssimg/1640337030042.png)

![1640337033471](../../../.vuepress/public/Cssimg/1640337033471.png)

## Bootstrap前端开发框架 

![1640337043112](../../../.vuepress/public/Cssimg/1640337043112.png)

![1640337045709](../../../.vuepress/public/Cssimg/1640337045709.png)

![1640337049174](../../../.vuepress/public/Cssimg/1640337049174.png)

![1640337051289](../../../.vuepress/public/Cssimg/1640337051289.png)

![1640337054516](../../../.vuepress/public/Cssimg/1640337054516.png)

![1640337057237](../../../.vuepress/public/Cssimg/1640337057237.png)

![1640337059515](../../../.vuepress/public/Cssimg/1640337059515.png)

![1640337061480](../../../.vuepress/public/Cssimg/1640337061480.png)

##  Bootstrap栅格系统

![1640337069011](../../../.vuepress/public/Cssimg/1640337069011.png)

![1640337072553](../../../.vuepress/public/Cssimg/1640337072553.png)

![1640337078980](../../../.vuepress/public/Cssimg/1640337078980.png)

![1640337081814](../../../.vuepress/public/Cssimg/1640337081814.png)

![1640337091326](../../../.vuepress/public/Cssimg/1640337091326.png)

![1640337095779](../../../.vuepress/public/Cssimg/1640337095779.png)