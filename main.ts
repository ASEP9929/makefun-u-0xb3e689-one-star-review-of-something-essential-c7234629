// One-star review of sleep: a deadpan complaint against an everyday
// essential that cannot be fixed. Writes exactly one line to
// /output/entry.txt (UTF-8, 1-160 chars, no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. Sleep charges eight hours a night, deletes the dreams, and still delivers me tired every morning.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
