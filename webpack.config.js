const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        "dist/background/": "./src/background/main.ts",
        "dist/content_scripts/": "./src/content_scripts/main.ts",
    },
    output: {
        path: __dirname,
        filename: "[name]bundle.js",
    },
    module: {
        rules: [
            {
                // 拡張子 .ts の場合
                test: /\.ts$/,
                // TypeScript をコンパイルする
                use: "ts-loader",
            },
        ],
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
        extensions: [".ts"],
    },
    plugins: [
        new CopyPlugin([
            {
                context: "./src/",
                from: "icons",
                to: "dist/icons",
            },
            {
                context: "./src/",
                from: "manifest.json",
                to: "dist/manifest.json",
            },
        ]),
    ],
};
