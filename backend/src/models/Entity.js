const mongoose = require('mongoose');

// const mongoosePaginate = require('mongoose-paginate');

const EntitySchema = new mongoose.Schema({
    entName: {
        type: String,
        required: true
    },
    entContact: {
        type: JSON,
        required: true
    },
    perName: {
        type: String,
        required: true
    },
    entCnpj: {
        type: String,
        required: false
    },
    entSite: {
        type: String,
        required: false
    },
});

// EntitySchema.plugin(mongoosePaginate); // aqui estamos colocando em uso o módulo que instalamos (mongoose-paginate), que está sendo utilizado no método find() no nosso arquivo controller

mongoose.model('Entity', EntitySchema);  // faz com que toda a plicação reconheça que uma Entity tenha um model pronto 