const colors = ["red", "green", "blue"];

const r = colors[0];
const g = colors[1];
const b = colors[2];

console.log(r, g, b);

const [r1, g1, b1] = colors;

console.log(r1, g1, b1);


const person = {
    name: "Pini",
    gender: "Male"
}



const name = person["name"]
const gnder = person.gender

const { gender1, name1} = person