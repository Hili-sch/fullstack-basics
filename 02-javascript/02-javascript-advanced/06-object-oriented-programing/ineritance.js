class User {
  #password;
  constructor(email, name, passord) {
    this.email = email;
    this.name = name;
    this.#password = passord;
  }

  login() {
    console.log(`${this.name} logged`);
  }
}

class Admin extends User {
    
    constructor(email, name, passord, deparment) {
        super(email, name, passord);
        this.deparment = deparment
    }
}

const ad = new Admin("a@gmail.com", "adoni", "132ngd8", "logistics")

ad.login()