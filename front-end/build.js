const config = {
  entryPoints: ["front-end/games/index.ts"],
  bundle: true,
  outdir: "public/javascripts",
  // minify: true,
  watch: true,
};

if (process.env.NODE_ENV === "development") {
  config.sourcemap = true;
  config.watch = {
    onRebuild(error, result) {
      if (error) console.error("watch build failed:", error);
      else console.log("watch build succeeded:", result);
    },
  };
}

require("esbuild")
  .build(config)
  .catch(() => process.exit(1));
