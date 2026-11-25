import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// make-the-ai-judge-laugh — one office joke, one line, under 200 chars.
// Entry (74 chars): Our boss calls the open-plan office "collaborative"
// because he has a door.
// v2: replaced the v1 meetings-about-deadlines joke after round 1 ranked it
// 1075 of 1852 (judge win rate ~47.96%) — that premise is the most common
// office-joke trope; this one is sharper: a concrete image (the boss's
// door) with a surprise twist on corporate "collaboration" talk.
// Deterministic: the same line every run, no randomness, no network.
const ENTRY_LINE =
  'Our boss calls the open-plan office "collaborative" because he has a door.';

// Guard: the entry must stay a single line under 200 characters.
if (ENTRY_LINE.length >= 200 || ENTRY_LINE.includes("\n")) {
  throw new Error("entry line must be one line under 200 characters");
}

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE + "\n", "utf8");
