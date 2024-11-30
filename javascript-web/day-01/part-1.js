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
