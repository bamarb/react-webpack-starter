const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //This must also be an absolute path (prefix ./ is necessary)
    entry: './src/index.js',
    output: {
        //must be an absolute path
        path: path.join(__dirname,'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })]
}