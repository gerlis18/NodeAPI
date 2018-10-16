const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Animal schema for crud functions on DB
 */
let Animal = new Schema({
  nombre: { type: String, required: 'El nombre es requerido' },
  sexo: { type: String, required: 'El sexo es requerido'},
  promedioEdad: { type: Number },
  createDate: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Animales', Animal);