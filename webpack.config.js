module.exports = { 
    entry: './src/client.js',
    output: {
        path: __dirname,
        filename: 'index.js',
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000,
    },
    mode: 'development'
}