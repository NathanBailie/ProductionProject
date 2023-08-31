import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function createPlugins(html: string): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "[name].[contenthash:8].css",
        }),
    ]
}