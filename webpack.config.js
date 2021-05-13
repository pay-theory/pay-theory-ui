const path = require('path');

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/index.js'),
        admin: path.resolve(__dirname, './src/admin/index.js'),
        common: path.resolve(__dirname, './src/common/index.js'),
        Font: path.resolve(__dirname, './src/common/Font/index.js')
    },
    module: {
        rules: [{
            test: /\.(jsx?)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
    },
};
