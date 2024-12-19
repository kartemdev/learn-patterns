let instance;

class Singletone {
  constructor(initialId) {
    if (!instance) {
      this._id = initialId; 

      instance = this;
    }

    return instance;
  }

  getName() {
    return `singletone-${this._id}`
  }
};

const singletone1 = new Singletone(1);
const singletone2 = new Singletone(2);

console.log(singletone1.getName());
console.log(singletone2.getName());
