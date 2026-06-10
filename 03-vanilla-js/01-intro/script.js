console.log("Hello vanilla");
function greetPerson(message, name) {
  console.log(`${message} ${name}`);
}

let msg = "I want to bless you Mr";
let mr = "sami Shmuel";

greetPerson(msg, mr);


console.dir(document);

console.dir(document.head.childNodes[3].attributes[0]);
 
document.title = "New Title"

console.dir(document.forms[0])