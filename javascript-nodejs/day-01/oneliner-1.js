// console.log([...require("node:fs").readFileSync("input", { encoding: "utf-8" })].reduce((floor, char) => (char === "(" ? floor + 1 : floor - 1), 0));
import("node:fs").then(module => module.default).then(fs => [...fs.readFileSync("input", { encoding: "utf-8" })].reduce((floor, char) => (char === "(" ? floor + 1 : floor - 1), 0)).then(console.log);