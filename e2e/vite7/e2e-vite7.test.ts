import { runTests } from "../e2e";

runTests(7, async () => ({
  vite: await import("vite"),
  // @ts-ignore: this doesn't work since we're using CommonJS module in tsconfig.json
  vitePluginLegacy: (await import("@vitejs/plugin-legacy/")).default,
  vitePluginTopLevelAwait: (await import("vite-plugin-top-level-await")).default
}));
