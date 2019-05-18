// Imports.
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');

// Routes-endpoints
const actionModel = require('./data/helpers/actionModel.js');
const projectModel = require('./data/helpers/projectModel.js');

const server = express();

// Configure global middleware
server.use(express.json());
server.use(helmet());
//TODO: Once MVP is complete add logger middleware
server.use(logger('dev'));


server.get('/', (req, res) => {
    res.send('<h1>This is a test>/h1>');
});

module.exports = server;