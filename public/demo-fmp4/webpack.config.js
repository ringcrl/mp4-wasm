module.exports = {
  entry: './main.js',
  devtool: 'cheap-module-source-map',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: true,
          },
        },
        'postcss-loader',
        'sass-loader',
      ],
    }],
  },
  mode: 'development',
  optimization: {
    // minimize: true
  },
};
