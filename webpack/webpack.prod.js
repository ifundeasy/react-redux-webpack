const path = require('path')
// const webpack = require('webpack')
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const glob = require('glob')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const common = require('./webpack.common.js')

// const smp = new SpeedMeasurePlugin()
const regVendor = /[\\/]node_modules[\\/](axios|classnames|)[\\/]/

const prodWebpackConfig = merge(common, {
  mode: 'production',
  // use file cache
  cache: { type: 'filesystem', buildDependencies: { config: [__filename] } },
  // devtool: false,
  devtool: 'source-map',
  // devtool: 'nosources-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash].css',
      chunkFilename: 'static/css/[name].[contenthash].css',
      ignoreOrder: true,
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }),
      only: ['bundle', 'vendor'],
    }),
    // new webpack.BannerPlugin({
    //   raw: true,
    //   banner: '/** @preserve Powered by react-redux-webpack (https://github.com/ifundeasy/react-redux-webpack/) */',
    // }),
    new CompressionWebpackPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.js$|\.json$|\.css/,
      threshold: 10240, // only resources larger than this value will be processed
      minRatio: 0.8, // Only resources with a compression ratio less than this value will be processed
      // deleteOriginalAssets: true // delete the original file
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: './public', to: '../dist' }],
      options: {
        concurrency: 100,
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
          parse: {},
          compress: {},
          mangle: true,
          module: false,
          output: null,
          format: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minChunks: 3,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      cacheGroups: {
        vendor: {
          test: regVendor,
          name: 'vendor',
          minChunks: 1,
          priority: 10,
          enforce: true,
          chunks: 'all',
        },
        react: {
          test(module) {
            // `module.resource` contains the absolute path of the file on disk.
            return module.resource && module.resource.includes('node_modules/react')
          },
          chunks: 'initial',
          filename: 'react.[contenthash].js',
          priority: 1,
          maxInitialRequests: 2,
          minChunks: 1,
        },
      },
    },
    runtimeChunk: {
      name: 'runtime',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})

// module.exports = smp.wrap(prodWebpackConfig)
module.exports = prodWebpackConfig
