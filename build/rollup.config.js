// import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import nodeResolve from '@rollup/plugin-node-resolve';  // Finds vuejs
import replace from '@rollup/plugin-replace';  // to set node's process var
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
// import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable br

const { PRODUCTION } = process.env;

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/main-bundle.js',
    format: 'umd'  // no bigger than iife
  },
  plugins: [
    nodeResolve(),
    // commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
          PRODUCTION ? 'production' : 'development'
      )
    }),
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function
    }),
    // buble(), // Transpile to ES5
  ]
}
