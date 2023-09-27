import type webpack from 'webpack';
import { createPlugins } from './createPlugins';
import { createLoaders } from './createLoaders';
import { createResolvers } from './createResolvers';
import { type Options } from './types/typesAndInterfaces';
import { createDevServer } from './createDevServer';

export function webpackConfigBuild(options: Options): webpack.Configuration {
    const {
        mode,
        paths,
        isDev,
        apiUrl,
    } = options;
    const {
        input, output, html, src,
    } = paths;

    return {
        mode,
        entry: {
            bundle: input,
        },
        output: {
            filename: '[name].[contenthash].js',
            path: output,
            clean: true,
        },
        plugins: createPlugins(html, isDev, apiUrl),
        module: {
            rules: createLoaders(isDev),
        },
        resolve: createResolvers(src),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? createDevServer(options) : undefined,
    };
}
