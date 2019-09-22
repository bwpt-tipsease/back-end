const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const PlacesRouter = require('../places/places-router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('./api/places', PlacesRouter);

module.exports = server;