const path = require('path');
const { NODE_ENV, FILE_NAME } = process.env;
const filename = `${FILE_NAME}${NODE_ENV === 'production' ? '.min' : ''}.js`;
module.exports = {
    mode: NODE_ENV || 'development',
    entry: [
        './src/dist/index.js',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename,
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: {
                    loader: "css-loader"
                }
            }
        ]
    }
};