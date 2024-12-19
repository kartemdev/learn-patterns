const CarManager = {
  requestInfo(model, id) {
    return `The information for ${model} with ID ${id} id foobar`;
  },
  buyVehicle(model, id) {
    return `You have succefully purchased Item ${id}, a ${model}`;
  },
  arrangeViewing(model, id) {
    return `You have booked a viewing of ${model} ( ${id} )`;
  },
  execute: function (methodName) {
    return (
      this[methodName]
      && this[methodName]([].slice.call(arguments, 1))
    );
  }
};

const CarManagerCommand = {
  requestInfo: (...args) => console.log(CarManager.execute('requestInfo', ...args)),
  buyVehicle: (...args) => console.log(CarManager.execute('buyVehicle', ...args)),
  arrangeViewing: (...args) => console.log(CarManager.execute('arrangeViewing', ...args)),
};

CarManagerCommand.requestInfo('Ferrari', '123232');
CarManagerCommand.buyVehicle('BMW M5', '134412');
CarManagerCommand.arrangeViewing('Honda Civic 2022', '76532');
