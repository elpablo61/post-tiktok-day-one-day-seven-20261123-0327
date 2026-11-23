// Day one, day seven — video entry hand-in program.
//
// The entry is a TikTok video, not a computed result, so this program has
// one small job: carry the video's address from the repository into the
// grader's output directory, byte for byte.
//
// It reads VIDEO.json from the bot directory and writes the same bytes to
// the output directory. It uses only the Node standard library, touches no
// network, reads no clock and looks at no file outside the repository, so
// two runs always produce the same output.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const source = join(botDir, "VIDEO.json");
const target = join(outDir, "VIDEO.json");

// Read first so a malformed hand-in fails loudly instead of silently
// copying a broken file through to the grader.
const raw = readFileSync(source, "utf8");
const parsed: unknown = JSON.parse(raw);
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string" ||
  ((parsed as { url: string }).url.length === 0)
) {
  throw new Error("VIDEO.json must be an object with a non-empty string url");
}

const videoUrl = (parsed as { url: string }).url;
let host = "";
try {
  host = new URL(videoUrl).hostname;
} catch {
  throw new Error(`VIDEO.json url is not a valid URL: ${videoUrl}`);
}
if (host !== "www.tiktok.com" && !host.endsWith(".tiktok.com")) {
  throw new Error(`VIDEO.json url must point at TikTok, got host: ${host}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
