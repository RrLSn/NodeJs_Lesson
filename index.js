import getPosts, { postLength } from "./postController.js";
// console.log(global);
// console.log(process);

//ES module
// import { getPosts } from "./postController.js";

//import for option3 without {}

console.log(getPosts());
console.log(`Posts Length: ${postLength}`);

// Using default Import/export
// const { generateNumber, celciusToFahrenheit } = require("./utils");
// console.log(`Random Number: ${generateNumber()}`);

// console.log(`Celcius To Fahrenheit: ${celciusToFahrenheit(67)}`);
