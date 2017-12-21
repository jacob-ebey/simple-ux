const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractPlugin = new ExtractTextPlugin({
  filename: 'style.css'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: 'simple-ux.js',
    libraryTarget: 'umd'
  },
  externals: {
    'preact': 'preact'
  },
  module: {
    rules: [
      {
        test: /\.js/i,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'es2015', 'stage-0'],
          plugins: [
            ['transform-react-jsx', { pragma: 'h' }]
          ]
        }
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: [
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
        })
      },
      {
        test: /\.(gif|jpg|png)\??.*$/,
        loader: 'url-loader?limit=8096&name=images/[name].[ext]'
      }
    ]
  },
  plugins: [
    extractPlugin,
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer]
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.scss'],
    alias: {
      src: path.join(__dirname, '../src')
    }
  }
}
