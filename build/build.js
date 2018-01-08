'use strict'
// 引入版本检查工具（检查node/npm版本）
require('./check-versions')()

process.env.NODE_ENV = 'production'

// 引入ora模块，可以在控制台显示编译信息
const ora = require('ora')
const rm = require('rimraf')
const path = require('path') // 使用 NodeJS 自带的文件路径工具
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config') // 获取 config/index.js 的默认配置
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
