const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const authRouter = require('../auth/auth-router');

const PlacesRouter = require('../places/places-router')
const PlacesNameRouter = require('../placeName/placesName-router')
const ServiceWorkers = require('../serviceWorkers/serviceWorkers-router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/places', PlacesRouter);
server.use('/api/placesname', PlacesNameRouter);
server.use('/api/serviceworkers', ServiceWorkers)
server.use(express.static(__dirname + '/../client/build/'));

module.exports = server;