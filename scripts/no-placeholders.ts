import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const RUNTIME_DIRS = ["src/app", "src/components", "src/data", "public"];
const BANNED_PATTERNS = [
  /\bREPLACE_ME\b/i,
  /\bexample\.com\b/i,
  /\bcoming soon\b/i,
  /\bTODO\b/i
];

const TEXT_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".json",
  ".css",
  ".svg",
  ".html",
  ".txt"
]);

// Allowlist hook for files that are intentionally non-runtime or known-safe.
const ALLOWLIST_PATHS = new Set<string>([]);

const issues: string[] = [];

const normalize = (filePath: string) => filePath.split(path.sep).join("/");

const isBinaryBuffer = (buffer: Buffer) => {
  const sampleLength = Math.min(buffer.length, 1000);
  for (let i = 0; i < sampleLength; i += 1) {
    if (buffer[i] === 0) {
      return true;
    }
  }
  return false;
};

async function walk(relativeDir: string): Promise<string[]> {
  const absoluteDir = path.join(ROOT, relativeDir);
  const entries = await readdir(absoluteDir, { withFileTypes: true });
  const filePaths: string[] = [];

  for (const entry of entries) {
    const nextRelative = path.join(relativeDir, entry.name);
    if (entry.isDirectory()) {
      filePaths.push(...(await walk(nextRelative)));
      continue;
    }
    filePaths.push(nextRelative);
  }

  return filePaths;
}

async function inspectFile(relativePath: string) {
  const normalizedPath = normalize(relativePath);
  if (ALLOWLIST_PATHS.has(normalizedPath)) {
    return;
  }

  const extension = path.extname(relativePath).toLowerCase();
  if (!TEXT_EXTENSIONS.has(extension)) {
    return;
  }

  const absolutePath = path.join(ROOT, relativePath);
  const fileInfo = await stat(absolutePath);
  if (!fileInfo.isFile()) {
    return;
  }

  const buffer = await readFile(absolutePath);
  if (isBinaryBuffer(buffer)) {
    return;
  }

  const contents = buffer.toString("utf8");
  const lines = contents.split(/\r?\n/);

  lines.forEach((line, index) => {
    BANNED_PATTERNS.forEach((pattern) => {
      if (pattern.test(line)) {
        issues.push(`${normalizedPath}:${index + 1}: ${line.trim()}`);
      }
    });
  });
}

async function run() {
  for (const dir of RUNTIME_DIRS) {
    const files = await walk(dir);
    for (const file of files) {
      await inspectFile(file);
    }
  }

  if (issues.length > 0) {
    console.error("Placeholder guard failed. Remove banned runtime strings:");
    issues.forEach((issue) => console.error(`- ${issue}`));
    process.exitCode = 1;
    return;
  }

  console.log("Placeholder guard passed.");
}

run().catch((error) => {
  console.error("Placeholder guard crashed:", error);
  process.exitCode = 1;
});

