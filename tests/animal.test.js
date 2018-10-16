
const mongoose = require('mongoose');
const request = require('supertest');
const config = require('../config');
const animalRoute = require("../index");
const mockingoose = require('mockingoose').default;
const AnimalModel = require('../models/animal');

describe('Test the animal path', () => {
    beforeAll(() => {
        mongoose.connect(config.db_url, { useNewUrlParser: true });
    });

    describe('Test animal routes', () => {
        test('It should response the GET method', (done) => {
            request(animalRoute).get('/api/animales').then((response) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
    
        test('It should response the PUT method', (done) => {
            request(animalRoute).put('/api/animal/1').then((response) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        test('It should response the POST method', (done) => {
            request(animalRoute).post('/api/animal').then((response) => {
                expect(response.statusCode).toBe(201);
                done();
            });
        });

        test('It should response the DELETE method', (done) => {
            request(animalRoute).delete('/api/animal/5bad6cb4c923da0fe0b8bd85').then((response) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
    })

    describe('Test Animal model', () => {

        test('It should return the doc with findById', (done) => {
            const _doc = {
                "_id": "5bad6cb4c923da0fe0b8bd85",
                "nombre": "Pepito",
                "sexo": "Masculino",
                "promedioEdad": 10,
            }
    
            mockingoose.Animales.toReturn(_doc, 'findOne');
    
            return AnimalModel
            .findById({_id: '5bad6cb4c923da0fe0b8bd85'})
            .then(doc => {
                expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc)
                done();
            });
        });
    });

    afterAll((done) => {
        mongoose.disconnect(done);
    });
});