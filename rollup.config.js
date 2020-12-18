import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import hmr from 'rollup-plugin-hot'
import postcss from 'rollup-plugin-postcss-hot'

// NOTE we're using the same instance of the HMR server to serve our multiple
// builds -- this works because they all use the same public directory, and they
// don't step on each other's toes by trying to write to the same output files
const hot = hmr({
  public: './assets/dist/',
  clearConsole: false,
  inMemory: true,
  open: 'default',
  openPort: 5000,
})

const format = process.env.NOLLUP ? 'esm' : 'iife'

export default {
	input: './assets/src/js/app.js',
	output: {
    sourcemap: true,
    format,
    file: 'assets/dist/js/app.js',
  },
  // our example contains dynamic imports (because we want to test them with
  // HMR!), so we need this option to be able to build to an iife
  inlineDynamicImports: true,
  plugins: [hot],
  watch: {
    clearScreen: false,
  },

	// Plugins
	// plugins: [

	// 	// resolve(), // support modules from node_modules.
	// 	// commonjs({ // support of require.
	// 	// 	include: 'node_modules/**',
	// 	// }),
	// 	// babel({
	// 	// 	babelrc: false,
	// 	// 	presets: [['@babel/preset-env', { 'modules': false }]]
	// 	// }),
	// ]
}
