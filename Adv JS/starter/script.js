// //function constructor

// var john = {
//   name: "john",
//   yearOfBirth: 1993,
//   job: "teacher"
// };

// var Person = function(name, yearOfBirth, job) {
//   (this.name = name),
//     (this.yearOfBirth = yearOfBirth),
//     (this.job = job),
//     (this.calculateAge = function() {
//       console.log(2016 - this.yearOfBirth);
//     });
// };

// var john = new Person("john", 1993, "teacher");
// var jane = new Person("jane", 1893, "farmer");
// var Mark = new Person("Mark", 1990, "jerk");

// john.calculateAge();

// //now for second part we bring Inheritance to the game.
// //for that we will make a function calculateAge to the game.
// //we have to add all the methods and properties that we want to inherit into the constructors Prototype property.
// //example: calculateAge is a method that we want inherit we do simply
// //   Person.prototype.calculateAge = function(){
// //     console.log(2016 - this.yearOfBirth);
// // }
// // and then we will remove this method from constructor method but still other object will have this method through protoype
// // we can use it like this Notice that calculateAge function is not defined inside Constructor function
// // john.calculateAge();
// // jane.calculateAge();
// //Mark.calculateAge();

//Primitive vs Objects
// So we can change primitive as much as want ant and it will not effect the outcome
//but in case of object it will effect the outcome since it works on PASS BY REFERNCE

//Primitive
// var a = 23;
// var b = a;

// a = 46;
// console.log(a);
// console.log(b);

// //Objects
// var obj1 = {
//   name: "Sajjad",
//   age: 26
// };
// var obj2 = obj1;
// obj1.age = 30;

// console.log(obj1.age);
// console.log(obj2.age);

// FUNCTIONS
// Lecture: Passing function as arguments.

var years = [1993, 1992, 1996, 2002, 2000];

//Genereric Array
//which loops over Input array
//and than we give fuction which calculate something  based on each element of the array
// function arrayCalculator(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// //Now this function is call callBack function it will oly be use once and it will be an argument for another function.
// function calculateAge(el) {
//   return 2018 - el;
// }
// //another example of callBack
// function isFullAge(el) {
//   return el >= 18;
// }

// function maxHeartRate(el) {
//   return 206.9 - 0.67 * el;
// }

// var ages = arrayCalculator(years, calculateAge);
// var fullAges = arrayCalculator(ages, isFullAge);
// var rates = arrayCalculator(ages, maxHeartRate);

// console.log(ages);
// console.log(fullAges);
// console.log(rates);

// //FUNCTIONS RETURNING FUNCTIONS

// //programs that create differnt interview questions for differnt jobs

// function interviewQuestion(job) {
//   if (job === "Designer") {
//     return function(name) {
//       console.log(name + ", tell me more about UX design?");
//     };
//   } else if (job === "Teacher") {
//     return function(name) {
//       console.log("what subject do you teach?" + name);
//     };
//   }
// }

// //since we are returning a function we have to store in some variable.

// // var teacherQues = interviewQuestion("teacher");
// // teacherQues("Sajjad");
// //Alternatively we can also do something like
// interviewQuestion("teacher")("Sajjad");
// var designerQues = interviewQuestion("Designer");
// designerQues("Syed");

// IIFE (immediately invoked function expresion)

//Closures
//Lets call(run) our generated function with input 3
//Since A function is an Instance of an Object type. so it behaves like any other OBJECT.
//-> We can store Function in a variable.

function instrunctionGenerator() {
  function multiplyBy2(num) {
    return num * 2;
  }
  return multiplyBy2;
}

let generatedFunc = instrunctionGenerator();

let result = generatedFunc(3);

console.log(result);
