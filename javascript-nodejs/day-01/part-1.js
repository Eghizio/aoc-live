// const fs = require("node:fs");
import fs from "node:fs";

const input = fs.readFileSync("input", { encoding: "utf-8" });

// console.log(input);

let floor = 0;

for (const char of input) {
  if (char === "(") {
    floor++;
  } else if (char === ")") {
    floor--;
  }
}

console.log("Part 1:", floor);
