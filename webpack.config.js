const path = require('path')
const { CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode:'development',
    entry: './src/index.js',
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist',
        compress:true,
        port:9000,
        filename:'bundle.js',//devserver默认开启lazy模式。lazy模式下只有bundle.js被请求时才会编译该文件
        host:'',//设置为0.0.0.0，允许服务器外部访问
        hot:true,//启用模块热替换
    },
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'dist')
    },

    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  'file-loader'
                ]
            },
            {
                test:/\.xml$/,
                use:[
                    'xml-loader'
                ]
            }
            
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:path.join(__dirname,'index.html'),
            // hash: true
            title:'模块热替换'
        }),
        new webpack.HotModuleReplacementPlugin()//完全启用hmr
    ]
};