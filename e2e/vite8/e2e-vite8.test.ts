import { runTests } from "../e2e";

runTests(
  8,
  async (): Promise<{
    vite: typeof import("./node_modules/vite/dist/node/index.js");
    vitePluginLegacy: (typeof import("./node_modules/@vitejs/plugin-legacy/dist/index.js"))["default"];
    vitePluginTopLevelAwait?: undefined;
    vitePluginWasm?: (typeof import("../../src/index.js"))["default"];
  }> => ({
    // @ts-ignore: this doesn't work since we're using CommonJS module in tsconfig.json
    vite: await import("vite"),
    // @ts-ignore: this doesn't work since we're using CommonJS module in tsconfig.json
    vitePluginLegacy: (await import("@vitejs/plugin-legacy")).default,

    vitePluginWasm: (await import("vite-plugin-wasm")).default
  })
);
