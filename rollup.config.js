'use strict';

import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { merge } from 'lodash';

const pkg = require('./package.json');

function genCfg(options){
  return merge({
    input: 'src/index.js',
    output: {
      file: 'lib/index.js',
      format: 'cjs',
      sourcemap: false
    },
    // 指出应将哪些模块视为外部模块
    external: id => {
      return /node_modules/i.test(id);
    },
    plugins: [
      alias({
        resolve: ['.js'],
        entries: {},
      }),
      resolve(),
      // commonjs(),
      // babel({
      //   babelrc: false,
      //   babelHelpers: 'bundled',
      //   exclude: 'node_modules/**',
      //   presets: [
      //     ['@babel/preset-env', {
      //       modules: false
      //     }]
      //   ],
      //   plugins: [
      //     '@babel/plugin-proposal-object-rest-spread',
      //     // '@babel/plugin-proposal-class-properties'
      //   ]
      // }),
    ]
  }, options);
}

export default genCfg();
