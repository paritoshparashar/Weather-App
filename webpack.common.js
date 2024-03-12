const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: false,
    entry : "./src/index.js",

    devServer : {
        port : 8081,
    },

    module : {
        rules: [
            {
                test: /\.css$/,
                use : ["style-loader" , "css-loader"],
            },

            {
                test: /\.html$/,
                use: ["html-loader"],
            },
        ],
    },

    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    
};