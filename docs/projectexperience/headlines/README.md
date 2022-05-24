## 黑马头条介绍

> 在线接口基地址：http://toutiao.itheima.net/
>
> 在线项目演示地址：http://xpzll.gitee.io/hmtt79

> 技术栈 
>
> >- Vue
> >- Vue-router
> >- Vuex（轻度使用）
> >- axios
> >- vant

- 

## 初始化项目

> 全局样式

新建项目后删除多余内容，再进行其他操作

### 全局样式

全局样式放在项目的`src`里新建一个`styles`文件夹下，放`base.less`

然后到`main.js`中做导入即可

```js'
//base.less
//写全局样式
* {
    margin: 0;
    padding: 0;
    font-size: 14px;
}
```

```
//main.js
import "./styles/base.less"
```

### vant按需导入

>[Vant 2 - 轻量、可靠的移动端组件库 (oschina.io)](https://vant-contrib.oschina.io/vant/v2/#/zh-CN/)

项目肯定用到 `vant`，所以我们还要下载 `vant` (给vue2用的版本) 

1. 下载vant

```nodejs
npm i vant@latest-v2 -S
```

2. 下载按需导入插件`babel-plugin-import`

```nodejs
npm i babel-plugin-import -D
```

3. 然后修改 `babel.config.js` 里的配置文件，

```
//再babel.config.js中添加
plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
 ]
```

4. 最后来到 `src` 新建 `utils`文件夹，里面新建一个 `vant.js` 作为将来`导入vant`组件的代码文件 然后引入到 `main.js` 即可 

```
// 导入vant
import './utils/vant'
```

### 准备axios

本项目肯定要发 `ajax请求`，在`vue`里推荐使用 `axios`这个库来发`ajax`请求，因此我们也需要给项目下载 `axios` 

```
npm i axios
```

根据之前学的架构思想，应该把 `axios`放到 `utils`里设置基地址，和暴露出去 ,来到 `utils` 新建 `request.js` 文件，代码如下 

```
import axios from 'axios'

// 克隆对象并设置基地址
const request = axios.create({
    baseURL: 'http://toutiao.itheima.net/'
})

// 暴露出去
export default request
```



### 屏幕适配准备🎈 (flexible+pxtorem)

本项目是一个移动端的项目，移动端的设备有大有小，所以我们必须要做一个布局的适配，不然换一个屏幕显示就异常了

	>rem:` rem` 是一个专门用来做移动端适配的单位 
	
	>`flexible.js`:

- 因为移动端设备实在太多太多了，如果你一个一个的写媒体查询来设置根字体大小会非常的累和工作量庞大
- 所以我们希望有一种技术，它可以自动根据屏幕帮我们设置html的字体大小，那样就不用写媒体查询了
- 有，这就是淘宝前端团队出的一个插件叫 flexible
  它的原理是：（了解） 
- 每次页面变化都会立即拿到最新页面大小（可以为屏幕宽度），然后再把屏幕分成10等分，然后再把每分得到的值，作为html根字体大小

-  例如375的屏幕，分成10分，每份是37.5，所以把37.5作为了html的字体大小
- 因此如果用了 flexible 如果宽度给10rem就代表铺满，给5rem就代表一半
- 这个插件只要导入就有效果



	>后css处理 - pxtorem

- 以后美工出的设计稿设计稿里是`px`单位。那么我们能直接把设计稿里的px单位写成rem吗？肯定不能 
-  因为例如设计稿里的宽度为100px，如果你直接改成100rem，绝对都超出屏幕了。 
-  意味着，如果我们在项目中要使用rem单位的话，就还要把设计稿里的px转换成rem单位 
-  例如：设计稿为100px，那么要用 `100` 除以 `根字体大小` 例如375的屏幕，就100 / 37.5 得到2.666，再设置成rem，就是我们代码要写2.666rem才行 
-  问题来了，那么每次搞单位都要自己算，`极其麻烦`！所以我们在想，能不能有一种方式就是 美工设计稿写的是多少px，我就写多少px。等项目打包时自动把所有的px转成rem 
-  有！那就是webpack的一个插件叫 `pxtorem` 
-  它可以让我们写代码时就是用px单位，只不过在打包的时候再把我们写的所有px自动转成rem，所以不影响我们阅读代码 

> css的后处理器 

- - postcss：
  - 主要突出在 `后` 字，后的意思是`代码写完后`，也就是在`打包阶段` 做的处理，就叫css后处理



 来到项目下载 `flexible`，然后来到 `main.js` 做导入即可 

```
npm i amfe-flexible
```

下载`后css处理 - pxtorem`

```
//是下载了两个东西：一个是 postcss  一个 是 postcss-pxtorem
npm install postcss postcss-pxtorem --save-dev
```

准备配置文件，就是在项目的根目录，也就是跟`package.json`平级的位置新建一个 `postcss.config.js`，复制如下配置

```
// postcss.config.js
module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 37.5,
        propList: ['*'],
      },
    },
  };
```



## `api`

### `axios`封装在`utils`

> 在`res`下创建`utils`文件夹 
>
> 存放`工具`文件

>`utils` 工

​	对`axios`进行封装 设`置基地址`

```
// 导入axios
import axios from 'axios'
// 设置axios的基地址
// 有多少个基地址就克隆多少个axios对象
// ax1 = 克隆的axios 对应基地址1
// ax2 = 克隆的axios 对应基地址2
// 用ax1发基地址1的请求，用ax2发基地址2的请求.....

// 克隆出一个新的axios对象
const request = axios.create({
    baseURL: 'http://toutiao.itheima.net/'
})


// 暴露出去
export default request
```





### 封装接口函数

> 为什么封装

- 以后可能我们的请求，再多个页面都要发，如果是多个页面都写一份一样的代码，会造成代码冗余，以及不利于后期的维护修改 

-  所以应该：`把请求的代码封装成函数`，谁要用谁导入并调用即可 

> 怎么封装

1. 来到 `src`，新建一个文件夹叫 `api`，这个文件夹专门用来存放封装的接口请求函数

2. 以后会根据模块来新建 `js文件`，来封装这个模块对应的接口函数

3. 例如：`登录`属于接口文档中的用户模块，那我就新建一个 `user.js`文件，然后在里面封装登录接口函数，以及封装其他的跟用户有关的接口函数



-  注意： 

- - 封装函数时，要考虑这个接口函数多个页面可能要调用，但是他们发请求拿到的结果的处理可能不一样，所以不能写死.then
  - 解决办法：把发请求得到的`promise对象`，返回出去，那样调用者就能得到promise对象，想怎么.then就可以自己怎么写

```
// 先导入请求对象
import request from '@/utils/request'

// 封装一个专门用来做登录的接口函数
export const login = (data) => {

    return request({
        url: '/v1_0/authorizations',
        method: 'post',
        data
    })

    // 因为这个接口可能多个地方要用
    // 而多个地方用的时候，根据他们不同的需求.then里的代码是不一样
    // 所以不能写死.then
    // 解决办法：就直接把发请求得到的promise对象，给他返回出去
    // 那样调用者想干嘛就可以自己写.then
    // .then ( res => {

    //     console.log(res)
    // })
    // .catch(err=>{
    // })
}


// 后续还可以继续封装其他跟用户模块有关的接口函数
```



### 统一出口原则

-  以后我们会按接口模块封装不同的`js`文件，而有可能某个页面里面需要发不同模块的接口 
-  那就意味着要导入多个模块 

```
import {xx} from '@/api/模块1'
import {oo} from '@/api/模块2'
```

- 所以为了方便调用者可以方便导入，我们可以在`api`文件夹里，把所有模块的接口函数在一个文件里做一个统一的暴露（这就是`统一出口原则`） 
-  具体做法： 

- - 来到 `api`文件夹，新建 `index.js`，然后里面就做统一暴露的代码

- ```
  // 这个文件只是做不同模块接口的统一暴露
  import { login } from './user'
  
  // 再做暴露
  export const loginAPI = login
  ```

调用

```
import { loginAPI } from '@/api'
```



### `Vue `查找顺序🎈

`Vue `会默认 查找   ` pages.json文件` > `index.js` >` index.vue`



### token

> 令牌
>
> 保存到vuex

-  token：是后端服务器给你的一个`身份识别码`，相当于是一个商家给你发送的`会员卡` 
-  项目中后续可能要经常用到token，才能让服务器给我对应的数据，所以token应该保存起来 
-  因为项目中多个页面都要用token，为了让所有页面都能访问到，就把 `token` 存到 `vuex`里 







## 数据持久化

- 因为`vuex`的数据是存在内存中的，所以页面一刷新数据就没了 
-  所以我们要把token再长久保存（可以用`localStorage`） 

来到 `utils`文件夹，新建 `auth.js`文件，在这个文件里专门封装操作token的本地存储的方法 



## layout布局组件思想

进入到主页后，经过分析，应该是一个父路由里面嵌套了一个子路由，做四个页面的切换 

当父路由只是用来做`大致的布局以及路由切换`时，那么这种路由我们称之为`layout路由`,`layout`是`布局`的意思，它不负责显示具体数据，它只是负责做大体布局 

![1](https://www.yuque.com/api/filetransfer/images?url=https%3A%2F%2Fs2.loli.net%2F2022%2F04%2F19%2FIofHemthPd3kJLT.png&sign=f8ad1de692f0d2b16eaa62804d63d7e272e8031fe03503e36cf8720fdaa1cc6a)



## axios请求拦截

- 需求：我们发现后面要调用的接口基本上都要携带token，那就意味着每次封装都要写 `headers`然后再拼接token进去，比较麻烦。我们希望有一种方式可以在发请求时自动帮我们添加token，那这样我们就方便
- 用 `axios请求拦截` 可以实现

![2](https://www.yuque.com/api/filetransfer/images?url=https%3A%2F%2Fs2.loli.net%2F2022%2F04%2F19%2Fur6b2xeJpdIH95k.png&sign=595475b8ac5f82150c5bb8286626c3414bbb8cd7b2c3be849f5cf40df9989d82)



```
        // 添加一个axios的请求拦截器
        // 函数1：是在发请求时会调用(一般用这个)
        // 函数2：当请求出错时会调用
        axios.interceptors.request.use(function (config) {
            // 这里的参数config，就是你本次发请求的所有信息
            // console.log('我调用了', config)

            // 你在这里return这个参数，这个请求才能正常发出去
            // 所以也就是说这个config，就是你真正发请求时的一些相关信息了
            // 里面有请求路径、请求方式
            // config.url = 'http://ajax.zllhyy.cn/hero/simple?name=提莫'

            config.headers.token = 'zzzzzz'
            return config;

        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });
```





## axios响应拦截



- 函数1：正常响应调用的函数，参数response就是服务器返回的数据，你在这里return什么，.then就拿到什么 
-  函数2：错误响应调用的函数，如果你在里面返回的是错误代码，也就是`return Promise.reject(error);`，那么控制台就会报错，并且原本的请求不会进入到.then里了，但是如果只要你在这里不写`错误代码`，那么之前的请求还是会进到.then里，并且，这里return什么，那么.then就拿到什么，**所以我们可以在这个函数里做一些补救发正确的请求再返回** 

```
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```



## 路由元信息

- 一个项目里以后可能几十上百个页面都是需要登录才能访问的，如果你一直在`if`里加`||`，代码会变的非常冗余不好看，所以需要想办法，把这种需要登录的页面归为一类 
-  如何归为一类？ 

- - 可以利用`路由元信息`

-  路由元信息： 

- -  相当于给路由打上标记 
  -  也可以相当于把一些数据存到路由身上 
  -  语法：在路由规则里加一个 `meta`，它是一个对象 

```
{ name: '路由名字', path: '路径', component:路由对应组件， meta: { 数据名: 值 } }
```



## scoped与深度作用选择器

- 如果一个组件里加了 `scoped`，那么他能保证这个组件内写的样式不会影响别的组件，只给自己用
- 但是他能只能让当前组件写过的标签生效，如果某个标签是个组件，组件内部又有别的标签不会生效，如果希望组件内部的标签页生效，就要用 `::v-deep`，也就是深度作用选择器



## axios总结

- 以后接口文档说是`路径参数`，就是代表要直接写在路径上的，就像上面这个 
-  以后文档说是`查询参数`或者叫`query`参数，代表是用 `params`传参，就是在路径上要拼接 `?key=value` 
-  以后文档说是`请求体参数`或者叫`body`参数，代表是用 `data` 传参，这种参数是通过请求体传递的，一般用在`post`请求 



## websocket介绍

- websocket是一套通信协议，协议头一般为：`ws` 或 `wss`
- 特点：建立连接后，发送消息是双向的，客户端可以主动给服务器发消息，服务器也可以主动给客户端发消息
- 所以用来做聊天室极其适合。



![](https://cdn.nlark.com/yuque/0/2021/png/1359634/1637635606013-0ffd8875-16f8-4b1a-88e9-f29d5ad1aba0.png?x-oss-process=image%2Fresize%2Cw_1125%2Climit_0%2Fresize%2Cw_1125%2Climit_0)



### websocket基本使用

- 练习接口：`ws://zllhyy.cn:4430` 

-  特点：服务器会学你说话，你说什么，服务器给你返回什么 

-  创建 `websocket`对象 

  ```
  let ws = new WebSocket('服务器地址')
  ```

  

- 想知道有没有连接成功，可以监听连接成功的事件 

  ```
  ws.addEventListener('open', function () {
      
      // 当连接成功调用
  })
  ```

- 连接成功了，我想接收服务器的消息，要监听服务器的消息事件 

  ```
  ws.addEventListener('message', function (e) {
      
      // 当服务器给我发消息会触发
      // e.data就是服务器返回的消息（数据）
  })
  ```

-  我也想给服务器发消息 

  ```
  ws.send('消息内容')
  ```

- 如果不想连接了，可以关闭连接 

  ```
  // 关闭之前监听关闭事件
  ws.addEventListener('close', function () {
      // 当服务器连接关闭时调用
  })
  ws.close()
  ```



### socket.io介绍

- 这是一套基于websocket协议的框架，方便开发
- 分为两套： 

- - server：服务器版，用来给服务器写接口用的额
  - client：客户端版，就是在浏览器发请求用的

#### socket.io 基本使用

- 基本使用步骤 

- -  先导入 
  -  调用io函数，建立连接，并得到连接对象

- ```
  const socket = io('网址')
  ```

-  接服务器消息方法

- ```
  socket.on('消息名称', (msg) => {
      // 这个函数就是当这个消息发过来时自动调用
      // msg就是消息内容
  } )
  ```

- 给服务器发消息的方法 

- ```
  socket.emit('消息名称', 消息内容)
  ```









## 打包生成项目

- 开发环境 

- - 就是开发阶段

-  生产环境 

- -  项目正式投入生产（说人话：上线了） 
  -  上线了就意味着给浏览器访问了，但是浏览器只认识html、css、js文件，不认识.vue文件，所以能直接把.vue文件上线吗？不能！ 
  -  所以需要把我们的源代码打包成html、css、js（代码还要压缩） 
  -  所以我们可以利用脚手架的打包功能进行打包 
  -  如何打包？ 

```
npm run build
```

打包后回生成 `dist` 文件夹，这个文件夹里的文件上传到服务器即可 

### 配置相对路径

-  默认情况下，打包生成的文件，用的路径都是 `/`，也就是根目录。如果一个服务器只有这一个网站，那肯定可以用 
-  但是一个服务器放多个网站，用文件夹形式管理起来，这个`/`就找不到的对应的文件 
-  所以最保险的形式，不要用`根目录`，用相对路径就保险 
-  如果需要生成的是相对路径导入，该添加配置文件 
-  vue-cli的配置文件是： `vue.config.js` 
-  加配置如下 

```
publicPath: ''
```



### map文件

- 默认情况下，打包回生成map文件。map文件就是打包后的代码根源代码的映射关系。可以方便排查报错 
-  但是一般情况下，这个文件只是在开发阶段有用，正式上线一般不需要它 
-  该如何打包时不生成map文件？ 
-  在配置文件里，写 

```
productionSourceMap: false
```



### 路由懒加载

- 默认情况下的打包，都会把所有路由对应的组件js代码全部打包到一个文件里 
-  好处：切换页面非常丝滑，减轻服务器负担，因为第一次访问的页面时候加载的这个js文件就包含了所有页面路由了 
-  缺点：首屏加载慢 
-  如果希望加载对应的页面才下载对应的js文件，那就要用路由懒加载 
-  如何实现懒加载？ 

- -  把路由的导入方式改掉，改成 

- ```
  const 组件名 = () => import('路径')
  ```



## 打包上线

```
●  把打包后的文件，部署到服务器放网站的根目录，就可以用服务器的域名访问了 
●  可以利用 gitee 提供的 page服务，可以部署静态网站（html、css、js）
```

## 打包app

- 苹果没法打包，就算打包了也要越狱后的手机才能安装，如果希望不越狱又能打包，那么请成为`苹果认证开发者`，每年交99美金就能成为，它就会给你发证书（电子证书），用这个就可以打包
- 利用 `HBuilderX`提供的服务来打包
- 