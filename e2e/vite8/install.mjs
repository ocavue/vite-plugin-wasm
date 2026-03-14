// We need to copy the dist file manually to let jest to pick the correct
// version of "vite". If mixed versions of "vite" are used, vite v8 will throw
// errors.
async function run() {
  const fs = await import("node:fs");
  const path = await import("node:path");
  const { fileURLToPath } = await import("node:url");

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const dest = path.join(__dirname, "node_modules", "vite-plugin-wasm");
  const root = path.resolve(__dirname, "..", "..");

  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(dest, { recursive: true });
  fs.cpSync(path.join(root, "package.json"), path.join(dest, "package.json"));
  fs.cpSync(path.join(root, "exports"), path.join(dest, "exports"), { recursive: true });
  fs.cpSync(path.join(root, "dist"), path.join(dest, "dist"), { recursive: true });
}

async function main() {
  const [major] = process.versions.node.split(".").map(Number);
  if (major < 20) {
    console.log("Skipping installation for Node.js versions below 20");
    return;
  }
  await run();
}

main();
