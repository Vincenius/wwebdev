console.log('test');

require("esbuild")
  .build({
    logLevel: "info",
    entryPoints: ["./.next/standalone/**/*.js"],
    bundle: true,
    outfile: ".next/standalone",
  })
  .catch(() => process.exit(1));