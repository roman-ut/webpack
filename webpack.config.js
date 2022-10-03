var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ENV = process.env.NODE_ENV === "production" ? "production" : "development";
require('custom-env').env();

module.exports = {
    mode: ENV,
    entry: './src/index.js',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3001,
        hot: process.env.APP_hot,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack',
        }),
    ],
    output: {
        filename: 'main.js',
    },
    devtool: 'inline-source-map',
};