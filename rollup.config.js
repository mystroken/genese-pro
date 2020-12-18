import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import browsersync from 'rollup-plugin-browsersync'
import hmr from 'rollup-plugin-hot'

// NOTE we're using the same instance of the HMR server to serve our multiple
// builds -- this works because they all use the same public directory, and they
// don't step on each other's toes by trying to write to the same output files
const hot = hmr({
	public: path.resolve(__dirname, './'),
	publicHost: 'http://localhost:5000/wp-content/themes/genese/',
	clearConsole: false,
	inMemory: true,
})

// Rollup config
export default {
	input: 'js/src/index.js',
	output: {
	  file: 'js/app.js',
	  format: 'esm'
	},

	// Plugins
	plugins: [

		// browsersync({
		// 	port: 3000,
		// 	proxy: 'http://localhost:8080',
		// 	open: false,
		// 	notify: false
		// }),

		// hot,

		resolve(), // support modules from node_modules.
		commonjs({ // support of require.
			include: 'node_modules/**',
		}),
		babel({
			babelrc: false,
			presets: [['@babel/preset-env', { 'modules': false }]]
		}),
	]
}
