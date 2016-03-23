import gulp from 'gulp';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import WebpackConfig from './webpack.config.js';

import del from 'del';
import RunSequence from 'run-sequence';

import path from 'path';


var assetsPath = '/public';

gulp.task('default', () => {
  RunSequence('clean', ['html', 'favicon', 'styles', 'images', 'fontello', 'javascript'], 'watch');
});

gulp.task('clean', (cb) => {
  del([assetsPath], {
    force: true
  }, cb);
});

gulp.task('html', () => {
  return gulp.src(['src/*.html'])
    .pipe(gulp.dest(assetsPath)));
});

gulp.task('favicon', () => {
  return gulp.src(['src/favicon'])
    .pipe(gulp.dest(path.join(assetsPath, "favicon")));
});

gulp.task('styles', () => {
  return gulp.src([path.join('src', 'styles')])
    .pipe(gulp.dest(path.join(assetsPath, "styles")));
});

gulp.task('images', () => {
  return gulp.src([path.join('src', 'images')])
    .pipe(gulp.dest(path.join(assetsPath, "images")));
});

gulp.task('fontello', () => {
  return gulp.src([path.join('src', 'fontello')])
    .pipe(gulp.dest(path.join(assetsPath, "fontello")));
});


let options = {};

gulp.task('javascript', () => {
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


gulp.task('watch', function(){
  gulp.watch('src/stylesheet/**/*.scss', ['styles']);
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/img/**/*', ['images']);
});





gulp.task('watch', ['clean'], (cb) => {
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

