module.exports = {
    parser: 'postcss-scss',
    plugins: [
        require('autoprefixer')({
            "overrideBrowserslist" : [
                "> 1%",
                "last 7 versions",
                "not ie <= 8",
                "ios >= 8",
                "android >= 4.0"
              ]
        }),
        require('postcss-plugin-px2rem')({
            rootValue:37.5,      // 新版本的是这个值
            // exclude: /(node_module)/,
            selectorBlackList: [],
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 2 //设置要替换的最小像素值(3px会被转rem)。 默认 0
        }),
    ]
}