console.log('test');

require("esbuild")
  .build({
    logLevel: "info",
    entryPoints: ["src/index.js"],
    bundle: true,
    outfile: "www/main.js",
  })
  .catch(() => process.exit(1));