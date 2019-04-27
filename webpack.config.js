const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  	rules: [
  		{
  			test: /\.vue$/,
  			use: 'vue-loader'
		},
		{
		resourceQuery: /blockType=i18n/,
		type: 'javascript/auto',
		loader: '@kazupon/vue-i18n-loader',
		},
  		{
  			test: /\.scss$/,
  			use: ExtractTextPlugin.extract({
  				fallback: 'style-loader',
  				use: [
  					'css-loader',
  					'sass-loader'
  				]
  			})
		},
		{
			test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
			use: [{
			  loader: 'file-loader',
			  options: {
					name: '[name].[ext]',
					outputPath: 'fonts/',
					publicPath: '../fonts/'
			  }
			}]
		  }
	  ]
  },
  plugins: [
		new VueLoaderPlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new ExtractTextPlugin('css/appStyle.css')
	]
}
