const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const image = require("@rollup/plugin-image");
const packageJson = require("./package.json");
const postcss = require("rollup-plugin-postcss");
const babel = require("@rollup/plugin-babel");

module.exports = [
  {
    input: "src/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/env", "@babel/preset-react"],
      }),
      postcss({
        extract: false,
        modules: true,
        use: ["sass"],
      }),
      commonjs(),
      image(),
    ],
  },
];
