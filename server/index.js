const dotenv = require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const pino = require('express-pino-logger')();
// mongoose.connect("mongodb://sa:abcd1234@ds163044.mlab.com:63044/shoptify", {useNewUrlParser: true})
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(pino);

app.get('/api/test', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(dotenv.port, () =>
    console.log('Express server is running on localhost:3001')
);