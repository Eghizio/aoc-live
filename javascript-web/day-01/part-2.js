// console.log(input);

let floor = 0;
let position = 1;

for (const char of input) {
  if (char === "(") {
    floor++;
  } else if (char === ")") {
    floor--;
  }

  if (floor === -1) break;

  position++;
}

console.log("Part 2:", position);
