---
title: Css基础
date: 2021/12/24
tags:
 - 笔记
categories:
 -  Css
---
# CSS书写顺序

![1640262278218](../../../.vuepress/public/Cssimg/1640262278218.png)

![1640262281135](../../../.vuepress/public/Cssimg/1640262281135.png)

# CSS 语法规范

![1640262288826](../../../.vuepress/public/Cssimg/1640262288826.png)

 1.选择器是用于指定 CSS 样式的 HTML 标签，花括号内是对该对象设置的具体样式

2.属性和属性值以“键值对”的形式出现

3.属性是对指定的对象设置的样式属性，例如字体大小、文本颜色等

4.属性和属性值之间用英文“##”分开

5.多个“键值对”之间用英文“;”进行区分

![1640262300972](../../../.vuepress/public/Cssimg/1640262300972.png)

##  1.2代码风格

![1640262320805](../../../.vuepress/public/Cssimg/1640262320805.png)

![1640262324864](../../../.vuepress/public/Cssimg/1640262324864.png)

![1640262332757](../../../.vuepress/public/Cssimg/1640262332757.png)

## 2.选择器

![1640262347253](../../../.vuepress/public/Cssimg/1640262347253.png)

![1640262353565](../../../.vuepress/public/Cssimg/1640262353565.png)

![1640262359346](../../../.vuepress/public/Cssimg/1640262359346.png)

### 标签选择器

![1640262373096](../../../.vuepress/public/Cssimg/1640262373096.png)

![1640262397366](../../../.vuepress/public/Cssimg/1640262397366.png)

### 类选择器

如果想要差异化选择不同的标签，单独选一个或者某几个标签，可以使用类选择器.

类选择器在 HTML 中以 class 属性表示，在 CSS 中，类选择器以一个点“.”号显示。

![1640262408561](../../../.vuepress/public/Cssimg/1640262408561.png)

![1640262413989](../../../.vuepress/public/Cssimg/1640262413989.png)

① 类选择器使用“.”（英文点号）进行标识，后面紧跟类名（自定义，我们自己命名的）。 

② 可以理解为给这个标签起了一个名字，来表示。 

③ 长名称或词组可以使用中横线来为选择器命名。

④ 不要使用纯数字、中文等命名，尽量使用英文字母来表示。 

⑤ 命名要有意义，尽量使别人一眼就知道这个类名的目的。 

⑥ 命名规范：见附件（ Web 前端开发规范手册.doc）

### 类选择器-多类名

我们可以给一个标签指定多个类名，从而达到更多的选择目的。 这些类名都可以选出这个标签.
简单理解就是一个标签有多个名字.

![1640262435883](../../../.vuepress/public/Cssimg/1640262435883.png)

(1) 在标签class 属性中写 多个类名

(2) 多个类名中间必须用空格分开

(3) 这个标签就可以分别具有这些类名的样式

 

 简单理解：就是给某个标签添加了多个类，或者这个标签有多个名字

 这个标签就可以分别具有这些类名的样式

 从而节省CSS代码,统一修改也非常方便.

 多类名选择器在后期布局比较复杂的情况下，还是较多使用的



多类名开发中使用场景 

(1) 可以把一些标签元素相同的样式(共同的部分)放到一个类里面. 

(2) 这些标签都可以调用这个公共的类,然后再调用自己独有的类.

(3) 从而节省CSS代码,统一修改也非常方便.

### id 选择器

id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。 

HTML 元素以 id 属性来设置 id 选择器，CSS 中 id 选择器以“#" 来定义。



id 选择器和类选择器的区别

① 类选择器（class）好比人的名字，一个人可以有多个名字，同时一个名字也可以被多个人使用。

② id 选择器好比人的身份证号码，全中国是唯一的，不得重复。

③ id 选择器和类选择器最大的不同在于使用次数上。

④ 类选择器在修改样式中用的最多，id 选择器一般用于页面唯一性的元素上，经常和 JavaScript 搭配使用。

### 通配符选择器

在 CSS 中，通配符选择器使用“*”定义，它表示选取页面中所有元素（标签）。



# CSS 引入方式

按照 CSS 样式书写的位置（或者引入的方式），CSS 样式表可以分为三大类：




# 3.CSS 字体属性

CSS Fonts (字体)属性用于定义字体系列、大小、粗细、和文字样式（如斜体）。

![1640332477104](../../../.vuepress/public/Cssimg/1640332477104.png)

## 3.1 字体系列font-family

![1640332484407](../../../.vuepress/public/Cssimg/1640332484407.png)

## 3.2 字体大小font-size

![1640332493834](../../../.vuepress/public/Cssimg/1640332493834.png)

## 3.3字体粗细font-weight

![1640332514946](../../../.vuepress/public/Cssimg/1640332514946.png)

## 3.4 文字样式font-style

![1640332522121](../../../.vuepress/public/Cssimg/1640332522121.png)

## 3.5 字体复合属性font

![1640332529206](../../../.vuepress/public/Cssimg/1640332529206.png)

# 4.CSS 文本属性—-第一天结束

CSS Text（文本）属性可定义文本的外观，比如文本的颜色、对齐文本、装饰文本、文本缩进、行间距等。

![1640332541494](../../../.vuepress/public/Cssimg/1640332541494.png)

## 4.1 文本颜色

![1640332559673](../../../.vuepress/public/Cssimg/1640332559673.png)

## 4.2 对齐文本

![1640332567430](../../../.vuepress/public/Cssimg/1640332567430.png)

## 4.3 装饰文本

![1640332575389](../../../.vuepress/public/Cssimg/1640332575389.png)

## 4.4 文本缩进

![1640332585513](../../../.vuepress/public/Cssimg/1640332585513.png)

## 4.5 行间距

![1640332594750](../../../.vuepress/public/Cssimg/1640332594750.png)

# 5.复合选择器

在 CSS 中，可以根据选择器的类型把选择器分为基础选择器和复合选择器，复合选择器是建立在基础选择器之上，对基本选择器进行组合形成的。

 复合选择器可以更准确、更高效的选择目标元素（标签）

 复合选择器是由两个或多个基础选择器，通过不同的方式组合而成的

常用的复合选择器包括：后代选择器、子选择器、并集选择器、伪类选择器等等

![1640332649711](../../../.vuepress/public/Cssimg/1640332649711.png)

## 5.1后代选择器

![1640332666589](../../../.vuepress/public/Cssimg/1640332666589.png)

## 5.2子选择器

![1640332717269](../../../.vuepress/public/Cssimg/1640332717269.png)

## 5.3并集选择器

![1640332724284](../../../.vuepress/public/Cssimg/1640332724284.png)

## 5.4伪类选择器

伪类选择器用于向某些选择器添加特殊的效果，比如给链接添加特殊效果，或选择第1个，第n个元素。

伪类选择器书写最大的特点是用冒号（##）表示，比如 ##hover 、 ##first-child 。

![1640332761103](../../../.vuepress/public/Cssimg/1640332761103.png)


![1640332772856](../../../.vuepress/public/Cssimg/1640332772856.png)

![1640332780889](../../../.vuepress/public/Cssimg/1640332780889.png)

# 6. 元素显示模式

元素显示模式就是元素（标签）以什么方式进行显示，比如自己占一行，比如一行可以放多个个<-span>。

HTML 元素一般分为块元素和行内元素两种类型。

![1640332797163](../../../.vuepress/public/Cssimg/1640332797163.png)

![1640332807447](../../../.vuepress/public/Cssimg/1640332807447.png)

![1640332812003](../../../.vuepress/public/Cssimg/1640332812003.png)

![1640332817012](../../../.vuepress/public/Cssimg/1640332817012.png)

## 元素显示模式转换

特殊情况下，我们需要元素模式的转换，简单理解## 一个模式的元素需要另外一种模式的特性比如想要增加链接 <-a> 的触发范围。

![1640332828857](../../../.vuepress/public/Cssimg/1640332828857.png)

一个小技巧 单行文字垂直居中的代码

解决方案## 让文字的行高等于盒子的高度 就可以让文字在当前盒子内垂直居中

# 7.背景—-第二天结束

通过 CSS 背景属性，可以给页面元素添加背景样式。
背景属性可以设置背景颜色、背景图片、背景平铺、背景图片位置、背景图像固定等。

![1640332850658](../../../.vuepress/public/Cssimg/1640332850658.png)

## 7.1背景颜色

![1640332861386](../../../.vuepress/public/Cssimg/1640332861386.png)

## 3.2 背景图片

![1640332868256](../../../.vuepress/public/Cssimg/1640332868256.png)

## 3.3 背景平铺

![1640332874913](../../../.vuepress/public/Cssimg/1640332874913.png)

## 3.4 背景图片位置

![1640332883670](../../../.vuepress/public/Cssimg/1640332883670.png)

![1640332895624](../../../.vuepress/public/Cssimg/1640332895624.png)

## 3.5 背景图像固定（背景附着）

![1640332903623](../../../.vuepress/public/Cssimg/1640332903623.png)

## 3.6 背景复合写法

![1640332935283](../../../.vuepress/public/Cssimg/1640332935283.png)

## .7 背景色半透明

![1640332942229](../../../.vuepress/public/Cssimg/1640332942229.png)

# 8.CSS 的三大特性.

CSS 有三个非常重要的三个特性：层叠性、继承性、优先级。

![1640332953848](../../../.vuepress/public/Cssimg/1640332953848.png)

![1640332958265](../../../.vuepress/public/Cssimg/1640332958265.png)

![1640332963200](../../../.vuepress/public/Cssimg/1640332963200.png)

![1640332969209](../../../.vuepress/public/Cssimg/1640332969209.png)

![1640332973537](../../../.vuepress/public/Cssimg/1640332973537.png)

![1640332979319](../../../.vuepress/public/Cssimg/1640332979319.png)

![1640332982306](../../../.vuepress/public/Cssimg/1640332982306.png)

# 9. CSS盒子模型----第三天结束

页面布局要学习三大核心, 盒子模型, 浮动 和 定位. 

学习好盒子模型能非常好的帮助我们布局页面.

## 1.1 看透网页布局的本质

![1640333005181](../../../.vuepress/public/Cssimg/1640333005181.png)

## 1.2    盒子模型（Box Model）组成 

![1640333012242](../../../.vuepress/public/Cssimg/1640333012242.png)

![1640333018453](../../../.vuepress/public/Cssimg/1640333018453.png)

![1640333021643](../../../.vuepress/public/Cssimg/1640333021643.png)

## 1.2    边框（border）

![1640333030349](../../../.vuepress/public/Cssimg/1640333030349.png)

CSS 边框属性允许你指定一个元素边框的样式和颜色。

![1640333037738](../../../.vuepress/public/Cssimg/1640333037738.png)

![1640333040660](../../../.vuepress/public/Cssimg/1640333040660.png)

## 1.2    表格的细线边框

![1640333049290](../../../.vuepress/public/Cssimg/1640333049290.png)

## 1.5边框会影响盒子实际大小

![1640333055997](../../../.vuepress/public/Cssimg/1640333055997.png)

## 1.6内边距（padding）

![1640333062304](../../../.vuepress/public/Cssimg/1640333062304.png)

![1640333067643](../../../.vuepress/public/Cssimg/1640333067643.png)

![1640333073550](../../../.vuepress/public/Cssimg/1640333073550.png)

![1640333077484](../../../.vuepress/public/Cssimg/1640333077484.png)

## 1.7 外边距（margin）

![1640333084271](../../../.vuepress/public/Cssimg/1640333084271.png)

![1640333087965](../../../.vuepress/public/Cssimg/1640333087965.png)

## 1.8 外边距合并

![1640333095707](../../../.vuepress/public/Cssimg/1640333095707.png)

![1640333099554](../../../.vuepress/public/Cssimg/1640333099554.png)

![1640333102567](../../../.vuepress/public/Cssimg/1640333102567.png)

## 1.9 清除内外边距

![1640333110615](../../../.vuepress/public/Cssimg/1640333110615.png)

## 1.10圆角边框

![1640333116777](../../../.vuepress/public/Cssimg/1640333116777.png)

## 1.11盒子阴影box-shadow

![1640333125143](../../../.vuepress/public/Cssimg/1640333125143.png)

## 1.12文字阴影text-shadow

![1640333134812](../../../.vuepress/public/Cssimg/1640333134812.png)

# 10浮动

![1640333141265](../../../.vuepress/public/Cssimg/1640333141265.png)

![1640333143557](../../../.vuepress/public/Cssimg/1640333143557.png)

## 10.1传统网页布局的三种方式

![1640333149570](../../../.vuepress/public/Cssimg/1640333149570.png)

![1640333155162](../../../.vuepress/public/Cssimg/1640333155162.png)

## 10.2 浮动特性（重难点）

![1640333163564](../../../.vuepress/public/Cssimg/1640333163564.png)

![1640333166942](../../../.vuepress/public/Cssimg/1640333166942.png)

![1640333171790](../../../.vuepress/public/Cssimg/1640333171790.png)

![1640333174636](../../../.vuepress/public/Cssimg/1640333174636.png)

## 10.3 浮动元素经常和标准流父级搭配使用

![1640333182090](../../../.vuepress/public/Cssimg/1640333182090.png)

## 10.4常见网页布局

![1640333188961](../../../.vuepress/public/Cssimg/1640333188961.png)

![1640333191077](../../../.vuepress/public/Cssimg/1640333191077.png)

## 10.5 浮动布局注意点

![1640333290248](../../../.vuepress/public/Cssimg/1640333290248.png)

## 10.6清除浮动

![1640333297311](../../../.vuepress/public/Cssimg/1640333297311.png)

![1640333300590](../../../.vuepress/public/Cssimg/1640333300590.png)

![1640333303752](../../../.vuepress/public/Cssimg/1640333303752.png)

### 10.6.1 清除浮动方法

![1640333310902](../../../.vuepress/public/Cssimg/1640333310902.png)

![1640333313030](../../../.vuepress/public/Cssimg/1640333313030.png)

![1640333315814](../../../.vuepress/public/Cssimg/1640333315814.png)

 ##after 伪元素法

##after 方式是额外标签法的升级版。也是给父元素添加

```css
.clearfix##after { 
 content## ""; 
 display## block; 
 height## 0; 
 clear## both; 
 visibility## hidden; 
} 
.clearfix { /* IE6、7 专有 */ 
 *zoom## 1;
}

```

 优点：没有增加标签，结构更简单

 缺点：照顾低版本浏览器

 代表网站： 百度、淘宝网、网易等

![1640333364220](../../../.vuepress/public/Cssimg/1640333364220.png)

### 3.4 清除浮动总结

![1640333373355](../../../.vuepress/public/Cssimg/1640333373355.png)

# 11CSS 定位

![1640333380709](../../../.vuepress/public/Cssimg/1640333380709.png)

1.1  为什么需要定位

![1640333389884](../../../.vuepress/public/Cssimg/1640333389884.png)

![1640333394867](../../../.vuepress/public/Cssimg/1640333394867.png)

![1640333397879](../../../.vuepress/public/Cssimg/1640333397879.png)

1.1  
定位组成

![1640333405890](../../../.vuepress/public/Cssimg/1640333405890.png)

![1640333408637](../../../.vuepress/public/Cssimg/1640333408637.png)

![1640333411609](../../../.vuepress/public/Cssimg/1640333411609.png)

1.3 静态定位 static（了解）

![1640333418899](../../../.vuepress/public/Cssimg/1640333418899.png)

1.1  
相对定位 relative（重要）

![1640333426088](../../../.vuepress/public/Cssimg/1640333426088.png)

1.5绝对定位 absolute（重要）

![1640333434566](../../../.vuepress/public/Cssimg/1640333434566.png)

1.6 子绝父相的由来

![1640333443575](../../../.vuepress/public/Cssimg/1640333443575.png)

1.7 固定定位 fixed （重要）

![1640333454039](../../../.vuepress/public/Cssimg/1640333454039.png)

![1640333457431](../../../.vuepress/public/Cssimg/1640333457431.png)

1.8 粘性定位 sticky（了解）

![1640333465074](../../../.vuepress/public/Cssimg/1640333465074.png)

1.10 定位叠放次序 z-index

![1640333473059](../../../.vuepress/public/Cssimg/1640333473059.png)

1.11 定位的拓展

![1640333482413](../../../.vuepress/public/Cssimg/1640333482413.png)

![1640333485007](../../../.vuepress/public/Cssimg/1640333485007.png)

![1640333488092](../../../.vuepress/public/Cssimg/1640333488092.png)

![1640333492210](../../../.vuepress/public/Cssimg/1640333492210.png)

3. 网页布局总结

![1640333500129](../../../.vuepress/public/Cssimg/1640333500129.png)

# 4. 元素的显示与隐藏

![1640333515602](../../../.vuepress/public/Cssimg/1640333515602.png)

![1640333519143](../../../.vuepress/public/Cssimg/1640333519143.png)

![1640333521890](../../../.vuepress/public/Cssimg/1640333521890.png)

![1640333525547](../../../.vuepress/public/Cssimg/1640333525547.png)

![1640333528850](../../../.vuepress/public/Cssimg/1640333528850.png)

# CSS 高级技巧

## 1. 精灵图

![1640333539014](../../../.vuepress/public/Cssimg/1640333539014.png)

![1640333542340](../../../.vuepress/public/Cssimg/1640333542340.png)

## 1.2 精灵图（sprites）的使用

![1640333549380](../../../.vuepress/public/Cssimg/1640333549380.png)

## 2. 字体图标

![1640333555502](../../../.vuepress/public/Cssimg/1640333555502.png)

![1640333559982](../../../.vuepress/public/Cssimg/1640333559982.png)

### 2.3 字体图标的下载

推荐下载网站：

 icomoon 字库 http##//icomoon.io 推荐指数 ★★★★★

IcoMoon 成立于 2011 年，推出了第一个自定义图标字体生成器，它允许用户选择所需要的图标，使它们成一字型。该字库内容种类繁多，非常全面，唯一的遗憾是国外服务器，打开网速较慢。

 阿里 iconfont 字库 http##//www.iconfont.cn/ 推荐指数 ★★★★★

这个是阿里妈妈 M2UX 的一个 iconfont 字体图标字库，包含了淘宝图标库和阿里妈妈图标库。可以使用 AI制作图标上传生成。 重点是，免费！

![1640333570209](../../../.vuepress/public/Cssimg/1640333570209.png)

![1640333573942](../../../.vuepress/public/Cssimg/1640333573942.png)

![1640333576233](../../../.vuepress/public/Cssimg/1640333576233.png)

![1640333579664](../../../.vuepress/public/Cssimg/1640333579664.png)

![1640333583232](../../../.vuepress/public/Cssimg/1640333583232.png)

![1640333586320](../../../.vuepress/public/Cssimg/1640333586320.png)

## 3. CSS 三角

![1640333593928](../../../.vuepress/public/Cssimg/1640333593928.png)

## 4. CSS 用户界面样式

![1640333599383](../../../.vuepress/public/Cssimg/1640333599383.png)

![1640333603330](../../../.vuepress/public/Cssimg/1640333603330.png)

![1640333605862](../../../.vuepress/public/Cssimg/1640333605862.png)

![1640333608078](../../../.vuepress/public/Cssimg/1640333608078.png)

## 5. vertical-align 属性应用

![1640333616568](../../../.vuepress/public/Cssimg/1640333616568.png)

![1640333621593](../../../.vuepress/public/Cssimg/1640333621593.png)

![1640333624415](../../../.vuepress/public/Cssimg/1640333624415.png)

![1640333628312](../../../.vuepress/public/Cssimg/1640333628312.png)

## 6. 溢出的文字省略号显示

![1640333636272](../../../.vuepress/public/Cssimg/1640333636272.png)

![1640333641347](../../../.vuepress/public/Cssimg/1640333641347.png)

![1640333645029](../../../.vuepress/public/Cssimg/1640333645029.png)

## 7. 常见布局技巧

![1640333651674](../../../.vuepress/public/Cssimg/1640333651674.png)

### 1. margin负值运用

![1640333660315](../../../.vuepress/public/Cssimg/1640333660315.png)

![1640333663950](../../../.vuepress/public/Cssimg/1640333663950.png)

![1640333668151](../../../.vuepress/public/Cssimg/1640333668151.png)

![1640333672527](../../../.vuepress/public/Cssimg/1640333672527.png)

![1640333676173](../../../.vuepress/public/Cssimg/1640333676173.png)

# CSS3 的新特性

![1640333683121](../../../.vuepress/public/Cssimg/1640333683121.png)

![1640333688699](../../../.vuepress/public/Cssimg/1640333688699.png)

![1640333691079](../../../.vuepress/public/Cssimg/1640333691079.png)

![1640333696469](../../../.vuepress/public/Cssimg/1640333696469.png)

![1640333699420](../../../.vuepress/public/Cssimg/1640333699420.png)

![1640333702126](../../../.vuepress/public/Cssimg/1640333702126.png)

![1640333705217](../../../.vuepress/public/Cssimg/1640333705217.png)

![11](../../../.vuepress/public/Cssimg/1640333708001.png)

![1640333720527](../../../.vuepress/public/Cssimg/1640333720527.png)

![1640333723527](../../../.vuepress/public/Cssimg/1640333723527.png)

![1640333725983](../../../.vuepress/public/Cssimg/1640333725983.png)

![1640333729034](../../../.vuepress/public/Cssimg/1640333729034.png)

![1640333732944](../../../.vuepress/public/Cssimg/1640333732944.png)

![1640333744226](../../../.vuepress/public/Cssimg/1640333744226.png)

![1640333747859](../../../.vuepress/public/Cssimg/1640333747859.png)

![1640333752566](../../../.vuepress/public/Cssimg/1640333752566.png)

![1640333756045](../../../.vuepress/public/Cssimg/1640333756045.png)

![1640333759212](../../../.vuepress/public/Cssimg/1640333759212.png)

# CSS3 2D转换

![1640333770823](../../../.vuepress/public/Cssimg/1640333770823.png)

![1640333775467](../../../.vuepress/public/Cssimg/1640333775467.png)

![1640333779089](../../../.vuepress/public/Cssimg/1640333779089.png)

![1640333784164](../../../.vuepress/public/Cssimg/1640333784164.png)

![1640333787654](../../../.vuepress/public/Cssimg/1640333787654.png)

![1640333791438](../../../.vuepress/public/Cssimg/1640333791438.png)

![1640333794224](../../../.vuepress/public/Cssimg/1640333794224.png)

![1640333799652](../../../.vuepress/public/Cssimg/1640333799652.png)

![1640333802410](../../../.vuepress/public/Cssimg/1640333802410.png)

![1640333814530](../../../.vuepress/public/Cssimg/1640333814530.png)

![1640333819290](../../../.vuepress/public/Cssimg/1640333819290.png)

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

![1640333903581](../../../.vuepress/public/Cssimg/1640333903581.png)

# 项目经验

![1640333910217](../../../.vuepress/public/Cssimg/1640333910217.png)

![1640333914241](../../../.vuepress/public/Cssimg/1640333914241.png)

## 网站 favicon 图标

![1640333921528](../../../.vuepress/public/Cssimg/1640333921528.png)

![1640333924819](../../../.vuepress/public/Cssimg/1640333924819.png)

![1640333927590](../../../.vuepress/public/Cssimg/1640333927590.png)

![1640333933667](../../../.vuepress/public/Cssimg/1640333933667.png)

## 网站TDK三大标签SEO优化

![1640333940236](../../../.vuepress/public/Cssimg/1640333940236.png)

![1640333943486](../../../.vuepress/public/Cssimg/1640333943486.png)

![1640333947546](../../../.vuepress/public/Cssimg/1640333947546.png)

![1640333949852](../../../.vuepress/public/Cssimg/1640333949852.png)