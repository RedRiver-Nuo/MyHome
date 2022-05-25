## home - 配置网络请求

**说明**

- 由于平台的限制，小程序项目中**不支持 axios**

- 而且原生的 

  ```
  wx.request()
  ```

   API 功能较为简单， 

  - **不支持拦截器**等全局定制的功能

- 建议在 uni-app 项目中使用 

  ```
  @escook/request-miniprogram
  ```

   第三方包发起网络数据请求。 

  - 请参考 **@escook/request-miniprogram** 的官方文档进行安装、配置、使用
  - 官方文档：https://www.npmjs.com/package/@escook/request-miniprogram

**步骤**

- 打开项目所在的目录，进行初始化：`npm init -y`
- 再下载第三方包：`npm i @escook/request-miniprogram`
- 最终，在项目的 `main.js` 入口文件中，通过如下的方式进行配置：

```JavaScript
// 设置网络请求
import { $http } from '@escook/request-miniprogram'
uni.$http = $http
// 设置请求的基本地址
$http.baseUrl = 'https://api-hmugo-web.itheima.net'
// 请求开始之前做一些事情
$http.beforeRequest = function (options) {
  // 显示一个加载框
  uni.showLoading({
    title: '数据加载中...'
  })
}
// 请求完成之后做一些事情
$http.afterRequest = function () {
  // 隐藏加载框
  uni.hideLoading()
}
```