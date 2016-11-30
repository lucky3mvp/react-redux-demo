var path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, './src');

module.exports = {
	entry: path.resolve(SRC_PATH, 'index.js'),
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/, 
			exclude: /node_modules/,
		    loader: 'babel-loader?presets[]=es2015&presets[]=react'
		},{
			test: /\.jsx$/,
			exclude: /node_modules/,
			loader: 'jsx-loader'
		},{
			test: /\.less$/,
			exclude: /node_modules/,
			loader: 'style-loader!css-loader!less-loader'
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
		// entry: './src/index.js',// entry: './src/index.js',
	},
	devtool: 'source-map'
}