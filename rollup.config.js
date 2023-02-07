import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import scss from "rollup-plugin-scss";
import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const name = "rollup-typescript-sass-package-template";

export default {
  input: "./src/rollup-typescript-sass-package-template.ts",

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en/#external
  external: [],

  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({
      extensions,
      babelHelpers: "bundled",
      include: ["src/**/*"],
    }),
    scss(),
  ],

  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
    {
      file: 'rollup-typescript-sass-package-template.js',
      format: 'esm',
      // Removes the hash from the asset filename
      assetFileNames: '[name][extname]'
    },
    {
      file: pkg.browser,
      format: "iife",
      name,

      // https://rollupjs.org/guide/en/#outputglobals
      globals: {},
    },
  ],
};
