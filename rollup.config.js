// rollup.config.js
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/Scroller.js",
  output: [
    { file: "index.js", format: "umd", name: "Scroller", sourcemap: true },
    { file: "index.es.js", format: "es", sourcemap: true },
  ],
  plugins: [
    terser({
      mangle: {
        properties: {
          regex: /__.+/,
        },
      },
    }),
  ],
};
