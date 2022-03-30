## 1.大事件项目 前台+后台 jquery

### 1.`iframe`标签

功能:  创建包含另外一个文档的内联框架  （ 就是在网页中显示另一个页面 ）

// `iframe` 标签是一个`html`标签

使用方法

```
// 1.在页面中放置iframe标签
<iframe name="main_frame" src="./main_count.html" frameborder="0" style="width: 100%; height: 100%"></iframe>

// 2.使用a链接 target打开方式指向iframe的name 
 <a href="./article_category.html" target="main_frame">文章类别管理</a>
```

常用属性

| 属性        | 值   | 描述                   |
| ----------- | ---- | ---------------------- |
| frameborder | 1/0  | 是否显示框架周围的边框 |
| src         | URL  | 在iframe中显示的页面   |

在`iframe`页面中获取父元素

`window.parent.demo()`   或   `parent.demo();`





### 2.图片预览功能

```
<div class="col-sm-10">
              <img src="images/2.jpg" alt="" class="user_pic" />
              <input style="display: none" name="userPic" type="file" id="exampleInputFile" />
              <!-- 给label标签的for属性赋值,值是input标签的id,那这样的话点击label就相当于点击了input -->
              <br />
              <label for="exampleInputFile">
                <img src="./images/uploads_icon.jpg" style="height: 50px" alt="" />
              </label>
</div>
```



```

//input 标签发生改变时触发
$('#exampleInputFile').on('change', function () {
		//获取选择的图片，创建地址 然后在img中显示
        let url1 = URL.createObjectURL(this.files[0]);
        $('.user_pic').attr('src', url1);
});
```



### 3.分页插件

[分页插件josecebe](http://josecebe.github.io/twbs-pagination/#demo)

[分页插件下载](../lib/jquery.twbsPagination.js)

使用方法

```
//1.导入
<script src="./libs/jquery.twbsPagination.js"></script>

//2.分页插件结构 
<ul class="pagination" id="pagination"></ul>

//3.js渲染 
// 销毁刷新
$('#pagination').twbsPagination('destroy');
//渲染
$('#pagination').twbsPagination({
 totalPages: backData.data.totalPage,
 visiblePages: 10,
  first: '首页',
  last: '尾页',
  prev: '上一页',
  next: '下一页',
  startPage: page, //开始页码
   initiateStartPageClick: false,
  onPageClick: function (event, cliclpage) {
   loadData(cliclpage);
    }
});
```



### 4. 时间插件

[时间插件demo](./demo/jedate-6.5.0/index.html)

使用

```
<!-- 引入时间插件 -->
    <link rel="stylesheet" href="./libs/jedate/css/jeDate-test.css" />
    <link rel="stylesheet" href="./libs/jedate/css/jedate.css" />
    <script src="./libs/jedate/js/jedate.js"></script>
    
 //放入模板
<div class="jeinpbox" class="col-sm-4">
 	<input type="text" name="date" class="jeinput" id="testico" placeholder="YYYY-MM-DD" />
	<div class="icons jebtns" onclick="jeDate('#testico',{zIndex:20999, trigger:false,format: 'YYYY-MM-DD'})"></div>
</div>
```



### 5.富文本编辑器

使用

```
//1.引入js文件
    <script src="./libs/wangEditor.min.js"></script>
//2.写标签
<div id="div1" class="col-sm-10">
              <p>欢迎使用富文本编辑器</p>
</div>

//3.写js
      const E = window.wangEditor;
      const editor = new E('#div1');
      editor.create();
```

