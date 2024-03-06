const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
      ? '/dizi/'
      : '/',
  transpileDependencies: true,
  // css: {
  //   extract: false,
  // },
  // configureWebpack: {
  //   // No need for splitting
  //   optimization: {
  //     splitChunks: false
  //   }
  // }
})
