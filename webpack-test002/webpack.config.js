var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: path.resolve(__dirname, '/node_modules'),
                include: path.resolve(__dirname, '/src'),
                query: {
                    "presets": ["env"]
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                      loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            plugins:function(){
                                return [
                                    require('postcss-import')(),        //一定要写在require("autoprefixer")前面，否则require("autoprefixer")无效
                                    require("autoprefixer")({browsers:['last 5 versions']})
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            plugins:function(){
                                return [
                                    require('postcss-import')(),        //一定要写在require("autoprefixer")前面，否则require("autoprefixer")无效
                                    require("autoprefixer")({browsers:['last 5 versions']})
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader:'postcss-loader',
                        options:{
                            plugins:function(){
                                return [
                                    require('postcss-import')(),        //一定要写在require("autoprefixer")前面，否则require("autoprefixer")无效
                                    require("autoprefixer")({browsers:['last 5 versions']})
                                ]
                            }
                        }
                    },
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            title: ' this is webpack',
            inject: 'body'
        })
    ]
}