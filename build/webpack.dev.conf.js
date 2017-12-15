const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: './docs/src/index.js',
  output: {
    path: path.join(__dirname, './docs/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: [
            ['transform-react-jsx', { pragma: 'h' }]
          ]
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          },
          {
            loader: 'postcss-loader' // auto add browser support for css
          }
        ]
      },
      {
        test: /\.(gif|jpg|png)\??.*$/,
        loader: 'url-loader?limit=8096&name=images/[name].[ext]'
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer]
      }
    })
  ],

  // devtools:
  devtool: 'source-map',
  devServer: {
    contentBase: [path.join(__dirname, '../docs/'), path.join(__dirname, '../src/')],
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    compress: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Power-by': 'Fei-WEBPACK'
    }
  },
  resolve: {
    extensions: ['.js', '.scss'],
    alias: {
      node_modules: path.join(__dirname, '../node_modules'),
      src: path.join(__dirname, '../src'),
      docs: path.join(__dirname, '../docs/src')
    }
  }
}
