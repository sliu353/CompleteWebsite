const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractIndexCSS = new ExtractTextPlugin('IndexCSS');
const extractGeneralCSS = new ExtractTextPlugin('GeneralCSS');

var config = {
    entry: {
        index: [
            "./src/js/smoothscroll.js",
            "./src/js/isotope.js",
            "./src/js/nivo-lightbox.min.js",
            "./src/js/jquery.backstretch.min.js",
            "./src/js/wow.min.js",
            "./src/js/jquery.pagepiling.min.js",
            "./src/js/custom.js",
            "./src/js/jquery.vide.min.js"
        ],
        general: [
            "./src/about/js/backgroundCheck.js",
            "./src/about/js/counterup.min.js",
            "./src/about/js/custom.js",
            "./src/about/js/easing.js",
            "./src/about/js/jportilio.min.js",
            "./src/about/js/jq-clipthru.min.js",
            "./src/about/js/jquery.flexslider.js",
            "./src/about/js/jQuery.lightninBox.js",
            "./src/about/js/move-top.js",
            "./src/about/js/responsiveslides.min.js",
            "./src/about/js/SmoothScroll.min.js",
            "./src/about/js/waypoints.min.js"
        ],
        admin: './adminSrc/main.js'
    },
    output: {
        filename: 'src/[name].js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            WOW: './src/js/wow.min.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, "src/css")
                ],
                use: extractIndexCSS.extract({ // Instance 1
                    use: ['css-loader']
                })
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, "src/about/css")
                ],
                use: extractGeneralCSS.extract({
                    use: ["css-loader"]
                })
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'vue-loader'
                }
            }
        ]
    },
    plugins: [
        extractIndexCSS,
        extractGeneralCSS,
        new webpack.ProvidePlugin({
            "$": 'jquery',
            "jQuery": 'jquery'
        })
    ],
    externals: {
        jquery: 'jQuery'
    }
}

module.exports = config;