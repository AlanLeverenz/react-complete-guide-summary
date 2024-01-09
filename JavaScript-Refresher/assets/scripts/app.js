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

// function createGreeting(userName, message = "Hello") {
//   // console.log(userName);
//   // console.log(message);
//   return "Hi, I am " + userName + ". " + message;
// }

// const greeting = createGreeting('Alan');
// console.log(greeting);

// const user = {
//   name: 'Max',
//   age: 34,
//   greet() {
//     console.log('Hello');
//     console.log(this.age)
//   }
// };

// console.log(user.name);
// user.greet();

// // class name begins with capitol letter
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hi!");
//   }
// }

// const user1 = new User("Manual", 35);
// console.log(user1);
// user1.greet();


// export default (userName, message) => {
//   console.log('Hello');
//   return userName + message;
// }

const hobbies = ['sports', 'cooking', 'reading'];
hobbies.push('working');
console.log(hobbies);

// const index = hobbies.findIndex((item) === "cooking");
// console.log(item);

const editedHobbies = hobbies.map((item) =>
  item + "!");
console.log(editedHobbies);

