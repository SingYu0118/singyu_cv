import { readFile, writeFile } from "node:fs/promises";
import { randomBytes, webcrypto } from "node:crypto";
import process from "node:process";

const [, , sourcePath, destinationPath] = process.argv;
if (!sourcePath || !destinationPath) {
  throw new Error("Usage: node encrypt_cv.mjs <source> <destination>");
}

process.stdout.write("Passphrase: ");
if (process.stdin.isTTY) process.stdin.setRawMode(true);
const passphrase = await new Promise((resolve) => {
  process.stdin.once("data", (chunk) => resolve(chunk.toString("utf8").replace(/[\r\n]+$/, "")));
});
if (process.stdin.isTTY) process.stdin.setRawMode(false);
process.stdout.write("\n");
if (!passphrase) throw new Error("Passphrase is required on stdin");

const salt = randomBytes(16);
const iv = randomBytes(12);
const material = await webcrypto.subtle.importKey(
  "raw",
  new TextEncoder().encode(passphrase),
  "PBKDF2",
  false,
  ["deriveKey"],
);
const key = await webcrypto.subtle.deriveKey(
  { name: "PBKDF2", salt, iterations: 210000, hash: "SHA-256" },
  material,
  { name: "AES-GCM", length: 256 },
  false,
  ["encrypt"],
);
const plain = await readFile(sourcePath);
const encrypted = new Uint8Array(
  await webcrypto.subtle.encrypt({ name: "AES-GCM", iv, tagLength: 128 }, key, plain),
);
const header = new TextEncoder().encode("SYENC001");
await writeFile(destinationPath, Buffer.concat([header, salt, iv, encrypted]));
