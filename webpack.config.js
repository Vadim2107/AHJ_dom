const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  // entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: ASSET_PATH,
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        // use: [
        //   MiniCssExtractPlugin.loader, 'css-loader',
        // ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
            },
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              mimetype: 'image/png',
              limit: false,
              esModule: false,
            },
          },
        ],
      },
      // {
      //   test: /\.(png|jpg|gif|webp)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 8192, // будет использоваться file-loader
      //     },
      //   },
      // },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      favicon: './src/img/goblin.png',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      // process.env.ASSET_PATH: JSON.stringify (ASSET_PATH),
    }),
  ],
};
