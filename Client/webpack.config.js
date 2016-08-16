var path = require('path'),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	webpack = require('webpack');

module.exports = {
	entry: [
		path.join(__dirname, "App", "polyfills.ts"),
		path.join(__dirname, "App", "vendors.ts"),
		path.join(__dirname, "App", "main.ts"),
		path.join(__dirname, "App", "Styles", "app.theme.scss"),
		"./node_modules/@angular2-material/core/style/core.css",
        "./node_modules/@angular2-material/core/overlay/overlay.css"
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
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
                test: /\app.theme.scss$/,
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