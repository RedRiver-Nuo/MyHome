## ES6的模块化介绍及使用准备

> 最新的官方的模块化标准，客户端和服务端都可以使用，之后咱们基本上模块化的语法用的都是这个
>
> [传送门:mdn-import](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)
>
> [传送门:mdn-export](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export)



在 `ES6` 模块化规范诞生之前，`JavaScript` 社区已经尝试并提出了`AMD`、`CMD`、`CommonJS` 等模块化规范。

但是，这些由社区提出的模块化标准，还是存在一定的差异性与局限性、并不是浏览器与服务器通用的模块化 标准，例如：

- `AMD` 和 `CMD` 适用于浏览器端的 `Javascript` 模块化
- `CommonJS` 适用于服务器端的 `Javascript` 模块化

太多的模块化规范给开发者增加了**学习的难度与开发的成本**。因此，官方的`ES6` 模块化规范诞生了！

之后前后端开发，只要是用到了`js`的地方，都可以使用`ES6`的模块化，开发者不需再额外学习 AMD、CMD 或 CommonJS 等模块化规范。





1. 每个 js 文件都是一个独立的模块

2. 导入其它模块成员使用 `import`  关键字

3. 向外共享模块成员使用 `export` 关键字 

4. `Node.js`使用准备

   1. `package.json`中的`type`属性改为`module`

   2. 安装的`node`版本大于等于`13.0`

      ```json
      {
        "name": "01.coding",
        "version": "1.0.0",
        "type": "module",
        "description": "",
        "main": "01.ES6的模块化.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
        "license": "ISC"
      }
      
      ```





## ES6模块语法-默认的导出和导入

> 接下来咱们来学习ES6模块化中的默认导出和导入

### 语法:

1. 导出： `export default 默认导出的成员`
2. 导入： `import 接收名称 from '模块'`



### 参考代码:

1. 导出

```javascript
const food = '西兰花'
const dogs = ['哈士奇', '萨摩耶']
const stu = {
  name: '李雷',
  friend: '韩梅梅',
}

function sayHi(name = 'rose') {
  console.log(`${name}你好呀！`)
}

// 暴露一个出去
// export default food
// 都暴露出去
// export default 只能写一次
export default {
  food,
  dogs,
  stu,
  sayHi,
}

```

2. 导入

```javascript
// 默认导入时的接收名称可以任意名称，只要是合法的成员名称即可
import result from './xxx.js'
console.log(result)
```





## ES6模块化语法 - 按需导出和导入

> 接下来咱们来学习如何按需的导出和导入



### 语法

1. 按需导出的语法： `export const s1 = 10`

```javascript
// 挨个导出
const food = '西兰花'
const dogs = ['哈士奇', '萨摩耶']
const stu = {
  name: '李雷',
  friend: '韩梅梅',
}

function sayHi(name = 'rose') {
  console.log(`${name}你好呀！`)
}

// 或者 统一导出
export { food, dogs, stu, sayHi }

// 可以和export default一起使用
const info = '感觉自己萌萌哒'
export default info

```

2. 按需导入的语法： `import { 按需导入的名称 } from '模块标识符'`
3. 可以使用`as`起别名：
   1. `import { 按需导出的名称 as 别名 } from './modules/02.按需导出.js'`

```javascript
// 导入
import { food } from './modules/02.按需导出.js'
console.log('food:', food)
// 导入 + 起别名
import { food as fd } from './modules/02.按需导出.js'
console.log('fd:', fd)

// 导入export default的内容
import result from './modules/02.按需导出.js'
console.log('result:', result)

// 默认导入可以和 按需导入一起使用
import result, { food } from './modules/02.按需导出.js'

```



## ES6模块化语法 - 全部导入

> 如果想要一次性导入所有的内容，还有一种语法哦



### 语法：

1. `* as` 是固定语法
2. `myModule`是起的名字，可以根据需求调整
3. 之后通过`myModule`点出需要的内容即可

```javascript
import * as myModule from '/modules/my-module.js';
```















## ES6模块化语法 - 直接导入

> 有时候我们只希望执行某个模块中的代码，并不需要得到模块中向外共享的成员，可以选择直接导入

### 语法

1. `import '模块的路径'`

   1. 模块的代码

      ```javascript
      // 文件名 xxx.js
      for (let i = 0; i < 10; i++) {
        console.log(i)
      }
      
      ```

   2. 导入的语法

      ```javascript
      import 'xxx.js'
      // 即可看到循环输出的内容
      ```

      

      

### 小结

1. 这个语法并不能获取模块内的成员`import '模块的路径'`，作用是?







## ES6模块化语法 - 浏览器端使用

> 到目前为止测试的环境基本都是`Node.js`，但是作为前端开发者，咱们编写的代码大部分情况下运行的为止是浏览器，刚刚学习的`ES6`的模块化语法，在浏览器中可以使用吗？
>
> [传送门：MDN-import](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)

### 语法：

1. `script`标签设置`type=module`
2. 内部写`ES6`的`import`语法即可

```html
<script type="module">
  // 默认导入
  import myTool from './modules/myModule.js'
  // 上面学习的所有语法都可以使用哦
</script>
```



### 兼容性

1. 到了大家最关心的兼容性问题啦
2. `IE`一骑绝尘。。。。，其他的新式浏览器整体都比较OK

![image-20220325101141356](D:/HeiMa/%E6%8E%A5%E6%94%B6%E6%96%87%E4%BB%B6/%E5%B0%B1%E4%B8%9A%E7%8F%AD/11-nodeJS/Node.js-day04/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/assets/image-20220325101141356.png)







## 前端工程化 

> 接下来咱们来学习一个比较时髦的词了，前端工程化，希望大伙听完之后可以转变对于前端开发的认知,了解企业中是如何进行前端开发的

### 目标：

1. 转变对于前端开发的认知
2. 了解企业中是如何进行前端开发的



### 前端开发现在的样子

- 前端小白眼中的前端开发： 
  - ① 会写 HTML + CSS + JavaScript 就是合格的前端程序员 
  - ② 东拼西凑，不成体系 
- 实际的前端开发（四个现代化）： 
  - ① 模块化（js 的模块化、css 的模块化、资源的模块化） 
  - ② 组件化（复用现有的 UI 结构、样式、行为） 
  - ③ 规范化（目录结构的划分、编码规范化、接口规范化、文档规范化、 Git 分支管理） 
  - ④ 自动化（自动化构建、自动部署、自动化测试）



### 为什么

- 工程化提供了一套标准的开发方案和流程，让前端开发自成体系 。
- 通过规范和工具来提高前端应用质量及开发效率
- 让开发者可以更专注于编码，而不用为各种配置，兼容，等繁琐的事情困扰



### 解决方案：

- 早期的前端工程化解决方案：
  - grunt（ https://www.gruntjs.net/ ） 
  - gulp（ https://www.gulpjs.com.cn/ ） 
- 目前主流的前端工程化解决方案： 
  - **webpack**（ https://www.webpackjs.com/ ）
  - parcel（ https://zh.parceljs.org/ ） 
- 咱们主要学习`webpack`，后面的项目中主要用到的也是`webpack`







### 小结：

1. 现在的前端开发，只有`html`，`css`，`js`吗？
2. 前端工程化的目的是通过规范和工具来提高前端应用质量及`_____`?





## webpack简介

> 接下来咱们来学习，在前端工程化中扮演重要角色的`webpack`
>
> [传送门：webpack官方文档](https://www.webpackjs.com/)
>
> [传送门：前端工程化那些事-掘金](https://juejin.cn/post/6844904132512317453#heading-6)

### 目标

1. 了解`webpack`的概念
2. 了解`webpack`的作用







### 介绍

![image-20220325152913809](https://gitee.com/westblueflower/imgs/raw/master/img/202203271650226.png)

1. `webpack`是基于`Node.js`开发的前端打包工具
2. 一图胜千言
   1. 读取项目中各个模块的依赖关系，对这些模块进行压缩，合并
   2. 将浏览器无法直接识别的模块(`less,sass,ts`)转换为浏览器可以识别的内容
   3. 将一些因为版本问题浏览器无法支持的语法，转化为浏览器可以支持的格式
3. 通过配置，也可以在开发阶段为我们提供很多便利的自动化操作
4. 接下来的配置主要分为2个部分：
   1. 开发阶段自动化配置
   2. 项目打包发布









### 小结:

1. `webpack`是基于什么开发的？

2. `webpack`是一个前端什么工具？

3. **注意：**

   1. webpack的使用和配置较为繁琐

   2. 不同的版本更迭会造成配置的更改，有一些少坑

   3. 今天的学习，理解作用为主

      1. 能够跟着教程完成搭建就更棒棒哒

   4. 后续的学习中，包括工作中会使用脚手架工具，是基于`webpack`搭建的

   5. 今天学习最基本的配置，项目中常用的配置会在后续课程中陆续补充

      



## 体验一下

> 为了更好的感受通过webpack搭建的自动化环境，准备好了一个搭建完毕的版本
>
> 

### 目标：

1. 把体验项目克隆到本地
2. 体验一下全新的开发方式



### 步骤：

1. 把搭建好的模板克隆到本地：

   ```bash
   git clone https://gitee.com/westblueflower/webpack-lesson.git
   git checkout master
   ```

2. 下载依赖的包:

   ```bash
   npm i 
   ```

3. 运行起来：

   ```bash
   npm run serve
   ```

4. 调整`/src`目录下的文件并确认效果

   1. `index.js`
   2. `.less`
   3. `.css`
   4. ...





### 小结：

1. 刚刚体验的项目中，`less`的解析，浏览器的自动刷新等都通过webpack搞定了





### 注意点:

1. 提示找不到`package.json`报错
   1. 执行`npm i`时终端所处的路径下需要有`package.json`
2. 知识点模糊
   1. 作用：基本上都可以理解
   2. 语法：
      1. 0-1:
         1. 最难的：纠结为什么要这么写，换个写法为什么不行
         2. **初期：**不需要纠结语法的关键词，因为我们是学习使用，不是学习如何定于语法
         3. 纠结还有什么使用细节，写法变种，兼容性问题
            1. 兼容性问题，现在不用太过在意
            2. 各种写法变种，使用细节，建立在基本使用已经熟悉的情况下
            3. 基本使用会了，进阶写法自然就会了
      2. 1-n:
         1. 通过练习
         2. 通过具体的需求去巩固使用
3. 推荐阅读：
   1. 笔记中基本上都会附上**官方文档**
   2. 掘金网
   3. 视频，不是很推荐，比较耗时







## 准备工作

> 咱们先来把准备工作做好
>
> [传送门:webpack基本安装](https://webpack.docschina.org/guides/getting-started/#basic-setup)

### 目标:

1. 能够搭建`webpack`项目的基本结构







### 步骤：

1. 从git仓库获取基础测试模板，并切换到测试分支

   ```bash
   git clone https://gitee.com/westblueflower/webpack-lesson.git
   git checkout 01.基本配置
   ```

2. 切换到淘宝镜像

   ```bash
   nrm use taobao
   ```

3. 现在的项目结构：

   ```bash
   📁根目录
       📁dist
       📁node_modules
       📁src
        📄.gitignore
        📄package-lock.json
        📄package.json
        📄webpack.config.js
   ```

   







### 小结:

1. 目前项目结构中的`.gitignore`的作用是什么？
2. 本节执行的`nrm use taobao`的目的是？





## 开发 - 打包js

> `webpack`是基于`Node.js`开发的前端打包工具，咱们先用他来打包`js`试试

### 目标：

1. 能够使用`webpack`打包`js`文件
2. 了解`webpack`配置文件中出口和入口





### 步骤：

0. 接下来的操作，除了模块安装，均可以通过切换到`02.打包js`分支完成

   ```bash
   git add .
   git commit -m"记录之前的操作"
   git checkout 02.打包js
   ```

   

1. `package.json`的`scripts`中增加:

   1. 执行`webpack`
   2. 读取`webpack.config.js`中的配置

```json
     "scripts": {
       "dev": "webpack --config webpack.config.js"
     },
```

2. 安装`webpack`

   1. **注：**`--save-dev`
      1. `--save`保存到`package.json`中
      2. `-dev`开发依赖，只在开发阶段使用
      3. 不需要记忆什么时候需要加这个，文档中会直接告诉咱们

   ```bash
   npm i webpack webpack-cli --save-dev
   ```

   

3. 下载测试用第三方模块

   ```bash
   npm i jquery moment
   ```

4. 修改`/src/index.js`中的代码

   ```javascript
   // 导入第三方模块
   import $ from 'jquery'
   import moment from 'moment'
   
   // 显示当前时间
   function showTime() {
     $('.box').html(moment(Date.now()).format('YYYY-MM🈷️DD HH:mm:ss'))
   }
   // 更新页面
   setInterval(() => {
     showTime()
   }, 1000)
   
   // 默认执行一次
   showTime()
   
   ```

5. 调整`/webpack.config.js`中的配置：

   ```javascript
   // 导入path模块
   const path = require('path')
   
   module.exports = {
     // 打包的入口文件
     entry: path.resolve(__dirname, 'src', 'index.js'),
     // 打包到哪里
     output: {
       // 使用绝对路径
       path: path.resolve(__dirname, 'dist'),
       // 打包出来的文件名
       filename: 'bundle.js',
     },
   }
   
   ```

6. 执行打包命令`npm run dev`并观察执行结果？





### 步骤分析:

1. `/webpack.config.js`
   1. 是`webpack`的配置文件
   2. 可以调整很多的设置
   3. 本节调整了2个设置，分别是
      1. 打包的入口：以该文件作为开始，读取他依赖的模块并进行打包
      2. 打包的出口：打包之后的文件到哪里去
2. `/src/index.js`
   1. 导入了几个第三方模块
   2. 写了一些自己的逻辑
3. `package.json`中的`scripts`
   1. 通过`npm run dev`直接执行配置的命令
   2. 不需要去记忆复杂的操作

### 小结

1. `webpack.config.js`中配置了打包的入口和什么？
2. `npm run dev`中的`dev`配置在`package.json`中哪个属性里面？





### 注意：

1. 切换分支
   1. 简化繁杂的文件配置
   2. 每个对应的分支都已经做好了基础的模板
   3. 分支名：
      1. master:
         1. `clone`之后的默认分支,今天所有内容搞定之后的结果
         2. npm i
         3. npm run serve
         4. `git add .`
         5. `git commit -m"记录"`
      2. 01.基础模板
         1. 没有任何额外的代码
         2. 只有基础的文件结构
         3. 没有在这里做任何操作
      3. 02.打包js
         1. 打包js所需的基础配置
         2. npm i 模块名 
         3. npm run dev--->`dist`目录
         4. package.json中`scripts`
2. `npm i` 和 `npm i xxx`
   1. npm i 读取package.json中保存的包名（模块名）并下载
   2. npm i xx 下载包并保存到 package.json
3. `path.resolve`
   1. 都是基于传入的路径生成 绝对路径



















## 打包代码测试

> 刚刚代码已经打包完毕，能不能正常执行呢？咱们来测试一下

### 目标

1. 测试上一节打包的代码



### 步骤:

1. 创建`/dist/index.html`
   1. 导入`/dist/bundle.js`
   2. 运行并确认效果





### 小结：

1. 打包的代码能否正常运行？
2. 能看得懂吗？







## 打包模式

> 代码咱们测试了，确实可以运行，但是打包之后的代码，经过了压缩，看不太明白？而且打包的时间有点久，咋办呢？

### 目标：

1. 了解`webpack`的两种打包模式
2. 了解如何配置`webpack`的两种打包模式





### 步骤：

1. 调整`/webpack.config.js`

   1. 增加`mode`

   ```javascript
   // 导入path模块
   const path = require('path')
   
   module.exports = {
     // 打包模式 development 开发 / production 生产
     mode: 'development',
     // 打包的入口文件
     entry: path.resolve(__dirname, 'src', 'index.js'),
     // 打包到哪里
     output: {
       // 使用绝对路径
       path: path.resolve(__dirname, 'dist'),
       // 打包出来的文件名
       filename: 'bundle.js',
     },
   }
   
   ```

2. 对比两次打包的耗时

3. 对比两次打包的文件内容

4. 测试打包之后是否能够运行





### 两种打包模式

1. **development** 
   - 开发环境 
   - 不会对打包生成的文件进行代码压缩和性能优化 
   - 打包速度快，适合在开发阶段使用 

2. **production** 
   - 生产环境 
   - 会对打包生成的文件进行代码压缩和性能优化
   - 打包速度很慢，仅适合在项目发布阶段使用 



### 小结：

1. `development`和`production`分别是什么模式？
2. 两种模式打包出来的文件是否可以正常运行？

## 开发-清理dist目录

> 之前在测试打包的时候，`dist`目录上一次打包的文件会继续保留在目录下，虽然不影响功能，但是看起来。。。
>
> [传送门:output.clean](https://webpack.js.org/configuration/output/#outputclean)

### 目标：

1. 了解如何调整配置实现清理`dist`目录





### 步骤：

1. 调整`/webpack.config.js`

   1. 增加清理`dist`目录的配置

   ```javascript
   // 导入path模块
   const path = require('path')
   
   module.exports = {
     // 打包模式 development 开发 / production 生产
     mode: 'development',
     // 打包的入口文件
     entry: path.resolve(__dirname, 'src', 'index.js'),
     // 打包到哪里
     output: {
       // 使用绝对路径
       path: path.resolve(__dirname, 'dist'),
       // 打包出来的文件名
       filename: 'bundle.js',
       // 每次打包时清除dist目录
       clean: true,
     },
   }
   
   ```

2. 重新执行打包命令:`npm run dev`，观察`dist`目录的改变

3. 调整`output`中的出口文件名，重新打包，并观察`dist`目录的改变





### 小结:

1. `clean`设置为什么可以实现打包时清理`dist`目录？
2. `dist`目录下用来测试的`html`页面还在吗？



## 开发-html-webpack-plugin插件

> 通过插件可以为`webpack`额外增加功能，这一节咱们通过插件来解决上一节`html`页面被删除的问题
>
> [传送门:html-webpack-plugin首页](https://github.com/jantimon/html-webpack-plugin)
>
> [传送门:webpack-html-webpack-plugin说明页](https://github.com/jantimon/html-webpack-plugin)

### 目标：

1. 了解`html-webpack-plugin`插件的作用









### 步骤01-基本使用：

1. `03.html-webpack-plugin插件`分支已经准备好了基础的模板

   1. ```bash
      git checkout 03.html-webpack-plugin插件
      ```

2. 下载`html-webpack-plugin`插件

   ```bash
    npm i --save-dev html-webpack-plugin
   ```

3. 调整`/webpack.config.js`

   1. 增加插件实例化的配置

   ```javascript
   // 导入path模块
   const path = require('path')
   const HtmlWebpackPlugin = require('html-webpack-plugin')
   
   module.exports = {
     // 打包模式 development 开发 / production 生产
     mode: 'development',
     // 打包的入口文件
     entry: path.resolve(__dirname, 'src', 'index.js'),
     // 打包到哪里
     output: {
       // 使用绝对路径
       path: path.resolve(__dirname, 'dist'),
       // 打包出来的文件名
       filename: 'bundle.js',
       // 每次打包时清除dist目录
       clean: true,
     },
     plugins: [
       new HtmlWebpackPlugin(),
     ],
   }
   
   ```

4. 打包测试

5. **功能说明：**

   1. 安装并配置了插件之后
   2. 打包时会自动生成`index.html`页面到`dist`目录
   3. 自动把打包生成的`js`文件插入到页面中
   4. 如果要更详细的设置，往下看↓↓↓↓



### 配置调整

1. `/public/index.html`中增加模板页

   1. 准备默认的`.box`盒子

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>测试用模板</title>
     </head>
     <body>
       <div class="box"></div>
     </body>
   </html>
   
   ```

2. 调整`webpack.config.js`中插件的配置

   ```javascript
   // 导入path模块
   const path = require('path')
   const HtmlWebpackPlugin = require('html-webpack-plugin')
   
   module.exports = {
     // 打包模式 development 开发 / production 生产
     mode: 'development',
     // 打包的入口文件
     entry: path.resolve(__dirname, 'src', 'index.js'),
     // 打包到哪里
     output: {
       // 使用绝对路径
       path: path.resolve(__dirname, 'dist'),
       // 打包出来的文件名
       filename: 'bundle.js',
       // 每次打包时清除dist目录
       clean: true,
     },
     plugins: [
       new HtmlWebpackPlugin({
         // js插入的位置
         inject: 'body',
         // 打包之后的文件名
         filename: 'index.html',
         template: path.resolve(__dirname, './public/index.html'),
       }),
     ],
   }
   
   ```

3. 重新打包，测试配置是否生效

4. 更多的配置可以通过官网确认

5. **说明:**

   1. 调整了`.js`文件的插入位置
   2. 基于现成的模板进行`html`页面生成





### 小结：

1. 本节安装的`html-webpack-plugin`是`webpack`的什么？
2. 本节的配置完成之后`dist`目录下的`index.html`文件是否还需要我们自己创建？



### 注意：

1. git branch 只能查看本地分支
2. git clone 默认只会克隆 master分支
   1. git branch 看不到远程分支
   2. git branch -a 即可





## 开发-打包css

> 到目前为止，咱们处理的都是`js`文件,前端开发中可不仅仅有`js`哦，能不能打包`css`或者其他的一些文件呢？
>
> [传送门:打包css](https://webpack.js.org/guides/asset-management/#loading-css)

### 目标:

1. 了解`webpack`中`loader`的作用
2. 了解如何让`webpack`打包`css`





### 概念:

![image-20220327110130495](https://gitee.com/westblueflower/imgs/raw/master/img/202203271459665.png)

1. `webpack`默认只能解析`js`模块
2. 如果是其他的文件需要安装对应的`loader`
3. `loader`是文件加载器，能够加载资源文件，并对这些文件进行特定的处理，然后打包的指定文件中，
   1. 简单来说就是将`webpack`传入的字符串做出特定的处理修改





### 步骤:

1. 可以切换到`04.打包css`分支，获取如下模板

   ```bash
   git add .
   git commit -m"记录之前的操作"
   git checkout 04.打包css
   ```

2. 下载所需的`loader`,第三方模块

   ```bash
   npm i --save-dev style-loader css-loader
   ```

   

3. 调整`webpack.config.js`的配置

   ```javascript
   // 导入path模块
   const path = require('path')
   const HtmlWebpackPlugin = require('html-webpack-plugin')
   
   module.exports = {
     // 打包模式 development 开发 / production 生产
     mode: 'development',
     // 打包的入口文件
     entry: path.resolve(__dirname, 'src', 'index.js'),
     // 打包到哪里
     output: {
       // 使用绝对路径
       path: path.resolve(__dirname, 'dist'),
       // 打包出来的文件名
       filename: 'bundle.js',
       // 每次打包时清除dist目录
       clean: true,
     },
     // 模块配置
     module: {
       // 解析规则
       rules: [
         {
           test: /\.css$/i, // .css结尾的文件
           use: ['style-loader', 'css-loader'], // 通过 这2个 loader进行解析
         },
       ],
     },
     // 插件配置
     plugins: [
       new HtmlWebpackPlugin({
         // js插入的位置
         inject: 'body',
         // 打包之后的文件名
         filename: 'index.html',
         // 使用哪个文件作为模板
         template: path.resolve(__dirname, './public/index.html'),
       }),
     ],
   }
   
   ```

4. 添加`css`文件

   1. `/src/assets/css/base.css`
   2. 编写测试演示

5. 导入`/src/index.js`

   ```javascript
   // 导入css 
   import './assets/css/base.css'
   ```

6. 重新运行打包命令

   ```bash
   npm run dev
   ```





### 试一试

1. 调整`/src/assets/css/base.css`中的内容，确认解析结果
2. 可以额外的添加其他的样式文件，继续测试
3. `.css`文件导入的语法，只是需要整合模块，所以使用的是:`import 'xxx.css'`





### 小结:

1. `webpack`默认是否可以解析`.css`文件？
2. 为了让`webpack`可以解析其他文件需要安装对应的什么？





## 开发-打包less

> 上一节样式的是打包`css`,前端开发中为了简化编码，咱们可能会使用一些css预处理程序，这一节咱们以`less`为例
>
> [传送门:less-loader](https://webpack.js.org/loaders/less-loader/)

### 目标:

1. 了解如何让`webpack`打包`less`





### 概念:

![image-20220327110130495](https://gitee.com/westblueflower/imgs/raw/master/img/202203271459665.png)

1. `webpack`默认只能解析`js`模块
2. 如果是其他的文件需要安装对应的`loader`
3. `loader`是文件加载器，能够加载资源文件，并对这些文件进行特定的处理，然后打包的指定文件中，
   1. 简单来说就是将`webpack`传入的字符串做出特定的处理修改





### 步骤:

1. 可以切换到`06.打包less`分支，获取如下模板

   ```bash
   git add .
   git commit -m"记录之前的操作"
   git checkout 05.打包less
   ```

2. 下载所需的`loader`,第三方模块

   ```bash
   npm i less less-loader --save-dev
   ```

3. 调整`webpack.config.js`的配置

   ```javascript
   // 导入path模块
   const path = require('path')
   const HtmlWebpackPlugin = require('html-webpack-plugin')
   
   module.exports = {
     // 打包模式 development 开发 / production 生产
     mode: 'development',
     // 打包的入口文件
     entry: path.resolve(__dirname, 'src', 'index.js'),
     // 打包到哪里
     output: {
       // 使用绝对路径
       path: path.resolve(__dirname, 'dist'),
       // 打包出来的文件名
       filename: 'bundle.js',
       // 每次打包时清除dist目录
       clean: true,
     },
     // 模块配置
     module: {
       // 解析规则
       rules: [
         {
           test: /\.css$/i, // .css结尾的文件
           use: ['style-loader', 'css-loader'], // 通过 这2个 loader进行解析
         },
         {
           test: /\.less$/i, // .less结尾的文件
           use: [
             // 使用如下的loader进行解析
             'style-loader',
             'css-loader',
             'less-loader',
           ],
         },
       ],
     },
     // 插件配置
     plugins: [
       new HtmlWebpackPlugin({
         // js插入的位置
         inject: 'body',
         // 打包之后的文件名
         filename: 'index.html',
         // 使用哪个文件作为模板
         template: path.resolve(__dirname, './public/index.html'),
       }),
     ],
   }
   
   ```

4. 添加`less`文件

   1. `/src/assets/less/index.less`

   2. 编写测试样式

   3. ```less
      body {
        background-color: skyblue;
        .box {
          border: 1px solid #000;
          padding: 20px;
          background-color: pink;
          font-size: 20px;
          border-radius: 20px;
        }
      }
      
      ```

5. 导入`/src/index.js`

   ```javascript
   // 导入css 
   // import './assets/base.css'
   // 导入less
   import './assets/less/index.less'
   ```

6. 重新运行打包命令

   ```bash
   npm run dev
   ```





### 试一试

1. 调整`/src/assets/less/index.less`中的内容，确认解析结果
2. 可以额外的添加其他的样式文件，继续测试
3. `.less`文件导入的语法，只是需要整合模块，所以使用的是:`import 'xxx.less'`





### 小结:

1. `webpack`默认是否可以解析`.less`文件？





## 开发-打包图片

> 除了样式文件以外，图片也是非常常见的资源哦，如何打包呢？
>
> [传送门:加载图片](https://webpack.docschina.org/guides/asset-management/#loading-images)

### 目标:

1. 了解`webpack`中如何打包图片



### 概念：

1. 图片资源无需额外的安装其他模块，可以直接使用内置的[asset/modules](https://webpack.docschina.org/guides/asset-modules/)
2. 资源模块类型(asset module type)，通过添加 4 种新的模块类型，来替换所有这些 loader：
   - `asset/resource` 发送一个单独的文件并导出 URL。之前通过使用 `file-loader` 实现。
   - `asset/inline` 导出一个资源的 data URI。之前通过使用 `url-loader` 实现。
   - `asset/source` 导出资源的源代码。之前通过使用 `raw-loader` 实现。
   - `asset` 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 `url-loader`，并且配置资源体积限制实现。



### 步骤：

1. 结合官方文档调整`webpack.config.js`

   ```javascript
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
         {
           test: /\.(png|svg|jpg|jpeg|gif)$/i,
           type: 'asset/resource',
         },
        ],
      },
   ```

   

2. 添加一些测试图片到`/assets/imgs`目录下

3. `/src/index.js`中导入并使用,比如

   ```javascript
   // 导入图片
   import dog from './assets/imgs/dog.png'
   import shake from './assets/imgs/shake.gif'
   
   function appendImgs() {
     for (let i = 0; i < 100; i++) {
       $('<img />').attr('src', shake).appendTo('body')
       $('<img />').attr('src', dog).appendTo('body')
     }
   }
   appendImgs()
   
   ```

4. 执行命令:

   ```bash
   npm run dev
   ```





### 小结:

1. `webpack`加载图片资源是否需要额外的安装第三方模块？





## 开发-watch模式

> 到目前为止，每次调整配置，咱们都需要重新运行一次，较为麻烦，不是自动化吗？这一节咱们就来开启`watch`模式
>
> [传送门：使用watch模式](https://www.webpackjs.com/guides/development/#%E4%BD%BF%E7%94%A8%E8%A7%82%E5%AF%9F%E6%A8%A1%E5%BC%8F)

### 目标：

1. 了解`watch`模式的工作原理





### 步骤：

1. 调整`package.json`中的`scripts`增加命令

   ```json
     "scripts": {
       "dev": "webpack --config webpack.config.js",
       "watch": "webpack watch --config webpack.config.js",
     },
   ```

2. 执行新增加的命令:

   ```bash
   npm run watch
   ```

3. 修改`/src/index.js`，或者他内部引用的文件，观察`终端`的变化

   





### 说明:

1. `watch`模式
   1. 检测打包入口
   2. 以及打包入口引用的文件是否发生变动
   3. 如果发生变动，就重新打包





### 小结:

1. 开启`watch`模式是否需要安装第三方模块？



### 注意：

1. 图片的解析：
   1. 不需要额外的安装第三方模块
   2. 需要调整`webpack.config.js`中的配置
2. git add . 这个命令只能够识别到当前目录及子目录中的修改
   1. `/src`目录
      1. 命令在这里执行
      2. src目录外面的文件更改添加不到git中
   2. `根目录`
   3. 终端中所处的目录应该是项目的根目录







## 开发-webpack-dev-server 

> 上一节已经搞定了一个自动化,但是浏览器的刷新还要咱们来，这一节咱们来演示另外一个非常常用的插件`dev-server`，会开启一个服务器，并自动监测文件变更，刷新页面
>
> [传送门:webpack-dev-server](https://webpack.js.org/guides/development/#using-webpack-dev-server)

### 目标:

1. 了解`webpack-dev-server`插件的作用
2. 了解如何安装并配置`webpack-dev-server`插件 





### 基本使用

1. 可以切换到`07.webpack-dev-server插件`快速获取模板

2. 下载`webpack-dev-server`插件

   ```bash
   npm i --save-dev webpack-dev-server
   ```

3. 调整`/webpack.config.js`

   1. 增加`devServer`的配置

   ```javascript
   // 导入path模块
   const path = require('path')
   const HtmlWebpackPlugin = require('html-webpack-plugin')
   
   module.exports = {
     // 打包模式 development 开发 / production 生产
     mode: 'development',
     // 打包的入口文件
     entry: path.resolve(__dirname, 'src', 'index.js'),
     // 开发服务器
     devServer: {
       port: 9000, // 实时打包所用的端口号
       open: true, // 初次打包完成后，自动打开浏览器
       // 服务器的根目录
       static: path.join(__dirname, './dist'),
     },
     // 打包到哪里
     output: {
       // 使用绝对路径
       path: path.resolve(__dirname, 'dist'),
       // 打包出来的文件名
       filename: 'bundle.js',
       // 每次打包时清除dist目录
       clean: true,
     },
     // 模块配置
     module: {
       // 解析规则
       rules: [
         {
           test: /\.css$/i, // .css结尾的文件
           use: ['style-loader', 'css-loader'], // 通过 这2个 loader进行解析
         },
         {
           test: /\.less$/i, // .less结尾的文件
           use: [
             // 使用如下的loader进行解析
             'style-loader',
             'css-loader',
             'less-loader',
           ],
         },
       ],
     },
     // 插件配置
     plugins: [
       new HtmlWebpackPlugin({
         // js插入的位置
         inject: 'body',
         // 打包之后的文件名
         filename: 'index.html',
         // 使用哪个文件作为模板
         template: path.resolve(__dirname, './public/index.html'),
       }),
     ],
   }
   
   ```

4. 调整`package.json`，增加一条命令

   ```json
     "scripts": {
       "dev": "webpack --config webpack.config.js",
       "watch": "webpack watch --config webpack.config.js",
       "serve": "webpack serve --config webpack.config.js"
     },
   ```

   

5. 执行命令，运行项目

   ```bash
   npm run serve
   ```

   

6. 修改`/src/index.js`并观察浏览器的改变

7. **注意：**

   1. 凡是修改了 `webpack.config.js` 配置文件，或修改了 `package.json` 配置文件，必须重启实时打包的服务器，否则最新的配置文件无法生效！  



### 说明:

#### 打包生成的文件哪儿去了？ 

1. 不配置 webpack-dev-server 的情况下，webpack 打包生成的文件，会存放到实际的物理磁盘上 
   - 严格遵守开发者在 webpack.config.js 中指定配置 
   - 根据 output 节点指定路径进行存放 
2. 配置了 `webpack-dev-server` 之后，打包生成的文件存放到了内存中
   - 不再根据 output 节点指定的路径，存放到实际的物理磁盘上
   - 提高了实时打包输出的性能，因为内存比物理磁盘速度快很多
3. `http://localhost:9000/`
   1. 访问的是`devServer`配置中`static`的根目录
   2. `/index.html`可以省略不写
4. 可以测试访问`/bundle.js`，会去读取`/dist/bundle.js`文件，并显示出来
5. 因为开启了服务器，如果要调整`webpack.config.js`需要，`ctrl+c`关闭再重新运行



### 小结：

1. `webpack-dev-server`的本质是开启了一个测试用服务器

## HMR

> 开启了`dev-server`之后，还会默认开启一个很有用的功能，`HMR(hot module replacement)`
>
> [传送门：模块热替换](https://www.webpackjs.com/concepts/hot-module-replacement/)

### 目标:

1. 了解`HMR`的作用
2. 了解如何开启或者关闭`HMR`



### 步骤：

1. 调整`webpack.config.js`中的配置即可开启或者关闭`HMR`

   ```javascript
   module.exports = {
     // 开发服务器
     devServer: {
       port: 9000, // 实时打包所用的端口号
       open: true, // 初次打包完成后，自动打开浏览器
       // 服务器的根目录
       static: path.join(__dirname, './dist'),
       hot: false,// 模块热替换 true / false 开启 / 关闭
     },
   }
   
   ```

2. `hot`设置为`true`

   1. 修改`/src/index.js`中引用的样式文件
   2. 观察浏览器是否刷新

3. `hot`设置为`false`

   1. 修改`/src/index.js`中引用的样式文件
   2. 观察浏览器是否刷新





### 说明：

1. 开启了`HMR`之后，当我们修改了代码并保存时
2. `HMR` 会在应用程序运行过程中替换、添加或删除模块，而无需重新加载整个页面。
3. `HMR` 主要通过以下几种方式，来显著加快开发速度：
   - 保留在完全重新加载页面时丢失的应用程序状态；
   - 只更新变更内容，以节省宝贵的开发时间；
   - 调整样式更加快速 - 几乎相当于在浏览器调试器中更改样式。
4. `HMR`是默认开启的，如非必要，可以不去动他







### 小结：

1. 使用`dev-server`进行开发时，是否每次代码的更改都会刷新浏览器？
2. `dev-server`是通过什么功能实现的这个效果？







## 代码打包

> 到目前为止，咱们搭建的都是开发环境，通过很多的配置已经实现了，很多功能，比如解析`css`，`图片`，自动刷新。但是代码写完之后，发布到服务器，可不是把现在这个项目直接丢到服务器哦，咱们需要将他用生产模式进行打包

### 目标:

1. 配置打包命令，并打包代码
2. 发布到线上？





### 步骤：

1. `package.json`中增加打包命令

   1. `--mode`，设置模式为`production`,生产环境

   ```json
     "scripts": {
       "dev": "webpack --config webpack.config.js",
       "watch": "webpack watch --config webpack.config.js",
       "build": "webpack  --config webpack.config.js --mode production",
       "serve": "webpack serve --config webpack.config.js"
     },
   ```

2. 执行打包命令

3. 观察`/dist`目录



### 说明：

1. 上线的代码需要经过压缩，合并等操作
2. 之前的各项配置，是为了搭建自动化的开发环境
3. 这一节最后的操作就是项目开发完毕之后的打包操作
4. `/dist`
   1. 目录就是咱们打包之后的结果
   2. 发布上线用的也是这一份代码





### 小结：

1. `mode:production`也可以叫什么环境？
2. 打包之后的代码在哪个目录？可以调整吗？











## source map

> 代码打包之后文件小了不少，如果报错了好不好调试呢？
>
> [传送门:使用source map](https://www.webpackjs.com/guides/development/#%E4%BD%BF%E7%94%A8-source-map)
>
> [传送门:source map介绍](https://blog.teamtreehouse.com/introduction-source-maps)

### 目标：

1. 了解`source map`的作用
2. 了解什么时候需要移除`source map`



### 概念: 

1. `Source Map` 就是一个信息文件，里面储存着位置信息。存储着压缩混淆后的代码，所对应的`转换前`的位置。
2. 有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码，能够极大的方便后期的调试。





### 测试:

1. `/src/index.js`写一些错误的代码:比如:

   ```javascript
   // 使用一个不存在的变量
   console.log(kissgoodbye)
   ```

2. 执行打包命令，并运行代码，看能否定位到报错的位置，`/(ㄒoㄒ)/~~`

![image-20220327160900033](https://gitee.com/westblueflower/imgs/raw/master/img/202204011635776.png)





### 配置Source Map

1. **开发环境**
   - 推荐在 `webpack.config.js` 中添加如下的配置，即可保证运行时报错的行数与源代码的行数 保持一致：

```js
module.exports = {
  // source-map 仅限在开发模式中使用
  //（开发中，程序员需要排错，需要准确的定位错误行号）
  devtool: 'source-map',
}
```

2. **生产环境**
   - 项目开发完毕时，发布上线需要移除`source-map`，避免源码泄露

```js
module.exports = {
  // source-map 仅限在开发模式中使用
  //（生产环境，我们不希望别人看到我们的源码，关掉该配置即可） 
  //（开发中，程序员需要排错，需要准确的定位错误行号）
  // devtool: 'source-map',
}
```





### 小结:

1. 开发时可以通过`source map`快速排错，代码发布上线时是否需要保留该文件？



































