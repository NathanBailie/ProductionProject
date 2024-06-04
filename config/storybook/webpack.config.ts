import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { Paths } from '../WebpackBuild/types/typesAndInterfaces';
import { createSassLoader } from '../WebpackBuild/loaders/sassLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: Paths = {
        input: '',
        output: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');

    // eslint-disable-next-line no-param-reassign
    config!.module!.rules = (config!.module!.rules as RuleSetRule[]).map(
        (rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        },
    );

    config!.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config!.module!.rules!.push(createSassLoader(true));
    config!.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook'),
    }));

    return config;
};
