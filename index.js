const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const animalRoute = require('./routes/animal');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', animalRoute);

module.exports=app;