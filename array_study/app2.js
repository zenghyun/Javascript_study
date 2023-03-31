// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// console.log(hobbies);
// hobbies.pop();
// console.log(hobbies);
// hobbies.unshift('Game');
// console.log(hobbies);
// hobbies.shift();
// console.log(hobbies);

// hobbies.splice(1, 0, 'Reading', 'Coding');
// console.log(hobbies);


const testResults = [1, 4.5, 1.5, 10.6, -5, 10];

// const storedResults = testResults.slice(0,2); 
const storedResults = testResults.concat(123); 

testResults.push(3.5);

console.log(storedResults, testResults);
console.log(testResults.indexOf(4.5));
const personData = [ {name:'Max'}, {name:'Manuel'}];
console.log(personData.indexOf({name:'Max'}));

const manuel = personData.find((person,idx,persons) => {
    return person.name = 'Max';
});

manuel.name = 'Anna';

console.log(manuel, personData);

const maxIndex = personData.findIndex((person,idx,persons) => {
    return person.name = 'Max';
})

console.log(maxIndex);