const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/index.js'),
        admin: path.resolve(__dirname, './src/admin/index.js'),
        common: path.resolve(__dirname, './src/common/index.js'),
        Font: path.resolve(__dirname, './src/common/Font/index.js')
    },
    module: {
        rules: [
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        library: '@paytheory/pay-theory-ui',
        libraryTarget: 'umd'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist')
    },
    devtool: 'source-map'
}
