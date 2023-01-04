// node 경로 쉽게 하는 함수(?)
const path = require('path');
// const { webpack } = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
module.exports = {
    name: 'wordrelay-setting',
    mode: 'development',
    devtool: 'eval',
    
    resolve: {
        extensions: ['.js', '.jsx']
    },// 확장자를 찾아줌
    
    entry: {
        app: ['./client'],
    }, // 입력

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [['@babel/preset-env', {
                    targets: {
                        browsers: ['> 1% in KR'],
                    },
                }], '@babel/preset-react',
            ],
            plugins: [
                '@babel/plugin-proposal-class-properties',
                'react-refresh/babel',
            ],
            },
        }],
    }, // 모듈 적용
    plugins: [
        new RefreshWebpackPlugin()
    ],
    output: {
        path: path.join(__dirname, 'dist'), // dist 폴더가 됨 __dirname: 현재 폴더
        filename: 'app.js',
        publicPath: '/dist/',
    }, // 출력
    devServer: {
        devMiddleware: {publicPath: '/dist'},
        static: { directory: path.resolve(__dirname) },
        hot: true
    },
};