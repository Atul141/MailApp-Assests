import gulp from 'gulp';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

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

gulp.task('serve', () => {
  const config = require('./webpack.config');
  const bundler = webpack(config);
  let server = new WebpackDevServer(bundler, {
    contentBase: './javascript/src',
    publicPath: './assets/',
    hot: true,
    stats: {
      colors: true
    },
    proxy: {
       "/api/*":  "http://localhost:7000/"
    }
  });
  server.listen(9999, '0.0.0.0', (err) => {
    console.log('Starting Mailbox app on :9999');
  });
});
