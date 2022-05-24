---
title: ES6语法
date: 2021/12/25
tags:
 - 笔记
categories:
 -  JavaScript
---

## ES6新语法

### ES6简介

名词解释-ES6

ES6 既是一个历史名词，也是一个泛指
5.1版之后的JavaScript的下一代标准，涵盖了ES2015、ES2016、ES2017等等
ES2015是正式名称、指的是 2015 年发布的正式版本的语言标准



兼容性

除了极个别低版本的浏览器，兼容性很好
可以通过 Babel 进行转码，兼容较低版本浏览器



与我何干

咱们之后的代码、工作中看到的代码，会大量使用
经历了初期的语法熟悉 + 适应 之后，相信大家



---





## 1、let_VS_var

**作用**

var 是最早在 JS 定义变量的语法
而 let es6新增的定义变量的语法，目的就是为了取替 var

**特点(注意点)**

>var 可以重复声明变量      let 不可以重复声明变量
>
>var 存在变量声明前置      let不存在变量声明前置
>
>var没有块级作用域 	      let有块级作用域

**语法**

```;;
//语法与变量声明相同
let a='a';
```

**实例**

1. var 可以重复声明变量，而 let 则不可以

```
var a = 10
var a = 'hello'

let b = 10
let b = 20          // 报错：
```

2. var 定义的变量，访问语句可以在定义之前； let声明的变量必须 遵循先定义后使用

   var 会存在变量声明前置(变量提升)

```
 		console.log(a);         // undefined，原因 var 会存在变量声明前置

        var a = 10

        let b = 20;
        console.log(b);
```

3. var没有块级作用域限制的，let 是有块级作用域限制的。
   块级作用域，只要是语法中带有{}都会形成一个块级作用域

```
       let b = 10
        // if(10>5){
        //     let b = 20
        // }

        {

            let b = 20      // 受块级作用域的限制 ，此处的 b 与外部的 b 不在同一个作用域
            let c = 30
            console.log(c);
        }

        console.log(c);     // 受块级作用域的限制 ，无法访问 c
```

**总结：以后声明变量使用 let 就对了；**



## 2、const

**作用**

 声明一个块级作用域的本地常量

 **特点(注意点)**

> 具有let的特点
>
> 声明必须赋初始值；
>
> 值不允许修改：
>
> > 基本数据类型无法重新赋值
> >
> > 引用类型(对象，数组...)，可以更改内容
> >
> > **注：**不能改的是栈

**语法**

`const 变量名 = 值`

标识符一般为大写（习惯）；



**实例**

1. const 定义的变量的值是不允许修改，所以const定义的变量也会被称之为 常量

```
 // const a = 10
 // a = 100     // 报错：const 定义的变量的值是不允许修改，所以const定义的变量也会被称之为 常量
```

2. 如果：const 定义的变量保存的是数组或对象，对象或数组是不可以被替换的，但里面的值是可以修改的。

```
// const a = [10,20]     // 如果：const 定义的变量保存的是数组或对象，对象或数组是不可以被替换的，但里面的值是可以修改的。
 // a[0] = 100          
// console.log(a);
```

3. const 定义变量同时必须赋值,const也有块级作用域限制 

```
        let a
        a = 100;
        // const b;        // 报错：定义同时必须赋值
```



**应用场景：**
**声明对象类型使用 const，非对象类型声明选择 let；**







## 4、模板字符串

**作用**

 es6新增的定义字符串的新的方式，使用反引号(``)定义

**特点(注意点)**

> 可以换行定义字符串
>
> 模板字符串，可以解释变量的值，必须 使用 ${变量} 这种格式

**语法**

```
let str = `hello world`
console.log(str);
```



**实例**

```
// 之前办法：将变量的内容嵌入到一个字符中，使用如下方式
// let strTd = '<td>' + age + '</td>';

//使用模板字符串
let strTd = `<td>${age}</td>`;
console.log(strTd);
```

**应用场景：**
**当遇到字符串与变量拼接的情况使用模板字符串；**



## 5、对象属性简写

**作用**

ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁；

**特点(注意点)**

​	1.是对象的ES6写法 只能在对象中简写

​	2.为对象设置和变量不同名的属性时，无法进行简写

**语法**

1. 变量名和属性名同名时，可以省略
2. 方法省略掉`:function`

```
// 1.属性简写
// 2.方法简写
const name = 'jack'
const age = 18
const student = {
  name,
  age,
  sayHi() {
    console.log('你好吗?')
  },
}

// 等同于
/*
  const name = 'jack'
  const age = 18
  const student = {
    name:name,
    age:age,
    sayHi:function() {
      console.log('你好吗?')
    },
  }
 */

```

## ES6 - 对象属性名表达式

**作用：**

动态的生成对象的属性名



> 对于需要动态生成的属性，可以使用属性名表达式



语法：**

1. 表达式写在`[]`内部即可

```javascript
// 动态生成属性名
const pName = 'skill'
const student = {
  [pName]: 'jack',
}

```

## ES6 - 可选链操作符

> 通过可选链操作符可以更为安全的访问对象深层次的属性，而且跟安全哦
>
> [传送门：MDN - 可选链操作符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

**作用：**

- 安全的访问对象深层次的属性
- 不需要考虑这些属性是否有效

**语法：**

1. 访问属性：
   1. 把`.`替换为`?.`即可
2. 访问方法：
   1. 把`()`替换为`?.()`即可

```javascript
// 测试数据
const student = {
  name: 'jack',
  friend: {
    name: 'rose',
    hair: '金色',
    sayHi() {
      console.log('Hello')
    },
  },
}
// 1. 访问属性
console.log(student.frend.name) // 报错
console.log(student?.frend?.name) // undefined
// 2. 访问方法
student.jump?.() // undefined
student.jump() // 报错
student.friend?.sayHi?.() // Hello

```





## 6、扩展运算符

**作用：**

- 把对象,数组展开
- 可以便捷的实现多个对象，数组 的合并
- 用于获取函数的多余参数

**特点(注意点)**

同名属性会出现覆盖情况



**语法：**

  	`扩展运算符`（spread）是三个点（ ... ）。

  	`...变量名`

**实例**

```javascript
// 1.把对象展开
const dog = {
  bark: '汪汪!',
  food: '肉骨头',
}

const sDog = {
  name: '萨摩耶',
  color: '白色',
  ...dog,
}
console.log(sDog)// name/color/bark/food都有

//2.展开数组
let a = [1, 2, 3]
console.log(...a);  //1，2，3

//3.获取多余参数，这样就不需要使用`arguments`对象了。
function push(array,...items){
    arr.push(...items)
}
function add(x,y){
    return x+y;
}
const numbers = [1,2]
add(...numbers) //3
```

## 8、rest参数

ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments；

```
// ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments；
// ES5获取实参的方式
function data(){
		console.log(arguments);
}
data("大哥","二哥","三哥","四哥");
// ES6的rest参数...args，rest参数必须放在最后面
function data(...args){
console.log(args); // fliter some every map
}
data("大哥","二哥","三哥","四哥");

```







## 3、ES6 解构赋值

**作用：**

ES6 允许按照一定模式，从**数组**和**对象**中提取值，对变量进行赋值，这被称为`解构`（Destructuring）。



**1.对象的解构**

**特点(注意点)**

1. 可以解构赋值给同名变量
2. 可以解构赋值给新的变量名
3. 使用`扩展运算符 ...`可以获取剩余属性

**语法：**

```
// 1. 解构赋值给属性同名变量
const dog = {
  name: '二哈',
  skill: '拆家',
}
const { name, skill } = dog
console.log(name) // 二哈

// 2. 解构赋值给新的变量名
const cat = {
  name: '加菲猫',
  skill: '喵喵叫',
}
// name和对象中属性对应
// cname是新的变量名
const { name: cname, skill: cskill } = cat
console.log(cname) // 加菲猫
// 3. 获取剩余属性/方法
const bike = {
  name: '共享单车',
  color: '黄色',
  price: '1元/小时',
  voice() {
    console.log('叮铃铃')
  },
}

const { name, color, ...etc } = bike
console.log(etc) // price和voice
```

**2.数组的解构**

**特点(注意点)**

1. 挨个取值，和数组的顺序一致
2. 通过`,`跳过对应个元素
3. 通过`...`获取剩余值（数组）

**语法：**

```
// 测试数据
const arr = ['西瓜', '西兰花', '西葫芦', '西红柿', '西北风']

// 1. 挨个取值
// const [f1,f2,f3,f4] = arr
// 2. 通过逗号跳过
// const [f1, , , , f4] = arr
// 3. 获取剩余值
const [f1, ...fArr] = arr
console.log(fArr) //  ['西兰花', '西葫芦', '西红柿', '西北风']

```



> 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，`变量`必须与`属性`同名，才能取到正确的值。

---





以前，为变量赋值，只能直接指定值。

```
1.  let a = 1;
2.  let b = 2;
3.  let c = 3;
```

ES6 允许写成下面这样。

1. let [a, b, c] = [1, 2, 3];
2. 上面代码表示，可以从数组中提取值，按照对应位置，对变量赋值。
3. 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。下面是一些使用嵌套数组进行解构的例子。

```
let [a, b, c] = [1, 2, 3];
a //1
b //2
c //3
```







**不完全解构**

另一种情况是不完全解构，即等号左边 只匹配一部分右边的数组。依然可以成功

```
let [x,y] =[1,2,3]
x //1
y //2
```



如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。

```
1.		// 报错
2.	let [foo] = 1;
3.	let [foo] = false;
4.	let [foo] = NaN;
5.	let [foo] = undefined;
6.	let [foo] = null;
7.	let [foo] = {};

ES6 解构赋值解构赋值允许指定默认值。
1.	let [foo = true] = [];
2.	foo // true

```

**应用场景：**

**频繁使用对象方法、数组元素，就可以使用解构赋值形式；**



## ES6 - 函数参数的默认值

> ES6允许给函数的参数赋初始值；
>
> [传送门：阮一峰ES6-函数参数的默认值](https://es6.ruanyifeng.com/?search=%E5%8F%AF%E9%80%89%E9%93%BE&x=0&y=0#docs/function#%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC)
>
> [传送门：MDN-默认参数值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)

**作用：**

1. 设置了参数默认值之后
2. 不传递参数会使用默认值

**语法：**

1. 使用`=默认值`进行赋值

```javascript
function sayHi(name = '李雷') {
  console.log(`${name} 你好！很高兴认识你`)
}

sayHi('韩梅梅') // name=韩梅梅
sayHi() // name=李雷
```

```
//1. 形参初始值 具有默认值的参数, 一般位置要靠后(潜规则)
function add(a,b,c=10) {
return a + b + c;
}
let result = add(1,2);
console.log(result); // 13

//2. 与解构赋值结合
// 注意这里参数是一个对象
function connect({host="127.0.0.1", username,password, port}){
console.log(host)
console.log(username)
console.log(password)
console.log(port)
}
connect({
host: 'atguigu.com',
username: 'root',
password: 'root',
port: 3306
})
```





## 6、箭头函数

**作用：**

ES6允许使用箭头（=>）定义函数，箭头函数提供了一种更加简洁的函数书写方式，箭头函数多用于匿
名函数的定义；



> 箭头函数的语法：
>
> 	1. `	function`替换为`=>`
>  	2. 如果形参只有一个，可以省略`()`
>  	3. 函数体如果只有一条语句，可以省略`{}`，函数的返回值为该条语句的执行结果；
> 	4. 函数体只有一行并且有`return`，`{}`和`return`需要一起省略
>
> 箭头函数的特性：
>
> 	1. 箭头函数 this 指向声明时所在作用域下 this 的值；(没有自己的this)
> 	2. 箭头函数不能作为构造函数实例化；
> 	3. 不能使用 arguments；

> 箭头函数不会创建自己的`this`,它只会从自己的作用域链的上一层继承`this`
>
> 说人话：创建时`this`是谁，就是谁



特性：

1. 箭头函数的this是静态的，始终指向函数声明时所在作用域下的this的值；

2. 不能作为构造实例化对象；

3. 不能使用 arguments 变量；

  注意：箭头函数不会更改 this 指向，用来指定回调函数会非常合适；

```
// ES6允许使用箭头（=>）定义函数

// 传统写法：无参数
var say = function(){
console.log("hello！");
}
say();

// ES6写法2：无参数
let speak = () => console.log("hello 哈哈！");
speak();

------------------------------------------------------------

// 传统写法：一个参数
var hello = function(name){
return "hello " + name;
}
console.log(hello("訾博"));

// ES6箭头函数：一个参数
let hi = name => "hi " + name
console.log(hi("訾博"));

------------------------------------------------------------

// 传统写法：多个参数
var sum = function(a,b,c){
return a + b + c;
}
console.log(sum(1,2,3));

// ES6箭头函数：多个参数
let he = (a,b,c) => a + b + c;
console.log(he(1,2,3));
------------------------------------------------------------
// 特性
// 1、箭头函数的this是静态的，始终指向函数声明时所在作用域下的this的值
const school = {
name : "大哥",
}
// 传统函数
function getName(){
console.log("getName：" + this.name);
}
// 箭头函数
getName1 = () => console.log("getName1：" + this.name);
window.name = "訾博";
// 直接调用
getName();
getName1();
// 使用call调用
getName.call(school);
getName1.call(school);
// 结论：箭头函数的this是静态的，始终指向函数声明时所在作用域下的this的值

// 2、不能作为构造实例化对象
// let Persion = (name,age) => {
// this.name = name;
// this.age = age;
// }
// let me = new Persion("訾博",24);
// console.log(me);
// 报错：Uncaught TypeError: Persion is not a constructor

// 3、不能使用 arguments 变量
// let fn = () => console.log(arguments);
// fn(1,2,3);
// 报错：Uncaught ReferenceError: arguments is not defined
```











## 数组方法补充



> ES5中数组新增了不少的方法，用法类似，咱们来稍微看看
>
> [传送门:雨雀-数组新增方法](https://www.yuque.com/yanjuxilanhua/eq0c2n/ny150b)

### [forEach()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)



将数组的每一个元素，挨个的传递给传入的回调函数

回调函数会接收三个参数，分别为

- `element`
  当前元素。
- `index`
  当前元素的索引。
- `array`
  调用`findIndex`的数组。



```javascript
let foods =['西兰花','西瓜','西兰花']
foods.forEach(v=>{
console.log(v)
})
// 依次输出: 西兰花 西瓜 西兰花
```

```
// let arr = [10,20,30,40,50]

        /* 
        // 原来的方式
        // 对数组进行求和
        let sum = 0;

        for(let i=0;i<arr.length;i++){
            sum += arr[i]
        }
        console.log(sum);
         */


        /* 
        
        // forEach 遍历数组
        语法：
            数组.forEach( function(value,index,arr){

                // 算法

            } )

        说明：
            forEach 必须 提供一个函数
            函数的参数说明如下：
                value   每次遍历到数组元素
                index   每次遍历到数组元素的下标
                arr     数组

                forEach 内部会对数组进和遍历，并遍历到的元素，以及元素的下标，赋值给 value与 index 

            arr1.forEach(function(value,index,arr){
                // console.log(value);
                // console.log(index);
                // console.log(arr);
            })
        */

        let sum = 0
        arr.forEach(function(value){
            sum += value
        })
        console.log( sum);
```



### [map()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)



返回一个新的数组，新数组的元素，是数组中每个元素调用一个提供的函数后返回的结果

回调函数会接收三个参数，分别为

- `element`
  当前元素。
- `index`
  当前元素的索引。
- `array`
  调用`findIndex`的数组。



```javascript
let foods = ['西兰花', '西瓜']
let newFoods = foods.map(v => {
return v + '好好吃'
})
console.log(foods)
// 输出: ['西兰花', '西瓜']
console.log(newFoods)
// 输出: ['西兰花好好吃', '西瓜好好吃']
```



### [filter()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)



返回一个新的数组，新数组的元素是数组中每个元素调用一个提供的函数，根据返回值的真假决定是否保留

回调函数会接收三个参数，分别为

- `element`
  当前元素。
- `index`
  当前元素的索引。
- `array`
  调用`findIndex`的数组。



```javascript
  let foods = ['西兰花', '西瓜', '花椒', '剁椒']
  console.log(
    foods.filter(v => {
      return v.indexOf('西') == 0
    })
  )
  // 输出: ['西兰花', '西瓜']
```

```
let arr = [19,7,20,5, 8,10,12]

        // 求数组中大于10的所有的元素

        /* 
        // 之前的办法
        let result = []
        for(let i=0;i<arr.length;i++){
            if(arr[i]>10){
                result.push(arr[i])
            }
        }
        console.log(result);
        */

        /* 
        // filter 方法
        语法：
            数组.filter(function(value,index,arr){
                return 筛选条件
            }) 
        说明：
            filter 方法与 forEach 方法的 参数 完全相同
            但是功能不一样
            filter 的主要功能是用于根据条件进行筛选，条件要在 fitler 回调函数 内使用 return 条件   进行表示
            最后把的满足条件的元素会被返回，我们只需要使用一个变量进行接收即可



         arr.filter(function(value,index,arr){
            //  console.log(value);
            //  console.log(index);
            //  console.log(arr);
         })

         */

         let nArr = arr.filter(function(value){
             //  筛选条件
             return value > 10
         })
        //  nArr 里保存的是所有满足条件的元素
         console.log(nArr);

```



### [every()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)



检验数组中的每个值是否都满足回调函数的校验，都满足结果为`true`，反之为`false`

回调函数会接收三个参数，分别为

- `element`
  当前元素。
- `index`
  当前元素的索引。
- `array`
  调用`findIndex`的数组。



```javascript
  let numArr = [2, 5, 6, 7, 8, 9]
  console.log(
    numArr.every(v => {
      return v > 2
    })
  )
  // 输出: false
  console.log(
    numArr.every(v => {
      return v >= 2
    })
  )
  // 输出: true
```



### [some()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)



和`every`类似，只需要有任意一个元素满足回调函数的校验条件结果就是`true`，都不满足就是`false`

回调函数会接收三个参数，分别为

- `element`
  当前元素。
- `index`
  当前元素的索引。
- `array`
  调用`findIndex`的数组。



```javascript
  let numArr = [2, 5, 6, 7, 8, 9]
  console.log(
    numArr.some(v => {
      return v == 1
    })
  )
  // 输出: false
  console.log(
    numArr.some(v => {
      return v == 2
    })
  )
  // 输出: true
```

```
let arr = ['刘旬凯','张子铭','东哥','晋升','赖长辉','彭鑫']

        // 需求：判断数组中是否存在  赖长辉 同学，最终以布尔值进行表示
        /* 
        // 之前的方案
        let f = false

        for(let i=0;i<arr.length;i++){
            if(arr[i] == '赖长辉'){
                f = true
            }
        }
        console.log(f);
         */

        /* 
        some()方法
        语法：
            数组.some(function(value,index,arr){
                return 筛选条件
            }) 
        说明：
            filter 方法与 forEach 方法的 参数 完全相同
            但是功能不一样
            some 用于检测数组中是否有满足条件的元素，条件需要在回调函数内部使用 return 条件
            最后返回一个布尔值，来表示数组中是否有满足元素的元素。
         */

        let result = arr.some(function(value){
            return value == '赖长辉'
        })

        console.log(result);
```



### [find()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)



返回满足提供的回调函数校验的第一个元素的值，如果都不满足，返回`undefined`

回调函数会接收三个参数，分别为

- `element`
  当前元素。
- `index`
  当前元素的索引。
- `array`
  调用`findIndex`的数组。



```javascript
  let foods = ['西兰花', '西瓜', '椒盐', '剁椒']
  console.log(
    foods.find(v => {
      return v.indexOf('椒') != -1
    })
  )
  // 输出: 椒盐
  console.log(
    foods.find(v => {
      return v.indexOf('花菜') != -1
    })
  )
  // 输出: undefined
```



### [findIndex()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex)



返回数组中满足提供的回调函数校验的第一个元素的索引，否则返回-1

回调函数会接收三个参数，分别为

- `element`
  当前元素。
- `index`
  当前元素的索引。
- `array`
  调用`findIndex`的数组。



```javascript
let foods = [
    { name: '西兰花', color: '绿' },
    { name: '辣椒', color: '红' },
    { name: '花菜', color: '白' }
  ]
  console.log(
    foods.findIndex(v => {
      return v.color == '白'
    })
  )
  // 输出: 2
  console.log(
    foods.findIndex(v => {
      return v.color == '黄'
    })
  )
  // 输出: -1
```



### [includes()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)



返回数组中是否存在指定的值，如果存在返回`true`，否则返回`false`



```javascript
  let foods = ['西兰花', '西瓜', '椒盐', '剁椒']
  console.log(foods.includes('西瓜'))
  // 输出: true
  console.log(foods.includes('花菜'))
  // 输出: false
```











## 02_class类

>class 是 es6新增的，类
>
>用于对象的定义

```
// 1. 定义一个类
class Person{
        
}
```

```
 // 2. 实例化
 let obj = new Person()
 console.log(obj);
```

 小结：
            类后面不需要加 小括号号

​			就将类当一个新的语法来学习。



```
 /* 
class的本质仍然 是函数
        
function fn(){

 }

console.log(Object.prototype.toString.call(fn));        // '[object Function]'
console.log(Object.prototype.toString.call(Person));        // '[object Function]'
*/

```

```
// 定义一个类
        class Person{
            // 1. 定义成员：属性 的语法
            name = '';
            age = '';
            
            // 接收实例化对象时传递的数据的构造方法
            // 类中有一个特殊的方法，用于接收实例化时传递的数据
            constructor(n,a){
                // console.log(n,a);
                // 方法内操作属性
                this.name = n
                this.age = a

                // 方法内添加一个新的属性
                this.gender = '男'
            }

            // 2. 定义成员：方法 的语法
            //  并不是在实例对象上
            say(){
                console.log('hello');  
            }
        }

        // 实例化得到一个对象
        let obj = new Person('zhangsan',20)
        // 所以在这里 打印 实例对象是看不到方法，只能看到属性
        console.log(obj);
        // obj.say();


        /* 
        class 类中定义成员
        成员属性
            属性名=值           

        成员方法                
            方法名(){
                
            }
        注意：类中定义属性或方法都不需要加 this，定义的方法并不在实例对象上，
            方法内操作成员需加 this

        关于constructor()   
            用于接收实例化类时传递的参数
            就算不写，系统会自动添加一个空的 constructor

        */
```

```
 class Father{
            // 
            type = 'CN'
            constructor(n,a){
                // 添加
                this.name = n;
                this.age = a
            }
            say(){
                console.log(`我的名子是${this.name},今年${this.age}`);
            }
        }

        // 目标，就是想让 Son 类实例化出来的对象具有 Father 类中定义的成员
        // 继承：
        // 语法：
        //      子类 extends 父类

        class Son extends Father{

        }
        let s = new Son('帝释天',18)
        console.log(s);
        s.say();


        /* 
        继承
        语法：
            子类 extends 父类
        
        属性、方法、构造函数 都会被继承
        */
        
```

```
  class Father{
            
        }

        // 在 JS 中类的本质就是函数，仅是换了一个名子
        // console.log(Object.prototype.toString.call(Father))         // '[object Function]'
        // console.log(Father.prototype);
        
        class Son extends Father{

        }
        console.log(Father.prototype);
        console.log(Son.prototype);         // 指向提 Father 类
        //          Father 类的原型对象             Father 的原型对象
        console.log(Son.prototype.__proto__ === Father.prototype);
        console.log(Son.prototype.__proto__.__proto__ === Object.prototype);

        let s = new Son('帝释天',18)

        /* 
        class 的本质就是 函数

        子类 extends 父类，内部实现方式仍然是原型链那么套。
        这种新的语法，仅仅是在表面上书写代码更简洁，这种简洁有个术语叫 "语法糖"
        
        */
```

```
// overwrite 重写：在子类继承父的过程中，如果存在相同的属性则会发生重写(覆盖)
        /* 
        属性重写
        class Father{
            sex = '男';
            age = 38;
        }

        class Son extends Father{
            // 子类也有这两个成员
            sex = '女';
            age = 18
        }
        
        let s = new Son()
        console.log(s); 
        */
        

        class Father{
            say(){
                console.log('in Father...');
            }
        }

        class Son extends Father{
            say(){
                console.log('in Son...');
            }
        }

        let s = new Son();
        s.say();

        /* 
        重写：
            当子类继承父类时，如果成员同名，则会发生重写
         */

```

```
// 成员的访问原则：子类如果 有就访问子类的，子类如果没有则访问父类的
        class Father{
            say(){
                console.log('in Father...');
            }
        }

        class Son extends Father{
            // say(){
            //     console.log('in Son...');
            // }
        }

        let s = new Son();
        s.say();

        /* 
        子类的访问原则：就近原则，自己有使用自己的，自己没有才找父类。
        */

```

```
// super 关键字的作用：
        class Father{
            constructor(){
                
            }
            // 父类有 say
            say(){
                console.log('in Father');
                
            }
        }

        class Son extends Father{
            constructor(){
                super();            // super()作用，是让父类中的构造函数先执行一次
                this.name = 20
            }

            // 子类也有 say
            say(){
                console.log('in Son');
            }

            // 测试方法
            c(){
                // 通过 this.say()默认调用子类中的
                this.say();

                // 就想调用父类的 say()
                super.say();

            }
        }

        let s = new Son();
        s.c();

        /* 
        语法上强制的要求：
            如果子类上明确的书写了 constructor()父类中无论有没有明确的书写 constructor都会报错
            解决办法使用 super()
        注意：
            构造函数内的 super()语句前不能有 关于 this 的操作代码
        */

        /* 
        super 可以引用父类中被重写的方法
        语法：
            super.方法名()
         */

        /* 
        super 作用1： 解决的问题
            当子类中明确书写了constructor 构造函数时，必须使用 super()来调用一次父类
            此时super()前面不能有操作 this 的代码

        super 作用2： 调用父类中方法 
            在子类中调用父类中被重写的方法
            super.方法名()
        */
```


