const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
		new MiniCssExtractPlugin({
			filename: 'css/style.css',
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
				test: /\.(scss)$/,
				use: [
					{
						loader: argv.mode !== 'production' ?
						"style-loader" // inject CSS to page
						:
						MiniCssExtractPlugin.loader,
					},
					/*{
						loader: MiniCssExtractPlugin.loader,
						options: {
							// publicPath: '.',
						},
					},*/
					{
						// translates CSS into CommonJS modules
						loader: 'css-loader',
					},
					{
						// Run postcss actions
						loader: 'postcss-loader',
						options: {
							// `postcssOptions` is needed for postcss 8.x;
							// if you use postcss 7.x skip the key
							postcssOptions: {
								// postcss plugins, can be exported to postcss.config.js
								plugins: function () {
									return [
										require('autoprefixer')
									];
								},
							},
						},
					},
					{
						// compiles Sass to CSS
						loader: 'sass-loader'
					},
				],
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
