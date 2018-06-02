const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['babel-polyfill', './src/index.jsx'],
    output: {
        path: `${__dirname}/public`,
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            modules: `${__dirname}/node_modules`
        }
    }, plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        rules: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader', 
                use:'css-loader'
            })
        }, {
            test: /\.woff|\.woff2|\.ttf|\.eot|\.svg*.*$/,
            loader: 'file-loader'
        }]
    }
}