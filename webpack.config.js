var
    path = require("path"),
    webpack = require("webpack"),
    APP = __dirname + '/app';

//console.log(path.join(__dirname, "bower_components"));

module.exports = {
    context: __dirname + "/app", //APP
    entry: './scripts/bootstrap.js',
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
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
            //{
            //    test: /\.js$/,
            //    loader: 'jshint',
            //    exclude: /node_modules|bower_components/
            //},
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
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ]
};