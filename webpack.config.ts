import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

interface EnvVars {
  mode: 'production' | 'development';
  port: number;
}

module.exports = ({ mode, port }: EnvVars) => {
  const isDev = mode === 'development';
  return {
    mode: 'development',
    devtool: isDev ? 'inline-source-map' : undefined,
    entry: './src/index.tsx',
    devServer: isDev ?
      {
        port: port || 3000,
        open: true,
        historyApiFallback: true,
        hot: true,
      } : undefined,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.svg$/i,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/',
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                  localIdentName: isDev
                    ? '[path][name]__[local]--[hash:base64:5]'
                    : '[hash:base64:5]',
                },
              },
            },
          ],
        },
      ],
    },
    resolve: {
      preferAbsolute: true,
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      mainFiles: ['index'],
      alias: {},
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    output: {
      publicPath: '/',
      clean: true,
      filename: '[name].[contenthash].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins:[
      new HtmlWebpackPlugin({
        title: 'Who wants to be a millionaire',
        template: './index.html',
      }),
      new MiniCssExtractPlugin(),
    ],
  };
};