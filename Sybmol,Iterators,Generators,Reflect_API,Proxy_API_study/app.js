// Library land
const uid = Symbol();
console.log(uid);

const user = {
  // id : 'p1',
  [uid]: "p1",
  name: "Zenghyun",
  age: 30,
  [Symbol.toStringTag]: "User",
};

user[uid] = "p3";

// app land => Using the library

user.id = "p2"; // this should not be possible!!

console.log(user[Symbol()]);

console.log(Symbol() === Symbol());

console.log(user[uid]);

console.log(user);

console.log(user.toString());

const company = {
  curEmployee: 0,
  employees: ["Zenghyun", "Max", "Anna"],
//   next() {
//     if (this.curEmployee >= this.employees.length) {
//       return { value: this.curEmployee, done: true };
//     }
//     const returnValue = {
//       value: this.employees[this.curEmployee],
//       done: false,
//     };
//     this.curEmployee++;
//     return returnValue;
//   },
  [Symbol.iterator]: function* employeeGenerator() {
    // let employee = company.next();

    // while (!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }
    let currentEmployee = 0;
    while(currentEmployee < this.employees.length) {
        yield this.employees[currentEmployee];
        currentEmployee++;
    }
  },
};

// let employee = company.next();

// while(!employee.done) {
//     console.log(employee.value);
//     employee = company.next();
// }

for (const employee of company){
    console.log(employee);
}

console.log([...company]);
// const it =  company.getEmployee();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


/// ---

const course = {
    title: 'JavaScript - The Complete Guide'
};

console.log(course.title);

Reflect.setPrototypeOf(course, {
    toString() {
        return this.title;
    }
});

// Reflect.deleteProperty(course, 'title');

// Object.deleteProperty(course, 'title');

// delete course.title;

console.log(course.toString());

const courseHandler = {
    get( obj, propertyName ) {
        console.log(propertyName);
        return obj[propertyName];
    }
};

const pCourse = new Proxy(course, courseHandler);
console.log(pCourse.title, pCourse.length);