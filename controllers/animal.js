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
  let id = req.params.id;
  if (!id) return res.status(404).send({ msg: 'Bad request, id is required' });

  AnimalModel.findByIdAndUpdate(id, req.body, (err, animalUpdated) => {
    res.status(200).send({ msg: 'Animal was updated', animalUpdated });
  });
}

function findById(req, res) {
  let id = req.params.id;
  if (!id) return res.status(404).send({ err: 'Bad request, id is required' });

  AnimalModel.findById({_id: req.params.id}, (err, animal) => {
    if (err) return res.status(500).send({ err: { msg: 'Ops, something went wrong' } });

    res.status(200).send({ animal })
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