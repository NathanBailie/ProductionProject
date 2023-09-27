import path from 'path';
import type webpack from 'webpack';
import { webpackConfigBuild } from './config/WebpackBuild/webpackConfigBuild';
import { type Envs } from './config/WebpackBuild/types/typesAndInterfaces';

export default (env: Envs) => {
    const paths = {
        input: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const apiUrl = env.apiUrl || 'http://localhost:8000';
    const PORT = env.port || 3000;

    const config: webpack.Configuration = webpackConfigBuild({
        mode,
        paths,
        isDev,
        apiUrl,
        port: PORT,
    });

    return config;
};
