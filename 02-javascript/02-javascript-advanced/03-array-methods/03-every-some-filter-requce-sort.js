const people = [
  { id: 1, name: "Shimi", isSingle: true },
  { id: 2, name: "Danny", isSingle: true },
  { id: 3, name: "Gaddi", isSingle: false },
];

const areAllSingle = people.every((obj) => obj.isSingle);
const areThereSingle = people.some((obj) => obj.isSingle);
const areThereSimi = people.some((obj) => obj.name === "Shimi");

console.log("areAllSingle", areAllSingle);
console.log("areThereSingle", areThereSingle);
console.log("areThereSimi", areThereSimi);

const numbers = [1, 2, 3];

console.log(numbers.some(num => num === 3));


const singles = people.filter(obj => obj.isSingle)

console.log("singles", singles);

const mareeds = people.filter(obj => !obj.isSingle)

console.log("mareeds", mareeds);


const hasY = people.find(obj => obj.name.includes('y'))

console.log(hasY);
