module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@database': './src/database',
        '@models': './src/models',
        '@controllers': './src/controllers',
        '@services': './src/services',
        '@helpers': './src/helpers',
        '@types': './src/@types'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
