---
title: jQuery
date: 2021/12/29
tags:
 - 笔记
categories:
 -  JQuery
---

## jQuery 概述

jQuery 是一个快速、简洁的 JavaScript 库，其设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。

j 就是 JavaScript； Query 查询； 意思就是查询 js，把 js 中的 DOM 操作做了封装，我们可以快速的查询使用里面的功能。

jQuery 封装了 JavaScript 常用的功能代码，优化了 DOM 操作、事件处理、动画设计和 Ajax 交互。

学习 jQuery 本质： 就是学习调用这些函数（方法）。

jQuery 出现的目的是加快前端人员的开发速度，我们可以非常方便的调用和使用它，从而提高开发效率。



**JavaScript 库**

\JavaScript 库：即 library，是一个封装好的特定的集合（方法和函数）。从封装一大堆函数的角度理解库，就是在这个库中，封装了很多预先定义好的函数在里面，比如动画 animate、hide、show，比如获取元素等。

简单理解： 就是一个 JS 文件，里面对我们原生 js 代码进行了封装，存放到里面。这样我们可以快速高效的使用这些封装好的功能了。

比如 jQuery，就是为了快速方便的操作 DOM，里面基本都是函数（方法）。

常见的 JavaScript 库

jQuery

Prototype

YUI

Dojo

Ext JS

移动端的 zepto

内部都是用 JavaScript 实现的



**jQuery 的优点**

1.轻量级。核心文件才几十 kb，不会影响页面加载速度

2.跨浏览器兼容。基本兼容了现在主流的浏览器

3.链式编程、隐式迭代

4.对事件、样式、动画支持，大大简化了 DOM 操作

5.支持插件扩展开发。有着丰富的第三方的插件，例如：树形菜单、日期控件、轮播图等

6.免费、开源

## jQuery 的下载与使用

官网地址： https://jquery.com/

版本：

1x ：兼容 IE 678 等低版本浏览器， 官网不再更新

2x ：不兼容 IE 678 等低版本浏览器， 官网不再更新

3x ：不兼容 IE 678 等低版本浏览器， 是官方主要更新维护的版本

各个版本的下载：https://code.jquery.com/

jQuery 的使用步骤

1. 引入 jQuery 文件

2. 使用即可

## 一. 基本使用

### jQuery 的入口函数

```
$(function () {

   ...  // 此处是页面 DOM 加载完成的入口

 }) ;
```

```
$(document).ready(function(){

   ...  //  此处是页面DOM加载完成的入口
   
});

$(window).ready(function(){
});
```

1.等着 DOM 结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成，jQuery 帮我们完成了封装。

2.相当于原生 js 中的 DOMContentLoaded。

3.不同于原生 js 中的 load 事件是等页面文档、外部的 js 文件、css 文件、图片加载完毕才执行内部代码。

4.更推荐使用第一种方式。



### jQuery 的顶级对象 $

1.$ 是 jQuery 的别称，在代码中可以使用 jQuery 代替 $，但一般为了方便，通常都直接使用 $ 。

2.$ 是 jQuery 的顶级对象， 相当于原生 JavaScript 中的 window。把元素利用$包装成 jQuery 对象，就可以调用 jQuery 的方法。



### jQuery 对象和 DOM 对象

1.用原生 JS 获取来的对象就是 DOM 对象

2.jQuery 方法获取的元素就是 jQuery 对象。

3.jQuery 对象本质是： 利用$对 DOM 对象包装后产生的对象（伪数组形式存储）。

注意： 只有 jQuery 对象才能使用 jQuery 方法，DOM 对象则使用原生的 JavaScirpt 方法。



### DOM 对象与 jQuery 对象之间相互转换

因为原生 js 比 jQuery 更大，原生的一些属性和方法 jQuery 没有给我们封装. 要想使用这些属性和方法需要把 jQuery 对象转换为 DOM 对象才能使用。

1. DOM 对象转换为 jQuery 对象： $(DOM 对象)

   `$('div')`

2. jQuery 对象转换为 DOM 对象（两种方式）

`$('div') [index] index 是索引号`

`$('div') .get(index) index 是索引号`



## 二. jQuery特点

### jQuery 里面的排他思想

想要多选一的效果，排他思想：当前元素设置样式，其余的兄弟元素清除样式。
$(this).css(“color”,”red”);
$(this).siblings(). css(“color”,””);

### 链式编程

链式编程是为了节省代码量，看起来更优雅。
$(this).css('color', 'red').sibling().css('color', '');  
 使用链式编程一定注意是哪个对象执行样式.

### 隐式迭代（重要）

 jQuery 的很多方法中都"内嵌"默认就会对这一组元素进行遍历(迭代)

遍历内部 DOM 元素（伪数组形式存储）的过程就叫做隐式迭代。

```
jQuery对象.jQuery方法() //jQuery对象中所有元素会应用这个方法
```

 简单理解：给匹配到的所有元素进行循环遍历，执行相应的方法，而不用我们再进行循环，简化我们的操作，方便我们调用。



### 显示迭代

隐式迭代只能对所有的元素进行相同的操作

​                如果操作不相同，jQuery 又提供了一个显示迭代(显示迭代，允许我们书写循环内的代码)

​                `jQuery对象.each(function(index, dom){})`

jQuery的方法内提供的隐式迭代，只能用在对 jQuery对象(伪数组)所有的元素进行相同的操作

`.each()` 方法是用于进行显示迭代的

语法：

    jQuery对象.each(function(index,dom){
    index 参数 是每次遍历到元素的下标
    
    dom 参数 就是每次遍历得到的 原生 DOM 元素
    })



```
let jLis = $('ul li')
jLis.css('color','red')
jLis.css('border','1px solid #ccc')
// 第1上 li width 为100
// 第2上 li width 为200
// 第3上 li width 为300
// 第4上 li width 为400
// 第5上 li width 为500           
jLis.each(function(index,dom){
	 console.log(index,dom);
	 $(dom).css('width',100*(index+1))            
})
```





## 三. 选择器

### jQuery 基础选择器

原生 JS 获取元素方式很多，很杂，而且兼容性情况不一致，因此 jQuery 给我们做了封装，使获取元素统一标准。
$(“选择器”) 

 里面选择器直接写 CSS 选择器即可，但是要加引号  
 ![1640766471357](README.assets/1640766471357.png)

### jQuery 层级选择器

![1640766478869](README.assets/1640766478869.png)

### jQuery 筛选选择器

![1640766482069](README.assets/1640766482069.png)

 // 第 n个之前

```
$('li:lt(4)').css('color','#f90')
```

 // 第 n个之后

```
 $('li:gt(6)').css('color','#9f0')
```



 

### jQuery 筛选方法

筛选方法，主要的应用场景：先全部操作，再对单独某部分进行操作

  筛选选择器的语法，以独立的方法形式调用

  应用场景是：全部，再单独对部分进行操作

![1640766485062](README.assets/1640766485062.png)

// .prev() 获取前面1个兄弟元素

  ```
console.log($('.spe').prev())
  ```

​            // .next() 获取后面1个兄弟元素

      ```
      console.log($('.spe').next())
      ```





## 四.Dom操作

### 1. 属性值

   主要针对元素的内容还有表单的值操作。

**文本**

1. 普通元素内容 html()（ 相当于原生inner HTML)
   html()             // 获取元素的内容
   html(''内容'')   // 设置元素的内容



2. 普通元素文本内容 text()   (相当与原生 innerText)
   text()                     // 获取元素的文本内容
   text(''文本内容'')   // 设置元素的文本内容

   内部会进行隐式便利，目标的所有的 jQuery元素的都获取，都设置

**表单的值**

1. 主要针对元素的内容还有表单的值操作。
   表单的值 val()（相当于原生value)
   
   ```
   1. val()              // 获取表单的值
   2. val(''内容'')       // 设置表单的值
   ```

**索引号**

**index()   获取当前索引号-item**



### 2. 样式操作

jQuery 可以使用 css 方法来修改简单元素样式； 也可以操作类，修改多个样式。

#### 操作 css 方法

css()  用于 获取/设置 css 样式

在获取时，只获取 下标0的那个元素的样式值

在设置时，不需要通过下标进行，可以直接为 jQuery 对象内所有的元素的样式

```
.css(属性名,属性值)
.css({
     属性名:值,
     属性名:值
})
```

```
	1. 参数只写属性名，则是返回属性值
		$(this).css(''color'');

	2.  参数是属性名，属性值，逗号分隔，是设置一组样式，属性必须加引号，值如果是数字可以不用跟单位和引号
		$(this).css(''color'', ''red'');
		
	3.  参数可以是对象形式，方便设置多组样式。属性名和属性值用冒号隔开， 属性可以不用加引号，
		$(this).css({ "color":"white","font-size":"20px"});
```

​    	

#### 设置类样式方法

作用等同于以前的 classList，可以操作类样式， 注意操作类里面的参数不要加点。

```
1. 添加类
	$(“div”).addClass(''current'');
2.  移除类
	$(“div”).removeClass(''current'');
3.  切换类
	$(“div”).toggleClass(''current'');
4.判断是否有某个样式类，返回的是布尔值
//  .hasClass('clsA')               
     console.log($('.box').hasClass('bdr'))
```

类操作与className区别

原生 JS 中 className 会覆盖元素原先里面的类名。
jQuery 里面类操作只是对指定类进行操作，不影响原先的类名。



### 属性操作

####  布尔属性 推荐使用prop()

`所谓元素固有属性就是元素本身自带的属性，比如 <a> 元素里面的 href ，比如 <input> 元素里面的 type。 `

```
	1. 获取属性语法
		prop(''属性'')

	2. 设置属性语法
		prop(''属性'', ''属性值'')
```


​    

####  .attr()  通用

```
用户自己给元素添加的属性，我们称为自定义属性。 比如给 div 添加 index =“1”。

1. 获取属性语法
	attr(''属性'')      // 类似原生 getAttribute()

2. 设置属性语法
	attr(''属性'', ''属性值'')   // 类似原生 setAttribute()
	改方法也可以获取 H5 自定义属性
	
3. 通过 .removeAttr(属性名) 可以进行删除操作
	$('img').removeAttr('src')
```



### 宽高属性的操作

`width() / height()` 对宽高进行 读写 操作

`innerWidth() / innerHeight()` 获取 width + padding

`outerWidth() / outerHeight()` 获取 width + padding + border

`outerWidth(true) / outerHeight(true)` 获取 width + padding + border + margin=

  ```
$('.box').css('width')

$('.box').width()

$('.box').innerWidth()

$('.box').outerWidth()

$('.box').outerWidth(true)
  ```





## 五. 元素操作

### 创建元素

在jQuery 中创建元素可以使用 $()

$(完整的标签以及内容)

```
$(''<li></li>'');  
 动态的创建了一个 <li>  
```

默认创建出来的元素不在页面上，需要追加

```
$('.box').append(jH1)
```



### 添加元素

append 将子元素追加到父元素尾部

prepend 将子元素追加到父元素头部

​				父.append(新元素)       

​                父.prepend(新元素)

​                目标元素.before(新元素)

​                目标元素.after(新元素)

​                新元素.appendTo(父)

​                新元素.prependTo(父)

```
1. 内部添加
	element.append(''内容'')
		把内容放入匹配元素内部最后面，类似原生 appendChild。
		
	element.prepend(''内容'')
		把内容放入匹配元素内部最前面。
```



```
append 是父元素在前，子元素在后
appendTo 是子元素在前，父元素在后
prepend 是父元素在前，子元素在后
prependTo 是子元素在前，父元素在后
```







before 将新元素插入到某个元素前面

after 将新元素插入到某个元素后面

```
2. 外部添加
element.after(''内容'') // 把内容放入目标元素后面
element.before(''内容'') // 把内容放入目标元素前面

```

内部添加元素，生成之后，它们是父子关系。
外部添加元素，生成之后，他们是兄弟关系。



### 删除元素

  element.remove() // 删除匹配的元素（本身）



  element.empty() // 删除匹配的元素集合中所有的子节点



  element.html('''') // 清空匹配的元素内容

  remove 删除元素本身。
  empt() 和 html('''') 作用等价，都可以删除元素里面的内容，只不过 html 还可以设置内容。



### 克隆元素

`.clone(true)  克隆元素`           

​		true 表示克隆事件

 `原生：cloneNode(true)`

​		true 参数表示克隆内容







## 六.  jQuery 事件

### jQuery 事件绑定(注册)

1. 简单方法

在 jQuery 常用的事件都被封装成一个方法了，而方法名和事件名相同(没有 on 前缀 )

```
$('.box').click(function(){
     console.log('click ....');
 })
```

 `element.事件(function(){})`  

 其他事件和原生基本一致。
		比如 mouseover---鼠标经过、
		mouseout----鼠标离开、
		blur、focus、change、
		keydown---按下、
		keyup---松开、
		resize---窗口大小改变、
		scroll 等

mouseenter  对应 mouseover

 mouseleave  对应 mouseout

mouseenter 与 mouseleave 

不会对从冒泡过来的事件进行响应。 



#### 通过 .bind()

```
// .bind(事件名,事件处理函数)
$('.box').bind('click', function(){
     console.log('click ....');
 })
 
一次性绑定多个事件,，每个事件有不同的事件处理函数
 $('.box').bind({
     click:function(){
         console.log('click ....');
     },
     mouseenter:function(){
        console.log('mouseenter ....');
            }
 })
```



#### on() 绑定事件

 on() 方法在匹配元素上绑定一个或多个事件的事件处理函数
​ element.on(events,[selector],fn)

1. events:一个或多个用空格分隔的事件类型，如"click"或"keydown" 
2. selector: 元素的子元素选择器 。
3. fn:回调函数 即绑定在元素身上的侦听函数。

#### on 方法优势

```
1 简单注册
 $('.box').on('click', function(){
     console.log('click ...');
 })
 
2.可以绑定多个事件，多个处理事件处理程序。
$(“div”).on({
	mouseover: function(){},
	mouseout: function(){},
	click: function(){}
});

如果事件处理程序相同
$(“div”).on(“mouseover mouseout”, function() {
$(this).toggleClass(“current”);
});  


3.事件委派操作(事件委托) 。
// 为父元素注册事件，监听子元素的事件
// 事件委派的定义就是，把原来加给子元素身上的事件绑定在父元素身上，就是把事件委派给父元素。
// 注意：jQuery 中的事件委托，只能通过第2参数 选择的对象进行触发
$('ul').on('click', 'li', function() {
alert('hello world!');
});

在此之前有bind(), live() delegate()等方法来处理事件绑定或者事件委派，最新版本的请用on替代他们。


4.动态创建的元素，click() 没有办法绑定事件， on() 可以给动态生成的元素绑定事件
$(“div").on("click",”p”, function(){
alert("俺可以给动态生成的元素绑定事件")
});

$("div").append($("<p>我是动态创建的 p</p>"));
```

​    

### off() 解绑事件

```
	off() 方法可以移除通过 on() 方法添加的事件处理程序。
	$("p").off() // 解绑p元素所有事件处理程序
	$("p").off( "click")  // 解绑p元素上面的点击事件 后面的 foo 是侦听函数名
	$("ul").off("click", "li");   // 解绑事件委托
```

### 触发事件

#### one() --只触发一次

#### trigger() 自动触发事件

​     有些事件希望自动触发, 比如轮播图自动播放功能跟点击右侧按钮一致。可以利用定时器自动触发右侧按钮点击事件，不必鼠标点击触发。

```
element.click()  // 第一种简写形式

element.trigger("type") // 第二种自动触发模式
$("p").on("click", function () {
	 alert("hi~");
});
$("p").trigger("click"); // 此时自动触发点击事件，不需要鼠标点击

element.triggerHandler(type) // 第三种自动触发模式
triggerHandler 模式不会触发元素的默认行为，这是和前面两种的区别。
```



### jQuery 事件对象

 事件被触发，就会有事件对象的产生。

```
$('.box').click(function(e){ {
		// jQuery 的事件对象的获取，为事件处理函数定义一个形参即可
})  
```

```
阻止默认行为：event.preventDefault() 或者 return false

阻止冒泡： event.stopPropagation()

------鼠标相关的三个坐标
 距离文档
console.log(e.pageX);
console.log(e.pageY);
// 距离容器
console.log(e.clientX);
console.log(e.clientY);
                
// 距离屏幕的
console.log(e.screenX);
console.log(e.screenY);
                
})
```



​	

## 七. jQuery 显示/隐藏效果

jQuery 给我们封装了很多动画效果，最为常见的如下：

![1640766776341](README.assets/1640766776341.png)

#### 显示隐藏效果

    	显示语法规范
    		show([speed,[easing],[fn]])
    	隐藏语法规范
    		hide([speed,[easing],[fn]])
    	切换语法规范
    		toggle([speed,[easing],[fn]])
    	参数
    		（1）参数都可以省略， 无动画直接显示。
    		（2）speed：三种预定速度之一的字符串(“slow”,“normal”, or “fast”)或表示动画时长的毫秒数值(如：1000)。
    （3）easing：(Optional) 用来指定切换效果，默认是“swing”，可用参数“linear”。
    （4）fn:  回调函数，在动画完成时执行的函数，每个元素执行一次。

#### 滑动效果

    	下滑效果语法规范
    		slideDown([speed,[easing],[fn]])
    	上滑效果语法规范
    		slideUp([speed,[easing],[fn]])
    	滑动切换效果语法规范
    		slideToggle([speed,[easing],[fn]])
    	参数
    		（1）参数都可以省略。
    		（2）speed：三种预定速度之一的字符串(“slow”,“normal”, or “fast”)或表示动画时长的毫秒数值(如：1000)。
    （3）easing：(Optional) 用来指定切换效果，默认是“swing”，可用参数“linear”。
    （4）fn:  回调函数，在动画完成时执行的函数，每个元素执行一次。

#### 事件切换

    	hover([over,]out)
    	（1）over:鼠标移到元素上要触发的函数（相当于mouseenter）
    	（2）out:鼠标移出元素要触发的函数（相当于mouseleave）
    	（3）如果只写一个函数，则鼠标经过和离开都会触发它
    动画队列及其停止排队方法



#### 淡入淡出效果

    	1. 淡入效果语法规范
    		fadeIn([speed,[easing],[fn]])
    	2. 淡出效果语法规范
    		fadeOut([speed,[easing],[fn]])
    	3. 淡入淡出切换效果语法规范
    		fadeToggle([speed,[easing],[fn]])
    	4. 渐进方式调整到指定的不透明度
    		fadeTo([[speed],opacity,[easing],[fn]])
    		opacity 透明度必须写，取值 0~1 之间。
    	参数
    		（1）参数都可以省略。
    		（2）speed：三种预定速度之一的字符串(“slow”,“normal”, or “fast”)或表示动画时长的毫秒数值(如：1000)。
    （3）easing：(Optional) 用来指定切换效果，默认是“swing”，可用参数“linear”。
    （4）fn:  回调函数，在动画完成时执行的函数，每个元素执行一次。

#### 自定义动画 animate

语法
`animate(params,[speed],[easing],[fn])`
参数
（1）params: 想要更改的样式属性，以对象形式传递，必须写。 属性名可以不用带引号， 如果是复合属性则需要采取驼峰命名法 borderLeft。其余参数都可以省略。
（2）speed：三种预定速度之一的字符串(“slow”,“normal”, or “fast”)或表示动画时长的毫秒数值(如：1000)。
（3）easing：(Optional) 用来指定切换效果，默认是“swing”，可用参数“linear”。
（4）fn: 回调函数，在动画完成时执行的函数，每个元素执行一次。



#### 动画或效果队列

动画或者效果一旦触发就会执行，如果多次触发，就造成多个动画或者效果排队执行。



停止排队      .stop()

(1）stop() 方法用于停止动画或效果。

(2) 注意： stop() 写到动画或者效果的前面， 相当于停止结束上一次的动画。



 .stop(true)

stop 里的 true，停止所有的，正在进行和将要执行的都停止。



## 7.  数据缓存 data()

​	data() 方法可以在指定的元素上存取数据，并不会修改 DOM 元素结构。一旦页面刷新，之前存放的数据都将被移除。
​	
​	1. 附加数据语法
​		data(''name'',''value'')   // 向被选元素附加数据
​	
​	2. 获取数据语法
​		date(''name'')             //   向被选元素获取数据
​	同时，还可以读取 HTML5 自定义属性  data-index ，得到的是数字型



## 8. 位置操作

### 位置主要有三个：

 offset()、position()、scrollTop()/scrollLeft() 

1. offset() 设置或获取元素偏移   (**距离文档**)
  offset() 方法设置或返回被选元素相对于文档的偏移坐标，跟父级没有关系。
  该方法有 2 个属性 left、top 。

  offset().top 用于获取距离文档顶部的距离，offset().left 用于获取距离文档左侧的距离。
  可以设置元素的偏移：offset({ top: 10, left: 30 }); 

  ```
  $('.inner').offset()
  ```

  

2. position() 获取元素偏移     (**距离相对定位父元素**)
  position() 方法用于返回被选元素相对于带有定位的父级偏移坐标，如果父级都没有定位，则以文档为准。
  该方法有 2 个属性 left、top。position().top 用于获取距离定位父级顶部的距离，position().left 用于获取距离定位父级左侧的距离。
  该方法只能获取。 

  滚动距离

3.  scrollTop()/scrollLeft()     (**设置或获取元素被卷去的头部和左侧**)
  scrollTop() 方法设置或返回被选元素被卷去的头部。
  不跟参数是获取，参数为不带单位的数字则是设置被卷去的头部。





## 10. jQuery 其他方法

###  jQuery 拷贝对象

 如果想要把某个对象拷贝（合并） 给另外一个对象使用，此时可以使用 $.extend() 方法
​			$.extend([deep], target, object1, [objectN])    
​			1. deep: 如果设为true 为深拷贝， 默认为false  浅拷贝 
​			2. target: 要拷贝的目标对象
​			3. object1:待拷贝到第一个对象的对象。
​			4. objectN:待拷贝到第N个对象的对象。
​			5. 浅拷贝是把被拷贝的对象复杂数据类型中的地址拷贝给目标对象，修改目标对象会影响被拷贝对象。
​			6. 深拷贝，前面加true， 完全克隆(拷贝的对象,而不是地址)，修改目标对象不会影响被拷贝对象。

### 关于$与 jQuery

在 jQuery 中 符号 $ 与 jQuery 都是一个变量名，这两个保存的是同一个对象(函数)

```
 console.log($ === jQuery); //true
```

```
// $作用：
// 作用1：设置页面加载函数
//  $(function(){})     //如果传递的是函数就是页面加载事件

// 作用2：选择器
//  $('.box')       $('h1')     $('button') // 如果传递的是字符串

// 作用3：用于创建标签
//  $('<h1>.......</h1>')       // 如果传递的是字符串，则字符串是在书写 html 标签，
```



### 多库共存

多库共存？会引起什么问题？解决掉了这个问题，就实现了多库共存。

​		// 什么是多库共存，jQuery 会有很多版本

​         一个项目比较老，使用的是低版本的jquery，现在要求添加新的功能。现在的程序 要使用更新的版本，这种情况就需要两个版本的jQuery 共同存在

​        // 会引发什么问题

​        无论是老版本，还是新版本，使用的变量名都是 $、jQuery，要引入两个版本是必然是有先后顺序，后面的默认会覆盖前面的。

​		// 如何解决

​		虽然jquery-1.12.4中$ jQuery 这两个名子会被后面的 jquery-3.0.0.js覆盖掉，但要想个办法，让保留起来。

```
在后面的版本占用$之前，先将$赋值给另一个变量
let my$ = $   这是我们自己的解决方案，jQuery 为我们提供了别的解决方案
```

```
.noConflict() 当前版本的 jQuery不再占用$符号了，并且返回当前版本的 jQuery
let my$ = $.noConflict()        // $不再被占用，当前的 jQuery 被保存到 my$ 这个变量中了
console.log($);                 // 1.12.4版本不再使用 $符号，所以里面是 undefined


<script src="jquery-3.0.0.js"></script>
// 新版本引入之后，$被 新版本使用 
console.log($.prototype.jquery);
// 如果还想使用旧版本，就需通过 my$进行使用
 console.log(my$.prototype.jquery);
```



 小结：
        在引入另一个版本之前，使用 `.noConflict()`函数，将之前的版本“让渡”(之前的版本不再占用这个函数)，并将旧版本的对象返回，用于保存到另一个单词里。
        `let $1_12_4 = $.noConflict()`



###  jQuery 插件

 jQuery 功能比较有限，想要更复杂的特效效果，可以借助于 jQuery 插件完成。
注意: 这些插件也是依赖于 jQuery 来完成的，所以必须要先引入 jQuery 文件，因此也称为 jQuery 插件。
​ jQuery 插件常用的网站：

1.  jQuery 插件库 http://www.jq22.com/
2.  jQuery 之家 http://www.htmleaf.com/  
     jQuery 插件使用步骤：
3.  引入相关文件。（jQuery 文件 和 插件文件）
4.  复制相关 html、css、js (调用插件)。
    jQuery 插件演示：
5.  瀑布流
6.  图片懒加载（图片使用延迟加载在可提高网页下载速度。它也能帮助减轻服务器负载）
    当我们页面滑动到可视区域，再显示图片。
    我们使用 jquery 插件库 EasyLazyload。 注意，此时的 js 引入文件和 js 调用必须写到 DOM 元素（图片）最后面
7.  全屏滚动（fullpage.js）
    gitHub： https://github.com/alvarotrigo/fullPage.js
    中文翻译网站： http://www.dowebok.com/demo/2014/77/
		
### bootstrap

https://v3.bootcss.com/components/#wells
bootstrap JS 插件：
bootstrap 框架也是依赖于 jQuery 开发的，因此里面的 js 插用 ，也必须引入 jQuery 文件。
还要引入 css