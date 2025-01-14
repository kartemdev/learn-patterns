const namespace = {};
((namespace) => {
  namespace.foobar = 'foobar';
  namespace.sayHello = () => {
    console.log('hello');
  }
})(namespace);

console.log(namespace);
namespace.sayHello();

((namespace, undefined) => {
  const foo = 'foo';
  const bar = 'bar';

  function speak(msg) {
    console.log(`You said: ${msg}`);
  };

  speak('how are you?');

  namespace.foobar = 'foobar';
  namespace.sayHello = () => {
    console.log('Hello World');
  };
  namespace.sayGoodBye = () => {
    console.log('Goodbye peeps');
  };
})(global.namespace2 = global.namespace2 || {});

console.log(global.namespace2);
global.namespace2.sayHello();

const namespace3 = {};
namespace3.utils = {};
(function() {
  let val = 5;

  this.getValue = () => val;
  this.setValue = (newVal) => val = newVal;
  this.tools = {}
}.apply(namespace3.utils));

(function() {
  this.diagnose = () => 'Diagnose';
}.apply(namespace3.utils.tools));

console.log(namespace3);
console.log(namespace3.utils.setValue(777));
