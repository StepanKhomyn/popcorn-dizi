const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: false,
  },
  configureWebpack: {
    // No need for splitting
    optimization: {
      splitChunks: false
    }
  }
})
