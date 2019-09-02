const path = require('path')

module.exports = {
    mode: 'production',
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
                    presets: ['@babel/preset-env']
                }
            }
        ]
    }
}