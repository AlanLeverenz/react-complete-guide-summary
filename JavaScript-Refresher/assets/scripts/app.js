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

// const hobbies = ['sports', 'cooking', 'reading'];
// hobbies.push('working');
// console.log(hobbies);

// const index = hobbies.findIndex((item) === "cooking");
// console.log(item);

// const editedMaps = hobbies.map((item) => item + "!")
// console.log(editedMaps);

// const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);

// const userNameData = ['max', 'leverenz'];
// const firstName = userNameData[0];
// const lastName = userNameData[1];

// const [firstName, lastName] = ['max', 'leverenz'];
// console.log(firstName);
// console.log(lastName);

// const user = {
//   name: 'max',
//   age: 34
// };
// const name = user.name;
// const age = user.age;

// const hobbies = ['sports', 'cooking'];const { name: userName, age } = {
//   name: 'max',
//   age: 34
// };

// console.log(userName);
// console.log(age);

// const hobbies = ['sports', 'cooking'];

// const user = {
//   name: 'max',
//   age: 34
// };

// const newHobbies = ['Reading'];
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendedUser = {
//   isAdmin: true,
//   ...user
// }

// console.log(extendedUser);

const password = prompt('Your password');

if (password == "Hello") {
  console.log("Hello works");
} else if (password == "hello") {
  console.log("hello works");
} else {
  console.log("access not granted.")
}

const hobbies = ['sports', 'cooking']

for (const hobby of hobbies) {
  console.log(hobby);
}