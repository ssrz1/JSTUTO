//function constructor

var john = {
  name: "john",
  yearOfBirth: 1993,
  job: "teacher"
};

var Person = function(name, yearOfBirth, job) {
  (this.name = name),
    (this.yearOfBirth = yearOfBirth),
    (this.job = job),
    (this.calculateAge = function() {
      console.log(2016 - this.yearOfBirth);
    });
};

var john = new Person("john", 1993, "teacher");
var jane = new Person("jane", 1893, "farmer");
var Mark = new Person("Mark", 1990, "jerk");

john.calculateAge();

//now for second part we bring Inheritance to the game.
//for that we will make a function calculateAge to the game.
//we have to add all the methods and properties that we want to inherit into the constructors Prototype property.
//example: calculateAge is a method that we want inherit we do simply
//   Person.prototype.calculateAge = function(){
//     console.log(2016 - this.yearOfBirth);
// }
// and then we will remove this method from constructor method but still other object will have this method through protoype
// we can use it like this Notice that calculateAge function is not defined inside Constructor function
// john.calculateAge();
// jane.calculateAge();
//Mark.calculateAge();
