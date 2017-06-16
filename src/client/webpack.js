var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// frontend
var frontendConfig = {
  devtool: 'source-map',
  entry: [path.join(__dirname, 'index.js')],
  output: {
    path: path.join(__dirname, '../../dist/assets/'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  target: 'web',
  plugins: [new ExtractTextPlugin({ filename: 'styles.css', allChunks: true })],
  module: {
    rules: [
      { test: /\.png$/, use: { loader: 'url-loader', options: { limit: '100000' } } },
      { test: /\.jpg$/, use: { loader: 'file-loader' } },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      { test: /\.gif$/, use: { loader: 'url-loader', options: { mimetype: 'image/png' } } },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: {
          loader: 'file-loader?name=[name].[ext]&publicPath=/assets/'
        }
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false
            }
          },
          {
            loader: 'markdown-loader',
            options: {
              /* your options here */
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'es2015',
                  {
                    loose: true,
                    modules: false
                  }
                ],
                'stage-0',
                'react'
              ],
              plugins: ['babel-plugin-syntax-dynamic-import', 'transform-class-properties']
            }
          }
        ]
      }
    ]
  }
};
if (process.env.NODE_ENV === 'production') {
  //remove source mapping
  delete frontendConfig.devtool;
  frontendConfig.plugins.push(
    new webpack.DefinePlugin({
      // <-- key to reducing React's size
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin() //Merge chunks
    // new CompressionPlugin({
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10,
    //   minRatio: 0.8
    // })
  );
}
module.exports = webpack(frontendConfig);
