const express = require('express');
const route = express.Router();
const animalController = require('../controllers/animal');

route.get('/animales', animalController.findAll)
route.get('/animal/:id', animalController.findById);
route.post('/animal', animalController.createAnimal);
route.put('/animal/:id', animalController.updateAnimal);

module.exports = route;