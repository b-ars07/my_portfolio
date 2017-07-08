var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, '../source'),
    devtool: 'source-map',
    entry: {
        app: ['./js/app.js', './js/water.js'],
        //common:['./bower_components/jquery/dist/jquery.min.js']
    },
    output: {
        //publicPath: '',
        filename: 'assets/js/[name].bundle.js',
        path: __dirname + "/build"
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //   name: "common",
        //   filename: "assets/scripts/common.js",
        //   minChunks: 2
        // }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        new webpack.ProvidePlugin({
            $: path.resolve(__dirname, '../frontend/node_modules/jquery'),
            jQuery: path.resolve(__dirname, '../frontend/node_modules/jquery'),
        })
        //new FaviconsWebpackPlugin('./favicon.png')
    ]
};