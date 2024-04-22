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
      const folder = zip.folder(this.options.filename);

      for (let filename in compilation.assets) {
        const source = compilation.assets[filename].source();

        folder.file(filename, source);
      }

      zip.generateAsync({
        type: 'nodebuffer'
      }).then((content) => {
        const outDir = this.options.outDir || compilation.options.output.path || './';
        const outputPath = path.join(outDir, this.options.filename + '.zip');

        const outputRelativePath = path.relative(compilation.options.output.path, outputPath);
        compilation.assets[outputRelativePath] = new RawSource(content);

        callback();
      });
    })
  }
} 
