let name = "Hili";
let age = 33;
let addres = "Radak 3, BB";

const person = {
  name: "Hili",
  age: 33,
  addres: "Radak 3, BB",
};

class Person {
  constructor(name, age, addres) {
    this.name = name;
    this.age = age;
    this.addres = addres;
  }

  log(){
    console.log(`I'm ${this.name} ant I'm ${this.age} years old, ant I'm living in ${this.addres}`);
    
  }
}


const employee = new Person("Smulik", 56, "JLM")
const user = new Person("Juda", 27, "TLV")

employee.city = "Jerusalem"


console.log(employee);

employee.log()
user.log()