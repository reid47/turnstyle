import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import fileSize from 'rollup-plugin-filesize';
import replace from 'rollup-plugin-replace';
import path from 'path';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/turnstyle.js',
      format: 'umd',
      name: 'turnstyle'
    },
    plugins: [
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      babel({ exclude: 'node_modules/**/' }),
      resolve(),
      commonjs({ include: 'node_modules/**' }),
      uglify(),
      fileSize()
    ]
  },
  {
    input: 'src/react/index.js',
    output: {
      file: 'dist/react.js',
      format: 'cjs'
    },
    external: ['react', path.resolve('../index')],
    plugins: [
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      babel({ exclude: 'node_modules/**/' }),
      resolve(),
      commonjs({ include: 'node_modules/**' }),
      uglify(),
      fileSize()
    ]
  }
];
