var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: './src/script/main.js',
        public: './src/script/public.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name]-[chunkhash].js',
        publicPath: 'http://www.baidu.com'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: false,
            title: 'webpack is good, I like',
            date: new Date(),
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ]
}