module.exports = {
  entry: './src/index.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
