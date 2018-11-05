const withPlugins = require("next-compose-plugins");
const withTM = require("next-plugin-transpile-modules");
const withTypescript = require("@zeit/next-typescript");
const withCss = require('@zeit/next-css')

const nextConfig = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
            use: {
            loader: 'url-loader',
            options: {
                limit: 100000,
                publicPath: './',
                outputPath: 'static/',
                name: '[name].[ext]'
            }
            }
        })

        return config
    },
  };

module.exports = withPlugins([
 [withCss],
 [withTM, {
 }],
 [withTypescript],
], nextConfig);
