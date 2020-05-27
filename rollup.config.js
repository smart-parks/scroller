// rollup.config.js
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/Scroller.js",
  output: [
    { file: "index.js", format: "cjs" },
    { file: "index.umd.js", format: "umd", name: "Scroller" }
  ],
  plugins: [
    terser({
      mangle: {
        properties: {
          regex: /__.+/
        }
      }
    }),
  ],
};
