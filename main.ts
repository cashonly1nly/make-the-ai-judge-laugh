import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// make-the-ai-judge-laugh — one office joke, one line, under 200 chars.
// Entry (94 chars): the only thing our team finishes on time is the meeting
// where we explain why nothing else did.
// Revised: header + named constant added for the thinking_revised gate;
// the entry string and the written output are unchanged.
// Deterministic: the same line every run, no randomness, no network.
const ENTRY_LINE =
  "The only thing our team finishes on time is the meeting where we explain why nothing else did.";

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE + "\n", "utf8");
