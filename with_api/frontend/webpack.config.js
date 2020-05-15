const webpack = require('webpack');
const path = require('path');
const _ = require('lodash');

/**
 * Webpack Plugins
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');

module.exports = env => {
	const config = {
		resolve: {
			extensions: ['.ts', '.js']
		},

		module: {
			rules: [
				{
					test: /\.ts$/,
					exclude: /node_modules/,
					use: {
						loader: 'tslint-loader',
						options: {
							emitErrors: true
						}
					},
					enforce: 'pre'
				},

				{
					test: /\.ts$/,
					include: [
						path.resolve(__dirname, 'src'),
						path.resolve(__dirname, 'node_modules', 'api-client-ng1')],
					use: [
						'ng-annotate-loader',
						'awesome-typescript-loader'
					]
				},

				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							plugins: ['lodash'],
							presets: [
								[
									'@babel/env',
									{
										targets: {
											browsers: [
												'last 2 versions',
												'safari 7'
											]
										},
										forceAllTransforms: true
									}
								]
							]
						}
					}
				},

				{
					test: /\.(less|css)$/,
					use: [
						'style-loader',
						'css-loader',
						'less-loader'
					]
				},

				{
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								outputPath: 'images/',
								name: '[name][hash].[ext]'
							}
						}
					]
				},

				{
					test: /\.(svg)$/,
					exclude: /fonts/, /* dont want svg fonts from fonts folder to be included */
					use: [
						{
							loader: 'svg-url-loader',
							options: {
								noquotes: true
							}
						}
					]
				},

				{
					test: /\.(woff|woff2|eot|ttf|svg)$/,
					exclude: /images/, // dont want svg images from image folder to be included
					use: [
						{
							loader: 'file-loader',
							options: {
								outputPath: 'fonts/',
								name: '[name][hash].[ext]'
							}
						}
					]
				},

				{
					test: /.html$/,
					exclude: /^index.html$/,
					use: 'html-loader'
				}
			]
		},

		plugins: [
			new HtmlWebpackPlugin({
				title: 'Todo app list',
				template: 'src/index.html',
				filename: './index.html',
				favicon: 'src/favicon.ico',
				inject: true,
				chunksSortMode: 'none'
			}),
			new LoaderOptionsPlugin({
				debug: true,
				options: {
					tslint: {
						configuration: require('./tslint.json'),
						typeCheck: true
					}
				}
			}),
			// new ExtractTextPlugin('css/style.css'),
			new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
			new GoogleFontsPlugin({
				fonts: [
					{
						family: 'Open Sans',
						variants: [
							'300',
							'400',
							'600',
							'700'
						]
					}
				],
				formats: [
					'woff',
					'woff2'
				]
			}),
			new webpack.ProvidePlugin({
				'window.jQuery': 'jquery',
				'window.$': 'jquery',
				$: 'jquery',
				moment: 'moment'
			})
		],

		// workaround for Xlsx-Export plugin
		node: {
			fs: 'empty'
		},

		entry: './src/index.js'
	};

	return config;
};
