// var path = require('path');
// var HtmlWebpackPlugin =  require('html-webpack-plugin');

// module.exports = {
//     entry : './src/index.js',
//     output : {
//         path : path.resolve(__dirname , 'dist'),
//         filename: 'index_bundle.js'
//     },
//     module : {
//         rules : [
//             {test : /\.(js)$/, use:'babel-loader'},
//             {test : /\.(jsx)$/, use:'babel-loader'},
//             {test : /\.css$/, use:['style-loader', 'css-loader']}
//         ]
//     },
//     mode:'development',
//     plugins : [
//         new HtmlWebpackPlugin ({
//             template : './src/index.html'
//         })
//     ]

// };
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      {test : /\.(jsx)$/, use:'babel-loader'},
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|mp3$)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }    
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  mode:'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};