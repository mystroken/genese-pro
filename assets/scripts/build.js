const fs = require( 'fs-extra' );

const { PATHS } = require('../config.js');
const postcss = require('./postscss');
const rollup = require('./rollup');


fs.emptyDir( PATHS.compiled(), () => {
	rollup({
    entry: PATHS.src('js', 'app.js'),
    dest: PATHS.compiled('js', 'app.js'),
    cb: _ => console.log('JS Compiled !')
  });
});
