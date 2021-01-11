const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
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
                    {
                      loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: {
                  loader: 'url-loader',
                  options: {
                    limit: 10000,
                    fallback: 'file-loader',
                    name: 'images/[name].[hash].[ext]'
                  }
                }
            }
        ]
    }
}
