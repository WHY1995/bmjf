let path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  baseUrl: '/', // 基本路径
  outputDir: 'dist', // 输出文件目录
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.resolve.alias.set('static',resolve('static'))
    // config.module.rule('less').test(/\.less$/).oneOf('vue').resourceQuery(/\?vue/).use('px2rem').loader('px2rem-loader').options({remUnit: 75})
  },
  configureWebpack: () => {},
  // 如果想要引入babel-polyfill可以这样写
  // configureWebpack: (config) => {
  //   config.entry = ["babel-polyfill", "./src/main.js"]
  // },
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  // css相关配置
  css: {
    extract: process.env.NODE_ENV === 'production', // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: process.env.NODE_ENV === 'development', // 开启 CSS source maps?
    loaderOptions: {
      less: {},
      postcss: {
        plugins: [require('postcss-px2rem')({remUnit: 37.5})]
      }
    }, // css预设器配置项
    modules: false // 启用 CSS modules for all css / pre-processor files.
  },
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {}
}
