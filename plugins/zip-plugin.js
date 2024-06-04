const JSZip = require('jszip');
const path = require('path');
const zip = new JSZip();
const fs = require('fs');
const { RawSource } = require('webpack-sources');

module.exports = class ZipPlugin {
  constructor (options) {
    this.options = {
      filename: 'bundle',
      ...options,
    };
  }

  apply (compiler) {
    compiler.hooks.afterCompile.tapAsync('ZipPlugin', (compilation, callback) => {
      const folderName = this.options.dir || compilation.options.output.path;
      const folder = zip.folder(folderName);
      for (let filename in compilation.assets) {
        if (this.options.exclude && this.options.exclude.test(filename)) {
          continue;
        }
        const source = compilation.assets[filename].source();
        folder.file(filename, source, {
          createFolders: true
        });
      }

      const outDir = this.options.outDir || compilation.options.output.path;
      const outputPath = path.join(outDir, this.options.filename + '.zip');

      // 删除原来的文件
      if (fs.existsSync(outputPath)) {
        fs.unlinkSync(outputPath);
      }

      folder.generateAsync({
        type: 'nodebuffer',
        compression: "DEFLATE",
        compressionOptions: {
            level: 9
        }
      }).then((content) => {

        // const outputRelativePath = path.relative(compilation.options.output.path, outputPath);
        // compilation.assets[outputRelativePath] = new RawSource(content);
        // 输出到目标位置
        require("fs").writeFile(outputPath, content, function(err){/*...*/})

        callback();
      });
    })
  }
} 
