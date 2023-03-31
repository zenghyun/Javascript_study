const person1 = {name: 'Max'};
const person2 = {name: 'Manuel'}; 
const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);
// console.log(personData);
// console.log(personData.get(person1));

personData.set(person2, [{date: 'two weeks age', price: 100}]);
// console.log(personData);

for(const entry of personData.entries()){
    console.log(entry);
}