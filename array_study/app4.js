const prices = [10.99, 5.99, 3.99, 6.59];

const sum = prices.reduce((pre,cur) => pre+cur, 0);
console.log(sum);

const data = `new york:10.54:2023`;

const transformedData = data.split(':');
transformedData[1] = +transformedData[1];
console.log("transformedData:", transformedData);

const nameFragments = [ 'Lee', 'zenghyun'];
const name = nameFragments.join(' ');
console.log("name:", name);

const copyNameFragments = [...nameFragments];
nameFragments.unshift('Mr');
console.log("nameFragments:", nameFragments);
console.log("copyNameFragments:", copyNameFragments);

console.log(Math.min(...prices));

const persons = [ {name:'Max', age: 30, hobbies: []}, {name:'Manuel', age: 31, hobbies: []}];

const copiedPersons = persons.map( person => ({ 
    name:person.name, 
    age: person.age,
    hobbies: [...person.hobbies]
}));

persons.push({name: 'Anna', age: 28});
persons[0].age = 31; 

console.log(persons, copiedPersons);

const nameData = [ "Lee", "Zenghyun", "Mr", 27];
const [ firstName, lastName, ...otherInformation ] = nameData;
console.log(firstName,lastName, otherInformation);