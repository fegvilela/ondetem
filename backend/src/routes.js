const express = require('express');

const routes = express.Router();

const EntityController = require('./controllers/EntityController'); // importando nossa controller para podermos usar as funções 

// rotas
routes.get('/entities', EntityController.index); // mostra todas as entidades

routes.post('/entities', EntityController.store); // mostra todas as entidades
//exportando as rotas
module.exports = routes;