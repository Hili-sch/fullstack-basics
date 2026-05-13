const person = {
  name: "Shirli",
  age: 62,
  gender: "Male",
};

console.log(person);

// person.isPension = false
// person["isPension"] = false

let isFemale = person.gender === "Female";
let isAbove62 = person.age >= 62;

let isMale = person.gender === "Male";
let isAbove67 = person.age >= 67;

let isPension = (isFemale && isAbove62) || (isMale && isAbove67);

// console.log("isFemale:", isFemale);
// console.log("isAbove62:", isAbove62);
console.log("isPension:", isPension);
