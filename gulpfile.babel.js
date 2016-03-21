import gulp from 'gulp';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import WebpackConfig from './webpack.config.js';

import del from 'del';
import RunSequence from 'run-sequence';

let options = {};
var assetsPath = './out';

gulp.task('clean', (cb) => {
  del([assetsPath], {
    force: true
  }, cb);
});

// run webpack bundler
gulp.task('bundle', (cb) => {
  const config = require('./webpack.config');
  const bundler = webpack(config);

  const bundlerCb = (err, stats) => {
    console.log(stats.toString());
  };

  if (options.watch) {
    bundler.watch(200, bundlerCb);
  } else {
    bundler.run(bundlerCb);
  }

});

gulp.task('assets', (cb) => {
  return gulp.src(['assets/**'])
    .pipe(gulp.dest(assetsPath));
});

gulp.task('build', ['clean'], (cb) => {
  RunSequence(['assets', 'bundle'], cb)
});

gulp.task('build:watch', ['clean'], (cb) => {
  options.watch = true;
  RunSequence(['build'], () => {
      gulp.watch(['assets']);
  });
});

gulp.task("webpack-dev-server", function(callback) {
    var myConfig = Object.create(WebpackConfig);
    myConfig.devtool = "eval";
    myConfig.debug = true;

    new WebpackDevServer(webpack(myConfig), {
        publicPath: "/" + myConfig.output.publicPath,
        stats: {
            colors: true
        }

    }).listen(9999, "localhost", function(err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        console.log("Mailbox app starting on :9999");

    });
});

