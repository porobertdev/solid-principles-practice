const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: './src/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            title: 'SOLID Principles Practice',
            inject: 'head',
            scriptLoading: 'defer'
        })
    ]
};