// BEFORE VALUES
const beforeString = "Hello, World!";

const beforeNumber = 100;

// MODIFICATIONS- Number

// decrement by 2
let afterDecrement = beforeNumber - 2;
console.log("after: ", afterDecrement);

// convert to string
afterToString = beforeNumber.toString();
console.log("after: ", afterToString);

// check if finite
let checkIfFinite = isFinite(beforeNumber);
console.log("after: ", checkIfFinite);

// check if integer
let checkIfInteger = Number.isInteger(beforeNumber);
console.log("after: ", checkIfInteger);

// MODIFICATIONS- String

// find length
let stringLength = beforeString.length;
console.log("after: ", stringLength);

// replace parts of string
let newString = beforeString.replace("Hello", "Goodbye");
console.log("after: ", newString);
