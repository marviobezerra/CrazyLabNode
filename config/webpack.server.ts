import * as webpack from "webpack";
import PathHelper from "./webpack.helper";

const ServerConfig: webpack.Configuration = {
    cache: true,
    devtool: "source-map",
    target: "node",
    performance: {
        hints: false		
    },
    entry: {
        "main": PathHelper.GetPath(["src", "Main.ts"])
    },
    output: {
        path: PathHelper.GetPath(["dist"]),
        filename: "[name].js",
        chunkFilename: "[name].[id].chunk.js",
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
				test: /\.js$/,
				use: "strip-sourcemap",
				exclude: /node_modules/
			},
            {
                test: /\.ts$/,
                use: [
                    "awesome-typescript-loader",
                    "source-map-loader"
                ],
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
    ]
};

export default ServerConfig;