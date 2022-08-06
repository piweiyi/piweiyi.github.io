const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const CompressionPlugin = require('compression-webpack-plugin')
// const webpack = require('webpack')
module.exports ={
    publicPath:'/',     /*  如果使用了history模式，这里应该使用绝对路径而不是相对路径./
                            官方解释https://cli.vuejs.org/zh/config/#publicpath
                            生产环境构建文件的目录 defalut: dist
                        */
    outputDir: 'dist',      //打包生成的文件夹

    assetsDir: 'static',    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    runtimeCompiler: true,
    productionSourceMap:false,
    lintOnSave: false,
    css: {
        sourceMap:true      //在调试工具显示css文件路径
    },
    chainWebpack: config => {
        config.module
        .rule('svg')
        .exclude.add(resolve('src/icons'))
        .end()
        
        config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('src/icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            symbolId: 'icon-[name]'
        }) 
        
    
        // 修改images loader 添加svg处理
        const imagesRule = config.module.rule('images')
        imagesRule.exclude.add(resolve('src/icons'))
        config.module
        .rule('images')
        .test(/\.(png|jpe?g|gif|svg|webp)(\?.*)?$/)

        //生产环境，开启js\css压缩
        if (process.env.NODE_ENV === 'production') {

            config.plugin('compressionPlugin')
                .use(new CompressionPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,//匹配哪些文件进行压缩
                    threshold: 10240,// 只有大小大于该值10k的资源会被压缩
                    minRatio: 0.8,// 只有压缩率小于这个值的资源才会被压缩
                    deleteOriginalAssets: false //是否删除原文件
                }))
        }
    },
}
