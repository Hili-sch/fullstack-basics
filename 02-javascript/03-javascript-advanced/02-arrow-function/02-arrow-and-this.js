const person = {
  name: "Pini",
  age: 23,
  hasChildren: true,
  login() {
    console.log(this);
  },
  delay() {
    setTimeout(ann.bind(this), 4000);
  },
};

function ann() {
  console.log(this);
}

person.login();
person.delay();
