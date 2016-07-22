var gulp = require("gulp"),
    fs = require("fs"),
    path = require("path"),
    nodemon = require("nodemon"),
    DeepMerge = require("deep-merge"),
    htmlmin = require('gulp-htmlmin'),
    webpack = require("webpack"),    
    WebpackDevServer = require("webpack-dev-server");

var helper = {  
  merge : DeepMerge(function(target, source, key) {
    if(target instanceof Array) {
      return [].concat(target, source);
    }
    
    return source;
  }),
  onBuild : function(done) {
    return function(err, stats) {
      if(err) {
        console.log("Error", err);
      }
      else {
        console.log(stats.toString());
      }
      
      if(done) {
        done();
      }
    }
  },
  htmlMimify: {
		collapseWhitespace: true,
		removeComments: true,
		removeTagWhitespace: false,
		removeRedundantAttributes: true,
		caseSensitive: true
	},
  path: {
    source: {
      html: "./Client/App/**/*.html"
    },
    destination: {
      html: "./.bin/public"
    }
  },
  tasks: {
    run: "run",
    clear: "clear",   
    build: {
      copy: "build:client:copy",
      client: "build:client",
      server: "build:server",
    }
  },
};

gulp.task(helper.tasks.build.server, function(done) {
	var config = require("./Server/webpack.config.js");
	webpack(config).run(helper.onBuild(done));
});

gulp.task(helper.tasks.build.client, function(done) {
	var config = require("./Client/webpack.config.js");
	webpack(config).run(helper.onBuild(done));
});

gulp.task(helper.tasks.build.copy, function () {
	gulp.src([helper.path.source.html])
		.pipe(htmlmin(helper.htmlMimify))
		.pipe(gulp.dest(helper.path.destination.html));
});

gulp.task(helper.tasks.run, [helper.tasks.build.server, helper.tasks.build.client, helper.tasks.build.copy]);