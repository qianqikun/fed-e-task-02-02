const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConf = require('./webpack.common');

const { merge } = require('webpack-merge');

const path = require('path');
module.exports = merge(baseConf, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: __dirname + '/public',
                    to: __dirname + '/dist',
                }
            ]
        })
    ]
});