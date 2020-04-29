const express = require('express');

const routes = express.Router();

const EntityController = require('./controllers/EntityController'); // importando nossa controller para podermos usar as funções 

// rotas
routes.get('/entities', EntityController.index); // mostra todas as entidades
routes.get('/entities/:id', EntityController.show); // mostra a entidade com o ID igual ao enviado por parâmetro
routes.post('/entities', EntityController.store); // cadastra uma entidade nova
routes.delete('/entities/:id', EntityController.destroy); // deleta uma entidade baseado no ID enviado por parâmetro
routes.put('/entities/:id', EntityController.update); // faz update em uma entidade baseado no id enviado


//exportando as rotas
module.exports = routes;