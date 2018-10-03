const AnimalModel = require('../models/animal');

function createAnimal(req, res) {
  if (!req.body.nombre) return res.status(404).send({ msg: 'El request esta mal hecho' });

  let AnimalSchema = new AnimalModel();
  AnimalSchema.nombre = req.body.nombre;
  AnimalSchema.sexo = req.body.sexo;
  AnimalSchema.promedioEdad = req.body.promedioEdad;

  AnimalSchema.save((err, animal) => {
    if (err) return res.status(500).send({ err });

    res.status(201).send({ resp: animal })
  });
}

function updateAnimal(req, res) {
  
}

function findById(req, res) {
  AnimalModel.findById({_id: req.body.id}, (err, animales) => {
    if (err) return res.status(500).send({ err });

    res.status(200).send({ animales })
  })
}

function findAll(req, res) {
  AnimalModel.find({}, (err, animales) => {
    if (err) return res.status(500).send({ err });

    res.status(200).send({ animales })
  })
}

function deleteAnimal(req, res) {
  AnimalModel.findByIdAndRemove({_id: req.body.id}, (err) => {
    if (err) return res.status(500).send({ err });

    res.status(200);
  })
}

module.exports = {
  createAnimal,
  updateAnimal,
  findById,
  findAll,
  deleteAnimal
}