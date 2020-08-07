# vue-demo

> 为了便于在空闲时间，demo 的记录

## 版本说明

vue 使用的是 2.9.6。使用 vue-cli 搭建的项目。

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 文件使用目录

./util/rem.js  =>  主要是用来响应式改变根元素的字体大小，方便使用 postcss-plugin-px2rem 将 css 中的 px 转换成 rem，从而实现适配

./postcss.config.jd => 用于配置 autoprefixer 与 postcss-plugin-px2rem 

## webpack 打包使用到的插件

autoprefixer =>  兼容浏览器前缀 -webkit-overflow-scrolling 等，若不设置，可能会出现 -webkit-xxxx 过滤掉的情况。在 vue-cli3+ 搭建的项目中，已经默认开启，不需要单独设置。

postcss-plugin-px2rem => 将 css 文件中的 px 转换成 rem。postcss-plugin-px2rem 的配置只需放到 postcss.config.js 文件中，webpack 打包时，会默认加载；

