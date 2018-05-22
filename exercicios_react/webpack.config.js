const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './ex/index.jsx',
    output: {
        path: `${__dirname}/public`,
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.js(x?)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}