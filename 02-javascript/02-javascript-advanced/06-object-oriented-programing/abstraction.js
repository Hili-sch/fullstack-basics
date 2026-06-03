class CoffeeKind {
  #waterLevel = 0;
  #temperature = 0;

  constructor(coffeeType, milkType, cups) {
    this.coffeeType = coffeeType;
    this.milkType = milkType;
    this.cups = cups;
  }

  #heatWater() {
    this.#temperature = 90;
    console.log("~ Heating water ~");
  }

  #pourWater(cups) {
    this.#waterLevel -= this.cups;
    console.log(
      `The Water level is: ${this.#waterLevel} cup(s) and water level is ${this.#waterLevel} and temperature is: ${this.#temperature}`,
    );
    this.#temperature *= 0.98;
  }

  #fillWater() {
    this.#waterLevel = 9;
    console.log("* Water filled *");
  }

  makeCoffee() {
    if (this.#waterLevel < 2) {
      this.#fillWater();
    }

    if (this.#temperature < 80) {
      this.#heatWater();
    }

    this.#pourWater();
  }
}

const coffee = new CoffeeKind("Capochino", "regolar", 2);
// const coffee = new CoffeeKind("Mocca", "regolar", 2);

for (let i = 0; i < 20; i++) {
  coffee.makeCoffee();
  console.log("=======================================================================================");
}
