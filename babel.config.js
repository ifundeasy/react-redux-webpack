const plugins = [
  [
    'import',
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    },
  ],
  ['@babel/plugin-syntax-dynamic-import'],
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  ['@babel/plugin-transform-runtime'],
]

module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/typescript',
  ],
  compact: true,
  // If this is not set, the webpack magic comment will be deleted, and the magic comment will be used for subpackage
  comments: true,
  plugins:
    process.env.NODE_ENV === 'production' ? [...plugins, 'transform-remove-console', 'transform-remove-debugger'] : plugins,
}
