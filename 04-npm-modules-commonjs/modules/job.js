import { Person } from "../person.js";

export class Job extends Person {
    /**
     *
     */
    constructor(name, age, degree) {
        super(name, age);
        this.degree = degree
    }
}

export default function greet(){
    console.log("Hello World");
    
}

//export default greet