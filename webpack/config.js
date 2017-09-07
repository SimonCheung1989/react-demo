import webpack from 'webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import AddHeaderPlugin from './plugin/AddHeaderPlugin';
import AddFooterPlugin from './plugin/AddFooterPlugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
    devtool: 'eval-source-map', //just for test env
    entry: {
        main:  __dirname + "/../src/index.js",
    },
    output: {
      path: __dirname + "/../build",
      filename: "[name]-[hash].js"
    },
    devServer: {
		port: 3000,
		open: true,
    	contentBase: __dirname + "/../build",
        historyApiFallback: true,
        inline: true
	},
	module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            }
        ]
	},
	plugins: [
		new webpack.BannerPlugin('版权所有，翻版必究'),
		new ProgressBarPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new AddHeaderPlugin({options: true}),
        new AddFooterPlugin({ops: false}),
        new HtmlWebpackPlugin({
            title: 'react-demo',
            inject: 'body',
            chunks: ["main"],
            template: __dirname + '/../src/index.ejs'
        })
    ]
};

export default config;