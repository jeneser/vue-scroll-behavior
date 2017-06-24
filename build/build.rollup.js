var fs = require('fs')
var path = require('path')
var rollup = require('rollup')
var babel = require('rollup-plugin-babel')
var uglify = require('rollup-plugin-uglify')

var version = process.env.VERSION || require('../package.json').version
var author = process.env.VERSION || require('../package.json').author

var banner =
  '/**\n' +
  ' * vue-scroll-behavior v' + version + '\n' +
  ' * (c) ' + new Date().getFullYear() + ' ' + author + '\n' +
  ' * @license MIT\n' +
  ' */\n'

rollup.rollup({
    entry: path.resolve(__dirname, '..', 'src/vue-scroll-behavior.js'),
    plugins: [
      babel(),
      uglify()
    ]
})
.then(bundle => {
    return write(path.resolve(__dirname, '../dist/vue-scroll-behavior.js'), bundle.generate({
        format: 'umd',
        moduleName: 'vueScrollBehavior'
    }).code)
})
.then(() => {
    console.log('Awesome! vue-scroll-behavior v' + version + ' builded.')
})
.catch(console.log)

function getSize (code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}

function blue (str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}

function write (dest, code) {
  return new Promise(function (resolve, reject) {
    code = banner + code
    fs.writeFile(dest, code, function (err) {
      if (err) return reject(err)
      console.log(blue(dest) + ' ' + getSize(code))
      resolve()
    })
  })
}
