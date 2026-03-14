import { runTests } from "../e2e.mjs";

runTests(8, async () => ({
  vite: await import("vite"),
  vitePluginLegacy: (await import("@vitejs/plugin-legacy")).default,
  vitePluginWasm: (await import("vite-plugin-wasm")).default
}));
