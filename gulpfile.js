var gulp = require("gulp"),
	webpack = require("webpack"),
    path = require("path");
    fs = require("fs"),
	DeepMerge = require("deep-merge"),
    nodemon = require("nodemon"),
    WebpackDevServer = require("webpack-dev-server"),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

var deepmerge = DeepMerge(function(target, source, key) {
  if(target instanceof Array) {
    return [].concat(target, source);
  }
  return source;
});

// Generic
var defaultConfig = {    
    module: {
        loaders: [
            {
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: "ts-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "strip-sourcemap"
			}
		]
  }
};

if(process.env.NODE_ENV !== "production") {
    defaultConfig.devtool = "source-map";
    defaultConfig.debug = true;
}

function config(overrides) {
    return deepmerge(defaultConfig, overrides || {});
}

var frontendConfig = config({
	entry: [
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/only-dev-server",
		"./Client/App/Main.ts"
	],
	output: {
        path: path.join(__dirname, "build", "client"),        
		filename: "index.js",
        publicPath: 'http://localhost:3000/build'
	},
	plugins: [
		new ExtractTextPlugin("index.css"),
        new webpack.HotModuleReplacementPlugin({ quiet: true })
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
                test: /\App.Theme.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            },
			{
			    exclude: /Styles/,
			    test: /\.scss$/,
			    loaders: ["raw-loader", "sass-loader?sourceMap"]
			},
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
});

// Server
var nodeModules = fs
    .readdirSync("node_modules")
    .filter(function(x) {
        return [".bin"].indexOf(x) === -1;
    });

var backendConfig = config({
	resolve: {
		extensions: ["", ".js", ".ts"]
	},
    entry: [
        "webpack/hot/signal.js",
        "./Server/App/Main.ts"
    ],
    target: "node",
    output: {
        path: path.join(__dirname, "build", "server"),
        filename: "index.js"
    },
    node: {
        __dirname: true,
        __filename: true
    },
    externals: [
        function(context, request, callback) {
            var pathStart = request.split("/")[0];
            if (nodeModules.indexOf(pathStart) >= 0 && request != "webpack/hot/signal.js") {
                return callback(null, "commonjs " + request);
            };
            
            callback();
        }
    ],
    recordsPath: path.join(__dirname, "build/_records"),
    plugins: [
        new webpack.IgnorePlugin(/\.(css|less|scss)$/),
        new webpack.HotModuleReplacementPlugin({ quiet: true })
    ]
});

// Tasks
function onBuild(done) {
    return function(err, stats) {
        if(err) {
            console.log("Error", err);
        } else {
            console.log(stats.toString());
        }
        
        if(done) {
            done();
        }
    }
}

gulp.task("frontend-build", function(done) {
    webpack(frontendConfig).run(onBuild(done));
});

gulp.task("frontend-watch", function() {
    new WebpackDevServer(webpack(frontendConfig), {
        publicPath: frontendConfig.output.publicPath,
        hot: true
    }).listen(3000, "localhost", function (err, result) {
        if(err) {
            console.log(err);
        } else {
            console.log("webpack dev server listening at localhost:3000");
        }
    });    
});

gulp.task("backend-build", function(done) {
    webpack(backendConfig).run(onBuild(done));
});

gulp.task("backend-watch", function(done) {
    var firedDone = false;
    webpack(backendConfig).watch(100, function(err, stats) {
        if(!firedDone) {
            firedDone = true;
            done();
        }
        
        nodemon.restart();
    });
});

gulp.task("build", ["frontend-build", "backend-build"]);
gulp.task("watch", ["frontend-watch", "backend-watch"]);

gulp.task("run", ["backend-watch", "frontend-watch"], function() {
    nodemon({
        execMap: {
            js: "node"
        },
        script: path.join(__dirname, "build/server/index"),
        ignore: ["*"],
        watch: ["foo/"],
        ext: "noop"
    }).on("restart", function() {
        console.log("Patched!");
    });
});