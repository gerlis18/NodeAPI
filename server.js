const config = require('./config');
const app = require('./index')

const mongoose = require('mongoose');

mongoose.connect(config.db_url, { useNewUrlParser: true }, (err) => {
    if (err) return console.log(`Ha ocurrido un error con la conexion ${err}`);
  
    app.listen(config.port, () => {
      console.log('El servidor se ha iniciado correctamente');
    })
  })