---
title: Git遇见过的问题及解决方法
date: 2021/12/29
tags:
 - 分享
categories:
 -  Git问题
---


## Git提交推送时报错10053

```
SSL_ERROR_SYSCALL, errno 10053
```

原因是Git默认限制推送的大小，运行命令更改限制大小即可

```
git config --global http.postBuffer 524288000
```

