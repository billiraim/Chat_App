const mongoose = require("mongoose");
const Chat = require('./models/chat.js')

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "neha",
    to: "rahul",
    msg: "Hi Rahul!",
    created_at: new Date()
  },
  {
    from: "rahul",
    to: "neha",
    msg: "Hello Neha, kya haal hai?",
    created_at: new Date()
  },
  {
    from: "ali",
    to: "ahmed",
    msg: "Assignment complete ho gya?",
    created_at: new Date()
  },
  {
    from: "ahmed",
    to: "ali",
    msg: "Han almost done 👍",
    created_at: new Date()
  },
  {
    from: "sara",
    to: "ayesha",
    msg: "Class kab start ho gi?",
    created_at: new Date()
  },
  {
    from: "ayesha",
    to: "sara",
    msg: "10 bjy sharp",
    created_at: new Date()
  },
  {
    from: "usman",
    to: "bilal",
    msg: "Project submit kr dia?",
    created_at: new Date()
  },
  {
    from: "bilal",
    to: "usman",
    msg: "Yes kal hi kr dia tha",
    created_at: new Date()
  }
];

Chat.insertMany(allChats);