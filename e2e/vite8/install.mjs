import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dest = path.join(__dirname, "node_modules", "vite-plugin-wasm");
const root = path.resolve(__dirname, "..", "..");

fs.rmSync(dest, { recursive: true, force: true });
fs.mkdirSync(dest, { recursive: true });
fs.cpSync(path.join(root, "package.json"), path.join(dest, "package.json"));
fs.cpSync(path.join(root, "exports"), path.join(dest, "exports"), { recursive: true });
fs.cpSync(path.join(root, "dist"), path.join(dest, "dist"), { recursive: true });
