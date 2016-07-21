var path = require("path"),
	webpack = require("webpack"),
    fs = require("fs");

var nodeModules = {};
fs.readdirSync("node_modules")
    .filter(function(x) {
        return [".bin"].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = "commonjs " + mod;
    });

module.exports = {
	entry: [
		"./scr/App.ts"
	],
	output: {
		path: path.join(__dirname),
		filename: "App.js"
	},
	resolve: {
		extensions: ["", ".js", ".ts"]
	},
    externals: nodeModules,
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: "ts-loader"
			},
			{
				test: /\.js$/,
				loader: "strip-sourcemap"
			}
		],
		noParse: [/angular2\/bundles\/.+/]
	}
};