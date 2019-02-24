const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`) // eslint-disable-line no-undef
  },
  devtool: `source-map`,
  module: {
    rules: [{
      test: /\.js$/,
      use: `babel-loader`
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./public/index.html`
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, `public`), // eslint-disable-line no-undef
    publicPath: `http://localhost:8080/`,
    hot: true,
    compress: true
  }
};
