class Shape {
  _color;
  #createdAt;

  constructor(color) {
    this._color = color;
    this.#createdAt = new Date().toISOString();
  }

  area() {
    throw new Error(`${this.constructor.name} must implement area()`);
  }

  getCreatedAt() {
    return this.#createdAt;
  }

  describe() {
    console.log(
      `${this.constructor.name} | color ${this._color} | area ${this.area}`,
    );
  }
}

class Circle extends Shape {
  #radius;

  constructor(color, radius) {
    super(color);
    this.#radius = radius;
  }
  area() {
    return Math.PI * this.#radius ** 2;
  }
}

class Rectangie extends Shape {
    #whdth
    #heiht
    
    constructor(color, whdth, heiht) {
        super(color);
        this.#whdth = whdth
        this.#heiht = heiht
    }

    area(){
        return this.#heiht * this.#whdth
    }
}

class Triangular extends Shape {
    #whdth
    #heiht
    
    constructor(color, whdth, heiht) {
        super(color);
        this.#whdth = whdth
        this.#heiht = heiht
    }

    area(){
        return this.#heiht * this.#whdth / 2
    }
}

const circle = new Circle("Red", 12)
const rectangie = new Rectangie("Green", 24,  12)
const triangular = new Triangular("blue",23, 13)

const arr = [circle, rectangie, triangular]

for (const shape of arr) {
    console.log(shape.describe());
    const a = shape.area()
    console.log(a);
    
}