

module.exports = {
    mode: "production",
    devtool: "inline-source-map",
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "main.js"
    },
    devServer: {
        contentBase: "./dist",
        // open: true
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }

}