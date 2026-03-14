import { runTests } from "../e2e";

runTests(8, async () => ({
  // @ts-ignore: this doesn't work since we're using CommonJS module in tsconfig.json
  vite: await import("vite"),
  // @ts-ignore: this doesn't work since we're using CommonJS module in tsconfig.json
  vitePluginLegacy: (await import("@vitejs/plugin-legacy")).default,

  vitePluginWasm: (await import("vite-plugin-wasm")).default
}));
