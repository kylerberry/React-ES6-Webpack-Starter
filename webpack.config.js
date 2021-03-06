const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './app/index.html',
	filename: 'index.html',
	inject: 'body'
});

var SRC_DIR = path.resolve(__dirname, 'app')
var DIST_DIR = path.resolve(__dirname, 'dist')

module.exports = {
	entry: SRC_DIR + '/app.js',
	output: {
		path: DIST_DIR,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			use: [{ loader: 'babel-loader'}],
			exclude: /node_modules/
		}]
	},
	plugins: [HtmlWebpackPluginConfig]
}
