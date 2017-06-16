var path = require("path");

module.exports = {
    entry: {
        taskHandlers: './src/handlers/taskHandlers',
        userHandlers: './src/handlers/userHandlers',
    },
    target: 'node',
    module: {
        loaders : [
            { test: /\.ts(x?)$/, loader: 'ts-loader' }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx', ''],
        root: path.resolve('./src'),
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name]Entry.js'
    },
};