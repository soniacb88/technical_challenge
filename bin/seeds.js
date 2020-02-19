// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const User = require("../models/User");


mongoose
  .connect('mongodb://localhost/dbUser', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    username: "Carlos",
    birthdate: "1984 / 01 / 28",
  },
  {
    username: "Sonia",
    birthdate: "1988 / 03 / 07",
  },
  {
    username: "Patri",
    birthdate: "1988 / 12 / 14",
  },
  {
    username: "Ángel",
    birthdate: "1989 / 02 / 18",
  },
  {
    username: "Sergio",
    birthdate: "1989 / 11 / 19",
  },
  {
    username: "Bea",
    birthdate: "1990 / 11 / 12",
  },
  {
    username: "Franci",
    birthdate: "1964 / 06 / 16",
  },
  {
    username: "Pili",
    birthdate: "1968 / 03 / 12",
  },
  {
    username: "María",
    birthdate: "1988 / 08 / 23",
  }
]

User.deleteMany()
  .then(() => {
    return User.create(users)
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })