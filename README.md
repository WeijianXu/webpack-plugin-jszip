<!--
 * @Author: WeijianXu weijian.xu@unidt.com
 * @Date: 2024-04-22 11:47:47
 * @LastEditors: WeijianXu weijian.xu@unidt.com
 * @LastEditTime: 2024-04-22 13:43:42
 * @FilePath: \output-verbatimd:\app\me\webpack-plugin-jszip\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# WEBPACK PLUGIN JSZIP
A simple zip plugin of webpack for compressing all the bundle files into a single zip file.

## how to use
install this package
```
npm install webpack-plugin-jszip -D
```

and use in webpack.config
```JavaScript
// demo webpack.config.js
const zipPlugin = require('webpack-plugin-jszip');

module.exports = {
  entry: ...,
  output: ...,
  plugins: [
    new zipPlugin({
      dir: 'dist', // this property used to set the path of the directory that contains the bundle files.
      outDir: './', // this property used to set the path of the output directory
      filename: 'bundle' // this property used to set zip file name
    })
  ]
}
```

## Options

- `dir`: The directory that contains the bundle files. Its default value is webpack output path or same as the filename property.
- `outDir`: The output directory. Its default value is the root folder.
- `filename`: The name of the zip file. Its default value is `bundle`.

then, webpack build.
