require("dotenv-flow").config();
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

const Paths = {
    DIST: path.join(__dirname, "/dist")
};

const APP_ENV = Object.keys(process.env).filter(key => key.startsWith("APP_"))
    .reduce((obj, key) => ({...obj, [`process.env.${key}`]: JSON.stringify(process.env[key])}), {});

module.exports = (env, argv) => {
    const IS_PROD = argv.mode === "production";
    return {
        mode: argv.mode,
        entry: {
            main: "./src/index.tsx",
        },
        output: {
            path: Paths.DIST,
            filename: IS_PROD ? "[name].[contenthash].js" : "[name].js",
            chunkFilename: IS_PROD ? "[name].[contenthash].js" : "[name].js",
            publicPath: "/",
        },
        resolve: {
            extensions: [".js", ".ts", ".jsx", ".tsx"],
            alias: {
                "react-dom": "@hot-loader/react-dom",
                "@": "./src",
            },
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
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "ts-loader"
                    }
                },
                {
                    enforce: "pre",
                    test: /\.js$/,
                    loader: "source-map-loader"
                },
                {
                    test: /\.css$/,
                    use: IS_PROD ?
                        [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"] :
                        ["style-loader", "css-loader", "postcss-loader"],
                },
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            }),
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css"
            }),
            new webpack.DefinePlugin({
                ...APP_ENV,
            }),
        ],
        devServer: {
            hot: true,
            host: "0.0.0.0",
            port: process.env.WEB_DEV_SERVER_PORT,
            historyApiFallback: true,
        }
    }
};
