import { runTests } from "../e2e";

runTests(8, async () => ({
  vite: await import("vite"),
  // @ts-expect-error: @vitejs/plugin-legacy v8.0.0 doesn't have type export
  vitePluginLegacy: (await import("@vitejs/plugin-legacy")).default,
  vitePluginTopLevelAwait: (await import("vite-plugin-top-level-await")).default
}));
