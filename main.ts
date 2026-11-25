import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Honest Appliance Error — washing machine, unbalanced load.
// Revised line: the "I do not negotiate" twist is the joke, and the closing
// instruction ("redistribute... press start") keeps it plausibly a machine
// message, so the laugh comes from the truth of the fault.
const LINE =
  "ERROR E07: Unbalanced load. One sock has taken the drum hostage and I do not negotiate. Redistribute the laundry and press start.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE + "\n");
