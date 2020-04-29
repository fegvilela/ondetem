const mongoose = require('mongoose');

const Entity = mongoose.model('Entity'); // pegando o modelo do Product

module.exports = {
    // aqui colocaremos todas as nossas páginas de entidades

    // busca todas
    async index(req, res){
        //tratar as páginas depois
        const entities = await Entity.find(); // select *

        return res.json(entities);
    },

    async store(req, res){
        const entity = await Entity.create(req.body); // aqui estamos criando uma nova entidade, que será igual à da requisição

        return res.json(entity);
    }
}