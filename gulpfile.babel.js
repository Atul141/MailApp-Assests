import gulp from 'gulp';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import WebpackConfig from './webpack.config.js';

import del from 'del';
import RunSequence from 'run-sequence';

import mocha from 'gulp-mocha';

import path from 'path';

const assetsPath = './public';
let options = {};
const TEST_FILES = "./assets/javascript/test/**/*.js";

gulp.task('default', () => {
    RunSequence('build-clean', ['build-html', 'build-favicon', 'build-images', 'build-fontello'], 'build');
});

gulp.task('build-clean', (cb) => {
  return del([assetsPath], {
    force: true
  }, cb);
});

gulp.task('build-html', () => {
  return gulp.src([path.join('assets', '*.html')])
    .pipe(gulp.dest(assetsPath));
});

gulp.task('build-favicon', () => {
  return gulp.src('assets/favicon/**.*')
    .pipe(gulp.dest(path.join(assetsPath, "favicon")));
});

gulp.task('build-images', () => {
  return gulp.src('assets/images/**/*.*')
    .pipe(gulp.dest(path.join(assetsPath, "images")));
});

gulp.task('build-fontello', () => {
  return gulp.src('assets/styles/fontello/**/*.*')
    .pipe(gulp.dest(path.join(assetsPath, "fontello")));
});

gulp.task('build', () => {
  const bundler = webpack(WebpackConfig);

  const bundlerCb = (err, stats) => {
    console.log(stats.toString());
  };

  if (options.watch) {
    bundler.watch(200, bundlerCb);
  } else {
    bundler.run(bundlerCb);
  }
});

gulp.task('test', () => {
  return gulp.src(TEST_FILES)
         .pipe(mocha({}));
});

gulp.task('tdd', ['test'], () => {
  return gulp.watch([TEST_FILES],
      ['test']).on('error', console.log)
});

gulp.task("server", function(callback) {
    var myConfig = Object.create(WebpackConfig);
    myConfig.devtool = "eval";
    myConfig.debug = true;

    new WebpackDevServer(webpack(myConfig), {
        contentBase: myConfig.output.publicPath,
        stats: {
            colors: true
        }
    }).listen(9999, "localhost", function(err) {
        if (err) throw new console.log("webpack-dev-server error:", err);
        console.log("Mailbox app starting on :9999");

    });
});

