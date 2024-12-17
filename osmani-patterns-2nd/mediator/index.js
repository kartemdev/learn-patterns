class ChatRoom {
  constructor() {
    this.blockedUsers = [];
    this.unavailWords = ['wtf'];
  }

  logMessage(user, message) {
    const time = new Date();
    const sender = user.getName();
    const isUnavailMessage = this.unavailWords.some((unavailWord) => message.includes(unavailWord));

    if (!this.blockedUsers.includes(sender) && !isUnavailMessage) {
      console.log(`${time.toLocaleString()} [${sender}]: ${message}`);
    }

    if (!this.blockedUsers.includes(sender) && isUnavailMessage) {
      this.blockedUsers.push(sender);
      console.log(`${time.toLocaleString()} [${sender}]: User is blocked.`);
    }
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  getName() {
    return this.name;
  }

  send(message) {
    this.chatroom.logMessage(this, message);
  }
}

const chatroom = new ChatRoom ();  

const user1 = new User ("Trevor", chatroom);
const user2 = new User ("John Doe", chatroom);
const user3 = new User ("Vito Scaletto", chatroom);  

user1.send('Hello, wtf!');

user2.send('Hello, world!');
user3.send('Hello, people!');

user1.send('Omg unblock, please!');
