// import { apiKey } from './util.js';
// import apiKey from './util.js';
// import { abc as content } from './util.js';
// import * as util from './util.js';
// console.log(util.abc);
// const userMessage = "Hello World"
// console.log(userMessage + " " + userMessage);
// console.log(10 / 5);
// if (10 === 10) {
//   console.log("I'm Right!")
// }

function createGreeting(userName, message = "Hello") {
  // console.log(userName);
  // console.log(message);
  return "Hi, I am " + userName + ". " + message;
}

const greeting = createGreeting('Alan');
console.log(greeting);

