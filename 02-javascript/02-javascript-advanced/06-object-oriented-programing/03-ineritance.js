class User {
  #password;
  constructor(email, name, passord) {
    if (!email.includes("@")) {
      throw "invalid email";
    }
    this.email = email;
    this.name = name;
    this.#password = passord;
  }

  login() {
    console.log(`${this.name} logged`);
  }
}

class Admin extends User {
  _role
  constructor(email, name, passord, deparment) {
    super(email, name, passord);
    this.deparment = deparment;
  }

  readUser(user) {
    console.log(`${user.name} is a user, and its email is ${user.email}`);
  }

  delieteUser(user) {
    console.log(`${this.name} deliete the user ${user.name}`);
  }
}

const ad = new Admin("abc@gmail.com", "adoni", "132ngd8", "logistics");

ad.login();

const user = new User("4aergb2@gjnre.rt", "Hili", "3456789");

ad.readUser(user);

ad.delieteUser(user);

class SuperAdmin extends Admin {
  constructor(email, name, passord) {
    super(email, name, passord);
  }
  
  shutdownSystem() {
    console.log(`${this.name} is shut down the system`);
  }
}

const superAd = new SuperAdmin("dgfdf@fj.com", "shlomo", "54365hgdd")

console.log(superAd);
