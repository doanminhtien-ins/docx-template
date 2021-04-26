import { resolve } from "path"

export const entry = resolve(__dirname, "src/index.js")
export const output = {
  path: resolve(__dirname, "dist"),
  filename: "index_bundle.js",
  library: "$",
  libraryTarget: "umd",
}
export const module = {
  rules: [
    {
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: "babel-loader",
    },
  ],
}
export const mode = "development"