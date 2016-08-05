var path = require('path'),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	webpack = require('webpack');

module.exports = {
	entry: [
		path.join(__dirname, "App", "Polyfills.ts"),
		path.join(__dirname, "App", "Vendor.ts"),
		path.join(__dirname, "App", "Main.ts"),
		path.join(__dirname, "App", "Styles", "app.theme.scss")
	],
	output: {
		path: path.join(__dirname, "..", "bin", "public", "assets"),
		filename: "bundle.js"
	},
	plugins: [
		new ExtractTextPlugin("bundle.css")
	],

	resolve: {
		extensions: ["", ".js", ".ts", ".scss", ".css"]
	},

	module: {
		loaders: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
                test: /\app.theme.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            },
			{
			    exclude: /(node_modules|Styles)/,
			    test: /\.scss$/,
			    loaders: ['raw-loader', 'sass-loader?sourceMap']
			},
			{
				test: /\.ts$/,
				loader: "ts-loader"
			},
			{
				test: /\.js$/,
				loader: 'strip-sourcemap'
			}
		],
		noParse: [/angular2\/bundles\/.+/]
	}
};