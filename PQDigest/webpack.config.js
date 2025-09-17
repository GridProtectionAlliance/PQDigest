"use strict";
const path = require("path");
var webpack = require('webpack');

module.exports = env => {
    if (process.env.NODE_ENV == undefined) process.env.NODE_ENV = 'development';
    return {
        mode: process.env.NODE_ENV,
        context: path.resolve(__dirname, 'wwwroot'),
        cache: true,
        entry: {
            PQDigest: "./tsx/PQDigest.tsx"
        },
        output: {
            path: path.resolve(__dirname, 'wwwroot', 'js'),
            //publicPath: 'js/',
            filename: "[name].js",
            //chunkFilename: '[name].bundle.js'
        },
        // Enable sourcemaps for debugging webpack's output.
        devtool: "inline-source-map",
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css"],
            alias: {
            }
        },
        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
                { test: /\.tsx?$/, use: [{ loader: 'ts-loader' }] },
                {
                    test: /\.css$/,
                    include: path.resolve(__dirname, 'wwwroot', "Content"),
                    use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { modules: true } }],
                },
                {
                    test: /\.js$/,
                    enforce: "pre",
                    use: [{ loader: 'source-map-loader' }]
                },
                {
                    test: /\.(woff|woff2|ttf|eot|svg|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'url-loader',
                    options: { limit: 100000 }
                }
            ]
        },
        externals: {
        },
        optimization: {
            //splitChunks: {
            //    chunks: 'all',
            //}
            //minimizer: [new UglifyJsPlugin({
            //    test: /\.js(\?.*)?$/i,
            //    sourceMap: true
            //})],
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                "window.jQuery": "jquery",
            })
        ]
    }
};