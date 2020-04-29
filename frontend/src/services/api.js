import axios from 'axios'; // axios vai nos permitir conversar com o backend

const api = axios.create({baseURL: 'http://localhost:3001/api'}); // aqui fica a conexão com o backend, e deve ficar o link para ele

export default api; // usarmemos 'api' sempre que formos fazer conexão com a api