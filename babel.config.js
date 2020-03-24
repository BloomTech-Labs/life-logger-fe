module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry'
      }
    ],
    '@babel/preset-react'
  ],
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-modules-commonjs',
        'babel-plugin-dynamic-import-node',
        [
          '@babel/plugin-transform-runtime',
          {
            regenerator: true
          }
        ]
      ]
    }
  },
  babelrcRoots: ['.', 'packages/*']
};
