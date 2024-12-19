class Vehicle {
  drive() {
    console.log('drive wruuuum');
  }

  breakDown() {
    console.log('break down shhhhhhh');
  }
}

class Car extends Vehicle{
  constructor({ doors = 3, state = 'brand new', color = 'silver' }) {
    super();

    this.doors = doors;
    this.state = state;
    this.color = color;
  }
}

class Truck extends Vehicle {
  constructor({ state = 'used', wheelSize = 'large', color = 'blue' }) {
    super();

    this.state = state;
    this.color = color;
    this.wheelSize = wheelSize;
  }
}

class VehicleFactory {
  constructor() {
    this.vehicleClass = Car;
  }

  createVehicle(options) {
    const { type, ...restOptions } = options;

    switch(type) {
      case 'car':
        this.vehicleClass = Car;
        break;
      case 'truck':
        this.vehicleClass = Truck;
        break;
      default:
        break;
    }

    return new this.vehicleClass(restOptions);
  }
}

const vehicleFactory = new VehicleFactory();

const car = vehicleFactory.createVehicle({
  type: 'car',
  color: 'yellow',
  doors: 6,
});

const truck = vehicleFactory.createVehicle({
  type: 'truck',
  state: 'brand new',
  color: 'red',
});

console.log(car instanceof Car, car);
console.log(truck instanceof Truck, truck);
console.log('-------------------------------------------------------------');

class TruckFactory extends VehicleFactory {
  constructor() {
    super();
    this.vehicleClass = Truck;
  }
}

const truckFactory = new TruckFactory();

const truck2 = truckFactory.createVehicle({
  color: 'black',
  wheelSize: 'biggest',
});

console.log(truck2 instanceof Truck, truck2);
console.log('-------------------------------------------------------------');

let instanceFactory;
class AbstractVehicleFactory {
  constructor() {
    if (!instanceFactory) {
      this.types = {};
      instanceFactory = this;
    }

    return instanceFactory;
  }

  getVehicle(type, customizations) {
    const Vehicle = this.types[type];
    return Vehicle ? new Vehicle(customizations) : null;
  }

  registerVehicle(type, Vehicle) {
    const proto = Vehicle.prototype;

    if (proto.drive && proto.breakDown) {
      this.types[type] = Vehicle;
    }

    return false;
  }
}

const abstractVehicleFactory = new AbstractVehicleFactory();

abstractVehicleFactory.registerVehicle('car', Car);
abstractVehicleFactory.registerVehicle('truck', Truck);

const carAbstract = abstractVehicleFactory.getVehicle('car', {
  doors: 3,
  color: 'pink',
});

const truckAbstract = abstractVehicleFactory.getVehicle('truck', {
  wheelSize: 'medium',
  color: 'white',
});

console.log(carAbstract instanceof Car, carAbstract);
console.log(truckAbstract instanceof Truck, truckAbstract);
console.log('-------------------------------------------------------------');
