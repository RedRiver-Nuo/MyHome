---
title: ECharts可视化图标库
date: 2022/3/14
tags:
 - 插件库
categories:
 -  Echarts 
---

## ECharts

一个基于 JavaScript 的开源可视化图表库

官网地址[Apache ECharts](https://echarts.apache.org/zh/index.html)



案例项目[立可得 (echarts-li-ke-de.vercel.app)](https://echarts-li-ke-de.vercel.app/)

## 1.基本使用

### 1.引入echarts文件 

```
<script src="./echarts.js"></script>
```

### 2.为 ECharts 准备一个定义了宽高的 DOM 

```
<body>
	<div id="main" style="width: 600px;height:400px;"></div>
</body>
```

### 3.基于准备好的dom，初始化echarts实例

```
<script>
        let myChart = echarts.init(document.getElementById('main'));
```

### 4.指定图表的配置项和数据

```
let option = {
            title: {
                text: 'ECharts 入门示例1'
            },
            // tooltip: {},
            legend: {
                data: ['销量1']
            },
            xAxis: {
                data: ['衬衫1', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子1']
            },
            yAxis: {},
            //数据
            series: [{
                name: '销量1',
                type: 'bar',
                data: [50, 20, 36, 10, 10, 20]
            }]
        };
```

### 5.使用刚指定的配置项和数据显示图表。

```
	myChart.setOption(option);
</script>
```

其中 1 2 3 5为固定写法，复制粘贴即可。

绘制不同的图只需要根据配置项手册配置不同的数据，然后放到第四步位置。

手册地址：[配置项手册-Apache ECharts](https://echarts.apache.org/zh/option.html#title)



## 2. echarts的常见配置项

配置项学习方法

​         1.查看配置项手册

​         2.通过示例去演示



1.title  标题组件，包含主标题和副标题

2.legend 图例组件

3.grid 

​            top/right/bottom/left 类似于padding

​            width/height 宽高

4.xAxis 直角坐标系grid中的 x 轴

​            axisLine  轴线

​            axisTick  刻度线

​            axisLabel 文本

​            splitLine 分割线

​            splitArea 分割区域

5.yAxis 直角坐标系grid中的 y 轴

​            axisLine  轴线

​            axisTick  刻度线

​            axisLabel 文本

​            splitLine 分割线

​            splitArea 分割区域

​            minInterval 最小的分割间隔

​            maxInterval 最大的分割间隔

​            interval 设置分割间隔

6.tooltip 提示框组件

7.toolbox工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具



8.series 是图表,是一个数组,里面有几个对象就是几个图表. 

​          不管是line/pie/bar... 都有itemStyle



9.color 调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色

10.backgroundColor 背景色，默认无背景



## 3.echarts的正确用法

1.先进入示例找与目标相似的图

2.在示例页面 

​	(1)在示例页面测试配置项

​	(2)修改成项目要求的配置

​	(3)不知道修改什么配置时，在示例中找有目标特征的项目，进入查找配置项；

​		  然后在配置项手册中查看具体用法

​	(4)修改完成后复制到项目中







