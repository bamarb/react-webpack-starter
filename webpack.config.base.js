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
                    presets: [['@babel/preset-env', {
                        targets: [
                            'last 2 versions',
                            'not dead',
                            'not < 2%',
                            'not ie 11'
                        ],
                        corejs: 2,
                        useBuiltIns: 'entry'
                    }], '@babel/preset-react'],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-syntax-dynamic-import'
                    ]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })]
}