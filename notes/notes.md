# 模块化开发
## 模块化开发概述

* 内容概要
  * 模块化演变过程
  * 模块化规范
  * 常用的模块化打包工具
  * 基于模块化工具构建现代Web应用
  * 打包工具的优化技巧

## 模块化的演变过程

* Stage1 - 文件划分方式
  * 具体做法就是将不同的功能放到不同的文件当中
  * 缺点 
    * 污染全局作用域
    * 命名冲突
    * 无法管理模块依赖关系
* Stage2 - 命名空间方式
  * 具体的做法就是将每个模块包裹成为一个全局对象的方式实现
* Stage3 - IIFE 立即执行函数
  * 将模块中的每一个成员都放在一个函数提供的私有作用域中

## 模块化规范的出现

模块化标准+模块加载器

* CommonJS规范
  * 一个问及教案就是一个模块
  * 每个模块都有单独的作用域
  * 通过 module.exports 导出成员
  * 通过 require 函数载入模块
  * CommonJS是以同步模式加载模块，在浏览器中会导致大量的同步模式请求出现
* AMD(Asynchronous Module Definition)
  * Require.js 模块加载器
  * AMD使用起来相对复杂
  * 模块JS文件请求频繁
* Sea.js + CMD
  * require.js已经兼容

## 模块化标准规范

浏览器中采用 ES Modules 规范 

Node.js中使用CommonJS规范

## ES Modules

ES Modules 是在ES2015版本中加入的新特性

只需要给script标签添加type="module"就可以使用模块化开发了

* ES Modules基本特性
  * 自动采用严格模式，省略'use strict'
  * 每个ESM模块都是单独的私有作用域
  * ESM是通过CORS去请求外部JS模块的
  * ESM的script标签会延迟执行脚本

导出和导入

```javascript
//app.js
import {default as fooName, hello} form './module.js'
```

```javascript
//module.js
var name = "foo moduile"
function hello () {
    console.log('hello')
}
class Person {}
export {name as default, hello, Person}
```

PS：Browser Sync 可以启动一个带有热更新的本地服务

注意事项：

1. import{} 不是解构
2. export导出的是引用地址
3. import 引用的成员是只读的，不能修改

## import的用法

* import 要使用完整的文件名称，不能省略.js 的扩展名
* import './module.js' 不导入只执行
* import * as mod from ‘./modules.js’
* import 只能放在最外层，可以使用import()函数



##  ES Modules in Node.js

* ES Modules 中可以导入CommonJS模块
* CommonJS中不能导入ES Modules模块
* CommonJS始终只会导出一个默认成员
* 注意import不是结构导出对象



# Webpack打包

* 模块化导致的问题
  * ES Modules存在环境兼容问题
  * 模块文件过多，网络请求频繁
  * 所有的前端资源都需要模块化 

## 常用loader分类

* 编译转换类
* 文件操作类
* 代码检查类

## webpack处理ES2015

因为模块打包需要，所以处理import和export，并不会处理es6的新特性

我们需要使用babel-loader @babel/core @babel/preset-env

* Webpack只是打包工具
* 加载器可以用来编译转换代码

## Webpack模块的加载方式

1. 遵循 ES Modules 标准的 import 声明
2. 遵循 CommonJS b标准的 require 函数
3. 遵循 AMD 标准的 define 函数和 require 函数
4. *样式代码中的@import指令和url函数
5. *HTML代码中图片标签的src属性

注意尽量不要混用

## Webpack插件

* 清除dist目录插件 clean-webpack-plugin
* 自动生成使用bundle.js的HTML文件 html-wenpack-plugin
* 拷贝静态文件使用 copy-webpack-plugin 

## Source Map 区别

* eval - 是否使用eval执行模块代码
* cheap - Source Map是否包含行信息
* module - 是否能够得到 Loader 处理之前的源代码

开发模式一般选择 cheap-module-eval-source-map

* 编写代码每行不会超过80个字符
* 我的代码经过 Loader 转换过后的差异比较大
* 首次打包速度快慢无所谓，重写打包相对打包较快

生产模式一般选择 none

* Source Map 会暴漏源代码