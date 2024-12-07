class Events {
  constructor() {
    this.topics = {};
  }

  subscribe(topic, listener) {
    if (!this.topics.hasOwnProperty(topic)) {
      this.topics[topic] = [];
    }

    const index = this.topics[topic].push(listener) - 1;

    return {
      remove: () => {
        delete this.topics[topic][index]
      },
    };
  }

  publish(topic, context) {
    if (!this.topics.hasOwnProperty(topic)) {
      return;
    }

    this.topics[topic].forEach((item) => {
      item(context !== undefined ? context : {})
    });
  }
};

let mailCounter = 0;
const events = new Events();

const subscriber1 = events.subscribe('inbox/newMessage', (data) => {
  console.log('A new message was received', data);

  document.querySelector('.messageSender').innerHTML = data.sender;
  document.querySelector('.messagePreview').innerHTML = data.body;
});

const subscriber2 = events.subscribe('inbox/newMessage', () => {
  mailCounter += 1;
  document.querySelector('.newMessageCounter').innerHTML = mailCounter;
});

events.publish('inbox/newMessage', {
  sender: 'hello@google.com',
  body: 'Hey there! How are you doing today?',
});
