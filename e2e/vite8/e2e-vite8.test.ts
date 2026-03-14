import { runTests } from "../e2e";

runTests(8, async () => ({
  // @ts-ignore: this doesn't work in old node.js version
  vite: await import("./node_modules/vite/dist/node/index.js"),
  // @ts-ignore: this doesn't work in old node.js version
  vitePluginLegacy: (await import("@vitejs/plugin-legacy")).default
}));
