var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



var config = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, "dist"), 
        filename: "index_bundle.js",
        publicPath: '/'
    },
    module: {
        rules: [
          { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
          { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
          { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
          { test: /\.(ttf|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'app/index.html'
        })
    ]   
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    );
}

if (process.env.NODE_ENV === 'visualize') {
    config.plugins.push(
        new BundleAnalyzerPlugin()
    );
}

module.exports = config;