# 微信小程序

## 微信小程序 - 简介

- 概念：
  - 是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或搜一下即可打开应用
  - 如：跳一跳，粤省事，深i您，乘车码....
  - 总结：移动端的一个应用
- 同类产品：
  - 原生App： 
    - 如：手机淘宝 & 手机京东 & 微信 & 抖音...
  - WebApp： 
    - 国内缺少比较大众的应用
  - 微信小程序： 
    - 如：跳一跳，粤省事，深i您，乘车码....
- 对比分析：
  - 原生App 
    - 特点：直接运行在移动设备上
    - 优点：运行流畅，功能强大，用户体验好
    - 缺点： 
      - 兼容平台（安卓、IOS、鸿蒙） 
        - 开发成本高
      - 兼容机型（华为、小米、苹果...）
  - WebApp 
    - 特点：使用 web技术（html、css、js）开发应用，运行在移动设备的浏览器中
    - 优点：无需考虑兼容性 
      - 一套代码，可以在多个平台中运行
      - 开发成本低
    - 缺点：运行速度一般，功能欠缺，用户体差
  - 小程序 
    - 特点：直接运行在微信中
    - 优点： 
      - 无需要考虑兼容性
      - 运行流畅，功能强大
      - 学习成本低（与 vue 极其相似！！）

### 微信小程序 - 特点和应用场景

- 特点： 
  - 微信小程序是运行在微信这个原生应用里面的
  - 轻便、应用方便
  - 无需下载，用完即走
- 应用场景： 
  - 适合生活服务类线下商铺以及非刚需低频应用的转换
  - 大型网络游戏（从体积和性能角度不适合做）
  - 竞品类的应用（淘宝、天猫）
  - 应用粘性比较高的产品（抖音、快手）

### 微信小程序 - 寻找开发文档

**说明**

- 作为一个初学者，我们如何去了解小程序呢？
- 最直接的方式是通过文档，文档如何查找

**步骤**

- 百度搜索：微信公众平台https://mp.weixin.qq.com/
- 进入到微信公众平台的官网，找到小程序
- 点击小程序文档就OK了：https://developers.weixin.qq.com/miniprogram/dev/framework/

### 微信小程序 - 开发流程

> 开发流程：https://mp.weixin.qq.com/cgi-bin/wx?token=&lang=zh_CN

![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/image-20220502025622840.png)

- 准备工作
  - 注册帐号
  - 完善信息
  - 安装开发者工具
- **开发小程序**
- 发布小程序
  - 审核
  - 发布

准备工作 - 注册帐号&完善信息

> 注册账号：https://mp.weixin.qq.com/wxopen/waregister?action=step1

- **1.0 填写账号信息**

  - 邮箱不能是注册过订阅号和服务号，也不能被个人微信绑定
  - 如果提示被占用，重新注册一下

  ![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/image-20220502030149922.png)

- **2.0 邮箱激活**

  ![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/image-20220502030528914.png)

- **3.0 信息登记**

  - 学习阶段使用**个人类型**的就行，其他类型需要认证

  - 填写真实的姓名，身份证号码，手机号码

  - 微信扫码后，该**微信账号就是小程序的管理员**

    ![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/image-20220502031000840.png)

- **4.0 小程序信息完善**

  - 注意点： 
    - 小程序名字不能重复
    - 头像保持正常
    - 服务类目不要选择游戏

  ![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/image-20220502031304772.png)

![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/image-20220502031530005.png)

- **5.0 找到你的AppID**

  - 开发 - 开发管理 - 开发设置 - AppID

  ![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/image-20220502031715623.png)

**注意点：**

- 将得到 AppID 复制出来放到桌面上的一个文件中，以后要经常用到
- 注册帐号时，不要使用已经注册过的邮箱

### 准备工作 - 安装开发者工具及设置

**说明**

- 小程序的开发不再使用 vscode 了
- 小程序有自己专业的开发工具：微信开发者工具

**下载并安装**

- 1.0 下载安装微信开发者工具（稳定版） 
  - 下载地址：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
- 2.0 双击安装

**相关设置**

- 1.0 设置外观

  ![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/image-20220502032845006.png)

- 2.0 设置代理

  ![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/image-20220502032940338.png)

### 工具使用 - 创建第一个小程序项目

- 1.0 扫码登录微信开发者工具

  ![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/image-20220502033853701.png)

- 2.0 创建存放代码的文件夹

- 3.0 创建新建项目

  ![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/image-20220502034923531.png)

- 4.0 预览项目

  - 通过模拟器查看项目效果
  - 通过预览查看项目效果

### 工具使用 - 熟悉开发者工具

> 工具介绍：[https://developers.weixin.qq.com/miniprogram/dev/devtools/page.html#%E5%90%AF%E5%8A%A8%E9%A1%B5](https://developers.weixin.qq.com/miniprogram/dev/devtools/page.html#启动页)

![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/1594955165213.png)

- 菜单栏
- 工具栏 
  - 编辑器，模拟器，调试器，点击是否显示对应模块
  - 编译：手动编译
  - 预览：点击出现二维码，手机扫码，就可以在手机微信里面查看效果
- 编辑器 
  - 相当于是vscode, 快捷键和vscode完全一致
  - 左侧是项目结构，右侧是编辑文件
  - 有git功能，好用
- 调试器 
  - wxml是结构
  - console是打印
  - sources查看源码，方便打断点调试
  - network查看请求
  - storage存储
  - 终端和vscode一致
- 模拟器

## 项目结构 - 结构分析

![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/image-20220502040514648.png)

**pages**

- 用来存放所有小程序的页面

**app.js**

- 小程序项目的入口文件

**app.json**

- 小程序项目的全局配置文件

**app.wxss**

- 小程序项目的全局样式文件

**project.config.json**

- 小程序项目的配置文件

**project.private.config.json**

- 小程序项目的私有配置文件，优先级高于**`project.config.json`**

**sitmap.json**

- 用来配置小程序级其页面是否允许被微信索引

**注意点：**

- 开发常用到的只有：`pages & app.json & app.wxss`

### 项目结构 - 页面的组成

**说明**

- 一个正常的 html 页面由三个部分组成： 
  - html：书写页面结构
  - css：书写页面样式
  - js：书写页面逻辑
- 一个正常的小程序页面由四个部分组件 
  - .wxml：当前页面的模板结构文件
  - .wxss：当前页面的样式文件
  - .js：当前页面的脚本文件，用来处理页面的逻辑
  - .json：当前页面的配置文件（配置窗口的外观、表现等）

**.wxml**

- WXML（WeiXin Markup Language）是小程序框架设计的一套标签语言，用来构建小程序页面的结构，其作用类似于网页开发中的 HTML
- WXML 与 HTML 的区别 
  - 标签名称不同： 
    - HTML：div，span，img，a（HTML 称呼他们为：标签）
    - WXML：view，text，image，navigator（WXML 中称呼他们为：组件）
  - 属性节点不同： 
    - HTML：<a href="#">超链接</a>
    - WXML：<navigator url="/pages/home/index">超链接</navigator>
  - 提供了类似于 Vue 中的模板语法： 
    - 数据绑定：{{}}
    - 列表渲染：wx:for
    - 条件渲染：wx:if

**.wxss**

- WXSS（WeiXin Style Sheets）是一套样式语言，用于描述WXML的组件样式，类似于网页开发中的 CSS
- WXSS 与 CSS 的区别 
  - 新增了 rpx 尺寸单位 
    - CSS 中需要手动进行像素单位换算，例如 rem
    - WXSS 在底层支持新的尺寸单位 rpx，在不同大小的屏幕上小程序会自动进行换算
  - 提供了全局的样式和局部样式 
    - 项目根目录中的 app.wxss 会作用于所有小程序页面
    - 局部页面中的 .wxss 样式仅对当前页面生效
  - WXSS 仅支持部分 CSS 选择器 
    - .class 和 #id
    - element
    - 并集选择器、后代选择器
    - ::after 和 ::before 等伪类选择器

**.js**

- js （javascript）一个项目仅仅提供界面展示是不够的，在小程序中，我们能过 .js 文件处理用户的逻辑操作
- 与我们之前使用的 js 完全一样

### 项目结构 - 创建小程序页面

**说明**

- 创建小程序页面需要使用到小程序中的一个文件：`app.json`

**创建小程序页面**

- 只需要在 app.json -> pages 中新增页面的存放路径，小程序开发者工具会自动帮我们创建对应的页面文件

**修改项目首页**

- 只需要调整 app.json -> pages 数组中页面路径的前后顺序，即可修改项目的首页
- 小程序会把排在第一位的页面，当作项目首页进行渲染



## 常用组件

### 常用组件 - view

> 组件文档：https://developers.weixin.qq.com/miniprogram/dev/component/

**view**

- 容器组件，相当于 div 标签，是块级元素

```html
<view class="container">
  <view>a</view>
  <view>b</view>
  <view>c</view>
</view>
.container {
  display: flex;
  justify-content: space-around;
}
.container view {
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
}

.container :nth-child(1) {
  background-color: lightgreen;
}

.container :nth-child(2) {
  background-color: lightblue;
}

.container :nth-child(3) {
  background-color: lightgrey;
}
```

### 常用组件 - text & rich-text

**text**

- 用来显示文本，相当于是span标签，是行内元素

**rich-text**

- 用来将 HTML 字符串渲染为对应的 UI 结构

```html
<rich-text nodes="<h1 style='color: red'>我是一个 h1</h1>"></rich-text>
```

### 常用组件 - button

**button**

- 按钮组件
- 功能比 HTML 中 button 按钮丰富
- 通过 open-type 属性可以调用微信提供的各种功能（客服、转发、获取用户授权、获取用户信息等）

```html
<view>----------通过 type 指定按钮类型-----------</view>
<button>默认按钮</button>
<button type="primary">主色调按钮</button>
<button type="warn">警告按钮</button>
<view>----------通过 size 指定按钮尺寸 -----------</view>
<button size="mini">默认按钮</button>
<button size="mini" type="primary">主色调按钮</button>
<button size="mini" type="warn">警告按钮</button>
<view>------------- plain 镂空按钮 --------------</view>
<button size="mini">默认按钮</button>
<button size="mini" type="primary" plain>主色调按钮</button>
<button size="mini" type="warn" plain>警告按钮</button>
```

### 常用组件 - image

**image**

- 图片组件
- 默认有宽和高
- mode 属性的取值：

| 取值        | 作用                                                         |
| ----------- | ------------------------------------------------------------ |
| scaleToFill | 缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素 |
| aspectFit   | 缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。 |
| aspectFill  | 缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。 |
| widthFix    | 缩放模式，宽度不变，高度自动变化，保持原图宽高比不变         |
| heightFix   | 缩放模式，高度不变，宽度自动变化，保持原图宽高比不变         |

**代码**

```html
<image></image>
<image src="/images/1.jpg" mode="aspectFill"></image>
image {
    border: 1px solid red;
}
```

## 语法

### 语法 - 数据绑定

**说明**

- 小程序与 vue 一样，也可以用指令来操作 dom：https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/data.html

**数据绑定**

- 语法：数据绑定使用 Mustache 语法（双大括号）将变量包起来 **{{}}**
- 应用： 
  - 文本渲染

```html
<text>{{msg}}</text>
- 属性绑定
<image src="{{imgUrl}}"></image>
- 三元素表达式
<text>{{gender?'男':'女'}}</text>
```

### 语法 - 条件判断if

**wx:if**

- 语法： 
  - wx:if="{{ 表达式 }}" 可以用来判断结构是否需要被渲染
  - wx:if 和 wx:else 为固定语法，可以配合使用
  - 可以与 block 标签配合使用，来达到同时控制多个元素的显示与隐藏 
    - block 并不是一个组件，它只是一个包裹性质的容器，不会在页面中做任何渲染

```html
<!-- 条件判断{{}}
如果条件满足就展示对应的dom -->
<view wx:if="{{isHandsome}}">很帅</view>
<view wx:else>丑B</view>
```

### 语法 - 条件判断hidden

**hidden**

- 小程序中，直接使用 hidden="{{ 表达式 }}"也能控制元素的显示与隐藏

```html
<view hidden="{{ condition }}">条件为 ture 隐藏，为 false 显示</view>
注意点： hidden 不能配合 block 来使用
```

- 与 if 的区别： 
  - wx:if 以动态创建和移除元素的方式，控制元素的显示与隐藏
  - hidden 以切换样式的方式，控制元素的显示与隐藏

### 语法 - 列表渲染

**列表渲染**

- 通过 wx:for 可以根据指定的数组，循环渲染重复的组件结构 
  - wx:for 是固定写法，默认的元素别名item，索引别名index
- wx:for-item可以指定 item 别名，wx:for-index 可以指定 index 别名
- wx:key 可以给渲染出来的列表项指定唯一 key 值，从而提高渲染效率

```html
<view wx:for="{{movieList}}">{{item}}--{{index}}</view>
```

## 事件绑定

### 事件绑定 - 简介

**概念**：

- 事件是渲染层到逻辑层的通讯方式。通过事件可以将用户在渲染层产生的行为，反馈到逻辑层中，进行业务处理。

**常用事件**

| 类型   | 绑定方式                  | 事件描述                                          |
| ------ | ------------------------- | ------------------------------------------------- |
| tap    | bindtap 或 bind:tap       | 手指点触摸后马上离开，类似于 HTML 中的 click 事件 |
| input  | bindinput 或 bind:input   | 文本框中输入事件                                  |
| change | bindchange 或 bind:change | 状态改变时触发                                    |

### 事件绑定 - tap 事件

**注册事件**

- 通过 bindtap 绑定事件

```html
<button bindtap="fn">点我呀</button>
```

- 事件处理方法声明在和data平级

```JavaScript
Page({
    data: {
        num: 1
    }，
  fn (){
       console.log('被点了') 
  }
})
```

### 事件绑定 - 修改 data 中的数据

**修改 data 中的数据**

- 通过this.setData(dataObject) 方法，可以给页面 data 中的数据重新赋值

```JavaScript
Page({
    data: {
        num: 1,
    },
    changeNum () {
        this.setData({
            num: this.data.num + 1
        })
    }
})
```

**注意点**

- 小程序中使用 data 中的数据需要通过：` this.data.xx`
- 修改数据后需要有响应式效果，要通过 `this.setData()`

### 事件绑定 - input 事件

**注册事件**

- 通过 bindinput 注册事件

```html
<input bindinput="inputHandler" />
```

- 事件处理方法声明在和data平级

```JavaScript
Page({
    data: {
        num: 1,
    },
    inputHandler (e) {
        // e.detail.value 是变化过后，文本框中的值
    }
})
```



---

## 组件 - 轮播图组件

> 文档链接：https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html

**使用组件**

- 找到示例代码，先运行起来
- 根据你的需求，添加相应属性即可

```html
<view>轮播图组件的学习</view>
<!-- 
  指示点：indicator-dots
  自动轮播：autoplay
  轮播间隔：interval
  使用衔接动画：circular
  动画的时长：duration
 -->
<swiper class="swiper" indicator-dots autoplay interval="2000" circular duration="200">
  <swiper-item>
    <view class="a">a</view>
  </swiper-item>
  <swiper-item>
    <view class="b">b</view>
  </swiper-item>
  <swiper-item>
    <view class="c">c</view>
  </swiper-item>
</swiper>
```

**注意点：**

- 如果属性是boolean类型，只要属性没有值的，值就为true. 这个是w3c规范。

## 组件 - navigator

> navigator: [传送门](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html)

**作用：**

- 跳转到其他页面
- 类似于 html  中的 a 标签

**用法：**

- 在结构中声明跳转页面，可以传参

```html
<!-- url后面是跳转的路径，推荐使用绝对路径,“/”+ app.json找到你要跳转的页面路径 -->
<navigator url="/pages/index/index?参数名1=值&参数名2=值">跳转到首页</navigator>
```

- 目标页面上获取传参

```JavaScript
Page({
  // 相当于 vue 中生命周期钩子函数中的： created
    onLoad(options){
        console.log(options.参数名1) //可以获取到参数名1对应的值
    }
})
```

**注意点：**

- navigator url可以传相对路径或者绝对路径，推荐使用绝对路径。要以"'/', 路径最后没有扩展名`/pages/index/index.wxml`是错误的
- 在模拟器页面参数这个位置，可以看到跳转传参，方便调试

![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/1597719379166.png)

## 导航方式 - 编程式导航

**说明**

- 常见的导航方式有两种： 
  - 声明式导航：直接声明在结构代码中，点击可以跳转
  - 编程式导航：通过编写 js 代码，来实现跳转

**vue路由**

- 声明式导航

```html
// 声明在 html 结构中的
<router-link path="/sing"></router-link>
```

- 编程式导航

```JavaScript
// 写在 js 中
this.$router.push('/sing')
```

**小程序**

- 声明式导航

```html
<!-- url后面是跳转的路径，推荐使用绝对路径,“/”+ app.json找到你要跳转的页面路径 -->
<navigator url="/pages/index/index?参数名1=值&参数名2=值">跳转到首页</navigator>
```

- 编程式导航

```JavaScript
wx.navigateTo({
    url: '/pages/index/index?name=joven',
})
```

## 导航方式 - 页面栈

**说明**

- 小程序在跳转过程中，会将跳转前的页面的也保存起来，保存的位置叫做页面栈

**查看页面栈**

![img](https://secure2.wostatic.cn/static/sAg5R6bZyginjmeLaYdJqX/image.png)

## 语法 - 事件方法传参

**需求：**

1. 有一个数组，遍历显示到了页面上
2. 给每个遍历出来的元素添加一个点击事件
3. 点击时，要显示当前点击的元素中的内容

**代码**

- 在事件注册所在的dom上

```html
<button bind事件名="事件处理方法" data-参数名="{{ 值 }}">点我去首页</button>
```

- 在事件处理方法里面获取传参:

```JavaScript
toIndex(event){
   event.currentTarget.dataset.参数 //获取事件处理方法的传参的值
}
```

**注意点：**

- 注册事件`bind事件名="事件处理方法，不能在行内写逻辑"`
- `data-` 是固定写法
- `currentTarget.dataset` 是固定写法

## 语法 - 事件对象的target与currentTarget（了解）

> 面试题

- currentTarget：始终表示注册事件所在的dom 元素
- target：是指事件源所在的dom（触发事件的 dom）

![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/1595058844363.png)

**注意点**：

- 小程序也是有事件冒泡的
- 如果始终在注册事件所在的dom上，传参的话，直接取currentTarget

## wxss - 与 css 的区别

**说明**

- WXSS 具有 CSS 大部分特性，同时， WXSS 还对 CSS 进行了扩充以及修改，以适应微信小程序的开发
- 扩展的特性有： 
  - rpx 尺寸单位
  - @import 样式导入

## wxss - rpx

**实现原理：**

- 鉴于不同设备屏幕的大小不同，为了实现屏幕的自动适配
- rpx 把所有设备的屏幕在宽度上等分为750份（即：当前屏幕的总宽度为 750px）
- 当小程序运行在不同设备上时，会自动将 rpx 的样式单位换算成对应的像素单位来渲染，从而实现屏幕适配

**表现**：

- 在较小的设备上：1rpx 所代表的宽度较小
- 在较大的设备上：1rpx 所代表的宽度较大

**rpx 与 px 之间的单位换算：**

- 在 iphone6 上，屏幕宽度为 375px，共有750个物理像素，等分为 750rpx。则： 
  - 750rpx = 375px = 750物理像素
  - 1rpx = 0.5px = 1 物理像素

**总结：** 官方建议，开发微信小程序时，设计师可以用 iPhone6 宽度 作为视觉稿的标准。

## wxss - import

**作用：**

- 可以在 wxss 中导入外联样式表

**语法：**

- `@import "common.wxss";`

## 案例 - 克鲁塞德战记 - 首页

**作业内容**

- 克鲁塞德战记

![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/1593220532354.png)

**思路**

- 先结构后样式
- 逻辑 
  - 导入数据
  - 引入数据，作为data属性，然后wx:for列表渲染

**代码**

- 完成结构

```HTML
<view class="box">
  <view class="item" wx:for="11111111" wx:key="index">
    <image src="http://p5.qhimg.com/dr/72__/t01e7b45b10c504fa11.png">
    </image>
    <view>神女卑弥呼</view>
  </view>
</view>
```

- 设置样式

```CSS
.box {
  display: flex;
  flex-wrap: wrap;
}

.box .item {
  width: 33.33%;
  text-align: center;
  margin-bottom: 20rpx;
  font-size: 14px;
}

.box .item image {
  width: 160rpx;
  height: 160rpx;
  border-radius: 10rpx;
}

.box .item view {
  width: 70%;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

- 导入数据 
  - 在项目的根目录下创建一个文件夹：`data`
  - 将 `heroList.js`放入到 `data `中
  - 修改 `heroList.js`：添加一个 `export default []`
  - 在 `index.js`中导入

```JavaScript
import heroList from '../../data/heroList.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    heroList
  }
}
```

- 渲染数据

```HTML
<view class="box">
  <view class="item" wx:for="{{ heroList }}" wx:key="index">
    <image src="{{ item.icon }}">
    </image>
    <view>{{ item.heroName }}</view>
  </view>
</view>
```

## 案例 - 克鲁赛德战记案例-详情页

![img](https://secure2.wostatic.cn/static/4HRTDPGEeSu2h5WEH4SXeM/image.png)

**需求：**

- 点击列表其中一个英雄时，跳转到英雄详情页，显示该英雄的信息

**步骤：**

- 给英雄结构添加一个点击事件：

```HTML
<view class="box">
  <view **bindtap="toDetail" data-name="{{ item.heroName }}"** class="item" wx:for="{{ heroList }}" wx:key="index">
    <image src="{{ item.icon }}">
    </image>
    <view>{{ item.heroName }}</view>
  </view>
</view>
  
  // 跳转到详情页面
  toDetail(e) {
    let name = e.currentTarget.dataset.name
    wx.navigateTo({
      url: `/pages/detail/index?name=${name}`
    })
  },
```

- 在详情页面中接收数据

```JavaScript
import heroList from '../../data/heroList.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    heroList,
    heroObj: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let name = options.name
    // 得到英雄的完整信息
    const newObj = this.data.heroList.find(item => {
      return item.heroName === name
    })
    this.setData({
      heroObj: newObj
    })
  }
}
```

- 渲染详情

```HTML
<view class="hero">
  <view class="img">
    <image src="{{ heroObj.icon }}"></image>
  </view>
  <view class="name">英雄名称：{{ heroObj.heroName }}</view>
  <view class="skill">英雄技能：{{ heroObj.skill }}</view>
</view>
```

- 美化结构

```CSS
.hero {
  width: 80%;
  background-color: #ddd;
  margin: 0 auto;
}
.img {
  text-align: center;
  padding-top: 40rpx;
  padding-bottom: 40rpx;
}
.img image {
  width: 400rpx;
  height: 400rpx;
}
.name, .skill {
  padding-left: 100rpx;
  line-height: 40rpx;
}
.skill {
  padding-bottom: 50rpx;
}
```

**注意点：**

- navigator组件有包裹作用，和view一样的
- appData可以看到不同页面的data属性

![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/1597720048936.png)

## 案例 - 项目的发布

**说明**

- 我们的项目已经搞定，我希望其它人也能够通过微信小程序访问到我写的项目，可以将项目进行发布

**发布的流程**

1. 将代码上传到后台成为开发版本

   ![img](https://secure2.wostatic.cn/static/iowWrLzkJCHVBsCdGKaJ4J/image.png)

   ![img](https://secure2.wostatic.cn/static/p1QaEgPPTMPJFavxCAY4KE/image.png)

![img](https://secure2.wostatic.cn/static/ciNLke2mEodx7PoQAVwrxH/image.png)

1. 登录后台，查看开发版本

![img](https://secure2.wostatic.cn/static/rPCmUeKYAqSZ41Myqv5kwt/image.png)

1. 提交审核，进行到审核阶段

![img](https://secure2.wostatic.cn/static/wJMgU4FkektVPq9xafkgPn/image.png)

1. 查看审核版本

![img](https://secure2.wostatic.cn/static/qWwvLJS2DSDWGHrBH1garT/image.png)

1. 等待审核通过之后，点击发布按钮，就发布成功了

![img](https://secure2.wostatic.cn/static/9zhmWq9VrwmjHY9JLyyNpE/image.png)

1. 发布成功

![img](https://secure2.wostatic.cn/static/mRP2LqwC792vJdwPNitfPm/image.png)

1. 访问小程序

- 访问小程序
- 小程序的二维码可以去：头像 → 昵称 → 基本设置 → 小程序码及线下物料下载 → 下载
- 用微信扫码，就可以访问项目了

## 全局配置 - 简介

**说明**

- 小程序根目录下的 app.json 文件是小程序的全局配置文件。常用配置项有： 
  - pages：记录当前小程序所有页面的存放路径
  - window：全局设置小程序窗口的外观
  - tabBar：设置小程序底部的 tabBar 效果
  - style：是否启用新版的组件样式

## window - 相关配置

![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/image-20220503045804726.png)

**组成**

- navigationBar：导航
- background：背景
- page：页面

**常用配置**

| 属性                         | 类型     | 默认值  | 描述                                                         |
| ---------------------------- | -------- | ------- | ------------------------------------------------------------ |
| navigationBarBackgroundColor | HexColor | #000000 | 导航栏背景颜色，如 `#000000`                                 |
| navigationBarTextStyle       | string   | white   | 导航栏标题颜色，仅支持 `black` / `white`                     |
| navigationBarTitleText       | string   |         | 导航栏标题文字内容                                           |
| backgroundColor              | HexColor | #ffffff | 窗口的背景色                                                 |
| backgroundTextStyle          | string   | dark    | 下拉 loading 的样式，仅支持 `dark` / `light`                 |
| enablePullDownRefresh        | boolean  | false   | 是否开启全局的下拉刷新。 详见 [Page.onPullDownRefresh](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onpulldownrefresh) |
| onReachBottomDistance        | number   | 50      | 页面上拉触底事件触发时距页面底部距离，单位为 px。 详见 [Page.onReachBottom](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onreachbottom) |

## tabBar - 相关配置

**说明**

- tabBar 是移动端应用的视觉效果，用于实现多页面的快速切换
- tabBar 中只能配置最少 2个，最多5个 tab 页

**配置语法**

```JavaScript
  "tabBar": {
    "list": [
      {
        "pagePath": "pages/tab01/index", // 设置 tabBar 跳转路径
        "text": "首页", // tabBar 的标题
        "iconPath": "/tabs/icon_home@3x.png", // 默认图标
        "selectedIconPath": "/tabs/icon_home_active@3x.png" // 选中的图标
      },
      {
        "pagePath": "pages/tab02/index",
        "text": "日志",
        "iconPath": "/tabs/icon_category@3x.png",
        "selectedIconPath": "/tabs/icon_category_active@3x.png"
      }
    ]
  },
 
```

## tabBar - 其它配置

![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/image-20220503050715103.png)

- backgroundColor：背景颜色
- borderStyle：tabBar 上边框颜色
- selectedColor：tab 上的文字选中时的颜色
- color：tab 上文字的默认颜色
- list： 
  - selectedIconPath：选中时的图片路径
  - iconPath：未选中时的图片路径

## 网络请求 - 简介

**说明**

- 小程序中也可以发送网络请求
- 但是出于安全性的考虑，小程序官方对数据接口请求有如下限制： 
  - 只能请求 HTTPS 类型的接口
  - 必须将接口的域名添加到信任列表中（配置合法域名）

**配置合法域名**

- 登录微信小程序管理后
- 找到：开发 -> 开发管理 -> 开发设置 -> 服务器域名
- 再修改 request 合法域名即可
- 配置： [https://www.escook.cn](https://www.excook.cn)

## 网络请求 - 发送请求

**说明**

- 调用微信 小程序提供的 wx.request() 方法，可以发起网络请求

**GET请求**

- 语法：

```JavaScript
wx.request({
    url: 'https://www.escook.cn/api/get',
    method: 'GET',
    data: {
        name: 'xjj',
        age: 18
    },
    success: (res) => {
        console.log(res)
    }
})
```

**POST请求**

- 语法

```JavaScript
wx.request({
    url: 'https://www.escook.cn/api/post',
    method: 'POST',
    data: {
        name: 'xjj',
        age: 18
    },
    success: (res) => {
        console.log(res)
    }
})
```

**补充**

- 如果接口的请求仅仅只是临时发起，可以在详情 -> 项目设置中去勾选：不校验合法域名 
  - 设置之后，仅仅只是在开发阶段能够使用，将来项目发布之后还是不能请求
- 小程序中不存在跨域情况 
  - 跨域是浏览器的行为，小程序发送请求的行为是微信客户端发送的
- 小程序中的网络请求不能称呼为发送 ajax 请求 
  - ajax 请求是通过XMLHttpRequest 对象发送的，而小程序中是通过微信客户端发送的

## 函数 - onload

**作用**：是小程序中的生命周期函数，相当于 vue 中的 created

**应用**：

- 初始化数据
- 发送网络请求
- 接收路径参数

## 案例 - 本地生活

**效果图**

![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/image-20220503064040387.png)

**接口**

- 轮播图接口：https://www.escook.cn/slides
- 九宫格接口：https://www.escook.cn/categories

**步骤**

- 新建项目并梳理项目结构
- 配置导航栏效果
- 配置 tabBar 效果
- 实现轮播图效果
- 实现九宫格效果
- 实现结构布局

## 开发者工具 - 编译模式的设置

**作用**：

- 设置模拟器的默认首页

**步骤**：

- 点击工具栏编译模式，添加编译模式，弹框
- 弹框设置 
  - 必须设置启动页面
  - 需要在app.json里面pages数组里面添加页面路径，再点击启动页面**右侧箭头**位置，下拉找到你的页面路径

![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/1597723454791.png)

![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/1597723481982.png)

**注意点：**

- 启动参数只能传字符串，没有动态参数。



---

## API - 加载提示框

**说明**

- 小程序中自带提示框 api，我们可直接调用

**api：**

- 显示提示框

```JavaScript
wx.showLoading({ title: '提示文本' })
```

- 隐藏提示框

```text
wx.hideLoading()
```

**总结**

- 在小程序类似于这样的 API 还有很多，大家可以自己动手试试
- 文档地址：https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html

## 准备工作

**知识点一**

- 如果页面不属于tabBar，在页面的底部没有 tabBar 结构

**知识点二**

- 编译模式： 
  - 可以根据自己的需要，设置一个编译模式： 
    - 可以帮助我们设置一个额外的启动页
    - 可以传入参数

## 导航方式 - 声明式导航

**说明**

- 在页面上声明一个 navigator 导航组件
- 通过点击 navigator 组件实现页面的跳转
- 小程序中的跳转也有分类： 
  - 跳转到 tabbar 页面
  - 跳转到普通页面

**跳转到 navbar 页面**

- 概念：tabBar 页面指的是配置为 tabBar 的页面
- 语法：

```html
<navigator url="/pages/message/index" opent-type="switchTab">跳转</navigator>
- open-type 表示跳转方式，必须为 switchTab
```

**跳转到普通页面**

- 概念：即非 tabBar 页面
- 语法：

```html
<navigator url="/pages/message/index" opent-type="navigate">跳转</navigator>
- open-type 表示跳转方式，可以设置为 navigate，也可以省略
```

## 导航方式 - 编程式导航

**说明**

- 编程式导航也要掌握两点： 
  - 跳转到tabBar 页面
  - 跳转到普通页面

**跳转到 tabBar 页面**

```JavaScript
wx.switchTab(Object object)
```

| 属性     | 类型     | 是否必须 | 说明                                         |
| -------- | -------- | -------- | -------------------------------------------- |
| url      | string   | 是       | 需要跳转的 tabBar 页面的路径，路径不能带参数 |
| success  | function | 否       | 接口调用成功的回调函数                       |
| fail     | function | 否       | 接口调用失败的回调函数                       |
| complete | function | 否       | 接口调用结束的回调函数（成功，失败都会执行） |

**跳转到普通页面**

```JavaScript
wx.navigateTo(Object object)
```

| 属性     | 类型     | 是否必须 | 说明                                         |
| -------- | -------- | -------- | -------------------------------------------- |
| url      | string   | 是       | 需要跳转的 tabBar 页面的路径，路径不能带参数 |
| success  | function | 否       | 接口调用成功的回调函数                       |
| fail     | function | 否       | 接口调用失败的回调函数                       |
| complete | function | 否       | 接口调用结束的回调函数（成功，失败都会执行） |

**其它方法：后退导航**

```JavaScript
wx.navigateBack()
```

## 导航方式 - 总结

**说明**

- 跳转两个方法： 
  - 跳转到 tabBar 页面：wx.switchTab()
  - 跳转到普通页面： wx.navigateTo()

**switchTab**

- 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
- 路径后面不能带参数

**navigateTo**

- 保留当前页面，跳转到应用内的某个页面
- 但是不能跳到 tabbar 页面
- 小程序中页面栈最多十层

## 下拉刷新

**说明**

- 下拉刷新是移动端的专有名称，指的是通过屏幕上的下拉滑动操作，从而重新加载页面数据的行为。
- 小程序中下拉刷新分为两种下拉： 
  - 全局开启下拉刷新： 
    - 所以页面都会有下拉刷新效果
  - 局部开启下拉刷新 
    - 只有设置的页面有下拉刷新效果
  - 一般局部下拉刷新用的多

**局部下拉步骤**

- 1）在页面文件中设置开启下拉刷新的属性 & 设置下拉背景的样式

```JavaScript
{
  "usingComponents": {},
  "enablePullDownRefresh": true,
  "backgroundColor": "#CCC",
  "backgroundTextStyle": "dark"
}
```

- 2）通过事件： `onPullDownRefresh`监听页面的下拉刷新事件

```JavaScript
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },
```

- 3）通过方法：`stopPullDownRefresh` 关闭下拉效果

```JavaScript
wx.stopPullDownRefresh()
```

## 下拉刷新 - 练习

**需求**

- 页面有一个数字
- 点击按钮数据会加一
- 下拉刷新后，数字重置为 0

**步骤**

1. 定义数字 & 加一的方法

```JavaScript
// pages/05test/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1
  },
  // 数字加一
  addOne() {
    this.setData({
      num: this.data.num + 1
    })
  },
})
```

1. 完成数据的渲染

```HTML
<view>5.0 下拉刷新 - 练习</view>
<view>num: {{ num }}</view>
<button bindtap="addOne">点我加 1</button>
```

1. 完成下拉操作

   3.1 开启下拉

```JavaScript
{
  "usingComponents": {},
  "enablePullDownRefresh": true,
  "backgroundColor": "#da70b6",
  "backgroundTextStyle": "dark"
}
3.2 设置下拉逻辑
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // 重置数字
    this.setData({
      num: 0
    })
    setTimeout(() => {
      // 关闭下拉刷新结构
      wx.stopPullDownRefresh()
    }, 500);
  }
```

## 上拉触底

**说明**

- 上拉触底是移动端的专有名词，通过手指在屏幕上的上拉滑动操作，从而加载更多数据的行为。
- 小程序中的上拉触底也有两种 
  - 全局配置
  - 局部配置

**上拉触底步骤**

- 配置上拉触底的距离

```JavaScript
{
  "usingComponents": {},
  "onReachBottomDistance": 50
}
```

- 设置监听上拉触底的事件

```JavaScript
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
  },
```

## 上拉触底 - 练习1

**需求**

- 默认页面上有一个数组，长度为 15：[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
- 上拉触底之后，再添加 15个数字
- 当数组长度超过 100 时，停止添加

**步骤**

1. 在页面上定义数据

```JavaScript
  data: {
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  },
```

1. 渲染数据到页面

```HTML
<view>7.0 上拉触底 - 练习1</view>
<view class="item" wx:for="{{ arr }}" wx:key="index">
  {{ item }}
</view>
```

1. 美化结构

```CSS
.item {
  height: 100rpx;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  text-align: center;
  line-height: 100rpx;
}
```

1. 开启上拉触底

   4.1 设置上拉触底的属性

```JavaScript
{
  "usingComponents": {},
  "onReachBottomDistance": 150
}
4.2 实现上拉触底的事件
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // 判断数组的长度是否超过 100
    if (this.data.arr.length >= 100) {
      return wx.showToast({
        title: '数据加载完毕',
      })
    }
    // 原有数据的基本上再添加15个数字
    let start = this.data.arr[this.data.arr.length - 1] + 1
    // 得到一个新的数组
    let newArr = []
    for (let i = 0; i < 15; i++) {
      newArr.push(start + i)
    }
    // 将新的数组添加到原数组中
    this.setData({
      arr: [...this.data.arr, ...newArr]
    })
  }
```

## 上拉触底 - 练习2

![img](https://tuchuang-1258199118.cos.ap-nanjing.myqcloud.com/image-20220506052556263.png)

**需求**

- 接口：https://www.escook.cn/api/color
- 打开页面时，默认从服务器中请求数据
- 渲染数据到页面上
- 当上拉触底时，再次加载数据
- 加载数据时，打开加载框，加载完毕后，关闭加载框（加载框：showLoading）
- 数据正在加载时，不能再次加载（节流处理）

**代码**

1. 打开页面时，默认从服务器中请求数据

```JavaScript
// pages/08test/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 数据源
    list: []
  },
  getColor() {
    wx.request({
      url: 'https://www.escook.cn/api/color',
      success: res => {
        // 保存数据源
        this.setData({
          list: [...this.data.list, ...res.data.data]
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getColor()
  }
})
```

1. 渲染数据到页面上

```HTML
<view>8.0 - 上拉触底 - 练习2</view>
<view class="item" style="background-color: rgb({{ item }});" wx:for="{{ list }}" wx:key="index">
  {{ item }}
</view>
```

1. 美化结构

```CSS
/* pages/08test/index.wxss */
.item {
  height: 100px;
  line-height: 100px;
  text-align: center;
  color: #fff;
}
```

1. 当上拉触底时，再次加载数据 
   1. 配置上拉触底

```JSON
{
  "usingComponents": {},
  "onReachBottomDistance": 50
}
1. 完成逻辑代码
  onReachBottom() {
    // 再次加载数据
    this.getColor()
  }
```

1. 加载数据时，打开加载框，加载完毕后，关闭加载框（加载框：showLoading）

```JavaScript
  getColor() {
   ** // 打开加载框
    wx.showLoading({
      title: '数据加载中'
    })**
    // 设置  isLoading 为 true
    this.data.isLoading = true
    wx.request({
      url: 'https://www.escook.cn/api/color',
      success: res => {
        // 保存数据源
        this.setData({
          list: [...this.data.list, ...res.data.data]
        })
      },
**      complete: () => {
        // 关闭加载框
        wx.hideLoading()
      }**
    })
  },
```

1. 数据正在加载时，不能再次加载（节流处理）

```JavaScript
data: {
    // 数据源
    list: [],
**    // 记录是否正在加载
    isLoading: false**
  },
  getColor() {
**    // 判断是否正在加载
    if (this.data.isLoading) return**
    // 打开加载框
    wx.showLoading({
      title: '数据加载中'
    })
**    // 设置  isLoading 为 true
    this.data.isLoading = true**
    wx.request({
      url: 'https://www.escook.cn/api/color',
      success: res => {
        // 保存数据源
        this.setData({
          list: [...this.data.list, ...res.data.data]
        })
      },
      complete: () => {
        // 关闭加载框
        wx.hideLoading()
**        //  设置  isLoading 为 false
        this.data.isLoading = false**
      }
    })
  }
```

## 生命周期 - 基本概念

**说明**

- 生命周期（Life Cycle） 是指一个对象从创建 -> 运行 -> 销毁的整个过程，强调的是一个时间段。
- 如： 
  - 一个人出生，表示这个人生命周期的开始
  - 一个人离世，表示这个人生命周期的结束
  - 这间距的过程，就是一个人的生命周期
- 小程序 
  - 小程序的启动，表示生命周期的开始
  - 小程序的关闭，表示生命周期的结束
  - 从启动到关闭这期间，就是小程序的生命周期

**小程序生命周期的分类**

- 应用生命周期 
  - 小程序从启动 -> 运行 -> 销毁的过程
- 页面生命周期 
  - 小程序的页面启动 -> 渲染 -> 销毁的过程

**注意**

- 页面的生命周期范围较小，应用程序的生命周期范围较大，应用生命周期，包括了页面生命周期

## 生命周期 - 函数

**应用生命周期**

- onLaunch： 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
- onShow：当小程序启动，或从后台进入前台显示，会触发 onShow
- onHide：当小程序从前台进入后台，会触发 onHide

**页面生命周期**

- onLoad：生命周期函数--监听页面加载，一个页面只调用1次 
  - 初始化页面数据，接收传入的参数
- onShow： 生命周期函数--监听页面显示 
  - 页面显示时会执行（每次显示都会执行）
- onReady：生命周期函数--监听页面初次渲染完成，一个页面只调用1次 
  - 初始页面结构
- onHide：生命周期函数--监听页面隐藏
- onunload：生命周期函数--监听页面卸载，一个页面只调用1次

## WXS

### WXS - 基本介绍

**说明**

- WXS（WeiXin Script）是小程序独有的一套脚本语言。结合WXML，可以构建出页面的结构，即帮助页面创建结构
- WXML 中无法调用在页面中的 .js 中定义的函数，但是， WXML 可以调用  WXS 中定义的函数。因此，小程序中 WXS 的典型应用场景是：“过滤器”
- WXS 的语法与 JS 的语法几乎是一样的

**WXS**

- 与 js 对比： 
  - 虽然 wxs 的语法类似于 js ，但是 wxs 和 js 是完全不同两种语言
  - 区别如下： 
    - 1）wxs 有自己的数据类型： 
      - number，string，boolean， object，function，array，date，regexp
    - 2）wxs 不支持类似于 ES6 及以上的语法形式 
      - 不支持：let、const、解构赋值、展开运算符、箭头函数、对象属性简写...
      - 支持：var 定义变量、普通 function 函数等类似于 ES5 的语法
    - 3）wxs 遵循 CommonJS 规范 
      - 模块导出：module.exports = {}
      - 模块导入：const xx = require()

### WXS - 使用

**内联 wxs 脚本**

- 直接在 wxml 页面中具中使用 wxs
- 步骤 
  - 1）直接在页面上创建一个标签<wxs></wxs>

```html
<wxs module="m1">
  // 定义一个需要在模块中使用的函数
  function reverseMsg(v) {
    return v.split('').reverse().join('')
  }
  // 将函数暴露出去
  module.exports.reverseMsg = reverseMsg
</wxs>
- 2）使用
<view>1.0 使用内联 wxs 脚本</view>
<view>翻转后的 msg: {{ m1.reverseMsg(msg) }}</view>
```

**外联 wxs 脚本**

- 将 wxs 代码单独封装到一个 wxs 文件中
- 步骤 
  - 1）创建并完成 wxs 文件内容

```JavaScript
module.exports = {
  reverseMsg: function (v) {
    return v.split('').reverse().join('')
  }
}
- 2）导入并使用 wxs 文件
<wxs module="m2" src="../../tools/mytools.wxs"></wxs>

<view>2.0 使用外联 wxs 脚本</view>
<view>翻转后的 msg：{{ m2.reverseMsg(msg) }}</view>
```

## 案例 - 本地生活（列表页面）- 功能分析

![img](https://secure2.wostatic.cn/static/3Y77FaWDA3CjPVRtpJfLpD/image.png)

**接口信息：**

- 路径：https://www.escook.cn/categories/:cate_id/shops
- 参数： 
  - 路径参数： 
    - cate_id：表示分类 id
  - query 参数： 
    - _page：第几页
    - _limit：页容量

**功能**

- 页面导航 
  - 跳转到列表页面
  - 动态设置页面的标题
- 渲染页面数据 
  - 请求接口得到数据
  - 渲染数据到页面上，完成结构与样式
- 添加 Loading 效果 
  - 获取数据时，打开 loading 效果
  - 数据返回后，关闭 loading 效果
- 上拉触底时加载下一页数据 
  - 触底时加载下一页数据
  - 添加节流判断
  - 判断下一页是否存在数据
- 下拉刷新列表数据 
  - 处理手机号

## 案例 - 本地生活 - 页面导航

**需求**

- 跳转到列表页面
- 动态设置页面的标题

**步骤**

1. 创建了列表页面

```JSON
  "pages": [
    "pages/home/index",
    "pages/cate/index",
    "pages/my/index",
    **"pages/detail/index"**
  ],
```

1. 给首页九宫格添加点击事件

```HTML
<!-- 九宫格区域 -->
<view class="grid">
  <view **bindtap="toDetail" data-name="{{ item.name }}" data-id="{{ item.id }}"** class="item" wx:for="{{ gridList }}" wx:key="index">
    <image src="{{ item.icon }}"></image>
    <text>{{ item.name }}</text>
  </view>
</view>
```

1. 在事件中进行跳转

```JavaScript
  // 跳转到列表页面
  toDetail(e) {
    let id = e.currentTarget.dataset.id
    let name = e.currentTarget.dataset.name
    wx.navigateTo({
      url: `/pages/detail/index?id=${id}&name=${name}`,
    })
  },
```

1. 动态设置页面的标题

```JavaScript
  data: {
    id: '',
    name: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      id: options.id,
      name: options.name
    })
    // 动态设置页面标题
    wx.setNavigationBarTitle({
      title: this.data.name
    })
  },
```

## 案例 - 本地生活 - 渲染页面数据

**需求**

- 请求接口得到数据
- 渲染数据到页面上
- 完成结构与样式

**步骤**

1. 请求接口得到数据

```JavaScript
 data: {
    id: '',
    name: '',
**    // 当前详情的数据源
    list: [],
    // 定义一个分页数据对象
    query: {
      _page: 1,
      _limit: 10
    }**
  },
**  // 获取数据源
  getList() {
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.id}/shops`,
      data: this.data.query,
      success: res => {
        this.setData({
          list: res.data
        })
      }
    })
  },**
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      id: options.id,
      name: options.name
    })
    // 动态设置页面标题
    wx.setNavigationBarTitle({
      title: this.data.name
    })
**    // 动态渲染数据
    this.getList()**
  },
```

1. 渲染数据

```HTML
<view class="box">
  <view class="item" wx:for="{{ list }}" wx:key="index">
    <view class="left">
      <image src="{{ item.images[0] }}"></image>
    </view>
    <view class="right">
      <view class="title">{{ item.name }}</view>
      <view class="phone">电话：{{ item.phone }}</view>
      <view class="address">地址：{{ item.address }}</view>
      <view class="time">营业时间：{{ item.businessHours }}</view>
    </view>
  </view>
</view>
```

1. 美化结构

```CSS
.box {
  padding: 10px;
}
.box .item {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 5px;
  display: flex;
}
.left image {
  width: 120px;
  height: 120px;
  border-radius: 5px;
  margin-right: 10px;
}
.right {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.right .title {
  font-weight: 700;
}
```

## 案例 - 本地生活 - 添加 Loading 效果

**需求**

- 获取数据时，打开 loading 效果
- 数据返回后，关闭 loading 效果、

**步骤**

1. 改造获取数据的方法

```JavaScript
 // 获取数据源
  getList() {
**    // 打开 loading 效果
    wx.showLoading({
      title: '数据加载中...',
    })**
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.id}/shops`,
      data: this.data.query,
      success: res => {
        this.setData({
          list: res.data
        })
      },
**      complete: () => {
        // 关闭 loading
        wx.hideLoading()
      }**
    })
  },
```

## 案例 - 本地生活 - 加载下一页

**需求：**

- 触底时加载下一页数据
- 添加节流判断
- 判断下一页是否存在数据

**代码**

1. 开启下拉触底

```JSON
{
  "usingComponents": {},
  "onReachBottomDistance": 50
}
```

1. 完成上拉触底事件

```JavaScript
  onReachBottom() {
    // 让页码加1
    this.setData({
      'query._page': this.data.query._page + 1
    })
    // 加载下一页数据
    this.getList()
  },
```

1. 改造方法： getList 来拼接数据源

```JavaScript
  // 获取数据源
  getList() {
    // 打开 loading 效果
    wx.showLoading({
      title: '数据加载中...',
    })
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.id}/shops`,
      data: this.data.query,
      success: res => {
        this.setData({
          list: **[...this.data.list, ...res.data]**
        })
      },
      complete: () => {
        // 关闭 loading
        wx.hideLoading()
      }
    })
  },
```

1. 添加节流判断

```JavaScript
  data: {
    id: '',
    name: '',
    // 当前详情的数据源
    list: [],
    // 定义一个分页数据对象
    query: {
      _page: 1,
      _limit: 10
    },
**    // 判断是否正在加载
    isLoading: false,**
  },
  
  // 获取数据源
  getList() {
**    // 判断是否为 true
    if (this.data.isLoading) return**
    // 打开 loading 效果
    wx.showLoading({
      title: '数据加载中...',
    })
**    // 设置 Loading 为 ture
    this.setData({
      isLoading: true
    })**
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.id}/shops`,
      data: this.data.query,
      success: res => {
        this.setData({
          list: [...this.data.list, ...res.data]
        })
      },
      complete: () => {
        // 关闭 loading
        wx.hideLoading()
 **       // 设置 Loading 为 false
        this.setData({
          isLoading: false
        })**
      }
    })
  },
```

1. 判断下一页是否存在数据

```JavaScript
  data: {
    id: '',
    name: '',
    // 当前详情的数据源
    list: [],
    // 定义一个分页数据对象
    query: {
      _page: 1,
      _limit: 10
    },
    // 判断是否正在加载
    isLoading: false,
**    // 判断是否数据源加载完毕
    isEnd: false**
  },
    // 获取数据源
  getList() {
**    // 判断数据源是否加载完毕
    if (this.data.isEnd) return wx.showToast({
      title: '数据加载完毕..',
    })**
    // 判断是否为 true
    if (this.data.isLoading) return
    // 打开 loading 效果
    wx.showLoading({
      title: '数据加载中...',
    })
    // 设置 Loading 为 ture
    this.setData({
      isLoading: true
    })
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.id}/shops`,
      data: this.data.query,
      success: res => {
       ** // 判断数据源是否加载完毕
        if (res.data.length === 0) {
          this.setData({
            isEnd: true
          })
          return
        }**
        this.setData({
          list: [...this.data.list, ...res.data]
        })
      },
      complete: () => {
        // 关闭 loading
        wx.hideLoading()
        // 设置 Loading 为 false
        this.setData({
          isLoading: false
        })
      }
    })
  },
```

## 案例 - 本地生活 - 下拉刷新列表数据

**需求**

- 下拉时更新数据

**步骤**

1. 开启下拉

```JavaScript
{
  "usingComponents": {},
  "onReachBottomDistance": 50,
**  "enablePullDownRefresh": true,
  "backgroundColor": "#ccc",
  "backgroundTextStyle": "dark"**
}
```

1. 实现下拉

```JavaScript
  /**
   * 下拉刷新
   */
  onPullDownRefresh () {
    // 重置数据源
    this.setData({
      list: [],
      query: {
        _page: 1,
        _limit: 10
      },
      isLoading: false,
      isEnd: false
    })
    // 重新请求数据
    this.getList()
  }
```

1. 处理电话号码

```JavaScript
<wxs module="m1">
  module.exports.processPhone = function (v) {
    if (v.indexOf('-') !== -1 || v.indexOf('/') !== -1) {
      return v
    } else {
      // 转换为数组
      var arr = v.split('')
      // 插入内容
      arr.splice(3, 0, '-')
      arr.splice(8, 0, '-')
      // 转为一个字符串
      return arr.join('')
    }
  }
</wxs>
```



---

## 自定义组件

### 自定义组件 - 分类

**说明**

- 在小程序中，也可以使用自定义组件封装页面结构

**组件的分类**

- 全局组件：全局注册之后，可以在任意页面中使用
- 局部组件：页面注册之后，只能在当前页面中使用

**组件的创建**

1）在项目的根目录中，创建一个文件夹：components

2）在 components 中创建一个文件夹：test

3）在 test 中，右键，新建  component

4）文件夹中会自动生成四个文件，后缀名分别为：.js、.json、.wxml 和 .wxss

**注意：**

- 创建出来的组件要注册完毕之后才能确定它是全局组件还是局部组件

### 自定义组件 - 分类 - 局部组件

**说明**

- 将组件在页面上注册，即为局部组件
- 局部组件只能当前页面中使用

**步骤**

1）在需要使用页面的 .json 文件中：

```JavaScript
{
  "usingComponents": {
    "part-test": "/components/text/text"
  }
}
```

2）在需要使用页面的 .wxml 文件中

```HTML
<part-test></part-test>
```

### 自定义组件 - 分类 - 全局组件

**说明**

- 将组件全局注册，即为全局组件
- 全局组件可以在任意页面中使用

**步骤**

1）在 app.json 中添加全局组件

```JavaScript
{
    "pages": [
      "pages/01useCom/index"
    ],
    "window": {
        "backgroundTextStyle": "light",
        "navigationBarBackgroundColor": "#fff",
        "navigationBarTitleText": "Weixin",
        "navigationBarTextStyle": "black"
    },
    "usingComponents": {
      "global-test": "/components/test/test"
    },
    "style": "v2",
    "sitemapLocation": "sitemap.json"
}
```

2）在需要使用页面的 .wxml 中

```HTML
<global-test></global-test>
```

### 自定义组件 - 分类 - 总结

**全局组件与局部组件的选用**

- 根据组件的使用频率与范围，来选择合适的引用方式： 
  - 如果某组件在多个页面中经常被用到，建议进行“全局引用”
  - 如果某组件只在特定的页面中被用到，建议进行“局部引用”

**组件与页面的区别**

- 相同点： 
  - 都是由四个文件组件：.js 、.json、.wxml、.wxss
- 不同点： 
  - 组件中的 .json 文件需要声明：`"component": true,`
  - 组件中的 .js 文件 中调用的是 Component() 函数 
    - 应用：App()
    - 页面：Pages()
    - 组件： Component()
  - 组件中的事件处理函数需要定义在 methods 函数中

### 自定义组件 - 样式 - 样式隔离

**样式隔离**

- 默认情况下，自定义组件的样式只对当前组件生效，不会影响到组件之外的 UI 结构
- 如果小程序页面中使用了两个组件 A & B 
  - A 不会影响页面的样式
  - A 不会影响 B 的样式
  - 页面上的样式也不会影响 A
- 意义： 
  - 防止外界的样式影响组件内部的样式
  - 防止组件的样式破坏外界的样式

**特点**

- app.wxss 中定义的样式是不会影响到组件中的样式
- 只有 class 选择器会有样式隔离效果。id 选择器、属性选择器、标签选择器不受样式隔离的影响
- 建议：在组件和引用组件的页面中，建议使用 class 选择器，不要使用 id、 属性、标签选择器

### 自定义组件 - 样式 -  样式隔离选项

**说明**

- 默认情况下，自定义组件的样式隔离特征能够防止组件内外样式互相干扰的问题。但有时，我们希望在外界能够控制组件内部的样式。此时，可以通过 styleIsolation 修改组件的样式隔离选项

**修改样式隔离选项步骤**

- 方式一： 
  - 在组件的 .js 文件中新增如下配置

```JavaScript
Component({
  options: {
    styleIsolation: 'isolated'
  }
})
```

- 方式二： 
  - 在组件文件的 .json 中新增如下配置

```JavaScript
{
  "component": true,
  "styleIsolation": "isolated",
  "usingComponents": {}
}
```

- 取值

| 可选值         | 默认值 | 描述                                                         |
| -------------- | ------ | ------------------------------------------------------------ |
| `isolated`     | 是     | 表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响（一般情况下的默认值） |
| `apply-shared` | 否     | 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面 |
| `shared`       | 否     | 表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式也会影响页面和其他设置了 `apply-shared` 或 `shared` 的自定义组件。 |

### 自定义组件 - 属性

**说明**

- 与 vue 中的组件类似，小程序中可以使用一些属性 
  - data：用来定义组件中的数据
  - methods：用来定义组件中的方法（页面中的方法直接定义在与 data 同级，组件中的方法要定义到 methods 中）
- 如果要接收外界传入的数据，需要使用与 vue 中不同的属性来接收 
  - properties：用来接收父组件传入的数据

**properties**

- 作用：用来接收外界传入的数据
- 用法：

```JavaScript
properties: {
  xxx: {
    type: String, // 设置类型为 string
    value: 'xxxx' // 设置默认值为 xxxx
  }，
  xx: String
},
```

**步骤**

1. 在页面中向组件中传入参数

```HTML
<view>4.0 - 组件接收外部的数据</view>
<global-com01 **msg="xjj"**></global-com01>
```

1. 在组件中接收

```JavaScript
  properties: {
    msg: {
      type: String, // 设置类型为字符串
      value: 'xxx' // 设置默认值为： xxx 
    }
  },
```

### 自定义组件 - 属性 - properties 与 data 的区别

**需求**

- 封装一个组件： 
  - 接收一个数字，并且在结构上渲染
  - 点击组件上的按钮，可以让数字加1

**说明**

1）在小程序的组件中，**properties 属性和 data 数据的用法相同**，它们都是可读可写的

- data 更倾向于存储组件的私有数据
- properties 更倾向于存储外界传递到组件中的数据

2）在小程序的组件中， **properties 与 data 完全一样**

```text
console.log(this.data === this.properties) // true
```

### 自定义组件 - 侦听器 - 基本使用

**说明**

- 数据监听，用于监听和响应任何属性和数据字段的变化，从而执行特定的操作。它的作用类似于 vue 中的 watch 侦听器。
- 侦听器只能用在组件中，不能用在页面中

**侦听器**

- 语法

```JavaScript
observers: {
  '字段A, 字段B': function (字段A新值, 字段B新值) {
    // 逻辑代码
  }
}
```

- 需求
  - 组件中有三个数据：n1, n2, sum，默认值都为 0
  - 组件中有两个按钮： 
    - 点击第一个按钮，n1 + 1
    - 点击第二个按钮，n2 + 1
  - 当 n1，n2 发生改变时，动态得到 sum 的结果 
    - sum = n1 + n2 的值

### 自定义组件 - 侦听器 - 案例

**说明**

- 侦听器也可以侦听对象，语法如下

```JavaScript
observers: {
  '对象.属性A, 对象.属性B': function (属性A新值, 属性B新值) {
  // 执行时机：
      //  属性 A 改变时，逻辑代码会执行
      //  属性 B 改变时，逻辑代码会执行
      //  重新给对象赋值时，逻辑代码也会执行
  }
}
```

**案例功能**

- 数据 
  - 组件上一个对象：rgb
  - rgb 中有三个属性： r，g，b
  - 组件中一个属性：fullcolor
- 页面 
  - 组件中有一个容器 box，背景颜色由 fullcolor 控制
  - 组件中有三个按钮：r、 g、 b
- 功能： 
  - 点击页面上按钮时，对应的 rgb 的值会 + 5
  - rgb 的值发生改变，fullcolor 也会跟着改变
  - fullcolor 改变之后， box 的背景颜色也会跟着改变

**代码**

- 数据

```JavaScript
  data: {
    rgb: {
      r: 0,
      g: 0,
      b: 0
    },
    fullcolor: '0, 0, 0'
  },
```

- 页面

```HTML
<view class="box" style="background-color: rgb({{ fullcolor }});"></view>
<view>
  <button type="primary" bindtap="changeColorR">r</button>
  <button type="primary" bindtap="changeColorG">g</button>
  <button type="primary" bindtap="changeColorB">b</button>
</view>
<view>rgb: {{ rgb.r }} {{ rgb.g }} {{ rgb.b }}</view>

.box {
  height: 100px;
  border: 2px solid #ccc;
}
button {
  margin: 2px
}
```

- 功能

```JavaScript
  observers: {
    'rgb.r, rgb.g, rgb.b': function (r, g, b) {
      this.setData({
        fullcolor: `${r}, ${g}, ${b}`
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    changeColorR() {
      this.setData({
        'rgb.r': this.data.rgb.r + 5
      })
    },

    changeColorG() {
      this.setData({
        'rgb.g': this.data.rgb.g + 5
      })
    },

    changeColorB() {
      this.setData({
        'rgb.b': this.data.rgb.b + 5
      })
    }
  }
```

### 自定义组件 - 侦听器 - 侦听对象中所有属性

**语法**

```JavaScript
observers: {
    '对象.**': function (obj) {
        // 逻辑代码
    }
}
```

### 自定义组件 - 纯数据字段

**说明**

- 纯数据字段指的是那些不用于界面渲染的 data 字段。
- 应用场景：有些情况下，某些 data 中的字段既不会展示在界面上，也不会传递给其它组件，仅仅在当前组件内部使用。带有这种特性的 data 字段适合设置为纯数据字段
- 好处：纯数字字段有助于提升页面的性能。

**语法**

```JavaScript
Component({
  options: {
      pureDataPattern: /^_/ // 设置所有以 _ 开头的变量都为纯数据字段
    }
})
```

### 自定义组件 - 组件生命周期

**说明**

- 小程序中的组件也有自己的生命周期

**生命周期**

- 组件的生命周期如下：

| 生命周期 | 参数           | 描述                                     |
| -------- | -------------- | ---------------------------------------- |
| created  | 无             | 在组件实例刚刚被创建时执行               |
| attached | 无             | 在组件实例进入页面节点树时执行           |
| ready    | 无             | 在组件在视图层布局完成后执行             |
| moved    | 无             | 在组件实例被移动到节点树另一个位置时执行 |
| detached | 无             | 在组件实例被从页面节点树移除时执行       |
| error    | `Object Error` | 每当组件方法抛出错误时执行               |

- 常用的生命周期函数有： 
  - created：组件实例刚被创建好的时候， created 函数会被触发 
    - 此时还不能调用 setData
    - 通过在这个生命周期函数中，只应该用于给组件的 this 添加一些自定义的属性字段
  - attached：在组件完全初始化完毕、进入页面节点树后， attached 生命周期函数会被触发 
    - 此时 this.data 已经被初始化完毕
    - 这个生命周期很有用，绝大多数初始化的工作可以在这个时机进行
  - detached：在组件离开页面节点树后， detached 生命周期函数会被触发 
    - 退出一个页面时，会触发页面内每个自定义组件的 detached 生命周期函数
    - 此时适合做一些清理性质的工作

### 自定义组件 - 生命周期 - lifetimes节点

**说明**

- 在小程序中，生命周期函数应该定义在 lifetimes 字段内进行声明

**语法**

```JavaScript
Component({
  lifetimes: {
    attached() {},
    detached() {}
  }
})
```

### 自定义组件 - 生命周期 - pageLifetimes节点

**说明**

- 有时，自定义组件的行为依赖于页面状态的变化，此时就需要用到组件所在页面的生命周期
- 可以使用 pageLifetimes 在组件中使用到所在页面的生命周期函数

**pageLifetimes 节点**

- 可设置的生命周期函数

| 生命周期函数 | 参数        | 描述                         |
| ------------ | ----------- | ---------------------------- |
| show         | 无          | 组件所在的页面被展示时执行   |
| hide         | 无          | 组件所在的页面被隐藏时执行   |
| resize       | Object Size | 组件所在的页面尺寸变化时执行 |

- 语法

```JavaScript
pageLifetimes: {
  show () {},
  hide () {},
  resize () {}
}
```

**需求**

- 上面案例中，显示页面时，需要设置一个默认的随机颜色

```JavaScript
  pageLifetimes: {
    show () {
      // 每次打开页面都得到一个随机颜色
      let r = Math.floor(Math.random() * 255)
      let g = Math.floor(Math.random() * 255)
      let b = Math.floor(Math.random() * 255)
      // 给默认颜色赋值
      this.setData({
        fullcolor: `${r}, ${g}, ${b}`,
        _rgb: {
          r: r,
          g: g,
          b: b
        }
      })
    }
  }
```

### 自定义组件 - 插槽 - 单个插槽

**说明**

- 在自定义组件的 wxml 结构中，可以提供一个 <slot> 节点（插槽），用于承载组件使用者提供的 wxml 结构
- 插槽用来接收外界传入的结构

**单个插槽**

- 概念：在小程序中，默认每个自定义组件中，只允许使用一个<slot> 进行占位，这种个数上的限制叫做单个插槽
- 语法：

```HTML
<!-- 组件封装时 -->
<view>
  <view>这是组件</view>
  <slot></slot>
</view>

<!-- 组件被使用时 -->
<component-tag-name>
  <view>这里是传入到组件 slot 中的内容</view>
</component-tag-name>
```

### 自定义组件 - 插槽 - 多个插槽

**多个插槽**

- 概念：在小程序中，如果要定义多个插槽，需要设置 multipleSlots ，就可以使用多个插槽了
- 语法：

1）在组件的 .js 文件中添加设置

```JavaScript
options: {
  multipleSlots: true // 当前组件可以使用多个插槽
},
```

2）在组件的 .wxml 文件中可以设置多个 <slot>，以不同的 name 来区分

```HTML
<view>
  <slot name="before"></slot>
  <view>这是一段固定的文本内容</view>
  <slot name="after"></slot>
</view>
```

3）使用组件时，为不同的节点设置 slot 属性

```HTML
<mytest>
  <view slot="before">我是头部</view>
  <view slot="after">我是底部</view>
</mytest>
```

### 自定义组件 - 父子组件通信 - 基本概念

**说明**

- 在小程序中，父子组件中之间也可以进行通信

**方式**

- 属性绑定： 
  - 用于父组件向子组件的指定属性设置数据，仅能设置JSON 兼容的数据
- 事件绑定 
  - 用于子组件向父组件传递数据，可以传递任意数据
- 获取组件实例 
  - 父组件还可以通过 this.selectCompoent() 获取子组件实例对象
  - 这样就可以直接访问子组件的任意数据和方法了

### 自定义组件 - 父子组件通信 - 属性绑定

**说明**

- 属性绑定用于实现父向子传值
- 只能传递普通类型的数据
- 无法将方法传递给子组件

**语法**

1）将父组件中的数据通过属性传递给子组件

```HTML
data: {
  num: 11
}

<son num="{{ num }}"></son>
```

2）在子组件中通过 properties 直接接收

```HTML
properties： {
  num: {
    type: Number,
    value: 11
  }
}

<text>{{ num }}</text>
```

**注意点：**

- 在子组件中修改数据之后，父组件中无法同步更新

### 自定义组件 - 父子组件通信 - 事件绑定

**说明**

- 事件绑定用于实现子向父传值，可以传递任何类型的数据

**步骤**

1）在父组件的 js 中，定义一个函数，这个函数即将通过自定义事件的形式，传递给子组件

```JavaScript
  // 将来要传递给子组件
  getData (e) {
    console.log('getData', e.detail.num)
  },
```

2）在父组件的 wxml 中，通过自定义事件的形式，将步骤 1 中定义的函数引用，传递给子组件

```HTML
<global-com08 num="{{ num }}" bindpassdata="getData"></global-com08>
```

3）在子组件的 js 中，通过调用 this.triggerEvent('自定义事件名称', {/* 参数对象 */})，将数据发送到父组

件

```JavaScript
    foo() {
      // this.setData({
      //   num: this.properties.num + 1
      // })
      // 触发父组件传入的事件
      this.triggerEvent('passdata', {
        num: this.properties.num + 1
      })
    }
```

4）在父组件的 js 中，通过 e.detail 获取到子组件传递过来的数据

```JavaScript
  // 将来要传递给子组件
  getData (e) {
    console.log('getData', e.detail.num)
    // 将数据赋值给 num
    this.setData({
      num: e.detail.num
    })
  },
```

### 自定义组件 - 父子组件通信 - 获取组件实例

**说明**

- 可以在父组件里调用 this.selectComponent('id 或 class选择器')
- 获取子组件的实例对象
- 从而直接访问子组件的任意数据和方法。

**语法**

```HTML
<getSon12 class="myson"></getSon12>
<button bindtap="getson">点我获取子组件中的方法 & 属性</button>

  getson () {
    const son = this.selectComponent('.myson')
    console.log('name', son.data.name)
    console.log('age', son.data.age)
    son.sayHi()
  }
```

### 自定义组件 - behaviors

**说明**

- behaviors 是小程序中组件中，用于实现组件间代码共享的特性。类似于 vue 中的 mixins
- 每个 behaviors 可以包含一组属性、数据、生命周期函数和方法。 
  - 组件引用它时，它的属性、数据、和方法会被合并到组件中
- 每个组件中可以引用多个 behaviors，behaviors 也可以引用其它 behaviors

**使用步骤**

1）创建一个新的文件：behaviors/mybehaviors.js

```JavaScript
module.exports = Behavior({
    data: {
        username: 'zs'
    },
    properties：{},
    methods: {},
})
```

2）在需要的位置导入并使用 behaviors

```JavaScript
const myBehaviors = require('../../behaviors/mybehaviors.js')

Component({
    behaviors: [myBehaviors]
})
```

**behaviors 中可用的节点**

| 可用属性   | 类型         | 是否必填 | 描述                  |
| ---------- | ------------ | -------- | --------------------- |
| properties | Object Map   | 否       | 同组件的属性          |
| data       | Object       | 否       | 同组件的数据          |
| methods    | Object       | 否       | 同自定义组件的方法    |
| behaviors  | String Array | 否       | 引入其它的 `behavior` |
| created    | Function     | 否       | 生命周期函数          |
| attached   | Function     | 否       | 生命周期函数          |
| ready      | Function     | 否       | 生命周期函数          |
| moved      | Function     | 否       | 生命周期函数          |
| detached   | Function     | 否       | 生命周期函数          |