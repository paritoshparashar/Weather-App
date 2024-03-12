const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: false,
    entry : "./src/index.js",

    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    
};