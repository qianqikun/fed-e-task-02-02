const { merge } = require('webpack-merge');
const baseConf = require('./webpack.common');
const path = require('path');
module.exports = merge(baseConf, {
    mode: 'development',
    devServer: {
        open: true,
        hot: true,
        port: 3000,
        proxy: {},
    }
});