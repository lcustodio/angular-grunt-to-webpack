var
    path = require("path"),
    //webpack = require("webpack"),
    APP = __dirname + '/app';

module.exports = {
    context: APP,
    entry: {
        main: ['./scripts/bootstrap.js'],
        dashboard: ['.scripts/dashboard.js']
    },
    output: {
        path: APP + '/build',  //__dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        loaders: [
            //{
            //    test: /\.scss$/,
            //    loader: 'style!css!sass'
            //},
            {
                test: /\.scss$/,
                loader: "style!css!sass?outputStyle=expanded&" +
                    "includePaths[]=" +
                        (path.resolve(__dirname, "./bower_components")) + "&" +
                    "includePaths[]=" +
                        (path.resolve(__dirname, "./bower_components/bootstrap-sass-official/assets/")) + "&" +
                    "includePaths[]=" +
                        (path.resolve(__dirname, "./node_modules"))
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.js$/,
                loader: 'ng-annotate!jshint',
                exclude: /node_modules|bower_components/
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
                loader : 'file-loader?name=res/[name].[ext]?[hash]'
            },
            {
                test: /\.html/,
                loader: 'raw'
            },
            {
                test: /\.json/,
                loader: 'json'
            }
        ]
    }
    ,
    resolve: {
        root: [APP, path.join(__dirname, "bower_components")]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js')
    //    new webpack.ResolverPlugin(
    //        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    //    )
    ]
};