const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    // entry: {
    //     index: './src/index.js',
    //     print: './src/print.js'
    // index: {
    //     import: './src/index.js',
    //     dependOn: 'shared'
    // },
    // print: {
    //     import: './src/print.js',
    //     dependOn: 'shared'
    // },
    // shared: 'lodash'
    // },
    output: {
        // filename: '[name].bundle.js',
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack-Guide-Caching'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new BundleStatsWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    optimization: {
        moduleIds: 'deterministic', //evita alterações de id dos módulos ja existentes
        runtimeChunk: 'single',
        // splitChunks: {
        //     chunks: 'all'
        // },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        },
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            `...`,
            new CssMinimizerPlugin()
        ]
    }
}
