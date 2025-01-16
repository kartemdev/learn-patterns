Object.prototype.deepExtend = function(sourceObject) {
  for (let key of Object.keys(sourceObject)) {
    console.log(key)
    if (
      typeof sourceObject[key] === 'object' &&
      !Array.isArray(sourceObject[key]) &&
      sourceObject[key] !== null
    ) {
      this[key] = this[key] || {};
      this[key].deepExtend(sourceObject[key])
    } else {
      this[key] = sourceObject[key];
    }
  }

  return this;
};

const myNamespace = {};

console.log(myNamespace.deepExtend({
  utils: {
    tools: {
      config: null,
      printGoodbye() {
        console.log('Goodbye!')
      },
    },
  },
  lib: {
    types: ['string', 'number'],
    printHello() {
      console.log('Hello world!');
    },
  }
}));

const lib = myNamespace.lib; // dependency declaration pattern
const tools = myNamespace.utils.tools; // dependency declaration pattern

lib.printHello();
tools.printGoodbye();
