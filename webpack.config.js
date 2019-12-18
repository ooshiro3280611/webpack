

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
            },
            {
                test: /\.(git|png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 50000,
                            name: './img/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    }

}