---
date: 2020-01-01
title: webpack学习
category: webpack
tags:
- webpack
description: webpack配置项目打包入口、出口等相关知识
---
# webpack 概念学习
### 入口 entry
webpack.config.js
``` bash
module.exports = {
  entry: '入口文件路径'
};
```
### 出口 output
单个输出
``` bash 
const path = require('path');
module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'), // 生成文件的路径
    filename: 'my-first-webpack.bundle.js' // 生成的文件
  }
};
```
多个入口时
``` bash
{
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',// [name]占位符，防止文件名重复
    path: __dirname + '/dist'
  }
}

// 写入到硬盘：./dist/app.js, ./dist/search.js
高级进阶
```

### loader
loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块
``` bash
const path = require('path');
const config = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
module.exports = config;
```
* test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件
* use 属性，表示进行转换时，应该使用哪个 loader。

### plugins 插件
webpack 插件是一个具有 **apply** 属性的 JavaScript 对象。apply 属性会被 webpack compiler 调用，并且 compiler 对象可在整个编译生命周期访问。
``` bash
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //访问内置的插件
const path = require('path');

const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    filename: 'my-first-webpack.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;
```
（待完善，目前只了解，必须含有apply属性）

### module resolution 模块解析
绝对路径
``` bash
import "/home/me/file";
import "C:\\Users\\me\\file";
```
相对路径
``` bash
import "../src/file1";
import "./file2";
```
模块路径（模块将在 resolve.modules 中指定的所有目录内搜索）
``` bash
import "vue";
import "@/api/index"; 
// @ 是通过使用 resolve.alias 配置选项来创建的一个别名
```

### manifest

### targets 构建目标
单个文件
``` bash
module.exports = {
  target: 'node'
};
```
**多个文件**
webpack 不支持向 target 传入多个字符串，你可以通过打包两份分离的配置来创建同构的库
``` bash
var path = require('path');
var serverConfig = {
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.node.js'
  }
  //…
};

var clientConfig = {
  target: 'web', // <=== 默认是 'web'，可省略
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js'
  }
  //…
};

module.exports = [ serverConfig, clientConfig ];
// lib.js 和 lib.node.js 
```

### hot module replacement 模块热替换

