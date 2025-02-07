export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/my-library.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/my-library.esm.js",
      format: "esm",
    },
  ],
};
