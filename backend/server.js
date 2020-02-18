require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose
    .connect('mongodb://localhost/dbUser', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running in port: ${port}`);
})