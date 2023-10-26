function deepFreeze(obj) {
    const props = Object.getOwnPropertyNames(obj); 

    props.forEach(name => {
        const prop = obj[name];
        if(typeof prop === "object" && typeof prop !== null) {
            deepFreeze(prop);
        }
    })

    return Object.freeze(obj);
}

const user = {
    name: "Lee",
    address: {
        city: "Seoul",
    }
}

deepFreeze(user);

user.name = "Kim";
user.address.city = "Busan";

console.log(user);

