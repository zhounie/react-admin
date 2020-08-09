const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }, {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },{
                test: /\.html$/,
                use: ['html-loader']
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                exclude: /node_modules/,
                loader: 'url',
                options: {
                    limit: 8192
                }
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, '../src')
        }
    },
    plugins: [
        new HtmlPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html'
        })
    ]
}