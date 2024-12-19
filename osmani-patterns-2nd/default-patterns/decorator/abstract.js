class Interface {
  constructor(name, methods) {
    if (!name || !methods?.length) {
      throw new Error('Interface constructor called without methods or name.');
    }

    this._name = name
    this._methods = methods.map((method) => {
      if (typeof method !== 'string') {
        throw new Error('Interface constructor expects method names to be passed in as strings.');
      }

      return method;
    });
  }

  ensureImplements(object, ...interfaces) {
    if (!object || !interfaces?.length) {
      throw new Error(`Method interfaceInstance.ensureImplements called without interfaces (Interface[]) or object.`);
    }

    for (let i = 0; i < interfaces.length; i++) {
      const interfaceInstance = interfaces[i];

      if (!(interfaceInstance instanceof Interface)) {
        throw new Error(`Method ${interfaceInstance._name}.ensureImplements arguments after the first must be instances of Interface.`);
      }

      for (let j = 0; j < interfaceInstance._methods.length; j++) {
        const method = interfaceInstance._methods[j];

        if (!object[method] || typeof object[method] !== 'function') {
          throw new Error(`Method ${interfaceInstance._name}.ensureImplements: object does not implement method ${method}`);
        }
      }
    }
  }
}

const MacBookInterface = new Interface('MacBookInterface', [
  'addEngraving',
  'addParallels',
  'add4GBRam',
  'add6GBRam',
  'addCase',
]);

class MacBookPro {
  addEngraving() {
    return 'Added Engraving';
  }

  addParallels() {
    return 'Added Parallels';
  }

  add4GBRam() {
    return 'Added 4GB RAM';
  }

  add8GBRam() {
    return 'Added 8GB RAM';
  }

  addCase() {
    return 'Added Case';
  }

  getPrice() {
    return 900.0;
  }
}
