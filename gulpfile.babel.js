import gulp from 'gulp';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import WebpackConfig from './webpack.config.js';

import del from 'del';
import RunSequence from 'run-sequence';

import path from 'path';

const assetsPath = './public';
let options = {};

gulp.task('default', () => {
    RunSequence('build-clean', ['build-html', 'build-favicon', 'build-styles', 'build-images', 'build-fontello', 'build-javascript']);
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
  return gulp.src([path.join('assets', 'favicon')])
    .pipe(gulp.dest(path.join(assetsPath, "favicon")));
});

gulp.task('build-styles', () => {
  return gulp.src([path.join('assets', 'styles')])
    .pipe(gulp.dest(path.join(assetsPath, "styles")));
});

gulp.task('build-images', () => {
  return gulp.src([path.join('assets', 'images')])
    .pipe(gulp.dest(path.join(assetsPath, "images")));
});

gulp.task('build-fontello', () => {
  return gulp.src([path.join('assets', 'fontello')])
    .pipe(gulp.dest(path.join(assetsPath, "fontello")));
});

gulp.task('build-javascript', () => {
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

gulp.task('build-watch', () => {
  gulp.watch('src/stylesheet/**/*.scss', ['styles']);
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/img/**/*', ['images']);
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

