const path = require('path')

module.exports = {
	hot: true,
	port: 3000,
	proxy: {
		'/' : 'localhost:8080'
	},
	// contentBase: path.resolve( __dirname, 'js' ),
	publicPath: 'http://localhost:3000/wp-content/themes/genese/'
};
