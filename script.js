function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Method for Person
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
  // inherit properties
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// inherit methods
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Method for Employee
Employee.prototype.jobGreet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;