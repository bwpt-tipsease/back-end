const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const WorkersRouter = require('../workers/workers-router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('./api/workers', WorkersRouter);

module.exports = server;