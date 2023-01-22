import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript"; // typescript plugin
import dts from "rollup-plugin-dts"; // Used to get .d.ts files in node modules when the package is used to get types
import terser from "@rollup/plugin-terser"; // Used for optimization and smaller builds
import peerDepsExternal from "rollup-plugin-peer-deps-external"; // dont know, for peer dependencies, not exactly sure

import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs", // common js bundle format
        sourcemap: true, // source map is used to debug, if there is any errors/warnings
      },
      {
        file: packageJson.module,
        format: "esm", // es module bundle format
        sourcemap: true, // source map is used to debug, if there is any errors/warnings
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
