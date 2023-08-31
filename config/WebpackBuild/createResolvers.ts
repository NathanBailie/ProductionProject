import { ResolveOptions } from 'webpack';

export function createResolvers(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    };
}