const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './ex/index.js',
    output: {
        path: `${__dirname}/public`,
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    }, plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader', 
                use:'css-loader'
            })
        }]
    }
}