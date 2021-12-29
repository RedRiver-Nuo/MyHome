---
title: Git
date: 2021/12/29
tags:
 - 笔记
categories:
 -  Git
---


## 概述

### Git:分布式版本控制系统**
GitHub:是一个为用户提供Git服务的网站(放代码的地方)
注册GitHub: https://github.com/

## 初始化(一次性操作)

### 1.设置Git

- 设置用户名:$ git config --global user.name “用户名”
- 设置邮箱: $ git config --global user.email “邮箱”

## 常用操作

### 查看当前状态:git status

### 1.创建仓库(选择项目目录)

- Git仓库初始化(让Git知道需要管理已选目录):git init

### 2.加文件(提交项目)

- 添加到缓存区:

	- <1>(添加多个文件)git add 文件名1 文件名2* 
	- *<2>(添加当前目录)git add.*

- 提交到版本库(提交所有暂存区的文件):git commit -m “注释”*

### 版本回退

- 1.查看版本(显示日志):

	- <1>(查看详细日志):git log
	- <2>(单行显示日志): git log --pretty=oneline
	- 当前版本(如下图):(HEAD -> master)

- 2.回退操作:git reset --hard 提交编号(上图黄色的编号commit id)

### –回到过去之后要想回到之前的版本的时候,
则需要使用指令查看历史操作,已得到最新的commit id

- 查看历史操作:git reflog
- 获取connit id之后,再次使用回退操作

### 小结:

- a.要想回到过去,必须先得到commit id,然后通过git reset --hard进行回退
- b.要想回到未来,需要使用git reflog进行历史操作查看,获取最新的commit id
- c.在写回退指令时,commit id可以不用写全,git自动识别,但是不能写太少,避免发生冲突

### 远程仓库的操作(GitHub)-

- 1.两种常规使用方式
- (1).基于http协议
- <1>.创建空目录(选择项目目录)
- <2>.克隆线上仓库到本地:git clone 线上仓库地址
- <3>.提交到线上仓库:git push
- a.提交到暂存区->本地仓库->线上仓库
- b.在首次提交时,会弹出登录框,原因是不是任何人都可以往线上仓库提交内容,必须鉴权
- c.登录或者鉴权–鉴权:.git/congif–>第二段加上自己的用户名密码
- <4>.拉去线上最新版本:git pull
- —提醒:每天工作的第一件事就是git pull 每天下班前第一件事就是git push

