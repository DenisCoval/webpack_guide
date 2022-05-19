const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin')

module.exports = {
    mode: 'production',
    // entry: './src/index.js',
    entry: {
        index: './src/index.js'
        // print: './src/print.js'
    },
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true //Apaga na pasta dist ficheiros que não sao utilizados
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack-Guide-teste'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
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
        // splitChunks: {
        //     chunks: 'all'
        // },
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin()
        ]
    }
}
