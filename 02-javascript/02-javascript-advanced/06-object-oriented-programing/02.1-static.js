class CoffeeKind {
  static waterLevel = 0;
  static temperature = 0;

  constructor(coffeeType, milkType, cups) {
    this.coffeeType = coffeeType;
    this.milkType = milkType;
    this.cups = cups;
  }

  #heatWater() {
    CoffeeKind.temperature = 90;
    console.log("~ Heating water ~");
  }

  #pourWater() {
    CoffeeKind.waterLevel -= this.cups;
    console.log(
      `The coffee type is: ${this.coffeeType} and water level is ${CoffeeKind.waterLevel} and temperature is: ${CoffeeKind.temperature}`,
    );
    CoffeeKind.temperature *= 0.98;
  }

  #fillWater() {
    CoffeeKind.waterLevel = 9;
    console.log("* Water filled *");
  }

  makeCoffee() {
    if (CoffeeKind.waterLevel < 2) {
      this.#fillWater();
    }

    if (CoffeeKind.temperature < 80) {
      this.#heatWater();
    }

    this.#pourWater();
  }
}

const coffeeCapochino = new CoffeeKind("Capochino", "regolar", 2);
const coffeeMocca = new CoffeeKind("Mocca", "regolar", 1);

for (let i = 0; i < 20; i++) {
  coffeeCapochino.makeCoffee();
  console.log("=======================================================================================");
  coffeeMocca.makeCoffee();
  console.log("=======================================================================================");
}
