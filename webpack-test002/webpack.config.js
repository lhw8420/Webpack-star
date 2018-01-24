var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: './src/script/main.js',
        public: './src/script/public.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name]-[chunkhash].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
            title: 'webpack is good, I like',
            date: new Date()
        })
    ]
}