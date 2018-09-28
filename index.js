const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const animalRoute = require('./routes/animal');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', animalRoute);

mongoose.connect(config.db_url, { useNewUrlParser: true }, (err) => {
  if (err) return console.log(`Ha ocurrido un error con la conexion ${err}`);

  app.listen(config.port, () => {
    console.log('El servidor se ha iniciado correctamente');
  })
})