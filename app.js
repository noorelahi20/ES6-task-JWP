// Question 1: Global Scope
// Declare variables in global scope
// var globalVar = "I am a var";
// let globalLet = "I am a let";
// const globalConst = "I am a const";

// All are accessible globally in non-strict mode
// console.log(window.globalVar);  // "I am a var" in browsers
// console.log(window.globalLet);  // undefined
// console.log(window.globalConst); // undefined

// Question 2: Function Scope
// function testFunctionScope() {
//     var functionVar = "I am a function var";
//     let functionLet = "I am a function let";
//     const functionConst = "I am a function const";
//     console.log(functionVar);   // Accessible inside the function
//     console.log(functionLet);   // Accessible inside the function
//     console.log(functionConst); // Accessible inside the function
// }

// testFunctionScope();

// console.log(typeof functionVar);
// console.log(typeof functionLet);
// console.log(typeof functionConst);

// Question 3: Block Scope
// if (true) {
//     var blockVar = "I am a block var";
//     let blockLet = "I am a block let";
//     const blockConst = "I am a block const";
//     console.log(blockVar);   // I am a block var
//     console.log(blockLet);   // I am a block let
//     console.log(blockConst); // I am a block const
// }

// console.log(blockVar);
// console.log(typeof blockLet);
// console.log(typeof blockConst);

// // Question 4: Hoisting with var
// console.log(hoistedVar);
// var hoistedVar = "I am hoisted";

// // Question 5: Hoisting with let and const
// try {
//     console.log(hoistedLet)
// } catch (error) {
//     console.error(error);
// }
// let hoistedLet = "I am not hoisted";

// try {
//     console.log(hoistedConst);
// } catch (error) {
//     console.error(error);
// }
// const hoistedConst = "I am not hoisted";

// // Question 6: Re-declaration
// // Using var
// var redeclareVar = "First declaration";
// var redeclareVar = "Second declaration";
// console.log(redeclareVar); // "Second declaration"

// let redeclareLet = "First declaration";
// try {
//     let redeclareLet = "Second declaration"; // SyntaxError
// } catch (error) {
//     console.error(error);
// }

// // Using const
// const redeclareConst = "First declaration";
// try {
//     const redeclareConst = "Second declaration";
// } catch (error) {
//     console.error(error);
// }

// Question 7: Re-assignment

// var reassignVar = "Initial value";
// reassignVar = "New value";
// console.log(reassignVar);

// let reassignLet = "Initial value";
// reassignLet = "New value";
// console.log(reassignLet);

// const reassignConst = "Initial value";
// try {
//     reassignConst = "New value";
// } catch (error) {
//     console.error(error);
// }

// try {
//     console.log(tdzLet);
// } catch (error) {
//     console.error(error);
// }
// let tdzLet = "I am in TDZ";

// try {
//     console.log(tdzConst);
// } catch (error) {
//     console.error(error);
// }
// const tdzConst = "I am in TDZ";

// Question 9: When to use var, let, and const
// var compatibleVar = "Older compatibility";

// let loopCounter = 0;
// for (let i = 0; i < 5; i++) {
//     loopCounter++;
// }
// console.log(loopCounter); // 5

// const pi = 3.14159;
// console.log(pi);

// // Question 10: String Interpolation
// const firstName = "John";
// const lastName = "Doe";
// const fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// // Question 11: Multi-line Strings
// const address = `123 Main Street
// Springfield
// USA`;
// console.log(address);

// // Question 12: Simple Expressions
// const num1 = 10;
// const num2 = 20;
// const sumString = `The sum of ${num1} and ${num2} is ${num1 + num2}`;
// console.log(sumString);

// // Question 13: Function Calls
// function multiply(a, b) {
//     return a * b;
// }
// const productString = `The product of 5 and 6 is ${multiply(5, 6)}`;
// console.log(productString);

// // Question 14: Tagged Template
// function tag(strings, ...values) {
//     console.log(strings, values);
//     return strings[0] + values.join('');
// }
// const taggedResult = tag`Hello ${"world"}!`;
// console.log(taggedResult);

// // Question 15: Conditional Logic
// const hour = new Date().getHours();
// const greeting = `${hour < 12 ? "Good Morning" : "Good Afternoon"}`;
// console.log(greeting);

// // Question 16: Loops within Template Literals
// const shoppingList = ["Apples", "Bananas", "Carrots"];
// const htmlList = `<ul>${shoppingList.map(item => `<li>${item}</li>`).join('')}</ul>`;
// console.log(htmlList);

// // Question 17: Escaping Backticks
// const backtickString = `This is a backtick: \``;
// console.log(backtickString);

// // Question 18: Nested Template Literals
// const table = `
// <table>
//   ${["Row1", "Row2"].map(row => `
//     <tr>
//       <td>${row}</td>
//     </tr>
//   `).join('')}
// </table>
// `;
// console.log(table);

// // Question 19: Simple Condition
// const age = 20;
// const canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote);

// // Question 20: Even or Odd
// const number = 7;
// const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
// console.log(evenOrOdd);

// // Question 21: Grade Evaluation
// const score = 85;
// const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
// console.log(grade);

// // Question 22: Login Status
// const isLoggedIn = true;
// const statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
// console.log(statusMessage);

// // Question 23: Discount Eligibility
// const isMember = true;
// const purchaseAmount = 150;
// const discount = isMember && purchaseAmount > 100 ? 0.1 * purchaseAmount : 0;
// console.log(discount);

// // Question 24: Determine Max Value
// function maxValue(a, b) {
//     return a > b ? a : b;
// }
// console.log(maxValue(10, 20));

// // Question 25: Greeting Message
// function greet(name) {
//     return name ? `Hello, ${name}!` : "Hello, guest!";
// }
// console.log(greet("Alice"));
// console.log(greet(""));

// // Question 26: Mapping Values
// const numbers = [1, 2, 3, 4, 5];
// const mappedNumbers = numbers.map(num => num % 2 === 0 ? num * 2 : num * 3);
// console.log(mappedNumbers);

// // Question 27: Filtering Strings
// const strings = ["apple", "pear", "banana", "kiwi"];
// const filteredStrings = strings.filter(str => str.length > 3);
// console.log(filteredStrings);

// // Question 28: Copying an Array
// const originalArray = [1, 2, 3];
// const copiedArray = [...originalArray];
// console.log(originalArray, copiedArray);

// // Question 29: Merging Arrays
// const array1 = [1, 2];
// const array2 = [3, 4];
// const mergedArray = [...array1, ...array2];
// console.log(mergedArray);

// // Question 30: Adding Elements to an Array
// const baseNumbers = [2, 4, 6];
// const updatedNumbers = [0, ...baseNumbers, 8];
// console.log(updatedNumbers);

// // Question 31: Copying an Object
// const originalObject = { name: "Alice", age: 25 };
// const copiedObject = { ...originalObject };
// console.log(originalObject, copiedObject);

// // Question 32: Merging Objects
// const object1 = { a: 1, b: 2 };
// const object2 = { b: 3, c: 4 };
// const mergedObject = { ...object1, ...object2 };
// console.log(mergedObject);

// // Question 33: Updating Object Properties
// const user = { name: "Bob", age: 30, email: "bob@example.com" };
// const updatedUser = { ...user, email: "newemail@example.com", address: "123 Main St" };
// console.log(updatedUser);

// // Question 34: Passing Array Elements as Arguments
// function sum(a, b, c) {
//     return a + b + c;
// }
// const nums = [10, 20, 30];
// console.log(sum(...nums));

// // Question 35: Combining Multiple Arrays
// function combineArrays(...arrays) {
//     return arrays.flat();
// }
// console.log(combineArrays([1, 2], [3, 4], [5, 6]));

// // Question 36: Rest Parameter with Spread Operator
// function multiplyByFactor(factor, ...nums) {
//     return nums.map(num => num * factor);
// }
// console.log(multiplyByFactor(2, 1, 2, 3));

// // Question 37: Spread Operator with Nested Structures
// const nestedArray = [[1, 2], [3, 4]];
// const shallowCopy = [...nestedArray];
// shallowCopy[0][0] = 99;
// console.log(nestedArray, shallowCopy);

// // Question 38: Sum Function with Rest Operator
// function sumAll(...args) {
//     return args.reduce((sum, current) => sum + current, 0);
// }
// console.log(sumAll(1, 2, 3, 4));

// // Question 39: Average Function
// function average(...args) {
//     return args.length ? sumAll(...args) / args.length : 0;
// }
// console.log(average(2, 4, 6, 8));

// // Question 40: First and Rest Destructuring
// const [firstNumber, ...remainingNumbers] = [10, 20, 30, 40];
// console.log(firstNumber, remainingNumbers);

// // Question 41: Skip and Rest
// const [, , ...remainingColors] = ["red", "green", "blue", "yellow"];
// console.log(remainingColors);

// // Question 42: Basic Object Destructuring
// const person = { name: "Alice", age: 25, email: "alice@example.com" };
// const { name, email, ...otherDetails } = person;
// console.log(name, email, otherDetails);

// // Question 43: Nested Object Destructuring
// const student = { id: 1, grades: [90, 80], info: { age: 20, major: "CS" } };
// const { id, info: { age, major }, ...restDetails } = student;
// console.log(id, age, major, restDetails);

// // Question 44: Filtering Even Numbers
// function filterEven(...args) {
//     return args.filter(num => num % 2 === 0);
// }
// console.log(filterEven(1, 2, 3, 4, 5, 6));

// // Question 45: Combining and Sorting Arrays
// function combineAndSort(...arrays) {
//     return [].concat(...arrays).sort((a, b) => a - b);
// }
// console.log(combineAndSort([3, 1], [4, 2]));

// // Question 46: Array Destructuring
// const fruits = ["apple", "banana", "cherry"];
// const [firstFruit, secondFruit, thirdFruit] = fruits;
// console.log(firstFruit, secondFruit, thirdFruit);

// // Question 47: Skipping Elements
// const colors = ["red", "green", "blue", "yellow"];
// const [primaryColor, , tertiaryColor] = colors;
// console.log(primaryColor, tertiaryColor);

// // Question 48: Renaming Variables with Destructuring
// const car = { make: "Toyota", model: "Corolla", year: 2020 };
// const { make: carMake, model: carModel, year: carYear } = car;
// console.log(carMake, carModel, carYear);

// // Question 49: Default Values with Destructuring
// const settings = { theme: "dark" };
// const { theme, language = "English" } = settings;
// console.log(theme, language);

// // Question 50: Nested Array Destructuring
// const nestedNums = [[1, 2], [3, 4], [5, 6]];
// const [[a, b], [c, d], [e, f]] = nestedNums;
// console.log(a, b, c, d, e, f);

// // Question 51: Object within an Object
// const profile = { username: "johndoe", details: { email: "john@example.com", address: "123 Main St" } };
// const { username, details: { email, address } } = profile;
// console.log(username, email, address);

// // Question 52: Mix of Arrays and Objects
// const data = { id: 1, info: [{ name: "Alice" }, { age: 25 }] };
// const { id, info: [{ name }, { age }] } = data;
// console.log(id, name, age);

// // Question 53: Array Parameters
// function printCoordinates([x, y]) {
//     console.log(`X: ${x}, Y: ${y}`);
// }
// printCoordinates([10, 20]);

// // Question 54: Object Parameters
// function displayUser({ name, age }) {
//     console.log(`Name: ${name}, Age: ${age}`);
// }
// displayUser({ name: "Alice", age: 25 });

// // Question 55: List Property Names
// const book = { title: "1984", author: "George Orwell", year: 1949 };
// console.log(Object.keys(book));

// // Question 56: Count Properties
// const studentDetails = { name: "John", age: 20, grade: "A", school: "XYZ" };
// console.log(Object.keys(studentDetails).length);

// // Question 57: Iterate Over Keys
// const product = { name: "Laptop", price: 1000, category: "Electronics" };
// Object.keys(product).forEach(key => {
//     console.log(`${key}: ${product[key]}`);
// });

// // Question 58: List Property Values
// const movie = { title: "Inception", director: "Christopher Nolan", year: 2010, genre: "Sci-Fi" };
// console.log(Object.values(movie));

// // Question 59: Sum Values
// const scores = { math: 90, science: 80, english: 85 };
// const totalScore = Object.values(scores).reduce((total, score) => total + score, 0);
// console.log(totalScore);

// // Question 60: Iterate Over Values
// const userDetails = { username: "alice123", email: "alice@example.com", location: "NYC" };
// Object.values(userDetails).forEach(value => {
//     console.log(value);
// });

// // Question 61: List Entries
// const carDetails = { make: "Tesla", model: "Model S", year: 2022 };
// console.log(Object.entries(carDetails));

// // Question 62: Convert Object to Array
// const personDetails = { firstName: "John", lastName: "Doe", age: 30 };
// console.log(Object.entries(personDetails));

// // Question 63: Iterate Over Entries
// const appSettings = { theme: "dark", notifications: true, privacy: "high" };
// Object.entries(appSettings).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });

// // Question 64: Filter Keys
// const inventory = { apples: 5, bananas: 12, oranges: 20, grapes: 8 };
// const filteredKeys = Object.keys(inventory).filter(key => inventory[key] > 10);
// console.log(filteredKeys);

// // Question 65: Transform Values
// const temperatures = { morning: 20, afternoon: 25, evening: 15 };
// const temperaturesFahrenheit = Object.fromEntries(
//     Object.entries(temperatures).map(([time, temp]) => [time, temp * 1.8 + 32])
// );
// console.log(temperaturesFahrenheit);

// // Question 66: Key-Value Swap
// const roles = { admin: "1", editor: "2", viewer: "3" };
// const swappedRoles = Object.fromEntries(
//     Object.entries(roles).map(([key, value]) => [value, key])
// );
// console.log(swappedRoles);

// // Question 67: Filter and Map
// const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filteredAndMapped = numArray.filter(num => num % 2 === 0).map(num => num ** 2);
// console.log(filteredAndMapped);

// // Question 68: Sort and Reduce
// const words = ["apple", "banana", "cherry", "date"];
// const sortedReduced = words.sort().reduce((acc, word) => acc + word + " ", "").trim();
// console.log(sortedReduced);

// // Question 69: Simple Callback
// function greetCallback(name, callback) {
//     callback(`Hello, ${name}!`);
// }
// greetCallback("Alice", message => console.log(message));

// // Question 70: Asynchronous Callback
// function fetchData(callback) {
//     setTimeout(() => {
//         callback("Data fetched successfully");
//     }, 1000);
// }
// fetchData(data => console.log(data));

// // Question 71: Simple Arrow Function
// const add = (a, b) => a + b;
// console.log(add(3, 5));

// // Question 72: Arrow Function with Array Methods
// const squaredNumbers = [1, 2, 3, 4, 5].map(num => num ** 2);
// console.log(squaredNumbers);

// // Question 73: Variable Scope
// function outerFunction() {
//     let x = 10;
//     function innerFunction() {
//         console.log(x);
//     }
//     innerFunction();
// }
// outerFunction();

// // Question 74: Closure
// function createCounter() {
//     let counter = 0;
//     return function () {
//         counter++;
//         return counter;
//     };
// }
// const counter1 = createCounter();
// console.log(counter1());
// console.log(counter1());

// // Question 75: Default Parameters
// function greet(name, message = "Hello") {
//     console.log(`${message}, ${name}!`);
// }
// greet("Alice");
// greet("Alice", "Hi");

// // Question 76: Calculate Area
// function calculateArea(width = 10, height = 5) {
//     return width * height;
// }
// console.log(calculateArea());
// console.log(calculateArea(20, 10));

// // Question 77: Square Numbers
// const numbersList = [1, 2, 3, 4, 5];
// const squaredList = numbersList.map(num => num ** 2);
// console.log(squaredList);

// // Question 78: Convert to Uppercase
// const wordsList = ["apple", "banana", "cherry"];
// const uppercaseWords = wordsList.map(word => word.toUpperCase());
// console.log(uppercaseWords);

// // Question 79: Filter Even Numbers
// const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(num => num % 2 === 0);
// console.log(evenNumbers);

// // Question 80: Filter Long Words
// const longWords = ["apple", "banana", "cherry", "date"].filter(word => word.length > 5);
// console.log(longWords);

// // Question 81: Log Numbers
// [1, 2, 3, 4, 5].forEach(num => console.log(num));

// // Question 82: Log Word Lengths
// ["apple", "banana", "cherry"].forEach(word => console.log(word.length));

// // Question 83: Sum of Numbers
// const sumResult = [1, 2, 3, 4, 5].reduce((acc, num) => acc + num, 0);
// console.log(sumResult);

// // Question 84: Concatenate Strings
// const concatenatedString = ["Hello", "world", "this", "is", "JavaScript"].reduce(
//     (acc, word) => acc + " " + word
// );
// console.log(concatenatedString);

// // Question 85: Check for Even Number
// const hasEven = [1, 3, 5, 7, 8].some(num => num % 2 === 0);
// console.log(hasEven);

// // Question 86: Check for Long Word
// const hasLongWord = ["apple", "banana", "cherry", "date"].some(word => word.length > 5);
// console.log(hasLongWord);

// // Question 87: Check All Even Numbers
// const allEven = [2, 4, 6, 8, 10].every(num => num % 2 === 0);
// console.log(allEven);

// // Question 88: Check All Long Words
// const allLongWords = ["elephant", "giraffe", "hippopotamus"].every(word => word.length > 5);
// console.log(allLongWords);

// // Question 89: Find First Even Number
// const firstEven = [1, 3, 5, 7, 8].find(num => num % 2 === 0);
// console.log(firstEven);

// // Question 90: Find Long Word
// const firstLongWord = ["apple", "banana", "cherry", "date"].find(word => word.length > 5);
// console.log(firstLongWord);

// // Question 91: Find Index of First Even Number
// const firstEvenIndex = [1, 3, 5, 7, 8].findIndex(num => num % 2 === 0);
// console.log(firstEvenIndex);

// // Question 92: Find Index of Long Word
// const firstLongWordIndex = ["apple", "banana", "cherry", "date"].findIndex(word => word.length > 5);
// console.log(firstLongWordIndex);

// // Question 93: Simple Promise
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// delay(2000).then(() => console.log("Hello, world!"));

// // Question 94: Promise Chain
// function fetchDataChain() {
//     return Promise.resolve({ data: "Sample data" });
// }
// fetchDataChain().then(data => console.log(data));

// // Question 95: Error Handling with Promises
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         const user = { name: "Alice" };
//         user.age ? resolve(user) : reject("Age is missing");
//     });
// }
// fetchUserData()
//     .then(user => console.log(user))
//     .catch(error => console.error(error));

// // Question 96: Simulate Network Request
// function getWeather() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true;
//             success ? resolve("Sunny") : reject("Error fetching weather");
//         }, 1000);
//     });
// }
// getWeather()
//     .then(weather => console.log(weather))
//     .catch(error => console.error(error));

// // Question 97: Simple Async Function
// async function sayHelloAsync() {
//     await delay(2000);
//     console.log("Hello, world!");
// }
// sayHelloAsync();

// // Question 98: Fetch Data with Async/Await
// async function getUserData() {
//     try {
//         const user = await fetchUserData();
//         console.log(user);
//     } catch (error) {
//         console.error(error);
//     }
// }
// getUserData();

// // Question 99: Fetch and Process Data
// async function getUserAndPosts() {
//     try {
//         const user = await fetchUserData();
//         const posts = await Promise.resolve(["Post 1", "Post 2"]);
//         console.log(user, posts);
//     } catch (error) {
//         console.error(error);
//     }
// }
// getUserAndPosts();

// // Question 100: Simulate API Calls
// async function simulateAPICalls() {
//     try {
//         const results = await Promise.all([
//             delay(500).then(() => "API Call 1"),
//             delay(1000).then(() => "API Call 2"),
//             delay(1500).then(() => "API Call 3"),
//         ]);
//         console.log(results);
//     } catch (error) {
//         console.error(error);
//     }
// }
// simulateAPICalls();
