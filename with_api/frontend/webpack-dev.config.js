const path = require('path');
const webpackMerge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const commonConfig = require('./webpack.config.js');
const DESTINATION = path.resolve(__dirname, '.tmp');


module.exports = env => webpackMerge(commonConfig(env), {
	devtool: 'cheap-module-source-map',
	mode: 'development',
	devServer: {
		contentBase: DESTINATION,
		compress: false,
		port: 3200,
		historyApiFallback: true

		// Allow this for testing website using public domains (with appropriate record in hosts for 127.0.0.1)
		// disableHostCheck: true,
		// https: true
	},

	output: {
		path: DESTINATION,
		filename: 'js/index-[chunkhash].js',
		chunkFilename: 'js/[name]-[chunkhash].chunk.js'
	}

	// Allow this for analyzing bundle sizes
	// plugins: [
	//     new BundleAnalyzerPlugin()
	// ]
});
