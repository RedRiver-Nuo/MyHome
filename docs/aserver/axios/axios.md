## axios网络请求库

> 到目前为止的所有逻辑都是本地的，不调接口吗?这就来
>
> [传送门:axios中文网](http://www.axios-js.com/)

**介绍**

- Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
- 浏览器中网络请求是基于XMLHttpRequest的封装
- **作用：**在后续的课程中，主要就是用来发`ajax请求`的



**jQuery被抛弃啦?**

- jQuery库比较大，因为它除了封装ajax还封装好多用来操作DOM的方法，但是这些方法在Vue中已经不需要使用了，所以这个时候如果还用jQuery，会导致项目变的稍微大一点
- 而axios只是封装ajax，比较纯粹，所以容量小，而且还有很多特色功能







## axios基本使用

> axios和Vue没有必然的联系，为了大伙更好的体会这个点，咱们先用普通的网页进行测试



**使用步骤:**

1. 下包
2. 导包
3. 调用方法



### 语法:

```javascript
// 直接发送get请求 
axios
    .get(url地址, { params: { key: value } })
    .then(res => {})
    .catch(errRes => {})

// 直接发送post请求
  axios
    .post(url地址, { key: value })
    .then(res => {})
    .catch(errRes => {})

// config模式 类似于$.ajax方法用的最多
axios({
    url: '请求路径',
    // 注意：这里是写method，不是写methods
    method: '请求方式',
    // 这是post请求携带的参数（也叫body参数）
    data: {},
    // 这是get请求携带的参数（也叫query参数）
    params: {},
    // 设置请求头（可以用来携带token）
    headers: {}
})
.then (res => {
    
    // 当请求成功调用.then
    // res就是服务器返回的数据
})
.catch (err => {
    // 当发请求时出错调用.catch
})
```



### 测试用接口

**get - 随机笑话**

- 请求地址：https://autumnfish.cn/api/joke
- 请求方法：get
- 请求参数：无
- 响应内容：随机笑话



**get - lol-查询**

- 请求地址：https://autumnfish.cn/api/lol/search
- 请求方法：get
- 请求参数：q

| 参数名 | 参数说明 | 备注         |
| ------ | -------- | ------------ |
| q      | 英雄名   | 查询的关键字 |

- 响应内容：JSON



**post - 用户注册**

- 请求地址：https://autumnfish.cn/api/user/reg
- 请求方法：post
- 请求参数：username

| 参数名   | 参数说明 | 备注     |
| -------- | -------- | -------- |
| username | 用户名   | 不能为空 |

- 响应内容：注册成功或失败



### 测试代码:

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
    <button class="get">get请求</button>
    <button class="post">post请求</button>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script>
      // 找到dom元素
      document.querySelector('.get').onclick = function () {
        // get请求有参数
        axios('https://autumnfish.cn/api/lol/search', {
          params: {
            q: '亚'
          }
        })
          .then(res => {
            console.log('res:', res)
          })
          .catch(errRes => {
            console.log('errRes:', errRes)
          })
        // get请求无参数
        // axios
        //   .get('https://autumnfish.c123123n/api/joke')
        //   .then(res => {
        //     // 请求成功的回调
        //     // console.log('res:', res)
        //     console.log(res.data)
        //   })
        //   .catch(errRes => {
        //     // 请求失败的回调
        //     console.log('errRes:', errRes)
        //   })
      }
      // 找到dom
      document.querySelector('.post').onclick = function () {
        axios
          .post('https://autumnfish.cn/api/user/reg', {
            username: 'lileilovehanmeimeima?'
          })
          .then(res => {
            console.log('res:', res)
          })
          .catch(errRes => {
            console.log('errRes:', errRes)
          })
      }
    </script>
  </body>
</html>

```



## axios结合Vue

> 上一节已经测试过了axios可以单独使用，如何和Vue结合呢？

目标：

1. 能够在`vue`中使用`axios`获取网络数据



准备工作：

1. 确保之前的操作记录，并创建新分支,和标题重名



步骤

1. 下包：npm i axios
2. 导包：import axios from 'axios'
3. 用包：在methods中使用
4. 结合笔记中提供的测试接口进行调试
5. 需要注意this的指向问题





小结：

1. Vue中结合axios使用的步骤，和在网页中基本一致
2. 为了避免this指向，建议用什么函数？箭头函数/funciton