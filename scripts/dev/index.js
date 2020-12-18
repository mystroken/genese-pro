import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import browsersync from 'rollup-plugin-browsersync'
import postcss from 'rollup-plugin-postcss'

// Rollup config
export default {
	input: 'js/src/index.js',
	output: {
		dir: 'js',
		entryFileNames: '[name]-[hash].js',
		chunkFileNames: '[name]-[hash].js',
		sourcemap: true,
		format: 'cjs'
	},

	// Plugins
	plugins: [
		browsersync({
			port: 3000,
			proxy: 'http://localhost:8080',
			open: false,
			notify: false
		}),

		postcss({
			extract: true,
			sourceMap: true
		}),

		resolve(), // support modules from node_modules.
		commonjs({ // support of require.
			include: 'node_modules/**',
		}),
		babel({
			babelrc: false,
			presets: [['@babel/preset-env', { 'modules': false }]]
		})
	]
}
