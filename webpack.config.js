const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const cleanWebPackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.pcss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [
        new cleanWebPackPlugin(),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin
    ],
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true,
        port: 3000
    }
}

