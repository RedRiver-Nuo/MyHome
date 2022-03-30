---
title: Git
date: 2021/12/29
tags:
 - 笔记
categories:
 -  Git
---



## Git基本认知

### 1.1 版本管理

编码的时候有些节点非常关键,那我们就可以存个档,以防出现代码丢失等意外，类似游戏存档。

### 1.2 常见版本管理软件

a.**svn**(集中式)

b.**git**(分布式)

[集中式和分布式的区别](https://www.liaoxuefeng.com/wiki/896043488029600/896202780297248)

#### 1.2.1 git安装 

​     官网下载安装

### 1.3 git使用步骤

1.新建一个文件夹 (新建的仓库和编写的代码都写在这个文件夹中)

2.进入到文件夹, 右键 点击  Git Bash Here ![1561255397522](D:/HeiMa/%E6%8E%A5%E6%94%B6%E6%96%87%E4%BB%B6/%E5%B0%B1%E4%B8%9A%E7%8F%AD/08-Ajax/day04%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/git%E9%A2%84%E4%B9%A0/git%E7%AC%94%E8%AE%B0/assets/1561255397522.png),他就会出现一个小黑框

3.就在小黑框里写:  git init    (意思是初始化一个仓库)

​    会出现一个隐藏的.git文件夹. 不要动这个文件夹.

4.吃着火锅,愉快的敲着代码..

5.git  add  .

​	git   commit   -m "描述提交的代码"

### **什么是远程仓库？**

以下这些都可以作为远程仓库.

1.github

2.gitlab

3.gitee码云

4.公司的机房里某一台服务器(电脑)

5.....



### 1.5 容易出现的问题 :

 1.新建编写代码的文件夹,要进到文件夹里面去之后, 右键点击git bash here

 2.git init 不要写错, 出现一个.git隐藏文件夹, 

​    如果没有出现这个文件夹,检查一下自己的电脑隐藏文件夹是不是不显示.

 3.我们要提交内容, 那首先得有内容. 意思就是要写点代码, 代码要和上次不一样.

 4.git add .   

​    git commit -m"描述的信息"

​    这两句代码  add 和后面的点 有空格.   commit 和-m中间也有空格.

 5.第一次提交会出现让你输入邮箱和用户名, 一行代码一行代码的执行. 复制的时候不要把后面的空格给复制来额



### 1.8 本地git工作流程

### ![1561261071875](D:/HeiMa/%E6%8E%A5%E6%94%B6%E6%96%87%E4%BB%B6/%E5%B0%B1%E4%B8%9A%E7%8F%AD/08-Ajax/day04%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/git%E9%A2%84%E4%B9%A0/git%E7%AC%94%E8%AE%B0/assets/1561261071875.png)





-----

## 初始化

新电脑第一次使用时，需要进行初始化

`git init`    (意思是初始化一个仓库)

### 邮箱和用户名

如果是第一次执行add commit,会出现下面这个问题

​                    ![1561256313982](D:/HeiMa/%E6%8E%A5%E6%94%B6%E6%96%87%E4%BB%B6/%E5%B0%B1%E4%B8%9A%E7%8F%AD/08-Ajax/day04%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/git%E9%A2%84%E4%B9%A0/git%E7%AC%94%E8%AE%B0/assets/1561256313982.png)

​      这个问题的意思是: 设置你邮箱和用户名, 这个问题只会在第一次出现.   

​      注意的是:设置的时候一个一个的设置

#### 1 查看邮箱和用户名

​	  	`git  config  user.email`

​          `git  config  user.name`

#### 2 修改邮箱和用户名

第一种办法:  直接重新再设置一下,他就会覆盖.

​          `git config --global user.email  "you@example.com"`
​          `git config --global user.name  "Your Name"` 

第二种办法:  退出再登录

​        退出:

​         `git  config  --global   --unset  user.email`

​         `git  config  --global   --unset  user.name`



### 第一次向远程仓库推送

第一次向远程仓库推送需要输入账号密码，如果输入错误更改方法：

​	1.控制版面-用户账户-凭据管理器-管理windows凭据

​	2.找到   git:远程仓库地址   编辑 或者删除输入正确密码

### 7.6设置ssh公钥

[ssh公钥设置](https://gitee.com/help/articles/4191#article-header0)



---



## 一，git基本命令



#### 1.保存代码

`git add .`   		 	

`git add 文件名` 					   		   //把工作区的更改保存到暂存区

`git commit -m "描述信息"`  				//把暂存区的代码提交到本地仓库

#### 2.查看状态

`git status`  										//查看状态

​				红色  说明还没有放入到暂存区

​                绿色  说明已经提交到了暂存区但是还没有提交到本地仓库

​                `notings....` 说明已经没有内容可以`add commit`

#### 2.查看日志

`git log`  										 	//查看日志

`git log   --oneline` 						 //查看日志，并让日志一行显示

`git reflog` 									     //查看所有的日志（包括穿梭回滚等操作的日志）



## 二，远程仓库



### 1. 远程仓库的基本命令

`git remote add origin 远程仓库地址`          //连接远程仓库

`git remote` 												 //查看远程仓库 

`git remote -v` 											 //查看远程仓库地址 

`git remote remove origin` 						  //取消和远程仓库之间的连接 

`git push -u origin master`						 //提交代码 推送到远程仓库

​		

### 2 .空仓库-推送数据到远程仓库

`git remote add origin  远程仓库地址`        //远程仓库和已经存在的本地仓库建立连接

`git push -u origin master`    					 //把本地代码推送到远程仓库master分支

`git push`    													//简写,推送



### 3. 非空仓库-克隆到本地

`git clone 远程仓库地址`     	//克隆远程仓库 ,只能克隆远程仓库的master分支

`git checkout 分支名`          	//把远程仓库 指定的分支拿到本地



### 4. 拉取- git pull

`git pull origin dev`     	 //更新代码，拉取远程仓库中与本地不同的代码



![1606206009973](D:/HeiMa/%E6%8E%A5%E6%94%B6%E6%96%87%E4%BB%B6/%E5%B0%B1%E4%B8%9A%E7%8F%AD/08-Ajax/day04%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/git%E9%A2%84%E4%B9%A0/git%E7%AC%94%E8%AE%B0/assets/1606206009973.png)







## 三,git分支 branch

### 1. 分支基本命令

`git branch` 							 //查看分支

`git branch 分支名`      		    //新建分支

`git branch -d 分支名`    		// 删除分支

`git checkout 分支名`    		  //切换分支

`git checkout -b 分支名`    	 //新建分支并切换分支

`git merge 分支名`    			    //合并分支（把指定的分支合并到当前分支）

#### 		合并分支冲突

​		若两个合并分支 同时对同一项目修改 合并时会有代码冲突，看需求解决

### 2. 远程仓库分支命令

`git push origin master`           					//推送代码到master分支，远程仓库已经有master分支

`git push  --set-upstream origin dev`         //远程仓库没有dev分支，把本地仓库dev分支推上去（新建并推送）

`git push origin dev`    								 //远程仓库现在有了dev分支，再推送

`git push`    													//简写,推送当前分支



`git push origin --delete 分支名`    			 // 删除远程分支

`git push origin :  分支名`    						 // 删除远程分支方式2





---



我们现在写代码,都是写在一个默认的主分支(master)里,这样其实是不对的.

master分支的代码一定是能运行的代码,一般这个分支用来发布版本. 

![1561338866718](D:/HeiMa/%E6%8E%A5%E6%94%B6%E6%96%87%E4%BB%B6/%E5%B0%B1%E4%B8%9A%E7%8F%AD/08-Ajax/day04%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/git%E9%A2%84%E4%B9%A0/git%E7%AC%94%E8%AE%B0/assets/1561338866718.png)

#### 3.1 使用 步骤



1.新建仓库,就会有一个默认的master分支.
			![1561339241353](D:/HeiMa/%E6%8E%A5%E6%94%B6%E6%96%87%E4%BB%B6/%E5%B0%B1%E4%B8%9A%E7%8F%AD/08-Ajax/day04%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/git%E9%A2%84%E4%B9%A0/git%E7%AC%94%E8%AE%B0/assets/1561339241353.png)

2.新建分支   git branch 分支名

​		![1561339303968](D:/HeiMa/%E6%8E%A5%E6%94%B6%E6%96%87%E4%BB%B6/%E5%B0%B1%E4%B8%9A%E7%8F%AD/08-Ajax/day04%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/git%E9%A2%84%E4%B9%A0/git%E7%AC%94%E8%AE%B0/assets/1561339303968.png)

3.切换到分支写代码,切换分支  git checkout 分支名

​		![1561339368113](D:/HeiMa/%E6%8E%A5%E6%94%B6%E6%96%87%E4%BB%B6/%E5%B0%B1%E4%B8%9A%E7%8F%AD/08-Ajax/day04%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/git%E9%A2%84%E4%B9%A0/git%E7%AC%94%E8%AE%B0/assets/1561339368113.png)

4.在新分支上编码, 编码后 add commit , 提交到新分支​		

5.切回到主分支后合并新分支   git merge 分支名

  	注意:要回到主分支再合并

6.删除新分支   git branch -d 分支名

​	注意:回到主分支再删除次分支



补充: git branch  查看分支

​         git checkout -b 分支名   新建并切换分支







#### 3.3 工作中的分支使用(记忆)

​     新建仓库就有有一个默认的master主分支. 

​	1.主分支(master),一定是不能直接在上面写代码的.

​	    master上面的代码一定是没有问题,可以运行起来的,

​	    master分支上的代码一般用来做上线, 做版本发布.

​    2.写代码一定有一个开发分支(dev).

​		一定是没有问题的代码才合并到master分支上. 

​    3.工作中分支有的是一人一个.

​        也有的是大家共用一个.  







## 四，撤销

#### 没有提交到暂存区的撤销

`git checkout index.html`   		  //撤销更改

#### 已经提交到暂存区的撤销

`git reset HEAD index.html`     	//从暂存区撤回到工作区

`git checkout index.html`     		//撤销更改



#### git版本穿梭(回滚)

命令:   git    reset    --hard  版本号       //版本回滚的命令

![1606204859378](D:/HeiMa/%E6%8E%A5%E6%94%B6%E6%96%87%E4%BB%B6/%E5%B0%B1%E4%B8%9A%E7%8F%AD/08-Ajax/day04%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/git%E9%A2%84%E4%B9%A0/git%E7%AC%94%E8%AE%B0/assets/1606204859378.png)

​           版本号就是git log查看后那个黄色的一串数字,也可以是: 

​           		    HEAD^       上一个版本

​           			HEAD^^     上上一个版本

​           			HEAD^^^   上上上一个版本

​           例如: 

​     				  git  reset  --hard  HEAD^       //回到当前的上一个版本

​     				  git  reset  --hard  HEAD^^     //回到当前的上上个版本



命令:   git  log --oneline          //查看一行类型的日志,包括版本号

​              ![1561259844523](D:/HeiMa/%E6%8E%A5%E6%94%B6%E6%96%87%E4%BB%B6/%E5%B0%B1%E4%B8%9A%E7%8F%AD/08-Ajax/day04%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/git%E9%A2%84%E4%B9%A0/git%E7%AC%94%E8%AE%B0/assets/1561259844523.png)前面黄色的就是版本号

命令:   git  reflog     //查看所有的日志,包括回滚的日志





## 五,git 工作图解

![1581158463446](D:/HeiMa/%E6%8E%A5%E6%94%B6%E6%96%87%E4%BB%B6/%E5%B0%B1%E4%B8%9A%E7%8F%AD/08-Ajax/day04%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/git%E9%A2%84%E4%B9%A0/git%E7%AC%94%E8%AE%B0/assets/1581158463446.png)





### 2.5 git辅助工具(了解即可)

先学会使用命令, 图形化工具一点就通

#### 2.5.1 vscode自带的小黑框-终端

1. 1vscode自带小黑框(终端)

   ![1561263411725](D:/HeiMa/%E6%8E%A5%E6%94%B6%E6%96%87%E4%BB%B6/%E5%B0%B1%E4%B8%9A%E7%8F%AD/08-Ajax/day04%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/git%E9%A2%84%E4%B9%A0/git%E7%AC%94%E8%AE%B0/assets/1561263411725.png)

2. 2注意,一定要注意路径的问题,  一定要是在git管理的那个文件夹下.

#### 2.5.2 vscode自带了一个不用写命令的工具

 ![1561263961785](D:/HeiMa/%E6%8E%A5%E6%94%B6%E6%96%87%E4%BB%B6/%E5%B0%B1%E4%B8%9A%E7%8F%AD/08-Ajax/day04%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/git%E9%A2%84%E4%B9%A0/git%E7%AC%94%E8%AE%B0/assets/1561263961785.png)

2.1 选中你要add的文件, 点加号,  就相当于git add .

2.2 点击勾勾√  , 就相当于  git commit -m""

2.3 点击...后,选择推送  ,  就相当于是git push



#### 2.5.3 像vscode自带的git这样不用写命令的工具有很多种.

 TortoiseGit  小乌龟

  sourceTree  

  GitHubDeskTop  小紫猫/章鱼猫     Github官方推出的.

 

3.1  小紫猫的使用.​     ![1561264738404](D:/HeiMa/%E6%8E%A5%E6%94%B6%E6%96%87%E4%BB%B6/%E5%B0%B1%E4%B8%9A%E7%8F%AD/08-Ajax/day04%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/git%E9%A2%84%E4%B9%A0/git%E7%AC%94%E8%AE%B0/assets/1561264738404.png) 

 

 3.2 图形化工具 结合git使用流程(了解可忽略)

1.新建分支

![1561341382256](D:/HeiMa/%E6%8E%A5%E6%94%B6%E6%96%87%E4%BB%B6/%E5%B0%B1%E4%B8%9A%E7%8F%AD/08-Ajax/day04%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/git%E9%A2%84%E4%B9%A0/git%E7%AC%94%E8%AE%B0/assets/1561341382256.png)

2.合并分支

​		![1561341840913](D:/HeiMa/%E6%8E%A5%E6%94%B6%E6%96%87%E4%BB%B6/%E5%B0%B1%E4%B8%9A%E7%8F%AD/08-Ajax/day04%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/git%E9%A2%84%E4%B9%A0/git%E7%AC%94%E8%AE%B0/assets/1561341840913.png)

3.删除分支,注意在小紫猫里,要切换到删除的分支才能删

​		![1561341923589](D:/HeiMa/%E6%8E%A5%E6%94%B6%E6%96%87%E4%BB%B6/%E5%B0%B1%E4%B8%9A%E7%8F%AD/08-Ajax/day04%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/git%E9%A2%84%E4%B9%A0/git%E7%AC%94%E8%AE%B0/assets/1561341923589.png)

 

​      ![1586423162428](D:/HeiMa/%E6%8E%A5%E6%94%B6%E6%96%87%E4%BB%B6/%E5%B0%B1%E4%B8%9A%E7%8F%AD/08-Ajax/day04%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/git%E9%A2%84%E4%B9%A0/git%E7%AC%94%E8%AE%B0/assets/1586423162428.png)



# 八:补充几个连接:

[廖雪峰讲git](https://www.liaoxuefeng.com/wiki/896043488029600/896067008724000)

[廖雪峰讲js](https://www.liaoxuefeng.com/wiki/1022910821149312)

[阮一峰常用 Git 命令清单](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)

[阮一峰Flex 布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

[阮一峰ES6 入门教程](http://es6.ruanyifeng.com/)

[Git 可以这么学](https://juejin.cn/post/6844904166867861511)

[git官方手册](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%85%B3%E4%BA%8E%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6)

