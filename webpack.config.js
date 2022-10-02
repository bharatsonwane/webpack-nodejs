const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

const devEnv = "development"
const mode = process.env.NODE_ENV || devEnv;

module.exports = {
    // mode defaults to 'production' if not set
    mode: mode,

    target: 'node',

    // entry not required if using `src/index.js` default
    entry: {
        app: path.resolve(__dirname, 'src', 'index.js'),
    },

    // output not required if using `dist/main.js` default
    output: {
        path: path.resolve(__dirname, mode === devEnv ? 'dist' : 'build'),
        filename: 'main.js',
    },

    externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // without additional settings, this will reference .babelrc
                loader: 'babel-loader',
            },
        ],
    },

    plugins: [
        new NodemonPlugin({
            nodeArgs: '--inspect=0.0.0.0:7777',
        }),
    ],

    devtool: 'inline-source-map',
};
