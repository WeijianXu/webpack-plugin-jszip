/*
 * @Author: WeijianXu weijian.xu@unidt.com
 * @Date: 2024-04-22 11:46:33
 * @LastEditors: WeijianXu weijian.xu@unidt.com
 * @LastEditTime: 2024-04-22 12:17:15
 * @FilePath: \output-verbatimd:\app\me\webpack-plugin-jszip\webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path');
const ZipPlugin = require('./plugins/zip-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  },
  mode: 'production',
  plugins: [
    new ZipPlugin({
      dir: 'dist',
      outDir: './',
      filename: 'test'
    })
  ]
}
