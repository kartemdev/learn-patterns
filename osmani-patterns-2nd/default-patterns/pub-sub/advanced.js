class PubSub {
  constructor() {
    this._topics = {};
    this._subUid = -1;
  }

  publish(topic, args) {
    if (!this._topics[topic]) {
      return false;
    }

    const subscribers = this._topics[topic];

    let len = subscribers ? subscribers.length : 0;

    while(len--) {
      subscribers[len].func(topic, args);
    }

    return this;
  }

  subscribe(topic, func) {
    if (!this._topics[topic]) {
      this._topics[topic] = [];
    }

    const token = (++this._subUid).toString();

    this._topics[topic].push({ token, func });

    return token;
  }

  unsubscribe(token) {
    for (let key in this._topics) {
      const topic = this._topics[key];
      
      if (topic) {
        for (let i = 0; i < topic.length; i++) {
          if (topic[i].token === token) {
            topic.splice(i, 1);
            return token;
          }
        }
      }
    }

    return this;
  }
}

const pubsub = new PubSub();

const messageLogger = (topics, data) => {
  console.log(`Logging: ${topics}:`, data);
};

const subscriptionToken = pubsub.subscribe('inbox/newMessage', messageLogger);

pubsub.publish('inbox/newMessage', 'hello, world!');
pubsub.publish('inbox/newMessage', ['test', 'a', 'b', 'c']);
pubsub.publish('inbox/newMessage', { sender: 'test@inbox.mail', body: 'Hey again!' });

pubsub.unsubscribe(subscriptionToken);

pubsub.publish('inbox/newMessage', 'Hello!');

console.log('--------------------------------------------------------------------------');

const getCurrentTime = () => {
  const date = new Date();
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();
  const t = date.toLocaleTimeString().toLowerCase();
  return`${d}.${m}.${y} ${t}`;
};

const addGridRow = (data) => {
  // ui.grid.addRow(data);
  console.log('Updated grid component with:', data);
};

const updateCounter = (data) => {
  // ui.grid.updatedLastChanged(getCurrentTime());
  console.log(`Data last updated at: ${getCurrentTime()} with`, data);
};

const gridUpdate = (topic, data) => {
  if (data !== undefined) {
    addGridRow(data);
    updateCounter(data);
    console.log(`Grid data update from ${topic} topic`);
    console.log('--------------------------------------------------------------------------');
  }
};

const gridSubscriber = pubsub.subscribe('newDataAvailable', gridUpdate);

pubsub.publish('newDataAvailable', {
  summary: 'Apple made $5 billion',
  identefier: 'APPL',
  stockPrice: '$570.91',
});

pubsub.publish('newDataAvailable', {
  summary: 'Miscrosoft made $20 million',
  identefier: 'MSFT',
  stockPrice: '$30.85',
});
