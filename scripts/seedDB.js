const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

const bookSeed = [
  {
    title: "The Dead Zone",
    date: new Date(Date.now()),
    URL: "Stephen King"
  },
  {
    title: "Lord of the Flies",
    date: new Date(Date.now()),
    URL: "William Golding"
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
