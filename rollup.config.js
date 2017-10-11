import typescript from 'rollup-plugin-typescript'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

const pkg = require('./package.json')

export default {
  input: './src/index.ts',
  output: {
    file: pkg.main,
    format: 'umd',
    name: 'Shime'
  },
  context: 'window',
  plugins: [
    typescript({
      typescript: require('typescript')
    }),
    resolve(),
    uglify()
  ]
}
