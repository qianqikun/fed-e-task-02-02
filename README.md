# 钱其琨 ｜ Part 1 | 模块二

## 简答题

### 第一题 Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程。

Webpack在启动后，会从Entry开始，递归解析Entry依赖的所有Module，每找到一个Module，就会根据Module.rules里配置的Loader规则进行相应的转换处理，对Module进行转换后，再解析出当前Module依赖的Module，这些Module会以Entry为单位进行分组，即为一个Chunk。因此一个Chunk，就是一个Entry及其所有依赖的Module合并的结果。最后Webpack会将所有的Chunk转换成文件输出Output。在整个构建流程中，Webpack会在恰当的时机执行Plugin里定义的逻辑，从而完成Plugin插件的优化任务。

webpack会跟据我们的配置找到一个打包入口，然后根据代码中的引入的资源模块，解析每一个资源模块对应的依赖，得到整个项目的一个资源依赖树。webpack会递归这个依赖树，找到每个节点的
资源文件，然后根据配置文件中的文件加载器加载对应的模块，最后将加载后的结果打包入bundle.js中。
### 第二题 Loader 和 Plugin 有哪些不同？请描述一下开发 Loader 和 Plugin 的思路。

* Loader是用来处理加工打包过程中遇到的资源文件，是专注于实现资源模块的加载。开发一个loader需要导出一个函数，用来处理加载到的内容。函数的输出就是Loeader加载后的结果。
* Plugin用来增加webpack的自动化工作能力，主要是用来实现前端自动化的工具。开发一个Plugin是通过webpack的钩子，在webpack工作的过程中挂在需要执行的任务。


## 编程题

### 第一题 使用 Webpack 实现 Vue 项目打包任务
代码在code中

## 项目文件说明
- notes: 笔记
- notes-code: 听课中的代码
- code : 作业代码
