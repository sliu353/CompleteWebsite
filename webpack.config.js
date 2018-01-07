const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractIndexCSS = new ExtractTextPlugin({ filename: 'bundle.css',  });
const extractGeneralCSS = new ExtractTextPlugin({ filename: 'bundle.css' });

var config = {
    // This is the "main" file which should include all other modules
    entry: {
        index : [
            "./src/js/smoothscroll.js",
            "./src/js/isotope.js",
            "./src/js/nivo-lightbox.min.js",
            "./src/js/jquery.backstretch.min.js",
            "./src/js/wow.min.js",
            "./src/js/jquery.pagepiling.min.js",
            "./src/js/custom.js",
            "./src/js/jquery.vide.min.js"
        ],
        general : [
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
        ] 
        //indexCss : [
        //    "./src/css/animate.min.css",
        //    "./src/css/et-line-font.css",
        //    "./src/css/font-awesome.min.css",
        //    "./src/css/jquery.pagepilling.css",
        //    "./src/css/nivo-lightbox.css",
        //    "./src/css/style.css"
        //],
        //generalCss : [
        //    "./src/about/css/flexslider.css",
        //    "./src/about/css/font-awesome.min.css",
        //    "./src/about/css/jportilio.min.css",
        //    "./src/about/css/jQuery.lightninBox.css",
        //    "./src/about/css/style.css"
        //]
    },
    // Where should the compiled file go?
    output: {
        filename: '[name].js'
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
                    fallback: 'style-loader',
                    use: [ 'css-loader' ]
                })
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, "src/about/css")
                ],
                use: extractGeneralCSS.extract({ // Instance 1
                    fallback: 'style-loader',
                    use: [ 'css-loader' ]
                })
            }
        ]
    }, 
    plugins: [
        extractIndexCSS,
        extractGeneralCSS
    ],
    externals: {
        jquery: 'jQuery'
    }
}

module.exports = config;