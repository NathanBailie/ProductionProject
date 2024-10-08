import { type RuleSetRule } from 'webpack';
import { createSassLoader } from './loaders/sassLoader';
import { createBabelLoader } from './loaders/babelLoader';
import { Options } from './types/typesAndInterfaces';

export function createLoaders(options: Options): RuleSetRule[] {
    const codeBabelLoader = createBabelLoader({ ...options, isTsx: false });
    const tsxBabelLoader = createBabelLoader({ ...options, isTsx: true });
    const { isDev } = options;

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    };

    const sassLoader = createSassLoader(isDev);

    // const typeScriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxBabelLoader,
        // typeScriptLoader,
        sassLoader,
    ];
}
