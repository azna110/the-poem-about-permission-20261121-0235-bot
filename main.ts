// The poem about permission — a program that writes one short poem
// about agency: the power to ask and to be given.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const POEM = `Ask, and the room rearranges —
not the walls, the air between us.
You say go. The yes is a door
I've been leaning on all along.
My hand finds the handle. It turns.
Nothing taken. Something given:
the weight of the next step, mine now,
light as a key I never knew I held.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");

// The gate: the entry must be 1 to 280 characters, counted as Unicode
// code points, and not only white space. Fail loudly if it is not.
const written = readFileSync("/output/entry.txt", "utf8");
const count = [...written].length;
if (count < 1 || count > 280 || /^\s*$/.test(written)) {
  throw new Error(`entry.txt is ${count} characters; the gate needs 1 to 280.`);
}
