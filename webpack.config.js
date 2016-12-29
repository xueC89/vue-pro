var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

let extractCSS = new ExtractTextPlugin('com.css');
let extractSASS = new ExtractTextPlugin('style.css');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff|ttf|eot|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 20000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        // loader: ["style-loader", "css-loader"]
        loader:  extractCSS.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        // loaders: ["style-loader", "css-loader", "sass-loader"]
        loader: extractSASS.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    extractCSS,
    extractSASS
  ],
  resolve: {
    extensions: ['.js', '.vue', '.scss'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'vueRouter$': 'vue-router/dist/vue-router.js',
      'vueResource$': 'vue-resource/dist/vue-resource.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
