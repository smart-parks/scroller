// rollup.config.js
import compiler from "@ampproject/rollup-plugin-closure-compiler";

export default {
  input: "src/Scroller.js",
  output: {
    file: "index.js",
    format: "umd",
    name: "Scroller"
  },
  plugins: [
    compiler({
      language_in: 'ES6',
      language_out: 'ES5',
      compilation_level: "SIMPLE",
      env: "BROWSER"
    })
  ]
};
