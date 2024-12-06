import React from "https://esm.sh/react";

class ObserverList {
  constructor() {
    this.observerList = [];
  }
  
  add(obj) {
    return this.observerList.push(obj);
  }
  
  count() {
    return this.observerList.length;
  }
  
  get(index) {
    if (index !== -1 && index < this.observerList.length) {
      return this.observerList[index];
    }
  }
  
  removeAt(obj) {
    this.observerList.splice(indexOf(obj), 1);
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  
  addObserver(observer) {
    this.observers.add(observer)
  }
  
  removeObserver(observer) {
    this.observers.remove(observer)
  }
  
  notify(context) {
    const observerCount = this.observers.count();
    for(let i = 0; i < observerCount; i++) {
      this.observers.get(i).update(context)
    }
  }
}

class Observer {
  update() {
    throw new Error('not implemented update method')
  }
}

class ConcreteSubject extends Subject {
  constructor(element) {
    super();

    this.element = element;
    this.element.onclick = () => {
      this.notify(this.element.checked);
    }
  }
}

class ConcreteObserver extends Observer {
  constructor(element) {
    super();

    this.element = element;
  }

  update(value) {
    this.element.checked = !!value;
  }
}

const addBtn = document.querySelector('#addNewObserver');
const container = document.querySelector('#observersContainer');
const controlCheckbox = new ConcreteSubject(document.querySelector('#mainCheckbox'));

const addNewObserver = () => {
  const check = document.createElement('input');
  check.type = 'checkbox';

  const checkObserver = new ConcreteObserver(check);

  controlCheckbox.addObserver(checkObserver);

  container.appendChild(check);
};

addBtn.onclick = addNewObserver
