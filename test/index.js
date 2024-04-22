/*
 * @Author: WeijianXu weijian.xu@unidt.com
 * @Date: 2024-04-22 11:56:33
 * @LastEditors: WeijianXu weijian.xu@unidt.com
 * @LastEditTime: 2024-04-22 11:58:13
 * @FilePath: \output-verbatimd:\app\me\webpack-plugin-jszip\test\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** 
 * test/index.js
 * plugin测试入口文件
 */

const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const Mocha = require('mocha');

const mocha = new Mocha({
  timeout: '10000ms'
});

const config = require('../webpack.config.js');

rimraf('./dist', () => {
  webpack(config, (err, stats) => {
    if (err) {
      process.exit(2);
    }
    console.log(stats.toString({
      colors: true,
      modules: false,
      children: false,
    }));

    console.log('Webpack build success, begin to run test');

    mocha.addFile(path.join(__dirname, 'zip.test.js'));

    mocha.run();
  });
});
