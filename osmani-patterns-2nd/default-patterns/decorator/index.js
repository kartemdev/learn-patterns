class Vehicle {
  constructor(type) {
    this.type = type || 'car';
    this.model = 'default';
    this.color = 'silver';
  }
}

const catTruck = new Vehicle('truck');

catTruck.setModel = function(modelName) { this.model = modelName };
catTruck.setColor = function(colorName) { this.color = colorName };

catTruck.setModel('CAT');
catTruck.setColor('yellow');
console.log(catTruck);

const truck = new Vehicle('truck');
console.log(truck);

console.log('---------------------------------------------------------');

class MacBook {
  constructor() {
    this.cost = 1000;
    this.screenSize = 13;
  }

  getCost() {
    return this.cost;
  }

  getScreenSize() {
    return this.screenSize;
  }
}

class RAMDecorator extends MacBook {
  constructor(macBook) {
    super();
    this.macBook = macBook;
  }

  getCost() {
    return this.macBook.getCost() + 120;
  }
}

class MemoryDecorator extends MacBook {
  constructor(macBook) {
    super();
    this.macBook = macBook;
  }

  getCost() {
    return this.macBook.getCost() + 200;
  }
}

class ScreenSizeDecorator extends MacBook {
  constructor(macBook) {
    super();
    this.macBook = macBook;
  }

  getCost() {
    return this.macBook.getCost() + 400;
  }

  getScreenSize() {
    return this.macBook.getScreenSize() + 2;
  }
}

let macBook = new MacBook();

macBook = new RAMDecorator(macBook);
macBook = new MemoryDecorator(macBook);

console.log('cost ---->', macBook.getCost());
console.log('screen size ---->', macBook.getScreenSize());
console.log('---------------------------------------------------------');

macBook = new ScreenSizeDecorator(macBook);

console.log('cost ---->', macBook.getCost());
console.log('screen size ---->', macBook.getScreenSize());
