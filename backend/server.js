// importando os módulos e arquivos
const express = require("express"); // importando o módulo express
const cors = require('cors'); // o cors vai nos permitir, além de outras coisas, disponibilizar essa aplicação para que outros domínios tenham acesso
const mongoose = require("mongoose"); // importando o ORM mongoose
const requireDir = require("require-dir"); // require-dir nos permite importar automaticamente algo em toda a aplicação
// const {errors} = require('celebrate'); // tratamento de erros vindos da validação com o celebrate, feita nas rotas


const app = express(); // iniciando o app
app.use(express.json()); // permite enviarmos dados no formato de JSON para a nossa aplicação ( via método post )
app.use(cors()); // fazendo uso do cors para que nossa aplicação possa ser acessada publicamente/ de outro domínio

// posteriormente alterar para o banco de dados remoto e mudar para um arquivo separado de conexão com o banco
mongoose.connect("mongodb://localhost:27017/ondetem", {useNewUrlParser: true, useUnifiedTopology: true}); // fazendo a conexão com o banco de dados
requireDir('./src/models'); // faz com que essa pasta seja importada automaticamente em toda a aplicação

app.use('/api', require('./src/routes')); // o 'use' vai aceitar todo tipo de requisição (get, post, delete, etc)

app.listen(3001);

// app.use(errors()); // nos ajuda a tratar o erro de uma forma melhor para o frontend */