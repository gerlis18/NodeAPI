const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Animal = new Schema({
  nombre: { type: String },
  sexo: { type: String },
  promedioEdad: { type: Number },
  createDate: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Animales', Animal);