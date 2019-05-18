// Imports.
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');

// Routes-endpoints
const actionModel = require('./routers/actions-model.js');
const projectModel = require('./routers/project-model.js');

const server = express();

// Configure global middleware
server.use(express.json());
server.use(helmet());
server.use(logger('dev'));

// Configure route handlers
server.use('/api/actions', actionModel);
server.use('/api/projects', projectModel);


// Test.
server.get('/', (req, res) => {
    res.send('<h1>This is a test>/h1>');
});

module.exports = server;