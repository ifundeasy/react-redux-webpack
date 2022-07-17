const path = require('path')
// const webpack = require('webpack')
// const DashboardPlugin = require('webpack-dashboard/plugin')
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const { merge } = require('webpack-merge')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const portfinder = require('portfinder')

const common = require('./webpack.common.js')
const devProxy = require('./dev.proxy')

// const smp = new SpeedMeasurePlugin()
const devWebpackConfig = merge(common, {
  mode: 'development',
  // devtool: 'source-map',
  devtool: 'eval-cheap-module-source-map',
  // The development environment uses the memory cache
  cache: { type: 'memory' },
  devServer: {
    // disableHostCheck: true,
    allowedHosts: 'all',
    historyApiFallback: true,
    client: {
      logging: 'error',
      progress: true,
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    static: {
      directory: path.join(__dirname, '../public'),
    },
    compress: true,
    open: true,
    // server: 'https',
    hot: true,
    // liveReload: false,
    proxy: devProxy,
  },
  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000,
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
    // new webpack.HotModuleReplacementPlugin(),
    // new DashboardPlugin(),
  ].filter(Boolean),
  optimization: {
    providedExports: true,
    usedExports: true,
  },
})

module.exports = new Promise((resolve, reject) => {
  portfinder.getPort(
    {
      port: 8080,
      stopPort: 65535,
    },
    (err, port) => {
      if (err) {
        reject(err)
        return
      }
      devWebpackConfig.devServer.port = port
      // resolve(smp.wrap(devWebpackConfig))
      resolve(devWebpackConfig)
    }
  )
})
