const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const animalRoute = require('./routes/animal');
const jwt = require('./middlewares/jwt');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', animalRoute);

module.exports=app;