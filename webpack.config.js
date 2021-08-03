const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => ({
	target: 'web',
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'js/main.js',
	},
	plugins: [
		new ESLintPlugin({
			extensions: ["js", "jsx"],
			fix: true,
		}),
		new HtmlWebpackPlugin({
			filename: './index.html',
			inject: 'body',
		}),
	],
	optimization: {
		// nodeEnv: false,
		minimize: (argv.mode !== 'development'),
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {
						comments: false,
					},
				},
				extractComments: false,
			}),
		],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.(png|jpg|gif)$/,
				type: 'asset/resource',
				generator: {
					filename: 'images/[hash][ext][query]'
				},
			},
			{
				test: /\.(ttf|woff)$/,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[hash][ext][query]'
				},
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
	externals: [],
	watchOptions: {
		ignored: /node_modules/
	},
	devServer: {
		contentBase: './build',
		hot: true,
		host: process.env.HOST || '0.0.0.0',
		port: 3000,
		open: true,
	},
});
