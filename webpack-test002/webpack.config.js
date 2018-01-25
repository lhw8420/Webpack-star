var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: './src/script/main.js',
        public: './src/script/public.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
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
            chunks: ['main', 'public']
        }),
        new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'index.html',
            inject: false,
            title: 'this is a.html',
            date: new Date(),
            // chunks: ['main', 'public', 'a'],
            excludeChunks: ['b', 'c']
        }),
        new htmlWebpackPlugin({
            filename: 'b.html',
            template: 'index.html',
            inject: false,
            title: 'this is b.html',
            date: new Date(),
            // chunks: ['main', 'public', 'b'],
            excludeChunks: ['a', 'c']
        }),
        new htmlWebpackPlugin({
            filename: 'c.html',
            template: 'index.html',
            inject: false,
            title: 'this is c.html',
            date: new Date(),
            // chunks: ['main', 'public', 'c'],
            excludeChunks: ['a', 'b']
        })
    ]
}