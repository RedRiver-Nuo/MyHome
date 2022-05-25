title: Vue2
date: 2022/4/21
tags:

 - 笔记
categories:
 -  Vue2


## eslint

## eslint介绍与关闭

> 代码规范检测
>
> [传送门:eslint中文但](https://eslint.bootcss.com/)
>
> [传送门:lintOnSave](https://cli.vuejs.org/zh/config/#lintonsave)



1. 我们以前说代码是有规则和规范两个准则 

- - 规则：就是必须要遵守的，不遵守就报错
  - 规范：就是建议遵守的写法，默认情况下不会报错

- 如果我希望程序员能够`强制遵守规范`，所以就有个工具叫 `eslint`，它可以让你代码如果不符合规范就直接报错，运行不了 

- 例如： 

- 有个规范是：声明了变量必须要用，不用就不符合规范

  - 因为我们创建项目时选的默认配置，默认配置就会安装ESLint，那么它会代码一不规范就报错

  

关闭方法:

1. 找到`vue.config.js`
2. 增加如下配置，重新运行

```javascript
  const { defineConfig } = require('@vue/cli-service')
  module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, // 加他
  })
  
```





### ESLint介绍及常见规则

> 为了让代码更符合规范，可以通过ESLint来限制，之前都是关闭，这次咱们把他开起来并用起来
>
> [传送门:ESLint中文网](https://eslint.bootcss.com/)





作用:

1. JavaScript代码检测工具
2. 让不遵守规范的代码报错
3. 可高度定制



#### 常见**标准**规范

创建项目选择的是：Standard，翻译过来是**标准**

1. JS字符串要用单引号，不要用双引号
2. 变量声明了但不使用也不符合规范
3. 代码不要加`;`结尾
4. 每句代码结尾不要有多余的空格
5. 如果它发现一个let声明的变量，后面没有重新赋值，也觉得不符合规范
6. 默认只允许代码之间最多1个空行，多了就报错





#### 报错信息确认

1. 文件名，行号，错误信息都会告诉我们
2. 错误信息可以直接去网站确认



#### 规则调整

1. 直接全部关掉(**吼吼吼**)

   1. `vue.config.js`中增加:`lintOnSave: false`

2. 调整配置:

   1. `.eslintrc.js`中调整

   2. 比如关闭双引号限制

      ```json
        rules: {
          "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
          "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
          quotes: "off",
        },
      ```

3. 注释禁用

   ```javascript
   // 禁用下一行
   // eslint-disable-next-line
   // 禁用当前文件
   /* eslint-disable */
   ```



#### 错误修复

1. 根据提示去找到错误信息，修改
2. 执行命令:`npm run lint`
   1. 无法修复所有
   2. 需要自己执行
3. `vscode`的`Prettier-Standard - JavaScript formatter`插件
   1. 安装并配置使用他格式化
   2. `.vue`，`.js`文件









## 一，Vue基本认知

#### vue简介

> [传送门:官网](https://cn.vuejs.org/)
>
> [传送门:百度指数](https://index.baidu.com/v2/main/index.html#/trend/vue?words=vue,react,angular)

概念：

1. Vue是一个框架
2. 最新的版本是3.x，先学习2.x
3. 简单的页面，复杂的网页应用都能做，app，小程序也能做
4. 通过它可以极大的提升开发效率，操纵dom-->操纵数据





#### Vue-Chrome插件

> 为了更好的调试，咱们今天的最后来安装一下Chrome的插件，并演示一下如何使用

步骤：

1. 谷歌商店
2. 极简插件
3. 下载并安装
4. 调整一个设置
5. 使用







#### Vue 基本使用（创建Vue实例）

> 使用导入vue的方式使用
>
> [传送门:官方文档-起步](https://cn.vuejs.org/v2/guide/)

基本运行：

1. 创建网页`Vue基本使用.html`
2. 结合官方文档
   1. 导入`vue`
   2. 添加测试代码
3. 运行

```html
 <body>
    <div id="app">{{ message }}</div>
    <!-- 导入vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue!',
        },
      })
    </script>
</body>
```

1. `new Vue`:创建Vue实例
2. 传入的对象`{el,data}`是构造函数的参数
3. 代码解析之后把`message`的值解析到了`{{}}` 内部



##### el选项

>提供一个页面上已经存在的Dom元素作为Vue实例的挂载目标
>
>理解:设置Vue去管理的元素,只有这个元素及他的后代元素会被Vue管理

注：

- ​	可以设置各种选择器，推荐用id，因为唯一
- ​	不能使用body和html

```html
<body>
    <div id="app">{{ message }}</div>
    <div class="box">{{ message }}</div>
    <p>{{ message }}</p>
    <!-- 引入vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      const app = new Vue({
        // el: '#app', // 可以
        // el: '.box', // 可以
        // el: 'p', // 可以
        // el:'body', // 报错
        el: 'html', // 报错
        data: {
          message: 'Hello Vue!',
        },
      })
    </script>
</body>
```



##### data选项

>设置Vue实例的数据对象

 注意：

​	符合js的语法规范即可,对象的语法

```js
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
      const app = new Vue({
        //挂载vue
        el: '#app',
        //设置vue数据
        data: {
          message: 'Hello Vue!',
          info: '感觉自己萌萌哒',
          foods: ['西瓜', '哈密瓜'],
          friend: {
            name: 'jack',
            skill: '跳舞',
            sayHi() {
              console.log('你好吗')
            },
          },
        },
      })
</script>
```



##### methods选项

> 定义Vue中的函数

```
const app = new Vue({
        el: '#app',
        data: {
          info: '感觉自己萌萌哒',
        },
        methods: {
          clickMe() {
            console.log('点我干啥！！！')
          },
          changeDate() {
            this.info = '我变了,渣男！！'
          },
        },
      })
```



## 二，实例化时的data和methods

> `methods`里面的`this`是Vue实例
>
>  new Vue 会创建 Vue实例
>
> > 传入的选项对象中的
> >
> > 1. `data`会直接合并到Vue实例上
> > 2. `methods`会直接合并到Vue实例上,并绑定`this` 
>
> [传送门:Vue实例](https://cn.vuejs.org/v2/guide/instance.html#ad)
>
> [传送门:el](https://cn.vuejs.org/v2/api/#el)
>
> [传送门:data](https://cn.vuejs.org/v2/api/#data)
>
> [传送门:methods选项](https://cn.vuejs.org/v2/api/#methods)





测试代码:

```html
 <body>
    <div id="app">
      <!-- 1. 事件绑定 -->
      <!-- <button v-on:click="sayHi">事件绑定</button> -->
      <!-- 2. 简写 -->
      <button @click="sayHi">事件绑定</button>
      <!-- 3. 修改数据 -->
      <button @click="add">修改数据2 {{ count }}</button>
    </div>

    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          count: 10,
        },
        methods: {
          add() {
            this.count++
            console.log('this:', this) //Vue实例
            console.log('app:', app)  //Vue
            console.log(app === this) //true
          },
        },
      })
    </script>
  </body>
```



## 		MVVM设计模式

> 数据驱动视图
>
> [传送门:廖雪峰MVVM](https://www.liaoxuefeng.com/wiki/1022910821149312/1108898947791072)



名词解释-设计模式

- 解决某类软件开发问题的`最佳实践`
- 被前辈们积累和总结出来,用过都说好
- 

名词解释-MVVM

- M:Model

  - 模型
  - 数据

- V:View

  - 视图
  - html结构

- VM:ViewModel

  - 把数据和视图结合到一起的那个对象
  - 在Vue中就是Vue实例

  





**Vue中的MVVM:**



- 以前工作模式： 
- - 如果希望界面变了，数据跟着变，要自己操作dom，监听dom事件，再把dom的值赋值给数据
  - 如果希望数据变了，界面跟着变，也要自己监听数据变化，并手动操作dom
  - 如果有十个标签希望实现这个效果，类似的代码就要写10次，所以要封装
  - 但是这个封装不用自己做了，而是Vue.js帮我们做了
- 如上图，vue.js会帮我们监听界面的事件，然后赋值给数据，同样也会监听数据变化，再赋值给界面，这样让我们程序员只要关心数据变化即可





## 三，基本指令

1. `Vue`指令是`Vue`提供的 将数据和界面关联的一种特殊语法
2. 从写法来看就是html标签的属性
3. 只不过只有Vue可以解析

### v-text指令 || `{{插值表达式}}`

> v-text： 
>
> > 设置标签的文本值(textContent)
> >
> > `v-text` 替换元素的所有文本，更新元素的 `textContent`。
>
> `{{}}`可以解析数据，和之前学习的模板引擎语法差不多
>
> > `{{ Mustache }}`部分更新 `textContent`.
> >
> > `{{ Mustache }}`也可以叫做`胡子语法,`插值语法
>
> [传送门:v-text](https://cn.vuejs.org/v2/api/#v-text)



**语法**:

1. v-text写法
   1. `<div v-text="数据对象的属性"></div>`
   2. 全部替换
2. `{{}}`写法
   1. `<h2>{{ message }}</h2>`
   2. 部分替换

**测试代码**:

```html
<body>
    <div id="app">
      <!-- 1. 完整写法 -->
      <h2 v-text="message"></h2>
      <!-- 2. 直接取值 -->
      <h2>{{ message }}</h2>
      <!-- 3. 表达式 -->
      <h2>{{ age>=18?'成年':'未成年' }}</h2>
      <h2>{{ friends[0] }}</h2>
      <h2>{{ animal.name }}</h2>
    </div>

    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue!',
          age: 19,
          animal: {
            name: 'dog',
            age: 2,
          },
          friends: ['jack', 'rose', 'tom'],
        },
      })
    </script>
</body>

```







### v-html指令

> 设置标签的innerHTML
>
> >普通文本直接渲染,html标签会解析
>
> [传送门:v-html指令](https://cn.vuejs.org/v2/api/#v-html)

语法:

1. `<h2 v-html="数据对象的属性"></h2>`
2. 没有简写

```html
<body>
    <div id="app">
      <!-- 1. 普通文本 -->
      <h2 v-text="message"></h2>
      <h2 v-html="message"></h2>
      <!-- 2. html标签 -->
      <h2 v-text="link"></h2>
      <h2 v-html="link"></h2>
    </div>

    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue!',
          link: '<a href="#">来黑马</a>',
        },
      })
    </script>
</body>


```





### v-on指令基本使用

> 绑定事件监听器
>
> [传送门:处理用户输入](https://cn.vuejs.org/v2/guide/#%E5%A4%84%E7%90%86%E7%94%A8%E6%88%B7%E8%BE%93%E5%85%A5)



语法:

1. 完整写法`v-on:事件名="方法名"`
2. 简写:`@事件名="方法名"`
3. 方法定义在`methods`属性中，和`el`和`data`同级

注意：

1. 修改数据时，页面会同步更新 
2. 方法中可以 通过`this`访问 数据和其他方法



测试代码

```html
 <body>
    <div id="app">
      <!-- 1. 事件绑定 -->
      <!-- <button v-on:click="sayHi">事件绑定</button> -->
      <!-- 2. 简写 -->
      <button @click="sayHi">事件绑定</button>
      <!-- 3. 修改数据 -->
      <button @click="add">修改数据2 {{ count }}</button>
    </div>

    <!-- 导入vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          count: 10,
        },
        methods: {
          sayHi() {
            console.log('你好吗?')
          },
          add() {
            this.count++
          },
        },
      })
    </script>
  </body>
```





#### v-on指令内联语句

> `v-on:事件名=”内联语句“` 
>
> 简写 `@:事件名="内联语句"`



语法：

1. `v-on:事件名=”内联语句“`

注意：

1. 内联语句可中直接使用Vue示例中的data和methods，省略this
2. 可以实现方法传递自定义参数



核心代码：

```html
 <body>
    <div id="app">
      <!-- 1. 内联语句 -->
      <button @click="count++">修改数据1{{ count }}</button>
      <!-- 2. 内联语句调用方法 并传递参数-->
      <button @click="add(2)">修改数据2 {{ count }}</button>
    </div>

    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          count: 10,
        },
        methods: {
          add(num) {
            this.count += num
          },
        },
      })
    </script>
 </body>


```



#### v-on指令修饰符

> 在处理事件时如果要阻止默认行为，阻止冒泡等逻辑，在Vue中有更为简便的实现方式
>
> **✨其他的指令也可以使用修饰符**
>
> [传送门:v-on指令](https://cn.vuejs.org/v2/api/#v-on)



语法:

1. `@事件名.修饰符`
2. **修饰符**：
   - `.stop` - 调用 `event.stopPropagation()`。
   - `.prevent` - 调用 `event.preventDefault()`。
   - `.capture` - 添加事件侦听器时使用 capture 模式。
   - `.self` - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
   - `.{keyCode | keyAlias}` - 只当事件是从特定键触发时才触发回调。
   - `.native` - 监听组件根元素的原生事件。
   - `.once` - 只触发一次回调。
   - `.left` - (2.2.0) 只当点击鼠标左键时触发。
   - `.right` - (2.2.0) 只当点击鼠标右键时触发。
   - `.middle` - (2.2.0) 只当点击鼠标中键时触发。
   - `.passive` - (2.3.0) 以 `{ passive: true }` 模式添加侦听器



测试代码:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .box {
        width: 100px;
        height: 100px;
        background-color: hotpink;
        padding: 25px;
        box-sizing: border-box;
      }
      .inner {
        width: 50px;
        height: 50px;
        background-color: skyblue;
      }
    </style>
    <title>v-on修饰符</title>
  </head>
  <body>
    <div id="app">
      <!-- 1.阻止默认行为 -->
      <!-- 如果没有逻辑 直接绑定事件 写修饰符即可 -->
      <a @click.prevent href="https://www.baidu.com/">去百度</a>
      <br />
      <!-- 2.限制按键 -->
      <!-- <input type="text" @keyup.13="submit" /> -->
      <input type="text" @keyup.enter="submit" />
      <!-- 3.阻止冒泡 -->
      <div class="box" @click="sayHi">
        <div class="inner" @click.stop="sayHi"></div>
      </div>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

    <script>
      const app = new Vue({
        el: '#app',
        data: {},
        methods: {
          sayHi() {
            console.log('你好吗?')
          },
          submit() {
            console.log('提交')
          },
        },
      })
    </script>
  </body>
</html>

```

#### $event

> 对于`dom`的原生事件，`$event`可以在行内获取事件参数
>
> 对于组件 $event可以获取子组件的$emit传递的值 (组件中有说明)
>
> [传送门:内联处理器中的方法](https://cn.vuejs.org/v2/guide/events.html#%E5%86%85%E8%81%94%E5%A4%84%E7%90%86%E5%99%A8%E4%B8%AD%E7%9A%84%E6%96%B9%E6%B3%95)
>
> [传送门:v-on指令](https://cn.vuejs.org/v2/api/#v-on)





测试代码

```html
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <!-- 1. 基本写法 -->
      <button @click="click1">基本绑定</button>
      <button @click="click2('西瓜')">内联处理器</button>
      <button @click="click3('哈密瓜',$event)">$event</button>
      <button @click="click3('香瓜',$e)">错误示范</button>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {},
        methods: {
          click1(event) {
            console.log('event:', event)
          },
          click2(param) {
            console.log('param:', param)
          },
          click3(param, event) {
            console.log('param:', param)
            console.log('event:', event)
          },
        },
      })
    </script>
  </body>
</html>


```





小结:

1. `dom`的原生事件，如何在行内获取事件参数?
2. `$event/event`



### v-bind指令

> `动态`的绑定`属性`
>
> > 属性:写在标签内部的东西，比如`src,style,class`等。。
>
> [传送门:v-bind指令](https://cn.vuejs.org/v2/api/#v-bind)



语法:

1. `v-bind:属性名="xxx"`

2. 简写  `:属性名="xxx"`

   



测试代码:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      div {
        width: 100px;
        height: 100px;
        border: 20px solid #000;
      }
      .red {
        background-color: red;
      }
      .yellow {
        color: yellow;
      }
      .radius {
        border-radius: 50%;
      }
    </style>
    <title>v-bind指令</title>
  </head>
  <body>
    <div id="app">
      <!-- 1.完整写法 -->
      <!-- <img v-bind:src="imgUrl" alt="" /> -->
      <!-- 2.简写 -->
      <img @click="changeUrl" :src="imgUrl" alt="" />
      <!-- 
        3.类名绑定
          class
          属性名:类名,有-需要用引号括起来
          属性值:是否生效 true(生效) false(不生效)
            行内可以直接写布尔值,或者表达式
      -->
      <!-- <div :class="{red:isRed,yellow:true}">你好吗?</div> -->
      <!-- 
        4.样式绑定
         style
            属性名:样式名,-无法解析,用驼峰
            属性值:样式的值
       -->
      <div :style="{fontSize:size+'px',borderColor:'hotpink'}" :class="{red:isRed,yellow:isYellow,radius:age<18}">hello</div>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          imgUrl: './img/crydog.png',
          // 布尔值
          isRed: true,
          isYellow: true,
          size: 66,
          age: 17,
        },
        methods: {
          changeUrl() {
            this.imgUrl = './img/baby.gif'
          },
        },
      })
    </script>
  </body>
</html>

```



#### v-bind数组的写法绑定class

> v-bind有很多写法变种，如数组的解析



解析规则：

1. `:class=[classA,classB,'orange']`
   1. classA,classB解析data中对应的结果
   2. 'orange'直接生效
2. `:class=[classA,{classB:isB}]`
   1. classA解析对应的结果
   2. classB是否生效取决于isB的值



测试代码:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      #app div {
        width: 200px;
        height: 200px;
        background-color: orange;
        border: 1px solid #000;
        margin: 10px;
      }
    </style>
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <!-- 1.数组的形式
          解析classA和classB的结果
      -->
      <div :class="[classA, classB]"></div>
      <!-- 2. 数组+对象的形式
            classA解析结果
            对象中 classB这个类名是否生效，取决于isB的值是true还是false
            classC 同理
      -->
      <div :class="[classA, { classB: isB, classC: isC }]"></div>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          classA: 'red',
          classB: 'orange',
          isB: true,
          isC: false,
        },
      })
    </script>
  </body>
</html>

```



小结:

1. `:class=[classA,'orange']`,data中的数据如下，最终解析之后的类名是什么？

```javascript
  data: {
    classA: 'red',
  },
```









### v-show指令

> 根据表达式的结果，切换元素的显示状态
>
> >通过切换display的方式
>
> [传送门:v-show](https://cn.vuejs.org/v2/api/#v-show)



语法：

1. `v-show="表达式"`

测试代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <!-- 1. 内联语句 -->
      <button @click="show=!show">切换显示</button>
      <p v-show="show">😂</p>
    </div>

    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          show: false,
        },
      })
    </script>
  </body>
</html>

```



### v-if指令

> 根据表达式的结果，切换元素的显示状态
>
> >切换时会销毁和创建元素
> >
> >功能上，和v-show类似,性能上，比v-show开销要大
> >
> >对于频繁切换的元素不建议用v-if



语法:

1. `v-if="表达式"`



测试代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <!-- 1. 内联语句 -->
      <button @click="show=!show">切换显示</button>
      <p v-if="show">v-if😂</p>
      <p v-show="show">v-show😂</p>
    </div>

    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          show: false,
        },
      })
    </script>
  </body>
</html>

```



#### v-else，v-else-if指令

> 类似于if-else，vue中也有对应的指令
>
> 1. `v-else-if`,`v-if`的`else-if`块可以多个连接着写
> 2. `v-else`,`v-if`或`v-else-if`的else块
>
> [传送门：v-else](https://cn.vuejs.org/v2/api/#v-else)
>
> [传送门：v-else-if](https://cn.vuejs.org/v2/api/#v-else-if)



语法

1. 不能独立使用
2. v-if，v-else-if，。。。。，v-else
3. v-if，v-else



测试代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style></style>
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <h2 @click="age++">age:{{ age }}</h2>
      <h3 v-if="age<18">未成年</h3>
      <h3 v-else-if="age>=18&&age<25">成年啦</h3>
      <h3 v-else-if="age>=25&&age<60">晚婚啦</h3>
      <h3 v-else>退休啦</h3>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          age: 58,
        },
      })
    </script>
  </body>
</html>

```





### v-for指令

> 1. 循环渲染数据到页面
> 2. 响应式，数据改变，页面更新
> 3. v-for指令的内部可以获取遍历的值
>
> [传送门:v-for](https://cn.vuejs.org/v2/api/#v-for)



语法：

1. `<div v-for="(item, index) in items"></div>`



测试代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>v-for指令</title>
  </head>
  <body>
    <div id="app">
      <!-- 1. 循环数组 -->
      <button @click="push">新增</button>
      <button @click="shift">删除</button>
      <ul>
        <li v-for="(item,index) in cartoons">{{ index+1 }}- {{ item.name }}--{{ item.author }} - <span @click="getItem(item)">打印</span></li>
      </ul>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          cartoons: [
            { name: '斗罗大陆', author: '唐家三少' },
            { name: '灵笼', author: '艺画开天' },
            { name: '刺客伍六七', author: '某公司' },
            { name: '一人之下', author: '米二' },
          ],
        },
        methods: {
          getItem(item) {
            console.log('item:', item)
          },
          // 追加
          push() {
            this.cartoons.push({
              name: '葫芦娃',
              author: '上海美术制片厂',
            })
          },
          // 删除
          shift() {
            // 从开始位置删除元素
            // unshift 在数组的开始部分追加
            this.cartoons.shift()
          },
        },
      })
    </script>
  </body>
</html>

```





#### v-for中的key

> `v-for`时一般会设置一个`key`

为什么要Key:

1. `v-for`的默认行为会就地复用元素,提升渲染的性能
2. 对于没有绑定数据的元素，可能出现状态异常的情况



`key`使用注意

1. `key` 的值只能是字符串或数字类型
2. `key` 的值必须具有唯一性(即:`key` 的值不能重复)
3. 建议把数据项 `id` 属性的值作为 `key` 的值(因为 id 属性的值具有唯一性)
4. 使用 `index` 的值当作 `key` 的值没有任何意义(因为 `index` 的值不具有唯一性)
5. 建议使用 `v-for` 指令时一定要指定 `key` 的值(既提升性能、又防止列表状态紊乱)



问题实例代码：

```html
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <button @click="add">添加</button>
      <ul>
        <li v-for="(item,index) in list"> {{item}} -- <span @click="del(item.id)">❌</span></li>
      </ul>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          list: [
            {
              id: 1,
              name: '🍉',
            },
            {
              id: 2,
              name: '🍌',
            },
            {
              id: 3,
              name: '🍎',
            },
            {
              id: 4,
              name: '🍓',
            },
          ],
        },
        methods: {
          // 添加
          add() {
            // 末尾添加
            this.list.push({
              id: Date.now(),
              name: '🍊' + parseInt(Math.random() * 10),
            })
          },
          // 删除开头那个
          del(id) {
            this.list = this.list.filter(v => id !== v.id)
          },
        },
      })
    </script>
  </body>
</html>

```

问题解决方案：

1. 可以通过设置一个唯一的`key`来避免这个问题
2. 参考如下代码，添加`key`之后再次测试

```html
<li v-for="item in list" :key="item.id">  其他代码略 </li>
```







### `v-model`指令

> 在`表单`控件或组件上创建双向绑定
>
> >1. 表单的值改变时会影响绑定的数据
> >2. 数据的值改变时会影响表单的值
> >3. 可以通过修饰符进行限制
>
> [传送门:v-model指令](https://cn.vuejs.org/v2/api/#v-model)
>
> [传送门:处理用户输入](https://cn.vuejs.org/v2/guide/#处理用户输入)



语法:

1. `v-model="数据"`

2. 输入框，单选框，下拉框，等表单控件都可以使用

3. 输入框 获取到的是 value值,

4. ```
   <div id="app">
         <!-- 1. 输入框
               输入框 获取到的是 value值
               双向数据绑定
                 data中的数据----》元素的value值
                 value值改变----》data中的数据
         -->
         <input type="text" v-model="iptVal" />
         <h3>iptVal:{{iptVal}}</h3>
         <!-- 2. 下拉框
             select标签内部的选项 通过option来设置
             选中了某个选项之后，value值会设置给select
             <option value="🐷">小猪猪</option>
               标签内的值，给用户看的
               value 内部获取到的值，一般是给开发者看的
             select 获取到的是选中的option的 value值
         -->
         <select v-model="selVal">
           <option value="🐷">小猪猪</option>
           <option value="🐇">小兔兔</option>
           <option value="🐕">小狗狗</option>
         </select>
         <h3>selVal:{{selVal}}</h3>
         <!-- 3. 复选框 
             获取到的是选中状态
             v-model大部分情况下获取到的是value
             偶尔会获取到其他的值，比如选中状态
         -->
         <input type="checkbox" v-model="checked" />
         <h3>checked:{{checked}}</h3>
       </div>
       
       <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
       <script>
         new Vue({
           el: '#app',
           data: {
             iptVal: '么么哒!',
             selVal: '🐷',
             checked: false,
           },
         })
       </script>
   ```

5. 

```html
</head>
  <body>
    <div id="app">
      <!-- 1. 基本使用 -->
      <!-- <input type="text" v-model="info" /> -->
      <!-- 2. 修饰符 -->
      <input type="text" v-model.trim="info" />
      <p @click="info='你好吗'">info:{{info}}</p>
      <!-- 3. 复选框 -->
      <input type="checkbox" v-model="done" />
      <p @click="done=!done">done:{{ done }}</p>
      <!-- 4.select -->
      <select v-model="fruit">
        <option value="1">西瓜</option>
        <option value="2">哈密瓜</option>
        <option value="3">火龙果</option>
      </select>
      <p @click="fruit=3">fruit:{{fruit}}</p>
    </div>

    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          info: '',
          done: false,
          fruit: '1',
        },
      })
    </script>
</body>

```



#### v-model的本质01

> v-model的处理逻辑
>
> [传送门:在组件上使用v-model](https://cn.vuejs.org/v2/guide/components.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-v-model)
>
> [传送门:表单输入绑定](https://cn.vuejs.org/v2/guide/forms.html)





处理逻辑:

1. 对于输入框:把数据设置给value值，在input事件中获取最新的val值并设置给data
2. 对于选择框:把数据设置给checked，在change事件中获取最新的checked并设置给data

```
<!-- v-model 简写 -->
<input type="text" v-model="ipt1" />
<!-- v-model 完整写法 -->
<input type="text" :value="ipt2" @input="inputFunc" />
```

```
<input type="checkbox" v-model="chk1" />
<input type="checkbox" :checked="chk2" @change="changeFunc" />
```



测试代码:

```html
 <body>
    <div id="app">
      <h3>输入框 - v-model</h3>
      <!-- 简写 -->
      <input type="text" v-model="ipt1" /> - <span>val:{{ipt1 }}</span>
      <br />
      <!-- 完整写法 -->
      <input type="text" :value="ipt2" @input="inputFunc" />- <span>val:{{ipt2 }}</span>
      <h3>选择框</h3>
      <input type="checkbox" v-model="chk1" /> - <span>checked:{{chk1 }}</span>
      <br />
      <input type="checkbox" :checked="chk2" @change="changeFunc" /> - <span>checked:{{chk2 }}</span>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          ipt1: '你好',
          ipt2: '我好',
          chk1: false,
          chk2: true,
        },
        methods: {
           // 不传参时 默认有一个事件对象
          inputFunc(event) {
            this.ipt2 = event.target.value
          },
          changeFunc(event) {
            this.chk2 = event.target.checked
          },
        },
      })
    </script>
</body>
```







#### v-model的本质02

> 结合`$event`,把v-model写到行内

目标:

1. 了解在表单元素上v-model指令内部的处理逻辑
2. 了解为什么购物车案例中全选会报错



内部逻辑

1. 对于输入框:把数据设置给value值，在input事件中获取最新的val值并设置给data
2. 对于选择框:把数据设置给checked，在change事件中获取最新的checked并设置给data



测试代码:

1. 这次代码和上一次相同，区别是把逻辑写到了行内

```html
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <h3>输入框 - v-model</h3>
      <!-- 简写 -->
      <input type="text" v-model="ipt1" /> - <span>val:{{ipt1 }}</span>
      <br />
      <!-- 完整写法 -->
      <input type="text" :value="ipt2" @input="ipt2=$event.target.value" />- <span>val:{{ipt2 }}</span>
      <h3>选择框</h3>
      <input type="checkbox" v-model="chk1" /> - <span>checked:{{chk1 }}</span>
      <br />
      <input type="checkbox" :checked="chk2" @change="chk2=$event.target.checked" /> - <span>checked:{{chk2 }}</span>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          ipt1: '你好',
          ipt2: '我好',
          chk1: false,
          chk2: true,
        },
      })
    </script>
  </body>
</html>


```



#### v-model细节



-  默认情况下，v-model时，父传子，子里的props一定要叫value,子传父的事件一定要叫`input`，其实也可以改 

-  在`子`里，写一个属性叫 `model`，通过`prop`来指定属性名，通过`event`来指定事件名 

-  语法 

  ```
  //子组件
  model: {
      prop: 'active',
      event: 'changeIndex'
  }
  ```

  如果你在子里面写了上面这句话，那么以后父组件用子组件写`v-model`就帮你生成了

  ```
  :active="数据" 以及 @changeIndex="数据 = $event"
  ```

  







## 自定义指令

>特点：它内部不能直接使用this(vue实例对象)

```js
Vue.directive('指令名',{
 //  指令的生命周期
   bind:绑定时，类似于beforeMount,指令绑定于相应dom时执行，这时还没有完成渲染
   inserted:指令所在dom添加到父节点时执行（类似于mounted,渲染时）
   update:更新时，指令所在组件有更新时执行，并不保证指令所在dom更新完成
   componentUpdated:更新完成时，指令所在组件包含子组件都更新时执行，类似于updated
   unbind:销毁前，类似于beforeDestroy,指令所在dom解决绑定时执行（v-if=false,或者指令所在
   组件销毁时执行，指令所在dom销毁时也会执行）
   bind(dom,obj,vnode){
     dom:指令所在dom
     obj:{
        属性，修饰符，指令名，值
     }
     vnode:节点信息
        指令所在组件的实例对象
        context:指令所在组件的实例对象（指令所在组件的thid）
   }
})
```







## 四，Vue选项

### el:‘ 挂载目标’

> 挂载目标
>
> [传送门:el选项](https://cn.vuejs.org/v2/api/#el)

**作用:**

​	

1. 提供一个页面上已经存在的Dom元素作为`Vue实例`的`挂载目标`
2. **说人话:**设置Vue去管理的元素,只有这个元素及他的后代元素会被Vue管理
3. 可以设置各种选择器，推荐用`id`，因为唯一
4. 不能使用`body`和`html`

**测试代码**:

```html
<body>
    <div id="app">{{ message }}</div>
    <div class="box">{{ message }}</div>
    <p>{{ message }}</p>
    <!-- 引入vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      const app = new Vue({
        // el: '#app', // 可以
        // el: '.box', // 可以
        // el: 'p', // 可以
        // el:'body', // 报错
        el: 'html', // 报错
        data: {
          message: 'Hello Vue!',
        },
      })
    </script>
</body>
```





### data:{ 数据} ||  data(){ return{数据} }

> 设置`Vue`实例的`数据`对象
>
> [传送门:data选项](https://cn.vuejs.org/v2/api/#data)

**概念**：

1. 设置`Vue`实例的`数据`对象
2. 符合`js`的语法规范即可,`对象`的语法

**测试代码**

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
      const app = new Vue({
        //挂载vue
        el: '#app',
        //设置vue数据
        data: {
          message: 'Hello Vue!',
          info: '感觉自己萌萌哒',
          foods: ['西瓜', '哈密瓜'],
          friend: {
            name: 'jack',
            skill: '跳舞',
            sayHi() {
              console.log('你好吗')
            },
          },
        },
      })
</script>
```

### methods: {函数}

> 声明方法

vue中的函数需要在`methods:{}`中进行声明

```html
methods: {
//在methods对象中声明函数
   changeList() {
	console.log('我是函数')
   },
}
```



### watch(侦听器):{}

> 在数据改变时执行自定义的逻辑
>
> [传送门:侦听器](https://cn.vuejs.org/v2/guide/computed.html#%E4%BE%A6%E5%90%AC%E5%99%A8)
>
> [传送门:侦听器-api](https://cn.vuejs.org/v2/api/#watch)



语法:

1. 常用的3种写法如下

```javascript
watch: {
  // 1. 基本用法
  // 参数1：新数据
  // 参数2：老数据
  info(newVal, oldVal) {
    console.log(newVal, oldVal)
  },
  // 2. 复杂类型2个形参的值一致
  // 复杂数据，数据改变也会触发
  // 复杂数据类型，参数1和参数2都是栈中的值，指向的是同一份复杂数据
  // 复杂数据类型，结合侦听器时，不建议使用nVal和oVal
  // 直接this即可获取
  list() {
    console.log('this.list:', this.list)
  },
  //3. 额外的设置
  //  复杂类型的数据，内层的属性 默认 Vue不检测，出于性能考虑
  list: {
    handler() {
        // handler是固定的名字 数据改变时执行的逻辑
    },
    deep: true, // 深度监听 内层属性也会检测到
    immediate: true, // 立即执行一次
  },
},

```

注意：

1. 和data平级

2. 侦听的数据名 和 data中的数据 同名



测试代码

```html
 <body>
    <div id="app">
      <h3>info:{{ info }}</h3>
      <button @click="info+='!'">修改info</button>
      <p>{{ list }}</p>
      <button @click="changeList">直接修改list</button>
      <button @click="changeFood">修改list内部</button>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          info: '感觉自己萌萌哒',
          list: [
            {
              id: 1,
              food: '🐇',
            },
            {
              id: 2,
              food: '🐕',
            },
            {
              id: 3,
              food: '🐶',
            },
          ],
        },
        methods: {
          doSomething() {
            console.log('info改变啦!')
          },
          changeList() {
            this.list = this.list.map(v => {
              v.food += '!'
              return v
            })
          },
          changeFood() {
            this.list[0].food += '🍚'
          },
        },

        watch: {
          // 1. 基本用法
          // info(newVal, oldVal) {
          //   console.log(newVal, oldVal)
          // },
          // 2. 复杂类型 直接监听只有被重新赋值时会触发
          // 2个参数都是引用类型,结果相同
          // list() {
          //   console.log('this.list:', this.list)
          // },
          // 3. 复杂类型,内部数据改变也要触发可以使用深度监听
          list: {
            handler() {
              console.log('this.list:', this.list)
            },
            deep: true,
            immediate: true, // 默认执行一次
          },
        },
      })
    </script>
 </body>
```









### `filters`(过滤器):{}

> 过滤器可以对渲染的数据进行处理
>
> [传送门:过滤器](https://cn.vuejs.org/v2/guide/filters.html#ad)
>
> [传送门:全局过滤器-api](https://cn.vuejs.org/v2/api/#Vue-filter)
>
> [传送门:本地过滤器-api](https://cn.vuejs.org/v2/api/#filters)



语法:

1. 可以用在属性和 `{{}} `中，常用于`{{}}`
2. 可以串连，可以传递参数
3. `|`也叫管道符

注意：

1. 自定义参数，一定是从第二个开始



```html
  <h4>{{ info | fil1 | fil2 | fil3 }}</h4>
  <h4>{{ info | fil4('🐕🐕') }}</h4>

<script>
  // 1.全局过滤器
   // 参数1，过滤器名
   // 参数2，过滤器的逻辑，接收一个参数，返回一个值
   // 后续所有的Vue实例中都可以使用
  Vue.filter('过滤器名', val => {
    return val + '--过滤器1--'
      // // 任意的处理逻辑
      // // 返回新的值
      // return '🍚'
      // 一般是稍作处理
  })
  // 全局过滤器也可以传递参数 和本地过滤器写法类似
 Vue.filter('addSomePlus', (val, param) => {
     return val + param + '牛哄哄'
 })
    
  Vue.filter('fil2', val => {
    return val + '--过滤器2--'
  })

  new Vue({
    el: '#app',
    data: {
      info: '西兰花',
    },
    // 2. 本地过滤器 定义Vue的选项中
  	// 只能在当前这个Vue实例管理的结构内部使用
    filters: {
      fil3(val) {
        return val + '--过滤器3--'
      },
      // 2. 过滤器传参
      // 自定义参数，一定是从第二个开始
      fil4(val, param) {
        return val + '--过滤器4--' + param
      },
    },
  })
</script>

```



#### 例：过滤器处理日期

> 通过dayjs结合过滤器处理日期
>
> [传送门:dayjs](https://dayjs.fenxianglu.cn/)



需求：

1. 结合dayjs和过滤器来格式化日期
2. 基础模板

```html
<body>
    <div id="app">
      <h3>处理日期</h3>
      <!-- 全局 -->
      <h3>{{ time | gFormatTime }}</h3>
      <!-- 本地 -->
      <h3>{{ time | formatTime }}</h3>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/dayjs/1.4.1/dayjs.min.js"></script>

    <script>
      // 1. 全局过滤器
      Vue.filter('gFormatTime', val => {
        // 处理并返回即可
        console.log('val:', val)
        const res = dayjs(val).format('YYYY年MM月DD日 HH时mm分ss秒')
        console.log('res:', res)
        return res
      })
      new Vue({
        el: '#app',
        data: {
          time: 1646171185000,
        },
        // 有s 因为可以写多个
        filters: {
          formatTime(val) {
            const res = dayjs(val).format('YYYY🐔MM🐇DD🐷')
            console.log('res:', res)
            return res
          },
        },
      })
    </script>
</body>
```





#### 方法实现过滤器效果

> 方法实现过滤器
>
> [传送门:Vue3中对于过滤器的说明](https://v3.cn.vuejs.org/guide/migration/filters.html)



步骤:

1. 方法可以接受参数
2. 方法内部可以写逻辑
3. 方法可以有返回值
4. 直接行内调用即可



取舍

1. vue2中，过滤器继续使用，因为还有老项目
2. 了解如何使用方法替代
3. vue3中过滤器被废弃了，推荐用方法或者计算属性来替代



测试代码

```html
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <!-- 过滤器版本 -->
      <h3>{{ food | addInfo }}</h3>
      <!-- 方法版本 -->
      <h3>{{ addInfoFunc(food) }}</h3>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          food: '西兰花',
        },
        filters: {
          addInfo(val) {
            return val + '好吃！-filter'
          },
        },
        methods: {
          addInfoFunc(val) {
            return val + 'おいしい ！- method'
          },
        },
      })
    </script>
  </body>
</html>

```







### computed(计算属性):{}

> 如果获取某个值，需要通过稍显复杂的计算，比如购物车中的总价和总个数，就可以用到计算属性了
>
> [传送门:计算属性](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7)



概念:

1. 复杂取值逻辑不推荐写成行内表达式，不好维护，不好复用
2. 计算属性可以把行内的逻辑抽取到方法中，可读性，维护性都会更好
3. 响应式的

注意：

​	计算属性使用时，当作属性用即可 不需要加括号，内部会调用

语法:

1. 定义

```javascript
  const app = new Vue({
    el: '#app',
    data: {
      msg: '感觉自己萌萌哒!!!'
    },
    // 计算属性写在computed中
    computed: {
      // 定义计算属性
      msgLength () {
        /*
          写逻辑语句,可以通过this访问vue实例
        */
        // 返回计算结果
        return 结果
      }
    }
  })

```

2. 使用

```html
<div id="app">
  <h2>使用计算属性:{{ msgLength }}</h2>
</div>

```









#### 方法实现计算属性效果

> 如何通过方法实现计算属性一样的效果呢?
>
> >1. 方法中可以通过this获取实例
> >2. 方法内部可以写逻辑
> >3. 方法可以有返回值
> >4. 直接行内调用即可
>
> [传送门：计算属性vs方法](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%BC%93%E5%AD%98-vs-%E6%96%B9%E6%B3%95)



示例代码



```html
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <button @click="add">增加</button>
      <h2>选中个数-计算属性{{ checkedNum }}</h2>
      <h2>选中个数-方法{{ checkedNum_method() }}</h2>
      <h3 v-for="item in list" :key="item.id">{{ item }}</h3>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          list: [
            {
              id: 1,
              name: '西瓜',
              isChecked: false,
            },
            {
              id: 2,
              name: '哈密瓜',
              isChecked: true,
            },
            {
              id: 3,
              name: '菠萝',
              isChecked: false,
            },
          ],
        },
        methods: {
          add() {
            this.list.push({
              id: Date.now(),
              name: '好吃的水果',
              isChecked: true,
            })
          },
          checkedNum_method() {
            return this.list.filter(v => v.isChecked).length
          },
        },
        computed: {
          // 获取选中的水果个数
          checkedNum() {
            return this.list.filter(v => v.isChecked).length
          },
        },
      })
    </script>
  </body>
</html>

```



#### 计算属性的优势（缓存）

> 方法 与 计算属性： 效果相同  性能消耗不同
>
> 计算属性的优势是什么？（计算属性有 缓存）
>
> >页面重新渲染时  方法都会执行
> >
> >计算属性只有在内部依赖的数据改变时才会重新执行
>
> [传送门：计算属性vs方法](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%BC%93%E5%AD%98-vs-%E6%96%B9%E6%B3%95)



测试:

1. 上一节的代码，页面中加上一个v-model数据绑定输入框
2. 方法和计算属性中增加输出的代码
3. 输入框打字，看打印
4. 修改数组，看打印



原因：

1. 方法会在页面重新渲染时执行
2. 计算属性只有在内部依赖的数据改变时才会重新执行
3. 功能上 相同
4. 性能上：推荐用计算属性，因为有缓存





测试代码：

```html
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <button @click="add">增加</button>
      <!-- 测试用输入框 -->
      <input v-model="info" type="text" />
      <h2>选中个数-计算属性{{ checkedNum }}</h2>
      <h2>选中个数-方法{{ checkedNum_method() }}</h2>
      <h3 v-for="item in list" :key="item.id">{{ item }}</h3>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          info: '',
          list: [
            {
              id: 1,
              name: '西瓜',
              isChecked: false,
            },
            {
              id: 2,
              name: '哈密瓜',
              isChecked: true,
            },
            {
              id: 3,
              name: '菠萝',
              isChecked: false,
            },
          ],
        },
        methods: {
          add() {
            this.list.push({
              id: Date.now(),
              name: '好吃的水果',
              isChecked: true,
            })
          },
          checkedNum_method() {
            // 页面更新时就会重新执行方法
            console.log('方法执行啦')
            return this.list.filter(v => v.isChecked).length
          },
        },
        computed: {
          // 获取选中的水果个数
          checkedNum() {
            // 只有计算属性依赖的数据改变时才会重新执行
            console.log('计算属性执行啦')
            return this.list.filter(v => v.i·sChecked).length
          },
        },
      })
    </script>
  </body>
</html>

```











#### 计算属性的set

> 如果要给计算属性赋值，可以通过计算属性的set来实现
>
> [传送门:计算属性的set](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%9A%84-setter)



1. 计算属性默认的`function+return`的写法可以返回结果
2. 如果要为计算属性赋值，需要额外的实现`set`，如果没有实现就报错啦



概念:

1. 计算属性默认只有 getter，不过在需要时你也可以提供一个 setter
2. getter:function+return的写法
3. setter:function+参数的写法



语法:

默认写法：默认只有get获取值   无法对计算属性赋值 

```js
  new Vue({
    computed: {
      somCom: {
      	 return  // 逻辑
      },
    },
  })
```





setter写法：可以对计算属性进行读写

```javascript
  new Vue({
    computed: {
      somCom: {
        // 等同于 function+return的写法
        get() {
          return ''
        },
        // 需要时再添加
        set(newValue) {
          // 逻辑
        },
      },
    },
  })

```



测试代码:

```html
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <!-- 1. 计算属性取值 -->
      <h2>{{ foodInfo }}</h2>
      <button @click="foodInfo='菠萝--3元/斤'">为计算属性赋值</button>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          food: '西兰花',
          price: '2元/斤',
        },
        computed: {
          foodInfo: {
            // 等同于下面的 函数写法
            get() {
              return this.food + '--' + this.price
            },
            set(val) {
              console.log('val:', val)
              const res = val.split('--')
              this.food = res[0]
              this.price = res[1]
            },
          },
          // foodInfo() {
          //   return this.food + this.price
          // },
        },
      })
    </script>
  </body>
</html>


```



小结:

1. 计算属性是否可以赋值?可以/不行
2. 要实现计算属性赋值需要实现什么?set/get

### components: {}

>组件的注册
>
>本地组件需要在components中进行注册才能使用



1. 在希望使用的组件中导入

   ```js
   import ComponentA from './components/ComponentA.vue'
   import ComponentB from './components/ComponentB.vue'
   ```

2. 在components中完成注册

   ```javascript
   {
     components: {
       'component-a': ComponentA,
       'component-b': ComponentB
     }
   }
   ```

3. 即可在页面中使用,可以使用n个

   ```vue
   <ComponentA></ComponentA>
   <ComponentB></ComponentB>
   ```



### props:[]  ||  props:{}

> 父组件向子组件传参

### )}





---





## 五，Vue组件



### Vue-CLI自定义配置

> 到目前为止，咱们创建项目都是默认配置，然后自行安装其他的东西，Vue-CLI可以在创建项目的时候通过自定义的形式把这些都安装了哦
>
> [传送门:创建项目](https://cli.vuejs.org/zh/guide/creating-a-project.html)

项目要求:

1. vue2
2. less
3. vue-router,hash模式
4. vuex
5. 开启ESLint



步骤:

`vue create 项目名`



1. 创建项目时选择第3个

   ![img](https://gitee.com/westblueflower/imgs/raw/master/img/202204131737175.png)

2. 选择内容:

   ![img](https://gitee.com/westblueflower/imgs/raw/master/img/202204131740627.png)

3. 根据上一步选择的内容依次选择

   ![img](https://gitee.com/westblueflower/imgs/raw/master/img/202204131741285.png)

   ![img](https://gitee.com/westblueflower/imgs/raw/master/img/202204131742028.png)

   ![img](https://gitee.com/westblueflower/imgs/raw/master/img/202204131742017.png)

   ![img](https://gitee.com/westblueflower/imgs/raw/master/img/202204131742649.png)

   ![img](https://gitee.com/westblueflower/imgs/raw/master/img/202204131742268.png)

   ![img](https://gitee.com/westblueflower/imgs/raw/master/img/202204131742995.png)

   ![img](https://gitee.com/westblueflower/imgs/raw/master/img/202204131743574.png)

保存配置:

1. 保存配置之后，下次创建会多一个选项

![img](https://gitee.com/westblueflower/imgs/raw/master/img/202204131743127.png)

2. 如果以后不想保留这个配置了，可以删掉 ：
   1. 来到 `C:\Users\你电脑用户名\.vuerc`文件，用`vscode`打开它

![img](https://gitee.com/westblueflower/imgs/raw/master/img/202204131743880.png)



作用:

1. 利用自定义配置结合保存配置
2. 下次可以一步到位创建项目，并一次性整合所需的第三方模块







### 1.Vue组件基本概念

> 1. Vue中可以通过组件对，结构，逻辑，样式进行抽取
> 2. Vue组件是可以复用的Vue示例，可以通过名字复用任意次
> 3. 通常一个应用会以一棵嵌套的组件树的形式来组织

![Component Tree](https://gitee.com/westblueflower/imgs/raw/master/img/202204070724377.png)

#### (1).全局组件注册(实例方法)

1. 接下来咱们来看看如何编写全局组件,下面是一个按钮组件
2. 在创建Vue示例之前，执行如下代码
3. 在Vue实例的结构中 即可使用`button-counter`,来整合该组件

```javascript
// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data () {
    return {
      count: 0
    }
  },
  template: '<button @click="count++">你点了 {{ count }} 次.</button>'
})

```

2. 接下来是2个盒子组件，用法类似

```javascript
  // 头部盒子
  Vue.component('nav-box', {
    data() {
      return {
        title: '我是头部盒子',
      }
    },
    template: `<div style="background:skyblue;height:100px">
         <h2>{{ title }}</h2>
      </div>`,
  })
  // 底部盒子
  Vue.component('bottom-box', {
    data() {
      return {
        title: '我是底部盒子',
      }
    },
    template: `<div style="background:orange;height:100px">
         <h2>{{ title }}</h2>
      </div>`,
  })

```



#### 组件局部注册及使用(Vue-CLI)

> 通过Vue-CLI，咱们可以用更为简便的方法来编写Vue组件，
>
> [传送门:局部注册](https://cn.vuejs.org/v2/guide/components-registration.html#%E5%B1%80%E9%83%A8%E6%B3%A8%E5%86%8C)



1. 在希望使用的组件中导入

   ```js
   import ComponentA from './components/ComponentA.vue'
   import ComponentB from './components/ComponentB.vue'
   ```

2. 在components中完成注册

   ```javascript
   {
     components: {
       'component-a': ComponentA,
       'component-b': ComponentB
     }
   }
   ```

3. 即可在页面中使用,可以使用n个

   ```vue
   <ComponentA></ComponentA>
   <ComponentB></ComponentB>
   //可以使用单标签
   <ComponentB />
   ```



#### 组件名

> `kebab-case`   多个单词，都小写，用`-`分隔
>
> `PascalCase `   多个单词，单词首字母大写
>
> [传送门:组件名](https://cn.vuejs.org/v2/guide/components-registration.html#%E7%BB%84%E4%BB%B6%E5%90%8D)
>
> [传送门:风格指南](https://cn.vuejs.org/v2/style-guide/#%E7%BB%84%E4%BB%B6%E5%90%8D%E4%B8%BA%E5%A4%9A%E4%B8%AA%E5%8D%95%E8%AF%8D%E5%BF%85%E8%A6%81)



1. 组件名是注册时和使用时的名字
2. 写法1： `kebab-case`
   1. 多个单词，都小写，用`-`分隔
   2. 使用时直接用该名字即可
3. 写法2：`PascalCase`
   1. 多个单词，单词首字母大写
   2. 使用时用该名字，或者对应的`kebab-case`写法均支持
4. 推荐用写法1
5. 组件的`name`属性建议和组件名相同，`chrome`插件中可以看到该名字



#### 组件关系

> 当项目中的组件越来越多之后，组件之间可能出现彼此嵌套的情况，咱们如何去称呼这些组件呢

![](https://cn.vuejs.org/images/components.png)

1. 项目中组件越来越多之后，会形成一个树形结构,这个结构称之为`组件树`
2. 有嵌套关系的组件，称之为`父子组件`
   1. 父组件1个
   2. 子组件n个
3. 父组件相同的组件，称之为`兄弟组件`
4. 多层嵌套，祖孙，或者曾孙，用的不多





#### (2).组件选项

1. 组件的data需要写成function+return的写法
2. 其他的选项都一样

   





#### (3).Vue组件-单文件组件



步骤:

1. 创建后缀名为`.vue`的文件（单文件组件）
2. 使用代码片段`<vue`，根据提示生成



结构解析:

1. `template`：组件的结构，必须有根节点
2. `script`:逻辑，可以省略
3. `style`:样式，可以省略





### 2. Vue-CLI-概念及安装

> 1. `Vue-CLI`是基于`webpack`搭建
> 2. 基本上把所有开发中需要用到的插件，`loader`，配置都整合
> 3. 不需要去纠结各种配置，开箱即用
>
> [传送门:Vue-CLI官网](https://cli.vuejs.org/zh/)



步骤:

1. 切换到淘宝镜像:`nrm use taobao`
2. 安装全局模块:`npm install -g @vue/cli`
3. 确认安装:`vue --version`





### 3. Vue-CLI项目创建

步骤:

1. 在希望创建项目的位置，执行命令:`vue create 项目名`
   1. 非中文，不要大写字母，特殊符号
2. 选择Vue2默认设置的版本，回车
3. 等待成功，并根据提示执行命令







### 4. Vue-CLI项目结构



说明:

> public/模板页
>
> > ico图标
> >
> > html模板
>
> src:编码区域
>
> >assets 静态资源（文件夹）
> >
> >components 组件（文件夹）
> >
> >App.vue 顶级组件
> >
> >main.js 项目打包入口

> ...其他配置文件

![image-20220407160140216](https://gitee.com/westblueflower/imgs/raw/master/img/202204071601731.png)

![image-20220407160234750](https://gitee.com/westblueflower/imgs/raw/master/img/202204071602735.png)

![image-20220407160522218](https://gitee.com/westblueflower/imgs/raw/master/img/202204071605745.png)







#### Vue-CLI main.js

> 1. main.js相当于之前webpack打包的入口文件
> 2. 所有要打包的文件，都可以直接或者间接的弄进来



```javascript
// 导入Vue
import Vue from 'vue'
// 导入App
import App from './App.vue'

// 生产信息
Vue.config.productionTip = false

// 实例化
new Vue({
  // 把App组件替换到 #app中
  render: h => h(App),
})
  // 等同于 el
  .$mount('#app')


```



Vue-CLI创建项目的启动流程

![img](https://gitee.com/westblueflower/imgs/raw/master/img/202204080120094.png)







####  Vue-CLI App.vue

> 1. 项目中除了Root以外最顶级的Vue组件
> 2. 可以写目前学过的所有Vue的语法



```vue
<template>
  <div>
    <h2>我是标题</h2>
    <h3>{{ info | addInfo }}</h3>
    <input type="text" v-model="info" />
    <br />
    <button @click="info = '萌你奶奶个腿！'">按钮</button>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item }}
      </li>
    </ul>
    <h3>长度：{{ listLength }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: '感觉自己萌萌哒',
      list: [
        {
          id: 1,
          food: '🍚',
        },
        {
          id: 2,
          food: '🍔',
        },
        {
          id: 3,
          food: '🍟',
        },
      ],
    }
  },
  computed: {
    // 计算属性
    listLength() {
      return this.list.length
    },
  },
  // 侦听器
  watch: {
    info() {
      console.log('info改变了！！！')
    },
  },
  filters: {
    addInfo(val) {
      return val + '~~~~~~~~~~我是一个可爱的小尾巴~~~'
    },
  },
}
</script>

<style></style>


```



### 组件中的style

#### style中的样式是全局样式

> 组件style标签中的样式是全局样式



#### Scoped CSS

> 除了上一节分析的解决方案意外，在Vue中还可以通过Scoped CSS 来解决，直译过来，就是范围样式
>
> [传送门：Scoped CSS](https://vue-loader.vuejs.org/zh/guide/scoped-css.html)

```vue
// vue组件
<style scoped>
	...样式代码
</style>
```



1. 通过属性选择器限制样式的作用范围
2. `scoped`会自动给组件内的所有标签添加 **data-v-hash值**属性
3. 并自动给style中的所有选择期加上属性选择期
4. 从而限制样式的作用范围



#### Vue-CLI中启用less

> 使用css预处理器可以更好的编写样式，Vue-CLI中默认并没有启用
>
> [传送门：预处理器](https://cli.vuejs.org/zh/guide/css.html#%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8)



步骤：

1. 下载所需的第三方模块

```bash
npm install -D less-loader less
```

2. style中添加：`lang="less"`

```vue
// vue组件
<style lang="less">
	...样式代码
</style>
```

vue可以解析less (vue中可直接导入less等文件)

- 添加less文件，在main.js中导入试试





#### 深度作用选择器

> scoped可以限制样式的作用范围，看起来挺美的，有坑吗?这一节咱们来踩一下
>
> [传送门：深度作用选择器](https://vue-loader.vuejs.org/zh/guide/scoped-css.html#%E6%B7%B1%E5%BA%A6%E4%BD%9C%E7%94%A8%E9%80%89%E6%8B%A9%E5%99%A8)



作用:

1. 让`scoped`限制的样式，可以作用到`子组件`的内部元素



测试:

1. 在`/views/HomeView.vue`中
2. 让`MyButton.vue`上下居中
3. 让`MyButton.vue`内部的文字颜色变红，加粗





分析:

1. sciped添加的自定义属性会作用到子组件根标签，但是内部的标签作用不到
2. 除非使用了`深度作用选择器`，有几种写法变种，这里推荐`::v-deep`
3. 测试效果并分析原因



原因:

1. 设置了`::v-deep`之后，生成的样式中`[data-v-哈希]`选择器会上移一级
2. 保证内部元素可以被选择器命中



小结:

1. `scoped`限制的样式如何作用到子组件内部?::v-deep/v-bottom





注意：

1. ::v-deep移动几层
2. 直接写`子组件`内部不就好了？
   1. 不通用，有些样式在某个页面才需要
   2. 工作中如果是第三方的组件库，代码是压缩过









### 组件中$event关键字

> `$event`在组件上的效果和`dom`元素上不一样哦
>
> 1. 针对`内联语句`
> 2. `dom`元素上:事件参数
> 3. `子组件`上:通过事件传递出来的值
>
> 
>
> [传送门：使用事件抛出一个值](https://cn.vuejs.org/v2/guide/components.html#%E4%BD%BF%E7%94%A8%E4%BA%8B%E4%BB%B6%E6%8A%9B%E5%87%BA%E4%B8%80%E4%B8%AA%E5%80%BC)



测试代码:



1. `App.vue`

2. `/components/AddCom.vue`

3. 替换为模板的代码，并确认结构

4. 把`App.vue`中`methods`内的逻辑，迁移到行内

   ```vue
   <AddCom :num="fNum2" @numChange="fNum2 = $event" />
   ```

   



模板:

1. `App.vue`

   ```vue
   <template>
     <div>
       <AddCom :num="fNum" @numChange="func" />
     </div>
   </template>
   
   <script>
   import AddCom from './components/AddCom.vue'
   export default {
     components: {
       AddCom,
     },
     data() {
       return {
         fNum: 10,
       }
     },
     methods: {
       func(newNum) {
         this.fNum = newNum
       },
     },
   }
   </script>
   
   <style></style>
   
   ```

   

2. `/components/AddCom.vue`

   ```vue
   <template>
     <div class="my-input-number">
       <!-- 累加 -->
       <span @click="add" role="button" class="my-input-number__increase"> + </span>
       <div class="my-input">
         <!-- 数字显示区域 -->
         <span class="my-input__inner">{{ num }}</span>
       </div>
     </div>
   </template>
   <script>
   export default {
     name: 'my-input-number',
     props: {
       num: {
         type: Number,
       },
     },
     methods: {
       add() {
         this.$emit('numChange', this.num + 1)
       },
     },
   }
   </script>
   
   <style lang="less">
   .my-input-number {
     position: relative;
     display: inline-block;
     width: 100px;
     line-height: 38px;
     .my-input {
       display: block;
       position: relative;
       font-size: 14px;
       width: 100%;
     }
     .my-input__inner {
       -webkit-appearance: none;
       background-color: #fff;
       background-image: none;
       border-radius: 4px;
       border: 1px solid #dcdfe6;
       box-sizing: border-box;
       color: #606266;
       display: inline-block;
       font-size: inherit;
       height: 40px;
       line-height: 40px;
       outline: none;
       padding: 0 15px;
       transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
       width: 100%;
       padding-left: 10px;
       padding-right: 50px;
       text-align: center;
     }
     // 递减按钮
     .my-input-number__increase {
       position: absolute;
       z-index: 1;
       top: 1px;
       width: 40px;
       height: auto;
       text-align: center;
       background: #f5f7fa;
       color: #606266;
       cursor: pointer;
       font-size: 13px;
     }
     .my-input-number__increase {
       right: 1px;
       border-radius: 0 4px 4px 0;
       border-left: 1px solid #dcdfe6;
     }
   }
   </style>
   
   ```

   



### 组件上使用v-model

> 表单元素上可以通过`v-model`便捷的实现双向数据绑定，组件上也可以哦，但是写法略有不同
>
> [传送门:在组件上使用v-model](https://cn.vuejs.org/v2/guide/components.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-v-model)



语法:

1. 输入框中使用`v-model`等价于

   ```vue
   <input :value="xxx" @input="xxx = $event.target.value">
   ```

2. 组件上使用`v-model`等价于

   ```vue
   <custom-input :value="xxx" @input="xxx = $event"></custom-input>
   ```

3. 组件内部:

   1. `props`中定义什么属性？

      ```
      props:value
      ```

   2. `this.$emit`抛出什么事件？

      ```
       this.$emit('input', this.value + 1)
      ```

   3. 传递出最新的值



### ref 和 $refs

> `Vue`中推荐的开发方式是基于数据，如果要获取`dom`元素推荐通过`ref`的方式来完成
>
> [传送门:获取子组件实例或子元素](https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E6%88%96%E5%AD%90%E5%85%83%E7%B4%A0)
>
> [传送门:ref属性](https://cn.vuejs.org/v2/api/#ref)



作用:

1. 通过`ref` 给子元素或子组件注册引用信息。
2. 通过`$refs`即可获取标记的子元素或子组件
3. 进而获取对应的属性，或方法



语法:

1. 给子组件或子元素添加ref属性
   1. `<p ref="p">hello</p>`
   2. `<child-component ref="child"></child-component>`
2. 通过this.$refs.xxx即可获取对应的值
   1. `this.$refs.p`
   2. `this.$refs.child`
3. `$refs`是`Vue`实例内置属性，用来保存`ref`标记的引用信息











## 六，Vue组件通讯

### 1. props 父传子

#### props - 基本使用

> 通过props定义外部可以传递进来的数据
>
> 1. 组件中不确定的部分可以通过`props`让父组件传递进来
> 2. 类似于函数传参
>
> [传送门:通过prop向子组件传递数据](https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87-Prop-%E5%90%91%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE)



语法:

1. 定义:

   1. 组件中添加`props`属性
   2. 类型是一个数组，定义的可以传递的属性名

2. 使用:

   1. 为props中定义的属性传递数据即可

      ```
      //父组件：
      <props-com name="rose" age="18" male="女孩子" foods="剁辣椒，鱼头，牛肉"></props-com>
      ```

   2. 子组件内部可以直接使用数据

代码

```vue
//父组件
<template>
  <div class="app">
    <h2>app</h2>
    <props-com
      name="rose"
      age="99"
      male="女孩子"
      foods="热干面,水饺"
    ></props-com>
    <props-com name="robot" age="25" male="男孩子" foods="打卤面"></props-com>
    <props-com name="ice" age="29" male="男孩子" foods="隆江猪脚饭"></props-com>
  </div>
</template>

<script>
// 1.导入 并注册
import PropsCom from './components/PropsCom.vue'
export default {
  name: 'App', // 不写name属性chrome插件中有默认值，不利于调试，建议给上
  components: {
    PropsCom
  }
}
</script>
```



```vue
//子组件
<template>
  <div class="props-container">
    <h1>我叫:{{ name }}</h1>
    <h2>我今年:{{ age }}岁</h2>
    <h3>我是:{{ male }}</h3>
    <h4>我喜欢的食物是:{{ foods }}</h4>
  </div>
</template>

<script>
export default {
  // name: 'props-com',
  name: 'PropsCom',
  // 1.定义props
  props: ['name', 'age', 'male', 'foods'],
}
</script>

```





#### props-使用进阶

> 通过对象或者数组的形式进行更多的限制
>
> [传送门：props定义](https://cn.vuejs.org/v2/style-guide/#Prop-%E5%AE%9A%E4%B9%89%E5%BF%85%E8%A6%81)
>
> [传送门：props验证](https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81)



概念:

1. 定义props不推荐用数组，因为只能定义名字
2. 可以通过额外的属性设置，对props增加额外的显示



语法:

1. 通过对象或者数组的形式进行更多的限制

```javascript
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
```





#### props-单向数据流

> 父组件中数据的改变会传递给子组件，但是反过来却不行
>
> [传送门:单向数据流](https://cn.vuejs.org/v2/guide/components-props.html#%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81)



说明:

1. 父可以直接给子传递数据，并且传递时`父的数据变了，子的数据会跟着变`
2. 所谓的单向数据流就是只允许 `父数据改动能自动流入到子`，但是`子的数据不能流入到父`
3. 所以如果直接在 `子里`修改父传递来的数据，会报错，
4. 所谓的不允许修改，是指不允许修改 `栈` 上的数据，所以如果传递的是对象，在子里改了对象的属性，那是不会报错的，也允许的 (eslint会报错)

 





### 2. emit  子到父

> 如何在子组件中给父组件传递信息呢？可以通过emit来实现哦
>
> [传送门：监听子组件的事件](https://cn.vuejs.org/v2/guide/components.html#%E7%9B%91%E5%90%AC%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BA%8B%E4%BB%B6)
>
> [传送门：使用只组件抛出一个值](https://cn.vuejs.org/v2/guide/components.html#%E4%BD%BF%E7%94%A8%E4%BA%8B%E4%BB%B6%E6%8A%9B%E5%87%BA%E4%B8%80%E4%B8%AA%E5%80%BC)



语法：

1. 子组件：
   1. this.$emit('自定义的通知名', 数据)
   2. emit是Vue实例上默认存在的一个方法
2. 父组件：
   1. <son @changeMsg='fn'/>
   2. fn定义在methods
   3. 可以接收传递过来的参数，如果有的话

```vue
<template>
  <div class="son">
    <h2>我是子组件</h2>
    <button @click="sendMsg">传递信息给父组件，无参数</button>
    <button @click="sendMsgWithParam">传递信息给父组件,传递参数</button>
  </div>
</template>

<script>
export default {
  name: 'MyCom',
  methods: {
    sendMsg() {
      this.$emit('tellFather')
      console.log('this:', this)
    },
    sendMsgWithParam() {
      this.$emit('callFather', '没有生活费啦，肚子好饿，嘤嘤嘤！！')
    },
  },
}
</script>

<style>
.son {
  padding: 20px;
  background-color: yellowgreen;
  border: 1px solid #000;
}
</style>

```



```vue
<template>
  <div class="father">
    <h2>我是App</h2>
    <my-com @tellFather="doSome" @callFather="doSomething2"></my-com>
  </div>
</template>

<script>
// 1.导入并注册子组件
import MyCom from './components/MyCom.vue'
export default {
  name: 'App',
  components: {
    MyCom
  },
  methods: {
    doSome () {
      console.log('触发啦！')
    },
    // 添加 形参
    doSomething2 (sonMsg) {
      console.log('sonMsg:', sonMsg)
    }
  }
}
</script>

<style>
.father {
  padding: 10px;
  background-color: skyblue;
}
</style>

```



### 3. slot 传递结构

#### slot-基本使用

> 传递结构
>
> [传送门：通过插槽分发内容](https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87%E6%8F%92%E6%A7%BD%E5%88%86%E5%8F%91%E5%86%85%E5%AE%B9)



概念：

1. 到目前为止的组件，单标签和双标签的写法功能上没有区别
2. 如果要获取到双标签写法中，标签里面的内容就可以通过插槽-slot来实现



语法：

1.组件内部添加slot标签

​	可以是单标签（单标签不能设置默认值）

​	双标签 可以设置**默认值**

```vue
//子组件
<template>
  <div class="son">
    <h2>我是组件Com</h2>
    <!-- 3. 定义 slot 插槽 -->
    <!-- <slot /> -->
    <!-- 4. 设置默认值 -->
    <slot>
      <span style="border: 1px solid black; font-size: 30px">🐔🐷</span>
    </slot>
  </div>
</template>
```

2.使用

​	使用组件时写为双标签

​	希望传入的结构写在**标签内**

```vue
//父组件
<template>
  <div class="father">
    <h2>我是App</h2>
    <!-- 1. 如果不传递   结构 单双标签的组件写法都是ok的 -->
    <!-- <my-com></my-com> -->
    <!-- <MyCom /> -->
    <!-- 2.如果要传递结构 必须要写成双标签 -->
    <my-com>你好吗? 要不要去百度 <a href="#">百度</a> </my-com>
    <my-com> </my-com>
  </div>
</template>

<script>
// 1.导入并注册子组件
import MyCom from './components/MyCom.vue'
export default {
  name: 'App',
  components: {
    MyCom,
  },
}
</script>
```





#### slot-具名插槽

> 组件中，如果有多个结构需要从外部传递进来，可以使用具名插槽，顾名思义就是给插槽起名字



作用

1. 给组件内部的多个插槽起名字进行区分
2. 让传递的结构去往对应的插槽



语法：

1. `<slot name="名字"> 默认内容 </slot>`
2. `<template v-slot:插槽名字>要传递的内容</template>`
3. `<template #插槽名字>要传递的内容</template>`
4. **slot**，不设置名字有个默认值：**default**，默认插槽
5. 默认插槽的值可以省略**template**

```vue
//子组件
<template>
  <div class="son">
    <div class="top">
      <!-- 1. 不设置默认值 -->
      <slot name="top" />
    </div>
    <div class="main">
      <!-- 2. 用默认插槽替代,不设置默认值 -->
      <!-- <slot name='default' /> -->
      <slot />
    </div>
    <div class="footer">
      <!-- 3. 具名插槽+默认值 -->
      <slot name="footer">🦶</slot>
    </div>
    <div class="shoe">
      <!-- 4. 具名插槽 -->
      <slot name="shoe" />
    </div>
  </div>
</template>
```



```vue
//父组件
<template v-slot:shoe>
  <!-- 最外层的template 有自己的意义,写v-slot没用 -->
  <div class="father">
    <h2>我是App</h2>
    <my-com>
      <!-- 1.不用template包裹的内容 传给默认插槽 -->
      <!-- 默认插槽 有个默认的名字 default -->
      <template #default>
        <a href="#">👚</a>
        <a href="#">👖</a>
        👚👖👚
      </template>

      <!-- 2.传给具名插槽 完整写法 -->
      <template v-slot:top>
        <h3>🐼🐷</h3>
      </template>
      <!-- 3.传给具名插槽 简写 -->
      <template v-slot:shoe>
        <h3>👟👟</h3>
      </template>
    </my-com>
  </div>
</template>

<script>
// 1.导入并注册子组件
import MyCom from './components/MyCom.vue'
export default {
  name: 'App',
  components: {
    MyCom,
  },
}
</script>
```





### 动态组件

> 实现登录切换效果，还有一种更为常用的写法--**动态组件**
>
> [传送门:动态组件](https://cn.vuejs.org/v2/guide/components.html#%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6)



作用:

1. 更为便捷的实现不同组件切换
2. 相比于**登录切换**案例



语法:

1. `<component :is="组件名"/>`
2. `component`是`vue`内置的组件
3. 组件名为什么组件，就会渲染对应的组件
4. 和组件的`name`属性一致



测试:

1. 创建2个组件
   1. `/components/ComA.vue`
   2. `/components/ComB.vue`
2. `App.vue`中，导入+注册
3. 添加`component `并设置`name`属性



核心代码:

1. `App.vue`

```vue
<template>
  <div class="app">
    <div class="login-wrap">
      <!-- 头部 -->
      <ul class="nav">
        <!-- 修改名字即可切换 -->
        <!-- 切换A -->
        <li @click="comName = 'com-a'">组件A</li>
        <!-- 切换B -->
        <li @click="comName = 'com-b'">组件B</li>
      </ul>
      <component :is="comName" />
    </div>
  </div>
</template>

<script>
// 导入+注册组件
import ComA from './components/ComA.vue'
import ComB from './components/ComB.vue'
export default {
  data() {
    return {
      // 定义用来修改的变量
      comName: 'com-a',
    }
  },
  components: {
    ComA,
    ComB,
  },
  methods: {},
}
</script>

```

2. ComA和ComB类似

```vue
<template>
  <div class="com-a">
    <h2>组件A</h2>
  </div>
</template>

<script>
export default {
  name: 'com-a',
}
</script>

<style>
.com-a {
  height: 400px;
  width: 400px;
  background-color: orange;
}
</style>

```



### 缓存组件

> 默认情况下，只要不是操纵样式的组件隐藏，组件就会被销毁。组件中的所有状态，就都没有了，除非使用缓存组件
>
> `keep-alive`
>
> [传送门:keep-alive](https://cn.vuejs.org/v2/api/#keep-alive)



作用:

1. keep-alive包裹的动态组件，在切换时会缓存，而不是销毁
2. 可以通过一些限制缓存的组件或者缓存的个数



语法:

1. `keep-alive`包裹
2. 属性:
   1. `include` - 字符串或正则表达式。只有名称匹配的组件会被缓存。
   2. `exclude` - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
   3. `max` - 数字。最多可以缓存多少组件实例。



测试:

1. 在组件中绑定数据，比如`输入框结合v-model`
2. 测试有`keep-alive`和没有`keep-alive`时的差异









---

## 七，Vue生命周期

### 生命周期钩子

> 可以叫做**生命周期函数**,就是Vue提供的一堆**回调函数**而已,注册了就会自动执行哦
>
> [传送门:生命周期钩子](https://cn.vuejs.org/v2/guide/instance.html#%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)



概念:

- 在`Vue`各个阶段会自动执行的`回调函数`



语法

1. 和data平级
2. 有好几个,这里演示了3个
   1. created:实例化完毕，可以访问到data，methods等
   2. mounted：dom渲染完毕
   3. updated：数据改变，并且界面更新完毕之后触发

```javascript
  const app = new Vue({
    data: {},
    created () {
      console.log('created')
    },
    mounted () {
      console.log('mounted')
    },
    updated () {
      console.log('updated')
    }
  })
```



### 生命周期函数-无缓存

> 组件完整的生命周期钩子-不包含缓存组件
>
> [传送门:生命周期图示](https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)





概念

1. `Vue的生命周期` 指的是Vue实例(组件)从**创建到销毁**的一系列阶段
2. 为了让**开发者**可以在特定的时机添加自定义逻辑，`Vue`提供了一系列的回调函数
3. 这些回调函统称**生命周期钩子（函数）**



语法:

1. 编写位置和`data`，`methods`同级
2. 一共有4个阶段，8个钩子（不考虑缓存）
3. 创建阶段:(常用)
   1. `beforeCreate`：最早的钩子，访问不到data和methods等
   2. `created`（最常用）：最早**可以访问**到data和methods等的钩子
4. 渲染阶段（）
   1. `beforeMount`:渲染之前，还无法访问到dom
   2. `mounted`（常用）：渲染完成，最早可以访问到dom的钩子,
5. 更新阶段（不常用）
   1. `beforeUpdate`：数据改变，页面还没更新
   2. `updated`:数据改变，页面也更新完毕
6. 销毁阶段（任选其一用即可）
   1. `beforeDestory`：销毁前，还能访问到子组件
   2. `destoryed`：销毁后，访问不到子组件了
   3. 可以在这里做一些回收工作：例如：`停止定时器`，移除注册的全局事件等。。。

![img](https://www.yuque.com/api/filetransfer/images?url=https%3A%2F%2Fs2.loli.net%2F2022%2F03%2F28%2FAHBnPg5f8uw2cRW.png&sign=80db6b36dcbe05878b277c1fcca16ca8dc4c211e52f2b3ec341ad4e77dada348)





测试:

1. 在组件A和组件B中分别添加这8个钩子，并输出内容
2. 切换组件并确认输出的内容，参考代码如下

```vue
<script>
export default {
  name: 'com-a',
  beforeCreate() {
    console.log('com-a--beforeCreate')
  },
  created() {
    console.log('com-a--created')
  },
  beforeMount() {
    console.log('com-a--beforeMount')
  },
  mounted() {
    console.log('com-a--mounted')
  },
  beforeDestroy() {
    console.log('com-a--beforeDestroy')
  },
  destroyed() {
    console.log('com-a--destroyed')
  },
}
</script>
```





1. 



### 生命周期函数-缓存版本

> 使用了keep-alive缓存组件之后Vue也提供了对应的钩子函数，让咱们开发者可以注册逻辑
>
> keep-alive之后 额外增加的钩子函数



概念:

1. 使用了`keep-alive`之后，并切换组件时
2. 组件不会被销毁，所以原本的生命周期钩子就不再执行了
3. `Vue`额外提供了2个钩子，让我们注册初始化和释放资源的逻辑



语法:

1. `activated`：`mounted`之后，或者组件被激活时触发
2. `deactivated`：组件被隐藏时触发







### `$nextTick`方法

> 获取Vue更新之后的Dom元素，推荐的方法是`$nextTick`
>
> [传送门:异步更新队列](https://cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97)

1. Vue更新Dom是异步的
2. 了解`$nextTick`的使用方法



异步更新

1. 参考笔记中的官网地址，确认异步更新
2. 找到`$nextTick`的使用语法



测试

1. 利用`$nextTick`调优上一节的延迟代码
2. 测试结果

```vue
<script>
export default {
  data() {
    return {
      isUser: false,
      username: '',
      password: '',
    }
  },
  methods: {
    setUserLogin() {
      this.isUser = true
      this.$nextTick(() => {
        this.$refs.useIpt.focus()
      })
    },
    setCodeLogin() {
      this.isUser = false
    },
  },
}
</script>
```





## 八，Vue路由

### SPA

> 也叫做单页面应用程序`Single Page Application`,



概念:

1. 整个网站就一个`index.html`
2. 页面切换的本质是内容切换，除了数据，网站加载一次即可
3. 首次加载较慢，不利于SEO
4. 比如[网易云](https://music.163.com/#)





思考

1. 咱们目前掌握的知识能不能实现这个效果?
2. 比如，动态组件里面切换的组件如果是全屏大小?
3. 可以，但是功能有限，如果要实现更为复杂的效果，比如数据传递，页面访问限制。。。。就不太好实现了
4. 所以使用来开发SPA用的不是动态组件，而是咱们下一节要学习的`vue-router`









### vue-router 介绍和整合

> 使用vue时，如果要开发SPA，基本上都会选择`vue-router`，`Vue`提供的官方路由，和`Vue`深度集成，可以十分便捷的开发`SPA`，并且有很多高级功能
>
> [传送门:Vue-router官网](https://router.vuejs.org/zh/introduction.html)



概念:

1. 前端路由:指的是`url`地址和`组件`的对应的关系
2. 切换url地址即可切换与之对应的组件
3. `vue-router`就是`Vue`官方推出的`前端路由插件`
4. 后端路由是什么？



整合步骤:

1. 方法1：
   1. 下包，导包，创建并挂载路由，设置对应关系，设置路由出口，设置跳转链接
2. 方法2：
   1. 在vue-cli创建的项目中
   2. 执行`vue add router`
   3. 不选用`history`模式
   4. 等待。。。即可
3. 创建时添加（推荐）





代码说明:

1. `vue add router`更改的位置主要在如下地方
2. 下载了`vue-router`
3. `/router/index.js`:实例化路由，并设置url和组件的对应关系
4. `main.js`中挂载到`Vue`实例上
5. `App.vue`中设置了链接和路由出口
6. 修改`url`的之后，与之对应的路由会渲染到`vue-router`对应的位置



#### router/ index.js代码说明：

```
// 导入Vue VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入 单文件组件
import HomeView from '../views/HomeView.vue'
// import GameView from '../views/GameView.vue'

// 注册VueRouter这个插件，才可以生效
Vue.use(VueRouter)

// 配置url地址和组件的对应关系及其他的设置
// 路由表
const routes = [
  {
    path: '/', // 地址
    name: 'home', // 类比于 单文件组件的 name属性
    component: HomeView, // 组件
  },
  // {
  //   path: '/game', // 地址
  //   name: 'game', // 类比于 单文件组件的 name属性，今天用不上
  //   component: GameView, // 组件
  // },
  {
    path: '/about',
    name: 'about',
    // 路由懒加载，访问了再去加载
    // 后面的项目中会用到
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    // path 有意义即可
    // name 有意义即可
    // 如非必要设置一样即可
    path: '/game',
    name: 'game',
    // 路由懒加载，访问了再去加载
    // 让第一次打开的速度快一些，和图片懒加载有异曲同工之妙
    // 后面的项目中会用到
    component: () => import(/* webpackChunkName: "game" */ '../views/GameView.vue'),
  },
]

// 创建路由实例
const router = new VueRouter({
  // 名字不能改
  routes, //  routes : routes
})

// 暴露出去
export default router

```



#### `router-view`

>`router-view` 占位符 
>
>将路由的内容替换`router-view`标签
>
>要显示路由内容 必须使用这个标签





### 路由模式

> 上一节在创建路由时有个选项，是问我们是否选用history模式，现在还能改吗?自信一些，现在如何改?
>
> 2种路由模式的差异
>
> [传送门:HTML5history模式](https://v3.router.vuejs.org/zh/guide/essentials/history-mode.html#html5-history-%E6%A8%A1%E5%BC%8F)



概念

1. `hash`模式:网址上的路径前面要包含`#`，所以要写成 `域名/#/my`
2. `history`模式:和常规url一致，没有`#`，直接`/xxx`即可访问
   1. 注意:如果项目上线需要修改设置，具体步骤可以参考[传送门:](https://v3.router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)



步骤：

1. `/router/index.js`调整代码即可

```javascript
// 3. 创建 router 实例，然后传入写好的匹配规则
const router = new VueRouter({
  routes, // 相当于 routes: routes (缩写,不能修改) 
  mode: 'history' // hash  (路由模式切换)
})
```











### router-link

> vue-router中通过它来点击跳转哦，为啥是他呢?
>
> [传送门:router-link](https://v3.router.vuejs.org/zh/api/#router-link)



作用:

1. 功能更加强大的`a标签`，解析之后是`a标签`
2. 两种模式下都可以实现对应的跳转，不需要调整设置
3. 切换时有样式切换，我们可以为他添加高亮效果
   1. `router-link-exact-active` 这个类，代表精确匹配，也就是网页上的路径要跟 `router-link`里的 `to属性`完全一致才能匹配上 
   2. `router-link-active` 这个类，代表模糊匹配，也就是网页上的路径只要有包含 `router-link` 里的 `to属性` 就能匹配 



语法:

1. `   <router-link to="/">Home</router-link>`
2. `to`属性设置地址，和配置的相同，内容写标签内



```
 // 占位符 显示组件
 <router-view />
```



```
// 导入Vue VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入 单文件组件
import HomeView from '../views/HomeView.vue'
// import GameView from '../views/GameView.vue'

// 注册VueRouter这个插件，才可以生效
Vue.use(VueRouter)

// 配置url地址和组件的对应关系及其他的设置
// 路由表
const routes = [
  {
    path: '/', // 地址
    name: 'home', // 类比于 单文件组件的 name属性，今天用不上
    component: HomeView, // 组件
  },
  // {
  //   path: '/game', // 地址
  //   name: 'game', // 类比于 单文件组件的 name属性，今天用不上
  //   component: GameView, // 组件
  // },
  {
    path: '/about',
    name: 'about',
    // 路由懒加载，访问了再去加载
    // 后面的项目中会用到
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    // path 有意义即可
    // name 有意义即可
    // 如非必要设置一样即可
    path: '/game',
    name: 'game',
    // 路由懒加载，访问了再去加载
    // 让第一次打开的速度快一些，和图片懒加载有异曲同工之妙
    // 后面的项目中会用到
    component: () => import(/* webpackChunkName: "game" */ '../views/GameView.vue'),
  },
]

// 创建路由实例
const router = new VueRouter({
  // 名字不能改
  routes, //  routes : routes
})

// 暴露出去
export default router

```











### 路由重定向

> 如果输入的是/但是希望跳转到/home，就可以使用路由重定向啦
>
> [传送门:重定向和别名](https://v3.router.vuejs.org/zh/guide/essentials/redirect-and-alias.html)



作用

1. 简单来说就是：让你访问`a路径`，自动帮你跳转到`b路径`，这就是`重定向` 

语法:

1. 在`路由规则`里加如下一条 

```javascript
{ path: '/a路径', redirect: '/b路径'}
```

2. redirect的地址要注册到路由中

```
// 导入Vue VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入 单文件组件
import HomeView from '../views/HomeView.vue'
// import GameView from '../views/GameView.vue'

// 注册VueRouter这个插件，才可以生效
Vue.use(VueRouter)

// 配置url地址和组件的对应关系及其他的设置
// 路由表
const routes = [
  // 路由重定向
  {
    path: '/', // url地址之后没有其他的东西
    // redirect: '/game',
    // redirect: '/about',
    // redirect: '/family',// 不存在，页面会白
  },
  {
    path: '/home', // 地址
    name: 'home', // 类比于 单文件组件的 name属性，今天用不上
    component: HomeView, // 组件
  },
  // {
  //   path: '/game', // 地址
  //   name: 'game', // 类比于 单文件组件的 name属性，今天用不上
  //   component: GameView, // 组件
  // },
  {
    path: '/about',
    name: 'about',
    // 路由懒加载，访问了再去加载
    // 后面的项目中会用到
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    // path 有意义即可
    // name 有意义即可
    // 如非必要设置一样即可
    path: '/game',
    name: 'game',
    // 路由懒加载，访问了再去加载
    // 让第一次打开的速度快一些，和图片懒加载有异曲同工之妙
    // 后面的项目中会用到
    component: () => import(/* webpackChunkName: "game" */ '../views/GameView.vue'),
  },
]

// 创建路由实例
const router = new VueRouter({
  // 名字不能改
  routes, //  routes : routes
  // 切换模式
  // history模式，没有#
  // mode: 'history',
  // hash模式，有#
  mode: 'hash',
})

// 暴露出去
export default router

```





#### 路由404页面

> 如果地址都匹配不了，一般会弄一个`404`页面，咱们来看看如何实现
>
> [传送门:404页面](https://v3.router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E6%8D%95%E8%8E%B7%E6%89%80%E6%9C%89%E8%B7%AF%E7%94%B1%E6%88%96-404-not-found-%E8%B7%AF%E7%94%B1)



概念:

1. 如果用户访问了一个我们`没有设置过的路径`，都能跳转到 `404` 页面 



语法:

1. path设置为*，通配，重定向到`/notFound`
2. 专门创建一个404的组件，比如notFound
3. 放在末尾

```javascript
const routes = [

  .......
  .......

  // 一般情况下404页面都是放在最后
  // *代表除了上面以外的其他路径，就访问notFound组件
  { path: '*', redirect: '/notFound' },
  ,{ path: 'notFound', component: notFound },
]
```





### 编程式导航

> 路由的跳转如果有逻辑，可以通过编程式导航实现，就是通过代码进行跳转
>
> [传送门:编程式导航](https://v3.router.vuejs.org/zh/guide/essentials/navigation.html)

作用:

1. 用代码进行路由切换
2. 如果路由切换有逻辑，更适合用这种语法

语法:

1. 通过路由对象
2. 组件中可以通过`this.$router`调用

```javascript
// 字符串
router.push('home')
this.$router.push('home')
// 对象
router.push({ path: 'home' })
this.$router.push({ path: 'home' })
```

```js
//返回上一个页面
this.$router.back()
this.$router.go(-1)

this.$router.go(1)
```









### 路由传参-query

> 路由如果需要传递参数，常用的有2种方法，咱们先来学习query
>
> 通过`query`的方式传递参数
>
> [传送门：路由对象属性](https://v3.router.vuejs.org/zh/api/#%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7)



作用：

1. 路由跳转的时候如果需要额外的传递参数
2. 比如列表，去详情页
3. 携带查询关键字，等



语法：

1. **传递：**
   1. 跳转的url后跟上参数：`url?key=value&key2=value2`
   2. 编程式导航：`router.push({ path: 'register', query: { plan: 'private' }})`
2. **接收：**
   1. 组件中通过`this.$route.query`获取
   2. 可以通过`Chrome`插件确认

```vue
// 1.纯手写，不推荐，但是可以用！
<router-link to="/about?name=jack&age=18&friend=rose">去about</router-link>
```

```vue
 methods: {
    toAbout() {
      this.$router.push({
        path: '/about',

        query: {
          name: '哈士奇',
          friend: '萨摩耶',
          skill: '吃骨头！！！！',
        },
      })
    },
  },
```



注意：

1. `query`的方式传递参数，路由地址不需要做任何的修改
2. 参数的名字也没有限制，传递和接收可以对应即可









### 路由传参-动态路由匹配

> 接下来是另外一种，动态路由匹配
>
> [传送门：动态路由匹配](https://v3.router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1%E5%8C%B9%E9%85%8D)



概念：

1. 相比于query的方式，多了一些限制
2. url需要调整
3. 参数名也是固定的



语法：

1. url地址调整为：

   1. url/:参数，必填
   2. url/:参数？，选填
   3. 代码跳转：`router.push({ name: 'user', params: { userId: '123' }})`
      1. router.push(`地址+key`)
      2. `name`填写路由的名字
      3. 

2. 接收：

   1. 组件中通过`this.$route.params`获取
   2. 可以通过chrome插件确认

   



小结：

1. 动态路由匹配的路由，代码跳转需要`name`属性完成



### 导航守卫介绍

> 路由页面的访问限制一般会写在导航守卫中
>
> [传送门:导航守卫](https://v3.router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB)



概念:

1. **导航守卫**就是路由切换时会执行的一系列回调函数
2. 可以让**开发者**，在特定的时机注册自定义逻辑
3. **守卫**的含义是，可以在回调函数中添加逻辑，允许或者阻止路由切换
4. 打个比方，类似于门卫?



编写位置:

1. 全局级别
2. 路由级别
3. 组件级别
4. 不用背，不用背



面试题:

1. 导航守卫的解析规则,目前了解
2. [传送门:完整的导航解析流程](https://v3.router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%AE%8C%E6%95%B4%E7%9A%84%E5%AF%BC%E8%88%AA%E8%A7%A3%E6%9E%90%E6%B5%81%E7%A8%8B)



注意:

1. 默认打开网页去的是`404`
   1. 默认打开的页面是`/`
   2. 如果没有配置地址或者没有设置重定向
   3. 直接解析到`404`







#### 全局前置守卫

> 接下来咱们就来认识一下开发中用的最多的，全局前置守卫
>
> [传送门:全局前置守卫](https://v3.router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB)



概念:

1. **全局**:注册之后，所有路由都会生效
2. **前置**:进入路由之前触发
3. 可以实现允许进入，重新定位，或者限制访问



语法:

1. 为实例化的`router`对象注册
2. to:要去的路由信息
3. from:来源的路由信息
4. next:函数，调用他传递不同的值实现放行，或者阻断
   1. next():放走，该去哪就去哪
   2. next(‘路径’)，去往指定的地址
   3. next(false),或者不执行，阻断路由切换

```javascript
//router/index.js
// 注册全局前置守卫
router.beforeEach((to, from, next) => {
  // 去的页面的路由信息
  console.log('to:', to)
  // 来的页面的路由信息
  console.log('from:', from)

  // 不妨走，页面会变白，因为阻断了路由切换
  // next() // 直接放走
  // next(false)// 阻断路由切换
  // next('/notfound') // 直接会递归
})
```



#### 案例：登录判断

> 结合全局导航守卫，和作业，实现登录判断效果

目标:

1. 基于给定的逻辑，分析并实现登录判断效果



逻辑:

![img](https://gitee.com/westblueflower/imgs/raw/master/img/202204130025034.png)



分析:

1. `router/index.js`
   1. 白名单:不需要登录即可访问的页面地址数组，比如登录，注册，404等
   2. 数组判断是否存在,`includes`
   3. 判断是否登录,目前基于缓存中是否有`token`即可
2. **登录页**增加登录成功保存`token`的逻辑(localStorage),随便写个值
   1. 返回导航守卫添加判断逻辑



核心代码:

1. `/views/LoginView.vue`

   ```javascript
   // 登录方法
   login() {
     if (this.username === 'admin' && this.password === '123456') {
       localStorage.setItem('token', 'q231321321')
       this.$router.push('/home')
     } else {
       alert('用户名或密码错误')
     }
   },
   ```

   

2. `router/index.js`

   ```javascript
   // 实例化router之后
   // 全局前置守卫
   router.beforeEach((to, from, next) => {
     if (whitePaths.includes(to.path)) {
       next()
     } else {
       if (localStorage.getItem('token')) {
         // 存在
         next()
       } else {
         alert('请先登录')
         next('/login')
       }
     }
   })
   ```

注意:

1. `next('/notfound')`报错
   1. 全局前置守卫
   2. 路由切换就执行
   3. 写死一个地址
      1. 去这里
      2. 进入守卫，去这里
      3. 进入守卫，去这里
      4. 。。。
2. `next(false)`,页面变白
   1. 全局前置守卫
   2. 路由切换就执行
   3. next(false)或不执行`next`，无法切换



### 嵌套路由介绍

> 在现有路由结构中继续嵌套路由
>
> [传送门:嵌套路由](https://v3.router.vuejs.org/zh/guide/essentials/nested-routes.html)



概念:

1. 在现有的路由结构中，继续嵌套一层路由结构
2. 常见效果，管理系统首页，咱们这个例子



使用步骤:

1. 配置嵌套路由规则:

   1. 最外层：一级路由
   2. 嵌套路由：二级路由
   3. 三级，四级可以继续嵌套下去

   ```javascript
   const routes = [
   
     .....
   
     { 
       path: '/home', 
       component: HomeView, 
       // 子路由的路径一般可以不加/
       // 不加/就代表需要先拼接父路由的路径再加自己的路径
       // 如果加了/那么它还是二级路由，只不过地址上就不能拼接父路由路径了
       children: [
         { path: 'hero', component: HeroView },
         { path: 'joke', component: JokeView },
       ]
     },
    ]
   ```

   

2. 配置嵌套路由出口:`router-view`

   1. 在希望渲染嵌套路由对应组件的位置
   2. 添加`router-view`

## 九，Vuex

### vuex介绍

> 无视组件关系，实现全局数据共享
>
> [传送门:vue2-vuex](https://www.npmjs.com/package/@vue/cli-plugin-vuex)
>
> [传送门:vue-cli vuex插件](https://www.npmjs.com/package/@vue/cli-plugin-vuex)

1. 随着项目中的组件越来越多，父子，兄弟，祖孙，路由管理的组件
2. 通过`vuex`可以无视组件关系，实现全局数据共享

#### 基本使用

作用：共享状态管理,共享数据管理

1. 安装插件 
   
   1. npm i vuex
2. 在src/store/index.js
3. 导入vuex 
   
   1. import Vuex from 'vuex'
4. 注册Vuex 
   1. import Vue from 'vue'
   2. Vue.use(Vuex)

5. 实例化vuex

   ```js
   const  store=new Vuex.Store({
      state:{
         userInfo:'zs'
         // 访问：this.$store.state.userInfo
      },
      mutations:{
         setUserInfo(state,val){
             state.userInfo=val
             // 调用mutations:this.$store.commit('setUserInfo',实参值)
         }
      },
      actions:{
         getUserInfo(store,value){    
            setTimeout(()=>{
               store.commit('setUserInfo',实参值)
            },2000)
         }
         // this.$store.dispatch('getUserInfo',实参值)
      },
      getters:{
           方法名(state,getters){
      		state:获取当前模块的state
      		getters:获取当前模块的getters
     		 return 新的值
      }
      
      },
      modules:{}
   })
   ```

   1. 暴露出去 
      1. export  default  store
   2. 在main.js挂载 
      1. import store from '@/store'
      2. new Vue({store})



#### 整合

> 把`vuex`整合到项目中来
>
> [传送门:vuex安装](https://v3.vuex.vuejs.org/zh/installation.html#%E7%9B%B4%E6%8E%A5%E4%B8%8B%E8%BD%BD-cdn-%E5%BC%95%E7%94%A8)



1. **方法1：**
   1. 下载，实例化仓库，挂载到Vue实例上，配置数据。。。。
2. **方法2：**
   1. `vue-cli`创建的项目
   2. 一步到位`vue add vuex `

变更:

1. `main.js`
2. `/store/index.js`





### 1. state  属性  --定义数据

> vuex的数据定义在state中，符合js的语法规范即可
>
> 类似data
>
> [传送门：state属性](https://vuex.vuejs.org/zh/guide/state.html)

作用：

1. vuex的数据定义的位置
2. 符合js语法即可

```js
const  store=new Vuex.Store({
   state:{
	 //无形参       
      userInfo:'zs'
      // 访问：this.$store.state.userInfo
   },
})
```





store/index.js:

```
// 3. 实例化vuex（仓库）
import Vue from 'vue'
import Vuex from 'vuex'


export default new Vuex.Store({
  state: {
    noodle: '兰州拉面',
    message: '隆江猪脚饭'
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})

```





#### state数据的使用

> 标签中(  v-text  /  {{插值}}  )的使用：  store.state.xxx
>
> js中 ( methods:{ } ) 的使用：this.$store.state.xxx
>
> 即:标签中可省略this
>
> [传送门：获取vuex的数据](https://vuex.vuejs.org/zh/guide/state.html#%E5%9C%A8-vue-%E7%BB%84%E4%BB%B6%E4%B8%AD%E8%8E%B7%E5%BE%97-vuex-%E7%8A%B6%E6%80%81)

```vue
//仓库中定义   
//store/index.js
state: {
    noodle: '兰州拉面',
    message: '隆江猪脚饭'
  },
  
  
// 访问： vue文件中访问
this.$store.state.noodle

//访问： vue文件中的标签
<p>{{$store.state.noodle}}</p>
```





### 2. mutations   属性    ---修改数据

> vuex中修改数据的唯一途径
>
> 只做同步处理
>
> [传送门:mutations](https://v3.vuex.vuejs.org/zh/guide/mutations.html)



作用：

1. `vuex`规定，要改state里的数据，只能通过mutations里的方法来修改 
2. 所以换句话说，`mutations`里面基本是放用来修改 `state`里数据的方法 

```js
const  store=new Vuex.Store({
   mutations:{
      setUserInfo(state,val){
          state.userInfo=val
          // state  代表当前模块的strate  
          // 根模块可以访问modules中数据 ：state.模块.变量
          // val为外部传参
          
          // 调用mutations:   this.$store.commit('setUserInfo',实参值)
      }
   },

 
})
```



语法：

1. 定义

```javascript
const store = new Vuex.Store({
  state: {
    count: 0
  },

  // 是放方法的地方
  mutations: {
    // 参数1：固定的叫 state，就是获取当前vuex里的state
    // 参数2：参数，多个参数用对象装
    add (state,参数) {
      // 逻辑
      
    }
  }
})
```

2. 调用：

```javascript
//标签中
this.$store.commit('方法名',参数)
// vue中
$store.commit('方法名',参数)
// 例如：
$store.commit('add'，参数)
```

3. 不推荐用法：
   1. 直接通过点语法修改



### 3. actions  属性   --- 异 步操作

>用于做一些异步操作的，但是它要修改state数据还得通过mutations

```js
mutations:{
      setUserInfo(state,val){
          state.userInfo=val
          // 调用mutations:this.$store.commit('setUserInfo',实参值)
      }
   },
actions:{
      getUserInfo(store,value){ 
          //store 代表当前 store 的实例对象
         setTimeout(()=>{
            store.commit('setUserInfo',实参值)
         },2000)
      }
      // this.$store.dispatch('getUserInfo',实参值)
   },

// 调用actions方法
this.$store.dispatch('refreshUserInfo',实参值)
```



### 4. getters 属性  ---计算属性

> vuex中的计算属性
>
> - 它就是vuex内的计算属性
> - 依赖一个state值产生一个新的值
> - 特点：它的值会缓存

```js
getters:{
   方法名(state,getters){
   state:获取当前模块的state
   getters:获取当前模块的getters
   return 新的值
   }
}
// 访问：this.$store.getters.方法名
```



```
{
  getUserInfo(state){
     return "姓名："+state.userInfo
  }
}
// 访问getters
this.$store.getters.getUserInfo
```



### 5. modules   ---模块化

>将vuex的数据模块化管理

```js
modules:{
  模块名:{
     namespaced:true  // 命名空间
    //  使用特点：属性  模块名.属性    方法：   模块名/方法名
     state:{
        xxx:123
        // 使用：  this.$store.state.模块名.xxx
     },
     mutations:{
         setXxx(state,val){
            state.xxx=val
            // 使用：  this.$store.commit('模块名/setXxx',实参)
         }
     },
     actions:{
         xxx(store,val){
             // 使用：  this.$store.dispatch('模块名/setXxx',实参)
         }
          
     },
     getters:{
        getXxx(state,getters,rootState,rootGetters){
            //state 代表当前模块的 state
           return state.xxx
            
        }
        // 使用：  this.$store.getters['模块名/getXxx']
     } 
  }
}
```







```
//store/modules/模块名.js

export default {
  state:{
     aaaname:'张三'
     // 访问： this.$store.state.模块名.属性名
  },
  mutations:{
    setAaaName(state,value){
       state.aaaname=value
    }
    // 调用mutations   this.$store.commit('setAaaName',实参值)
  },
  actions:{},
  getters:{}
}
```

在store/index.js导入与使用

```
// store/index.js

import 模块名  from './modules/模块名.js'

modules:{
   模块名
}
```



##### modules下的命名空间

>解决问题：为了解决命名冲突

```js
export default {
   namespaced:true,  // 是否启用命名空间，实际开发基本都是true，它的默认值是false
   state:{
    // 自带了命名空间的
    xxx:'zs'
    // 访问：this.$store.state.模块名.xxx
   },
   // 下面的是默认不带命名空间的
   mutations:{
      setXxx(state,value){
         state.xxx=value
      }
     // 调用mutations:this.$store.commit('模块名/方法名',实参)
   },
   actions:{
       actionsXxx(store){
         // store调用当前模块的mutations方法不需要模块名,访问任意当前模块的东西不需要模块名，只是外部调用需要
         store.commit(“setXxx”，实参值)         
       }
       // 调用actions:this.$store.dispatch('模块名/方法名',实参值)
   },
   getters:{
       getXxx(state){
        return "姓名:"+state.xxx
       }
       // 访问： this.$store.getters['模块名/getters方法名']   ,不用.讲法是因为后面命名有/号，不符合命名规范     
   }
}
```



##### modules下的actions

```js
// 某一模块下的使用
state:{
   xxx:'zs'
},
actions:{
   xxx(store,val){
     对形参store的解析-：
     store:{
      //  这里面有什么呢？
      state:访问当前模块的state数据
          访问：state.属性名
      rootState:访问根模块的state数据
         访问根模块下的state:  rootState.属性名
         访问其它模块下的state: rootState.模块名.属性名
      getters:用于访问当前模块的getters
         访问：getters.getters方法名         
      rootGetters:用于访问根模块的getters,通过根模块能访问到所有模块的getters
          访问根模块下的getters:rootGetters.根模块下的getters方法名
          访问其它模块下的getters:rootGetters['模块名/其它模块的getters方法名']
      commit:用于调用mutations方法
         调用本模块的mutations方法:commit('本模块的mutations方法名',实参值)
         调用其它模块的mutations方法:
         commit('其它模块的模块名/其它模块的mutations方法名',实参,{root:true})
      dispatch:用于调用actions方法
         调用本模块的actions方法 ：dispatch('本模块的actions方法名',实参值)
         调用其它模块的actions方法
         dispatch('其它模块的模块名/其它模块的actions方法名',实参,{root:true})
     }
   }
}
```

##### modules下的getters

```js
getters:{
  方法名(state,getters,rootState,rootGetters){
      state:访问当前模块的state数据
          访问：state.属性名
      rootState:访问根模块的state数据
         访问根模块下的state:  rootState.属性名
         访问其它模块下的state: rootState.模块名.属性名
      getters:用于访问当前模块的getters
         访问：getters.getters方法名         
      rootGetters:用于访问根模块的getters,通过根模块能访问到所有模块的getters
          访问根模块下的getters:rootGetters.根模块下的getters方法名
          访问其它模块下的getters:rootGetters['模块名/其它模块的getters方法名']
  }
}
```



### map用法

>- mapState在computed中定义，mapGetters在computed中定义
>- mapMutations在methods,mapActions在methods中定义
>- 快捷批量使用vuex中的东西

#### mapState 

> vuex在组件中取值可以通过计算属性简化编码，可以通过mapState更简化一点哦
>
> [传送门:mapState](https://v3.vuex.vuejs.org/zh/guide/state.html#mapstate-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0)

语法:

1. 导入，合并到计算属性，再使用即可



```js
methods:{
 ...mapMutations('模块名',['mutations方法名'])
}
// 调
```



```javascript
// 1.导入
import { mapState } from 'vuex'
export default {
  computed: {
    // 2.合并到计算属性中
    ...mapState(['food']),
    // 等同于
    //food () {
     // return this.$store.state.food
    //},
  }
}
```

2. 也可以起别名,用对象的写法

```javascript
...mapState({
  fd: 'food'
}),
// 等同于
fd(){
  return this.$store.state.food
}
```

3. `mapState`返回的是对象，结合`...`展开，然后合并到`computed`上







#### mapMutation

> 类似于`mapState`，咱们可以通过`mapMutation`简化`mutation`的调用
>
> [传送门:mapMutation](https://vuex.vuejs.org/zh/guide/mutations.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%AD%E6%8F%90%E4%BA%A4-mutation)



语法

1. 也有数组和对象写法
2. 返回的是个对象，通过...合并到`methods`中

```js
computed:{
   ...mapState(模块名,['属性名'])
}
// 使用：  this.属性名
```



```javascript
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
}
```

#### mapActions

```js
import {mapActions} from 'vuex'
methods:{
  ...mapActions('模块名',['actions方法名'])
}
// 调用：  this.actions方法名(实参)
```

#### mapGetters

```js
import {mapGetters} from 'vuex'
computed:{
  ...mapGetters('模块名',['getters方法名'])
}
//  访问：this.getters方法名
```

