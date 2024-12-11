const publicModule = (() => {
  const _private = {
    id: 5,
    get() {
      console.log(`current value: ${this.id}`);
    },
    set(val) {
      this.id = val;
    },
    run() {
      console.log('running');
    },
    jump() {
      console.log('jumping');
    },
  };

  return {
    facade({ val = 0, isRun = false }) {
      _private.set(val);
      _private.get();

      if (isRun) {
        _private.run();
      }
    },
  };
})();

publicModule.facade({ val: 1, isRun: true });
