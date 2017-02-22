var webpack = require('webpack')

module.exports = {
  entry: './entry.js',
  output: {
    path: '',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
       // {
       //    test: require.resolve('jquery'),
       //    loader: 'expose?jQuery!expose?$'
       // },
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
       {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader'
        // include: __dirname + '/app/assets',
      }
    ]
  },
    plugins:[
    new webpack.ProvidePlugin({
      $:"jquery",
      jQuery:"jquery",
      "window.jQuery":"jquery"
    })
  ]
}