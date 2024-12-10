class VehiclePrototype {
  constructor(model) {
    this.model = model;
  }

  getModel() {
    console.log(`The model of this vehicle is ${this.model}`);
  }

  clone() {
    throw new Error('clone method is not implemented');
  }
}

class Vehicle extends VehiclePrototype {
  constructor(model) {
    super(model);
  }

  clone() {
    return new Vehicle(this.model);
  }
}

const car = new Vehicle('Porche 911');
const carClone = car.clone();

car.getModel();
carClone.getModel();
