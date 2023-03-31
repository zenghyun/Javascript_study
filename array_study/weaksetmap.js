let person = {name: 'Max'};
const persons = new WeakSet();
persons.add(person);

// person = null;

console.log(persons);

const personData = new WeakMap(person);
personData.set(person, 'Extra info!');