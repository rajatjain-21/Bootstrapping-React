module.exports = { 
    entry: ['babel-polyfill', './src/client.js'],
    output: {
        path: __dirname,
        filename: 'index.js',
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    mode: 'development'
}