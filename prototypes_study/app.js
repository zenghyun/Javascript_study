class AgedPerson {
    printAge() {
        console.log(this.age);
    }
}

class Person extends AgedPerson{
    name = 'Zenghyun';

    constructor() {
        super();
        this.age = 30;
    }

    greet() {
        console.log(`Hi I am ${this.name} and I am ${this.age} years old.`);
    }
}

// function Person() {
//   this.age = 30;
//   this.name = "Zenghyun";
// }

// Person.prototype.greet = function() {
//     console.log(`Hi I am ${this.name} and I am ${this.age} years old.`);
// }

// Person.prototype = {
//     printAge() {
//         console.log(this.age);
//     }
// };

// Person.describe = function () {
//     console.log('Creating persons...');
// };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// console.dir(Person);

// const person = new Person();

// person.greet();
// console.log(person);
// console.log(person.__proto__);

// person.printAge();

const course = { 
    title: 'The JavaScript - The Complete Guide',
    rating: 5
};

console.log(course.__proto__);

Object.setPrototypeOf(course, {
    // ...Object.getPrototypeOf(course),    
    printRating : function() {
        console.log(`${this.rating}/5`);
    }
});

course.printRating();
