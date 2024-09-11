import { esbuildPlugin } from "@web/dev-server-esbuild";
import { fromRollup } from "@web/dev-server-rollup";
import rollupCommonjs from "@rollup/plugin-commonjs";

// https://modern-web.dev/guides/dev-server/using-plugins/#commonjs
// We need to wrap jiff into a esm module
const commonjs = fromRollup(rollupCommonjs);

export default {
  nodeResolve: true,
  files: ["src/**/*.spec.ts"],
  plugins: [
    commonjs({
      include: [
        "**/node_modules/jiff/**/*",
      ],
    }),
    esbuildPlugin({ ts: true }),
  ],
};
