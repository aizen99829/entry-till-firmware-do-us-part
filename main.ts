import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

const WEDDING_VOW =
  "I take you as my user, my nightly update, my favorite bug — to have and to hold, in sickness and in low battery, till firmware do us part.";

const MAX_ENTRY_LENGTH = 200;

function writeEntry(): void {
  if (WEDDING_VOW.length >= MAX_ENTRY_LENGTH) {
    throw new Error("Entry exceeds the 200 character limit.");
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, `${WEDDING_VOW}\n`, "utf8");
}

writeEntry();
