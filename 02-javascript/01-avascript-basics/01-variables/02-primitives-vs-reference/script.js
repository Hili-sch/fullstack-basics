let a = 12
let b = a
b = b + 1
console.log("a", a);
console.log("b", b);


const obj = {
    name: "Hili",
    age: 33,
    isSingle: true
}

const personAge = obj.age
console.log("personAge:", personAge);

const personName = obj.name
console.log("personName:", personName);

console.log(obj["isSingle"]);

const blablabla = "name"

console.log(obj[blablabla]);

