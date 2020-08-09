const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const webpackConfig = require('./webpack.config')

module.exports = merge(webpackConfig, {
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../src'),
        port: '9999'
    }
})