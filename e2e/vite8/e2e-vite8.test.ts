import { runTests } from "../e2e";

runTests(8, async () => ({
  // @ts-ignore: this doesn't work since we're using CommonJS module in tsconfig.json
  vite: await import("./node_modules/vite/dist/node/index.js"),
  // @ts-ignore: this doesn't work since we're using CommonJS module in tsconfig.json
  vitePluginLegacy: (await import("./vite8/node_modules/@vitejs/plugin-legacy/dist/index.js")).default
}));
