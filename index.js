const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const animalRoute = require('./routes/animal');
const jwt = require('./middlewares/jwt');
const debug = require('debug')('http');
const methodOverride = require('method-override');
const errorHandlers = require('./middlewares/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride());

/**
 * Error handlers
 */
app.use(errorHandlers.logErrors);
app.use(errorHandlers.errorHandler);
app.use(jwt);

/**
 * Console debugger for nodejs
 */
app.use((req, res, next) => {
    debug(`${req.method} ${req.url}`);
    next();
});

app.use('/api', animalRoute);

module.exports = app;
