# mp-loading

小程序版 Ant Design Spin 组件，

![](https://img.shields.io/npm/v/mp-loading.svg?style=flat)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)


### 安装

* 通过 npm 安装 (推荐)

小程序已经支持使用 npm 安装第三方包，[具体使用方法](https://github.com/MPComponent/mp-loading/issues/1)。

``` bash
# npm
npm i mp-loading -S --production

# yarn
yarn add mp-loading --production
```

* 下载代码

直接通过 git 下载 `mp-loading` 源代码，并将 `dist` 目录拷贝到自己的项目中。

``` bash
git clone git@github.com:MPComponent/mp-loading.git
```

### 使用组件

在 `json` 文件中引入按钮对应的自定义组件
``` json
{
  "usingComponents": {
    "mp-loading": "/path/to/mp-loading/dist/index"
  }
}
```

接着就可以在 `wxml` 中直接使用组件

``` html
<mp-loading showTip tip='loading...'></mp-loading>
```

### 效果
基础用法            |  自定义用法
:-------------------------:|:-------------------------:
![](https://user-images.githubusercontent.com/20694238/61963699-c8fba600-affe-11e9-8ac8-937c18868fba.gif)  |  ![](https://user-images.githubusercontent.com/20694238/61962642-905acd00-affc-11e9-8628-0211d709a8d0.gif)

### 在开发者工具中预览

``` bash
# 安装项目依赖
npm install

# 执行组件编译
npm run dev
```

打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，把 `mp-loading/example` 目录添加进去就可以预览示例了。