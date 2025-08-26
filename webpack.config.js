import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
	entry: "./src/App.jsx",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "ckeditor.js",
		library: "Editor",
		libraryTarget: "umd",
		clean: true,
	},
	mode: "production",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
};
