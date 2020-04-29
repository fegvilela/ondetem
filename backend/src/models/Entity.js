const mongoose = require('mongoose');

// const mongoosePaginate = require('mongoose-paginate');

const EntitySchema = new mongoose.Schema({
    entName: {
        type: String,
        required: true
    },

    entType: {
        type: String,
        required: true
    },

    perName: {
        type: String,
        required: true
    },

    ifValidated: {
        type: Boolean,
        default: false
    },

    obs: {
        type: String,
        required: false
    },

    entDifficulties: {
        type: String,
        required: false
    },

    entProducts: {
        type: JSON,
        required: false
    },

    entServices: {
        type: JSON,
        required: false
    },

    entInfo: {
        type: JSON,
        required: true
    },

    paymentInfo: {
        type: JSON,
        required: false
    },

    entDeliverInfo: {
        type: JSON,
        required: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

// EntitySchema.plugin(mongoosePaginate); // aqui estamos colocando em uso o módulo que instalamos (mongoose-paginate), que está sendo utilizado no método find() no nosso arquivo controller

mongoose.model('Entity', EntitySchema);  // faz com que toda a plicação reconheça que uma Entity tenha um model pronto 