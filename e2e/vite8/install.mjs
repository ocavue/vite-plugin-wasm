// We need to copy the dist file manually to let jest to pick the correct
// version of "vite". If mixed versions of "vite" are used, vite v8 will throw
// errors.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function run() {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const dest = path.join(__dirname, "node_modules", "vite-plugin-wasm");
  const root = path.resolve(__dirname, "..", "..");

  if (fs.existsSync(dest)) {
    fs.rmdirSync(dest, { recursive: true });
  }
  fs.mkdirSync(dest, { recursive: true });
  fs.copyFileSync(
    path.join(root, "package.json"),
    path.join(dest, "package.json"),
  );
  copyDirSync(path.join(root, "exports"), path.join(dest, "exports"));
  copyDirSync(path.join(root, "dist"), path.join(dest, "dist"));
}

run();
