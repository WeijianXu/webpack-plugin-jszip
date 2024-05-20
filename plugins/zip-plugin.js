const JSZip = require('jszip');
const path = require('path');
const zip = new JSZip();
const { RawSource } = require('webpack-sources');

module.exports = class ZipPlugin {
  constructor (options) {
    this.options = {
      filename: 'bundle',
      ...options,
    };
  }

  apply (compiler) {
    compiler.hooks.emit.tapAsync('ZipPlugin', (compilation, callback) => {
      const folderName = this.options.dir || compilation.options.output.path;
      const folder = zip.folder(folderName);

      for (let filename in compilation.assets) {
        const source = compilation.assets[filename].source();

        folder.file(filename, source);
      }

      folder.generateAsync({
        type: 'nodebuffer',
        compression: "DEFLATE",
        compressionOptions: {
            level: 9
        }
      }).then((content) => {
        const outDir = this.options.outDir || compilation.options.output.path;
        const outputPath = path.join(outDir, this.options.filename + '.zip');

        const outputRelativePath = path.relative(compilation.options.output.path, outputPath);
        compilation.assets[outputRelativePath] = new RawSource(content);

        callback();
      });
    })
  }
} 
