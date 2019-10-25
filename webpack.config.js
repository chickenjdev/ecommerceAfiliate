const path = require('path');

const config = {
    entry: './src/background.js',
    output: {
        filename: 'background.js',
        path: path.resolve(__dirname, "./app/background")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [
                    {
                        loader: 'babel-loader',
                        
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|ttf|svg|jpg|jpeg)$/,
                loader: ['url-loader']
            }

        ]
    }

}
module.exports = config;