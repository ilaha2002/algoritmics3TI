// class Message {
//     constructor(author, time, text) {
//       this.author = author;
//       this.time = time;
//       this.text = text;
//     }
//   }

function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

console.log(gettime())

  class Message {
    constructor(author, time, text) {
             this.author = author;
             this.time = time;
             this.text = text;
           }
           
  }

  class Messenger {
    #author;
    #time
    #text

    constructor(author, time, text) {
        this.#author = author;
        this.#time = time;
        this.#text = text;
      }
      
      getAuthor() {
       return this.#author;
       return this.#time;
       return this.#text;
   }
  }

  let messages = [
    new Messenger('hello'),
    new Messenger('good luck'),
    new Messenger('bye'),
];


  for (let message of messages) {
	console.log(message.getAuthor());
}

    // show_history()
    
// let messenger = new Messenger()
// messenger.send('Артем', 'Первое сообщение')
// messenger.send('Мария', 'Второе сообщение')
// messenger.show_history()
  
  const message1 = new Message('Gabby', '23:35', 'good luck');
  
  Message.prototype.toString = function messageToString() {
    return `${this.time} ${this.author} : ${this.text}`;
  };

  
  console.log(message1.toString());