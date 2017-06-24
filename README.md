# React Urban Dictionary

A simple and partial implementation of [Urban Dictionary](http://www.urbandictionary.com/) in React.

看了一下午文档，这个小项目是用来学习 React 的，用到了 React 的基础知识和 React-router v4，写了大概三四个小时。

之所以去实现 Urban Dictionary 是因为之前看到过它的几个 API，而且这个网站本身也很有趣。

该项目以后可能不会再有更新。

## 概况

该项目实现了三个功能

- 获取最近七天的 word of the day

- 查询一个单词

- 随机查看几个单词

## Server

项目的 server 文件夹里有一个极其简单的爬虫，用来获取官网的 word of the day。没找到相关 API 所以只能用这种方式啦。

运行 `node server` 来启动服务。

## Dev

运行 `yarn run start` 运行开发模式。

## Build

运行 `yarn run build` 生成最终版本。


