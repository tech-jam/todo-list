const path = require('path');
const webpackMerge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.config.js');
const DESTINATION = path.resolve(__dirname, 'dist');

/**
 * Webpack Plugins
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => webpackMerge(commonConfig(env), {
	mode: 'production',
	output: {
		path: DESTINATION,
		filename: 'js/index-[chunkhash].js',
		chunkFilename: 'js/[name]-[chunkhash].chunk.js'
	},
	module: {
		rules: [
			{
				test: /\.less$/, // .less and .css
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'less-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin()
	],
	optimization: {
		minimizer: [
			new TerserPlugin({
				cache: true,
				parallel: true,
				sourceMap: true, // Must be set to true if using source-maps in production
				terserOptions: {
					ecma: 5,
					warnings: false,
					parse: {},
					compress: {},
					mangle: false,
					module: false,
					output: null,
					toplevel: false,
					ie8: false,
					keep_classnames: undefined,
					keep_fnames: false,
					safari10: false
				}
			})
		]
	}
});
