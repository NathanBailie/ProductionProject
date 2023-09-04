import { Options } from './types/typesAndInterfaces';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function createDevServer(options: Options): DevServerConfiguration {
    return {
        open: true,
        port: options.port,
        historyApiFallback: true,
        hot: true,
    };
}