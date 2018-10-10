
const mongoose = require('mongoose');
const request = require('supertest');
const config = require('../config');
const animalRoute = require("../index");

describe('Test the animal path', () => {
    beforeAll(() => {
        mongoose.connect(config.db_url, { useNewUrlParser: true });
    });
    test('It should response the GET method', (done) => {
        request(animalRoute).get('/api/animales').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
    afterAll((done) => {
        mongoose.disconnect(done);
    });
});