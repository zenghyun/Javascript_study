const ids = new Set([1,2,3]);
ids.add(2);
ids.add(4);
if(ids.has(1)){
    ids.delete(1);
}
// console.log(ids.has(2));

for(const entry of ids.entries()){
    console.log(entry[0]);
}