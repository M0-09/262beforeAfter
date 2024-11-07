// BEFORE VALUES
const beforeString = "Hello, World!";

const beforeNumber = 100;

// MODIFICATIONS- Number

// decrement by 2
let afterDecrement = beforeNumber - 2;
console.log("before: ", beforeNumber);
console.log("after decrement: ", afterDecrement);
console.log("\n");

// convert to string
afterToString = beforeNumber.toString();
console.log("before: ", beforeNumber);
console.log("after converting to string: ", afterToString);
console.log("\n");

// check if finite
let checkIfFinite = isFinite(beforeNumber);
console.log("before: ", beforeNumber);
console.log("finite?: ", checkIfFinite);
console.log("\n");

// check if integer
let checkIfInteger = Number.isInteger(beforeNumber);
console.log("before: ", beforeNumber);
console.log("if integer?: ", checkIfInteger);
console.log("\n");

// check if Not a number
let checkIfNaN = isNaN(beforeNumber);
console.log("before: ", beforeNumber);
console.log("after checking for NaN: ", checkIfNaN);
console.log("\n");

// MODIFICATIONS- String

// find length
let stringLength = beforeString.length;
console.log("before: ", beforeString);
console.log("String length: ", stringLength);
console.log("\n");

// replace parts of string
let newString = beforeString.replace("Hello", "Goodbye");
console.log("before: ", beforeString);
console.log("after replacing: ", newString);
console.log("\n");

// access the first character
let firstChar = beforeString[0];
console.log("before: ", beforeString);
console.log("first character: ", firstChar);
console.log("\n");

// access the last character
let lastChar = beforeString[beforeString.length - 1];
console.log("before: ", beforeString);
console.log("last character: ", lastChar);
console.log("\n");

// check start
let checkStart = beforeString.startsWith("world");
console.log("before: ", beforeString);
console.log(
  'after checking start for the first word to be "world": ',
  checkStart
);
console.log("\n");
