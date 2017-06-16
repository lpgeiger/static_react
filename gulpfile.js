const gulp = require('gulp');
const frontendCompiler = require('./src/client/webpack.js');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');
function onBuild(done) {
  return function(err, stats) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log(stats.toString());
    }
    if (done) {
      done();
    }
  };
}
// gulp.task('dev', function(done) {
//   frontendCompiler.watch(
//     {
//       // ignored: /node_modules/
//     },
//     function(err, stats) {
//       console.log('Front-end compiled');
//     }
//   );
//   process.on('SIGINT', function() {
//     process.exit();
//   });
// });
gulp.task('dev', function(done) {
  // modify some webpack config options
  var myConfig = Object.create(frontendCompiler.options);
  myConfig.devtool = 'eval';
  myConfig.debug = true;

  // Start a webpack-dev-server
  new WebpackDevServer(frontendCompiler, {
    publicPath: myConfig.output.publicPath,
    stats: {
      colors: true
    },
    contentBase: path.join(__dirname, 'dist')
  }).listen(8080, 'localhost', function(err) {
    if (err) throw new err();
    console.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
    done();
  });
});
gulp.task('build', function(done) {
  frontendCompiler.run(onBuild(done));
});
